export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
                <ul className="social-links">
                    <li><a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                <ul className="footer-links">
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>Powered by Your Company</p>
            </div>
        </footer>
    );
}