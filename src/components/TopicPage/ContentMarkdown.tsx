import ReactMarkdown from 'react-markdown';
import "../../styles/components/TopicPage/ContentMarkdown.css"

const markdownContent = `## Index Design in Relational Database Management Systems (RDBMS)

### 1. Introduction to Indexes

**What are Indexes?**

In Relational Database Management Systems (RDBMS), an **index** is a specialized data structure designed to accelerate data retrieval operations on a database table. Think of it like an index in a book: instead of laboriously scanning every page to locate a specific topic, you can consult the index and navigate directly to the relevant pages. Similarly, a database index enables the database engine to find specific rows much more rapidly than by examining the entire table, a process known as a full table scan.

**Why are Indexes Important?**

Without indexes, the database is forced to perform a full table scan, inspecting every row to find entries that match the query's criteria. As the volume of data within a table expands, this method becomes increasingly inefficient and time-consuming. A well-designed index allows the database to pinpoint the required rows swiftly, sidestepping the need to scan the entire table. Indexes are fundamental for optimizing query performance, particularly as data volumes grow significantly.

For instance, a query like:
\`\`\`sql
-- Querying without an index (slow on large tables)
SELECT * FROM users WHERE email = 'jane@example.com';
\`\`\`
might have to examine millions of rows in a large \`users\` table. With an index on the \`email\` column, the database can access the matching record almost instantaneously.

### 2. How Indexes Improve Query Performance

Indexes dramatically improve query performance by minimizing the amount of data the database needs to examine to satisfy a query.

*   **Speeding Up Selections (\`WHERE\` clause)**:
    *   When searching for specific rows (e.g., \`SELECT * FROM Orders WHERE CustomerID = 12345\`), an index on the \`CustomerID\` column allows the database to quickly locate pointers to the relevant rows using data structures like B-trees or hash tables, thereby avoiding a full table scan. This can transform a query that takes seconds or minutes into one that completes in milliseconds.
    *   In relational algebra, this corresponds to optimizing the **selection** operation (σ). An index allows the system to directly access the tuples satisfying the selection condition, rather than iterating through all tuples.

*   **Optimizing Joins (\`JOIN\` clause)**:
    *   Indexes on foreign key columns or other columns frequently used in join conditions can significantly speed up join operations. It's a best practice to always index foreign key columns.
    *   For example, when joining \`Orders\` and \`Customers\` tables on \`CustomerID\`, an index on \`Orders.CustomerID\` and/or \`Customers.CustomerID\` would make the join much faster.
        \`\`\`sql
        -- Ensure indexes are on u.id (primary key, usually auto-indexed) and o.user_id
        CREATE INDEX idx_orders_user_id ON orders(user_id);

        SELECT u.name, o.total
        FROM users u
        JOIN orders o ON u.id = o.user_id
        WHERE u.is_active = TRUE;
        \`\`\`
        With appropriate indexes, this join runs much faster.
    *   In relational algebra, indexes aid in the efficient implementation of the **join** operation (⨝). For instance, an index on the join attribute of the inner relation in an index nested-loop join can reduce the cost.

*   **Speeding Up Sorting (\`ORDER BY\`) and Grouping (\`GROUP BY\`)**:
    *   If a query requires results to be sorted by an indexed column (\`ORDER BY indexed_column\`), and the index (like a B-tree) stores keys in sorted order, the database can retrieve data in the sorted order directly from the index, avoiding a separate, costly sort operation.
    *   Similarly, indexes can sometimes help optimize \`GROUP BY\` operations by enabling the database to efficiently identify and aggregate groups of rows.
        \`\`\`sql
        -- Index supports both filtering and sorting
        CREATE INDEX idx_products_category_price ON products(category_id, price);

        -- Uses index for both filtering and sorting
        SELECT * FROM products
        WHERE category_id = 5
        ORDER BY price DESC;
        \`\`\`

*   **Speeding Up Range Queries**:
    *   B-Tree indexes are particularly effective for range queries (e.g., using \`BETWEEN\`, \`<\`, \`>\`).
        \`\`\`sql
        CREATE INDEX idx_orders_created_at ON orders(created_at);

        -- Range query using the index
        SELECT * FROM orders
        WHERE created_at BETWEEN '2023-01-01' AND '2023-01-31';
        \`\`\`

### 3. Types of Indexes

Relational databases support various types of indexes, each tailored for specific purposes and query patterns.

*   **Core Index Types**:
    *   **Primary Index**:
        *   Automatically created when a primary key constraint is defined on a table.
        *   Uniquely identifies each row and enforces entity integrity.
        *   Often implemented as a clustered index in some systems, meaning the physical order of data in the table corresponds to the index order.
    *   **Secondary Index (Non-clustered Index)**:
        *   Created on non-primary key columns frequently used in query predicates or join conditions.
        *   A table can have multiple secondary indexes, providing alternative paths to access data.
        *   Data is not physically sorted according to secondary indexes; instead, the index contains pointers to the actual data rows.
        \`\`\`sql
        -- Basic secondary index creation
        CREATE INDEX idx_users_email ON users(email);
        \`\`\`
    *   **Unique Index**:
        *   Ensures that all values in the indexed column (or columns) are unique. A primary key index is inherently unique.
        *   Used to enforce data integrity on non-primary key columns that must remain unique, such as email addresses.
        \`\`\`sql
        -- Create unique index (ensures no duplicate values)
        CREATE UNIQUE INDEX idx_users_email_unique ON users(email);
        \`\`\`
    *   **Composite Index (Multi-column Index)**:
        *   An index created on two or more columns in a table. Beneficial when queries frequently filter or sort based on multiple columns simultaneously.
        *   The order of columns in a composite index is crucial and significantly impacts its efficiency.
        \`\`\`sql
        -- Index on multiple columns
        CREATE INDEX idx_users_last_first ON users(last_name, first_name);
        \`\`\`
        This index helps with queries like:
        \`\`\`sql
        -- Uses the composite index
        SELECT * FROM users WHERE last_name = 'Smith' AND first_name = 'John';
        SELECT * FROM users WHERE last_name = 'Smith'; -- Uses just the first part of the index
        \`\`\`
        However, the index above won't efficiently serve queries that only filter by \`first_name\` without \`last_name\`.
    *   **Clustered Index**:
        *   Determines the physical order of data in a table. Rows are stored in the order specified by the clustered index key.
        *   Because data can only be physically sorted in one way, a table can have only one clustered index.
    *   **Covering Index**:
        *   Includes all the columns required to satisfy a particular query directly from the index, without needing to access the table itself. This significantly improves query performance by reducing I/O operations.
    *   **Partial Index (Filtered Index)**:
        *   Built over a subset of a table's rows, based on a conditional expression. Useful when only a specific portion of the table is frequently queried, leading to smaller, more efficient indexes.
        \`\`\`sql
        -- Only index active users (PostgreSQL syntax)
        CREATE INDEX idx_active_users ON users(email) WHERE is_active = TRUE;
        \`\`\`
        This is beneficial when most queries target a specific data subset, like active users.
    *   **Function-Based Indexes (Expression Indexes)**:
        *   Regular indexes may not be used if functions are applied to indexed columns in queries. Function-based indexes store the result of the function applied to the column values.
        \`\`\`sql
        -- This query won't use a standard index on last_name
        SELECT * FROM users WHERE LOWER(last_name) = 'smith';

        -- Create a function-based index to support it (syntax may vary by RDBMS)
        CREATE INDEX idx_users_lower_last_name ON users(LOWER(last_name)); -- Example for PostgreSQL
        \`\`\`

*   **Database-Specific Advanced Index Types**:
    *   **GIN (Generalized Inverted Index)** - PostgreSQL:
        *   Designed for indexing complex data types like arrays, JSONB documents, or full-text search data. It creates an "inverted" index where it maps elements within the complex type to the rows containing them.
        \`\`\`sql
        -- For jsonb data in PostgreSQL
        CREATE INDEX idx_user_preferences ON users USING GIN (preferences);
        \`\`\`
    *   Other types exist such as GiST, SP-GiST (PostgreSQL), and Full-Text indexes specific to various RDBMS.

### 4. Common Index Data Structures

Indexes are implemented using various data structures, and the choice impacts performance.

*   **B-trees (and B+ trees)**:
    *   B-trees (Balanced Trees) are the most common index structure in RDBMS (e.g., default in PostgreSQL, MySQL, SQL Server). They store data sorted, allowing efficient searches (point and range queries), insertions, deletions, and sequential access.
    *   Each node can have multiple children, and the tree is always balanced, ensuring logarithmic time complexity (O(log n)) for operations.
    *   B+ trees are a variation where all data values (or pointers) are in leaf nodes, which are linked for efficient range queries and sequential traversal. Internal nodes only store keys to guide the search.
    *   Well-suited for equality (=), range queries (<, >), \`BETWEEN\`, \`LIKE 'prefix%'\`, and support sorting (\`ORDER BY\`).
    \`\`\`sql
    -- Default is usually B-Tree
    CREATE INDEX idx_users_age ON users(age);
    \`\`\`

*   **Hash Indexes**:
    *   Use a hash function to map keys to "buckets" containing pointers to data rows.
    *   Extremely fast (average O(1) time complexity) for equality-based lookups (e.g., \`WHERE column = value\`).
    *   Generally not suitable for range queries as the hash function doesn't preserve order. They also need mechanisms for hash collision handling.
    *   Available in systems like PostgreSQL, Oracle, and SQL Server (for specific table types like memory-optimized tables).
    \`\`\`sql
    -- PostgreSQL syntax for a hash index
    CREATE INDEX idx_users_id_hash ON users USING HASH (id);
    \`\`\`

*   **Bitmap Indexes**:
    *   Use bitmaps (bit arrays) where each bit corresponds to a row. For each distinct value, a bitmap indicates which rows contain that value.
    *   Most effective for columns with low cardinality (few distinct values, e.g., gender, status flags).
    *   Excel at queries with multiple conditions (AND, OR, NOT) on such columns using bitwise operations.
    *   Can be less efficient for high-cardinality columns or in environments with frequent updates.

### 5. Index Design Strategies and Best Practices

Effective index design requires careful consideration of query patterns and data characteristics.

*   **General Principles**:
    *   **Index for your queries, not your tables**: Analyze your application's common query patterns first.
    *   **The 80/20 Rule**: Focus on optimizing the 20% of queries that account for 80% of your database load.
    *   **Test with realistic data volumes**: Index benefits and overheads often only become apparent at scale.

*   **Choosing Columns and Index Structure**:
    *   Index columns frequently used in \`WHERE\` clauses, \`JOIN\` conditions, and \`ORDER BY\` clauses.
    *   **Cardinality and Selectivity**: Columns with many distinct values (high cardinality) are generally good candidates for B-tree indexes as they significantly narrow down the search space. Indexing columns with very few unique values (low cardinality, like boolean flags) with a B-tree index might not be very effective, as each value points to a large percentage of the table's rows. Bitmap indexes are better suited for low-cardinality columns.
    *   **Composite Index Column Order**: For composite indexes, the order of columns is vital.
        *   Place the most selective columns first if queries often use equality conditions on them.
        *   Alternatively, order them according to how they are most frequently accessed in \`WHERE\` clauses (left-to-right rule). An index on \`(col1, col2)\` can be used for queries filtering on \`col1\` or on \`col1 AND col2\`, but typically not just on \`col2\`.
    *   **Covering Indexes**: If queries frequently retrieve a small set of columns, and an index contains all those columns, the database can answer the query using only the index, which is much faster.

### 6. Cost Implications and Considerations of Indexing

While indexes improve read performance, they come with costs.

*   **Storage Overhead**: Indexes consume disk space, depending on the index type, number of indexed columns, and data size. For large tables with many indexes, this can be substantial.
*   **Write Performance Overhead (INSERT, UPDATE, DELETE)**:
    *   When data is inserted, updated, or deleted, all associated indexes must also be updated. This maintenance adds overhead to write operations, potentially slowing them down.
    *   The more indexes a table has, the greater the write overhead. This is a critical trade-off: faster reads often come at the cost of slower writes.
*   **Maintenance Overhead**: Indexes may need periodic maintenance like rebuilding or reorganizing to address fragmentation.

*   **When NOT to Use Indexes / Common Pitfalls**:
    *   **Small Tables**: For very small tables, a full table scan can be faster than an index lookup due to the overhead of index traversal.
    *   **Columns with Very Low Cardinality (for B-tree indexes)**: As mentioned, B-tree indexes on columns like boolean flags (e.g., 'Y'/'N') in large tables might not be efficient. Consider bitmap indexes or partial indexes.
    *   **Tables with Frequent, Large Batch Updates/Inserts**: The cost of maintaining numerous indexes during high-volume write operations can be prohibitive. It might be more efficient to drop indexes before a large batch operation and recreate them afterward.
    *   **Columns That Are Rarely Queried**: Indexing columns not frequently used in query predicates wastes space and adds unnecessary write overhead.
    *   **Over-Indexing / Indexing Every Column**: This is generally bad practice. It consumes excessive disk space and severely degrades write performance without providing proportional read benefits.
    *   **Redundant Indexes**: Avoid creating indexes that are covered by other existing indexes. For example, if you have an index on \`(col1, col2)\`, a separate index solely on \`(col1)\` is often redundant because the composite index can typically serve queries filtering only on \`col1\`. However, an index on \`(email, status)\` does *not* make an index on \`(email)\` redundant if both are frequently used for different query patterns and the single-column index is significantly smaller or more efficient for \`email\`-only lookups. The key is to analyze if the more specific index provides a benefit not covered by the broader one, or if the broader one can be used effectively for all scenarios.
        \`\`\`sql
        -- Potentially redundant if idx_users_email_status is heavily used
        -- and sufficiently covers queries on email alone.
        CREATE INDEX idx_users_email ON users(email);
        CREATE INDEX idx_users_email_status ON users(email, status);
        \`\`\`
    *   **Indexing \`NULL\` Values**: Most databases index \`NULL\` values. If \`NULL\` values are not part of your search criteria, consider creating partial indexes that exclude them (e.g., \`WHERE column_name IS NOT NULL\`) to save space and potentially improve efficiency.
        \`\`\`sql
        -- Consider adding WHERE clause to exclude NULLs if they're not queried
        CREATE INDEX idx_users_last_login_not_null ON users(last_login)
        WHERE last_login IS NOT NULL; -- Syntax varies by RDBMS
        \`\`\`

### 7. Indexes in Query Planning and Optimization

The database's query optimizer selects the most efficient execution path for a query.

*   **The Role of the Query Optimizer**: It analyzes a query and determines the most efficient way to execute it.
*   **Index Selection**: The optimizer considers various execution plans, including those using available indexes, evaluating their potential costs (e.g., index scan vs. full table scan).
*   **Database Statistics**: The optimizer relies on statistics about data distribution in tables and indexes (e.g., row counts, column cardinality, value histograms). Outdated statistics can lead to suboptimal plans, so regular updates are crucial.
*   **Execution Plans**: The chosen plan details how the query will be processed, including which indexes (if any) will be used. Tools like \`EXPLAIN\` (or similar commands, e.g., \`EXPLAIN ANALYZE\` in PostgreSQL) allow developers to view this plan.
    *   **Using \`EXPLAIN\` and \`EXPLAIN ANALYZE\`**:
        \`\`\`sql
        -- PostgreSQL syntax
        EXPLAIN SELECT * FROM users WHERE email = 'jane@example.com';
        EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'jane@example.com';

        -- MySQL syntax
        EXPLAIN SELECT * FROM users WHERE email = 'jane@example.com';
        \`\`\`
        A good result shows "Index Scan" or "Index Seek" rather than "Sequential Scan" or "Table Scan". \`EXPLAIN ANALYZE\` provides actual execution metrics like time and row counts.
    *   **Interpreting \`EXPLAIN\` Output**:
        *   PostgreSQL output example:
            \`\`\`
            Index Scan using idx_users_email on users (cost=0.29..8.31 rows=1 width=325) (actual time=0.019..0.021 rows=1 loops=1)
              Index Cond: (email = 'jane@example.com'::text)
            \`\`\`
        *   MySQL output example:
            \`\`\`
            id | select_type | table | type  | possible_keys | key          | key_len | ref   | rows | Extra
            ---|-------------|-------|-------|---------------|--------------|---------|-------|------|-------
            1  | SIMPLE      | users | ref   | idx_users_email | idx_users_email | 767     | const | 1    | Using index condition
            \`\`\`
        Look for low "rows" values, "Using index" (MySQL), or "Index Scan" (PostgreSQL).
*   **Index Hints**: Some RDBMSs allow "index hints" to suggest or force the use of a specific index. However, use these cautiously as they can override better optimizer decisions, especially if data characteristics change.

### 8. Index Maintenance

Indexes require ongoing maintenance to remain effective.

*   **Updating Statistics (\`ANALYZE\`)**: Regularly update database statistics to help the query planner make optimal decisions.
    \`\`\`sql
    -- PostgreSQL
    ANALYZE users;

    -- MySQL
    ANALYZE TABLE users;
    \`\`\`
*   **Rebuilding and Reorganizing Indexes**: Over time, as data is inserted, updated, and deleted, indexes can become fragmented, meaning their logical order on disk no longer matches their physical order, or they may contain many empty pages. Rebuilding or reorganizing an index can improve performance. Microsoft suggests rebuilding indexes with over 30% fragmentation and reorganizing those between 5% and 30%.
    \`\`\`sql
    -- PostgreSQL
    REINDEX TABLE users; -- Or REINDEX INDEX index_name;

    -- MySQL (often involves dropping and re-adding, or OPTIMIZE TABLE)
    OPTIMIZE TABLE users; -- This can rebuild the table and its indexes in some engines like MyISAM
    -- For InnoDB, often a no-op for reindexing, ALTER TABLE ... ENGINE=InnoDB might work
    -- More specific: ALTER TABLE users DROP INDEX idx_users_email, ADD INDEX idx_users_email (email);
    \`\`\`
*   **Monitoring Index Usage**: Regularly monitor which indexes are being used and which are not. Unused indexes consume storage and add overhead to write operations without providing any benefit.
    *   **In PostgreSQL (finding unused indexes)**:
        \`\`\`sql
        SELECT s.schemaname,
               s.relname AS tablename,
               s.indexrelname AS indexname,
               pg_size_pretty(pg_relation_size(s.indexrelid)) AS index_size,
               s.idx_scan AS index_scans
        FROM pg_catalog.pg_stat_user_indexes s
        JOIN pg_catalog.pg_index i ON s.indexrelid = i.indexrelid
        WHERE s.idx_scan = 0 AND i.indisunique IS FALSE AND i.indisprimary IS FALSE -- Exclude unique/primary key constraints
        ORDER BY pg_relation_size(s.indexrelid) DESC;
        \`\`\`
    *   **In MySQL (finding unused indexes - requires Performance Schema setup)**:
        \`\`\`sql
        -- Ensure performance_schema is enabled and table_io_waits_summary_by_index_usage is collected
        SELECT * FROM sys.schema_unused_indexes;
        \`\`\`
    Remove unused indexes to free up space and reduce write overhead.

### 9. Indexing and Transactional Properties (ACID)

Indexes are integral to maintaining the ACID (Atomicity, Consistency, Isolation, Durability) properties of transactions.

*   **Atomicity**: Transactions are all-or-nothing operations. If a transaction that modifies data (and thus requires index updates) is rolled back, the changes to both the table data and its indexes must be undone to maintain atomicity.
*   **Consistency**: Indexes, particularly unique indexes, play a role in maintaining database consistency by enforcing constraints (e.g., uniqueness). Database operations must ensure that both table data and index data remain consistent. If an index becomes corrupted, it can lead to incorrect query results, violating consistency.
*   **Isolation**: Isolation ensures that concurrent transactions do not interfere with each other in undesirable ways. When one transaction modifies data and its indexes, these changes must be isolated from other concurrently running transactions according to the defined isolation level. This often involves locking mechanisms on index entries as well as data rows.
*   **Durability**: Once a transaction is committed, its changes (to both data and indexes) must be permanent and survive system failures. This is typically achieved through mechanisms like write-ahead logging (WAL), where changes to indexes are also logged before being applied, ensuring they can be recovered after a crash.

Maintaining ACID properties with indexes means that index updates are integral parts of transactions and are subject to the same transactional guarantees as data modifications.

### 10. Working with Indexes in ORMs (Object-Relational Mappers)

Most ORMs automatically create indexes for primary keys and often for foreign keys. However, for other types of indexes (composite, partial, on specific columns), you typically need to define them explicitly in your model or schema definitions.

*   **Sequelize (Node.js)**:
    \`\`\`javascript
    const { Sequelize, DataTypes } = require('sequelize');
    const sequelize = new Sequelize(/* connection options */);

    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // Creates a unique index
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN
    }, {
      indexes: [
        // Composite index
        { name: 'idx_user_fullname', fields: ['lastName', 'firstName'] },
        // Example for a partial index in Sequelize (PostgreSQL specific 'where' clause)
        // { name: 'idx_active_users_email', fields: ['email'], where: { isActive: true } }
      ]
    });
    \`\`\`

*   **Hibernate (Java / JPA)**:
    \`\`\`java
    import jakarta.persistence.*; // Or javax.persistence.* for older JPA

    @Entity
    @Table(name = "users",
           indexes = {
               @Index(name = "idx_users_email", columnList = "email"), // Basic index
               @Index(name = "idx_users_name", columnList = "last_name, first_name") // Composite
           })
    public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(unique = true)  // Creates a unique constraint, typically backed by a unique index
        private String email;

        private String firstName;
        private String lastName;

        // Getters and setters
    }
    \`\`\`

### 11. Example End-to-End Optimization Scenario

Imagine a blog platform with the following potentially slow query:
\`\`\`sql
SELECT p.title, p.content, u.username, c.name as category
FROM posts p
JOIN users u ON p.author_id = u.id
JOIN categories c ON p.category_id = c.id
WHERE p.published = TRUE
  AND p.published_at > '2023-01-01'
ORDER BY p.published_at DESC
LIMIT 10;
\`\`\`

**Step 1: Run \`EXPLAIN ANALYZE\` to identify bottlenecks**:
\`\`\`sql
EXPLAIN ANALYZE SELECT p.title, p.content, u.username, c.name as category
FROM posts p
JOIN users u ON p.author_id = u.id
JOIN categories c ON p.category_id = c.id
WHERE p.published = TRUE
  AND p.published_at > '2023-01-01'
ORDER BY p.published_at DESC
LIMIT 10;
\`\`\`
Observe the query plan for full table scans (Sequential Scans) on \`posts\`, or inefficient join methods.

**Step 2: Create appropriate indexes**:
*   **For JOIN conditions**: Foreign key columns \`posts.author_id\` and \`posts.category_id\` should be indexed. Primary keys \`users.id\` and \`categories.id\` are typically indexed automatically.
    \`\`\`sql
    CREATE INDEX idx_posts_author_id ON posts(author_id);
    CREATE INDEX idx_posts_category_id ON posts(category_id);
    \`\`\`
*   **For \`WHERE\` clause and \`ORDER BY\`**: A composite index on \`posts(published, published_at)\` can serve both the filtering condition on \`published\` and the range condition plus sorting on \`published_at\`. If \`published_at\` is sorted \`DESC\`, include that in the index definition for better performance.
    \`\`\`sql
    -- Composite index for filtering and sorting
    CREATE INDEX idx_posts_published_status_date ON posts(published, published_at DESC);
    \`\`\`
    Note: The effectiveness of \`published\` as the first column depends on its selectivity. If most posts have \`published = TRUE\`, then an index on \`(published_at DESC)\` with a \`WHERE published = TRUE\` clause (a partial index) might be more efficient if supported and appropriate for the RDBMS.

**Step 3: Re-run \`EXPLAIN ANALYZE\` to verify improvement**:
\`\`\`sql
EXPLAIN ANALYZE SELECT p.title, p.content, u.username, c.name as category
FROM posts p
JOIN users u ON p.author_id = u.id
JOIN categories c ON p.category_id = c.id
WHERE p.published = TRUE
  AND p.published_at > '2023-01-01'
ORDER BY p.published_at DESC
LIMIT 10;
\`\`\`
The execution plan should now show index usage for joins and filtering/sorting operations, ideally resulting in significantly improved performance (lower cost, faster execution time).

### 12. Conclusion

Index design is a fundamental and critical aspect of RDBMS schema design and performance tuning. Well-designed indexes can lead to dramatic improvements in query speed and application responsiveness. However, they also introduce overhead for storage and write operations. Therefore, a careful balance must be struck, considering query patterns, data characteristics, and the involved trade-offs.

Key takeaways:
*   Index columns used in \`WHERE\`, \`JOIN\`, and \`ORDER BY\` clauses.
*   Be strategic about index creation to balance query speed with write performance and storage costs.
*   Regularly monitor index usage, update statistics, and perform maintenance as needed.
*   Use \`EXPLAIN\` (or \`EXPLAIN ANALYZE\`) to understand query execution plans and verify that your queries are using indexes effectively.
*   Most importantly, test your indexing strategies with realistic data volumes and query patterns, as benefits and overheads often only become apparent at scale.

Understanding the types of indexes, their underlying data structures, and how they interact with query processing and transactional properties is essential for any database developer or administrator aiming to build efficient and scalable database systems.
`;


function ContentMarkdown() {
  return (
    <ReactMarkdown
      components={{
        code({node, className, children, ...props}) {
          // If it's a code block and language is sql, add language-sql class
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <code
              className={
                match[1] === 'sql'
                  ? `${className} language-sql`
                  : className
              }
              {...props}
            >
              {children}
            </code>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
}

export default ContentMarkdown;
