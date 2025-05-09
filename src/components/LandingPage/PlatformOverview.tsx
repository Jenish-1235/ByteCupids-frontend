import React from 'react';
import '../../styles/components/LandingPage/PlatformOverview.css';

const PlatformOverview: React.FC = () => {
  return (
    <section className="platform-overview">
      <div className="platform-overview-container">     
        <div className="platform-screenshot">
          <div className="screenshot-container">
            <div className="screenshot-window">
              <div className="window-controls">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
              <div className="window-content">
                <div className="platform-demo-visual">
                  <div className="code-editor">
                    <pre><code>{`// Optimized inference with ByteCupids
import bytecupids from '@bytecupids/sdk';

// Initialize client
const client = bytecupids.createClient({
  apiKey: process.env.BYTECUPIDS_API_KEY
});

// Deploy your model to edge
await client.deployModel({
  name: "gpt-j-6b",
  version: "1.0.0",
  regions: ["na-east", "eu-west", "ap-south"],
  optimization: "INT8"
});

// Run inference
const result = await client.infer({
  model: "gpt-j-6b",
  input: "Translate to French: Hello world"
});

console.log(result.output); // "Bonjour le monde"`}</code></pre>
                  </div>
                  <div className="dashboard-preview">
                    <div className="chart-placeholder"></div>
                    <div className="stats">
                      <div className="stat">
                        <span className="stat-value">47ms</span>
                        <span className="stat-label">Avg Latency</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">99.9%</span>
                        <span className="stat-label">Uptime</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">302</span>
                        <span className="stat-label">Edge Points</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="platform-cta">
          <button className="platform-btn">View Documentation</button>
          <a href="#pricing" className="platform-link">Compare Plans</a>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;