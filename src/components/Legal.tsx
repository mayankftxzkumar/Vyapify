import { useLocation, Link } from 'react-router-dom';
import './Legal.css';

const Legal = () => {
  const location = useLocation();
  const isPrivacy = location.pathname === '/privacy';

  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link to="/" className="legal-logo">
          Vyapify<span className="text-gradient">.</span>
        </Link>
        <div className="legal-nav-links">
          <Link to="/terms" className={!isPrivacy ? 'active' : ''}>Terms & Conditions</Link>
          <Link to="/privacy" className={isPrivacy ? 'active' : ''}>Privacy Policy</Link>
        </div>
      </nav>

      <div className="legal-container">
        {isPrivacy ? <PrivacyPolicy /> : <TermsAndConditions />}
      </div>

      <footer className="legal-footer">
        <p>© {new Date().getFullYear()} Vyapify. All rights reserved.</p>
        <div className="legal-footer-links">
          <Link to="/terms">Terms & Conditions</Link>
          <span>•</span>
          <Link to="/privacy">Privacy Policy</Link>
          <span>•</span>
          <Link to="/">Home</Link>
        </div>
      </footer>
    </div>
  );
};

const TermsAndConditions = () => (
  <article className="legal-content">
    <h1>Terms & Conditions</h1>
    <p className="legal-updated">Last updated: April 2, 2026</p>

    <section>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using the Vyapify mobile application ("App"), you agree to be bound by these 
        Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, please do not use the App.
      </p>
    </section>

    <section>
      <h2>2. Description of Service</h2>
      <p>
        Vyapify is a business management application designed for local businesses and shopkeepers. The App provides:
      </p>
      <ul>
        <li><strong>Inventory Management</strong> — Add, edit, and track products with OCR-powered auto-categorization</li>
        <li><strong>Point of Sale (POS)</strong> — Create bills with support for weight-based (kg, liter, g, ml) and piece-based products</li>
        <li><strong>Sales Tracking</strong> — View sales history with date filtering and CSV export</li>
        <li><strong>Stock Management</strong> — Monitor stock levels, low stock alerts, and stock change history with CSV export</li>
        <li><strong>Due Tracking</strong> — Record and manage customer dues with mark-as-collected functionality</li>
        <li><strong>PDF Invoice Generation</strong> — Generate and share professional PDF receipts</li>
        <li><strong>GST Support</strong> — Optional 18% GST calculation on bills</li>
        <li><strong>Offline-First Architecture</strong> — Full functionality without internet; data syncs when connectivity is available</li>
        <li><strong>Cloud Sync</strong> — Automatic bidirectional synchronization via Google Firebase</li>
        <li><strong>Data Export</strong> — Export monthly sales and stock history as CSV files</li>
      </ul>
    </section>

    <section>
      <h2>3. User Accounts</h2>
      <p>
        To use Vyapify, you must create an account using Google Sign-In. You are responsible for maintaining 
        the security of your account credentials. Each account is isolated — your business data is only accessible 
        to your authenticated session and cannot be viewed by other users.
      </p>
    </section>

    <section>
      <h2>4. User Data & Storage</h2>
      <p>
        Your business data (products, bills, dues, stock logs, and settings) is stored locally on your device 
        using encrypted local storage (Hive). When online, data is synchronized to Google Firebase Cloud Firestore 
        under your user-scoped collection. Product images are stored locally only and are not uploaded to the cloud 
        to minimize storage costs and bandwidth.
      </p>
    </section>

    <section>
      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose or in violation of any applicable laws</li>
        <li>Attempt to gain unauthorized access to other users' data or the App's backend systems</li>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Use the App to transmit any malicious content</li>
        <li>Resell, redistribute, or sublicense the App without prior written consent</li>
      </ul>
    </section>

    <section>
      <h2>6. Intellectual Property</h2>
      <p>
        The App, including its code, design, logos, and content, is the intellectual property of Vyapify. 
        You are granted a limited, non-exclusive, non-transferable license to use the App for personal 
        or business purposes. This license does not grant you any ownership rights.
      </p>
    </section>

    <section>
      <h2>7. Data Reset & Deletion</h2>
      <p>
        You may reset all your data at any time using the "Reset All Data" feature in the Profile section. 
        This will permanently delete all your products, bills, dues, and stock logs from both your device 
        and the cloud backend. This action is irreversible.
      </p>
    </section>

    <section>
      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The App is provided "as is" without warranties of any kind, either express or implied. Vyapify does 
        not warrant that the App will be uninterrupted, error-free, or free of harmful components. You use 
        the App at your own risk.
      </p>
    </section>

    <section>
      <h2>9. Limitation of Liability</h2>
      <p>
        In no event shall Vyapify be liable for any indirect, incidental, special, consequential, or punitive 
        damages, including but not limited to loss of profits, data, or business opportunities, arising from 
        your use of the App.
      </p>
    </section>

    <section>
      <h2>10. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Updated Terms will be posted within the App 
        and on this page. Continued use of the App after changes constitutes acceptance of the revised Terms.
      </p>
    </section>

    <section>
      <h2>11. Contact</h2>
      <p>
        For questions about these Terms, please contact us at{' '}
        <a href="mailto:support@vyapify.online">support@vyapify.online</a>.
      </p>
    </section>
  </article>
);

const PrivacyPolicy = () => (
  <article className="legal-content">
    <h1>Privacy Policy</h1>
    <p className="legal-updated">Last updated: April 2, 2026</p>

    <section>
      <h2>1. Information We Collect</h2>
      <p>When you use Vyapify, we collect the following information:</p>
      <ul>
        <li><strong>Account Information</strong> — Your Google account email, display name, and profile photo URL (via Google Sign-In)</li>
        <li><strong>Business Data</strong> — Products, bills, dues, stock logs, and shop settings that you create within the App</li>
        <li><strong>Device Information</strong> — Basic device identifiers necessary for Firebase authentication and crash reporting</li>
      </ul>
    </section>

    <section>
      <h2>2. How We Use Your Information</h2>
      <p>Your information is used exclusively to:</p>
      <ul>
        <li>Authenticate your identity and provide access to your account</li>
        <li>Store and synchronize your business data across your devices</li>
        <li>Provide the core features of the App (inventory, billing, stock tracking, and due management)</li>
        <li>Generate PDF invoices and CSV export files for your personal or business use</li>
        <li>Display your profile information (name, email, Gravatar-based profile image) within the App</li>
      </ul>
    </section>

    <section>
      <h2>3. Data Storage</h2>
      <p>Your data is stored in two locations:</p>
      <ul>
        <li><strong>Local Device Storage</strong> — All business data is stored locally on your device using Hive (an encrypted local database). The App works fully offline using this local data.</li>
        <li><strong>Cloud Storage</strong> — When online, your data is synchronized to Google Firebase Cloud Firestore. All cloud data is stored under your user-scoped collection and is inaccessible to other users. Firebase security rules enforce strict data isolation per user.</li>
      </ul>
      <p>
        <strong>Product images</strong> are stored locally only and are never uploaded to the cloud to protect your bandwidth 
        and storage.
      </p>
    </section>

    <section>
      <h2>4. Data Sharing</h2>
      <p>
        <strong>We do not sell, trade, or share your personal data or business data with any third parties.</strong>
      </p>
      <p>Your data may be processed by the following service providers as part of our infrastructure:</p>
      <ul>
        <li><strong>Google Firebase</strong> — For authentication (Firebase Auth) and cloud data storage (Cloud Firestore)</li>
        <li><strong>Google ML Kit</strong> — For on-device OCR text recognition (processed entirely on your device; no data is sent to external servers)</li>
        <li><strong>Gravatar</strong> — For profile image display based on email hash (no personal data is transmitted beyond a hashed email)</li>
      </ul>
    </section>

    <section>
      <h2>5. Data Retention</h2>
      <p>
        Your data is retained as long as your account is active. You may delete all your data at any time using 
        the "Reset All Data" feature, which permanently removes data from both your device and the cloud backend. 
        Upon account deletion or data reset, all associated data is immediately and permanently deleted.
      </p>
    </section>

    <section>
      <h2>6. Data Security</h2>
      <p>We implement industry-standard security measures to protect your data:</p>
      <ul>
        <li>Firebase Security Rules enforce user-scoped data isolation — each user can only access their own data</li>
        <li>All cloud communication is encrypted via HTTPS/TLS</li>
        <li>Authentication tokens are validated before any sync operation</li>
        <li>The App validates user identity (UID) on every data operation to prevent data leakage</li>
        <li>Local data is stored in Hive's binary format on device storage</li>
      </ul>
    </section>

    <section>
      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> — View all your data within the App at any time</li>
        <li><strong>Export</strong> — Export your sales and stock data as CSV files</li>
        <li><strong>Delete</strong> — Permanently delete all your data using the "Reset All Data" feature</li>
        <li><strong>Portability</strong> — Export your data in standard formats (CSV, PDF)</li>
      </ul>
    </section>

    <section>
      <h2>8. Children's Privacy</h2>
      <p>
        Vyapify is not intended for use by individuals under the age of 13. We do not knowingly collect personal 
        information from children under 13. If we discover that a child under 13 has provided us with personal 
        information, we will take steps to delete it.
      </p>
    </section>

    <section>
      <h2>9. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an 
        updated "Last updated" date. We encourage you to review this policy periodically.
      </p>
    </section>

    <section>
      <h2>10. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or wish to exercise your data rights, 
        please contact us at{' '}
        <a href="mailto:support@vyapify.online">support@vyapify.online</a>.
      </p>
    </section>
  </article>
);

export default Legal;
