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
    <p className="legal-updated">Last updated: April 8, 2026</p>

    <section>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using the Vyapify mobile application ("App"), or by registering for 
        early access through our website ("Website"), you agree to be bound by these Terms and Conditions ("Terms"). 
        If you do not agree with any part of these Terms, please do not use the App or Website.
      </p>
    </section>

    <section>
      <h2>2. Description of Service</h2>
      <p>
        Vyapify is a comprehensive business management application designed for local businesses, Kirana stores, 
        and shopkeepers across India. The App provides the following core features:
      </p>
      <ul>
        <li><strong>OCR-Powered Inventory Management</strong> — Scan product labels with your phone camera to instantly add items to your digital inventory. Our advanced OCR engine (powered by Google ML Kit) auto-detects product names and categories with zero typing required.</li>
        <li><strong>Point of Sale (POS) & Billing</strong> — Create professional itemized bills with support for weight-based (kg, liter, gram, ml) and piece-based products. Add items, adjust quantities, and generate invoices in seconds.</li>
        <li><strong>GST Support</strong> — Optional 18% GST calculation on bills. Toggle GST on/off per invoice as required for your business.</li>
        <li><strong>PDF Invoice Generation</strong> — Generate high-quality PDF receipts with your shop branding. Share invoices directly via WhatsApp, email, or any messaging platform.</li>
        <li><strong>Sales History & Tracking</strong> — View complete sales history with advanced date filtering. Track daily, weekly, and monthly revenue trends.</li>
        <li><strong>Stock Management</strong> — Real-time stock level monitoring with automatic low-stock alerts. Track every stock change with a full audit log.</li>
        <li><strong>Due Tracking</strong> — Record and manage customer dues. Mark dues as collected when payments are received.</li>
        <li><strong>Data Export</strong> — Export monthly sales history and stock data as CSV files for accounting, tax filing, or record-keeping.</li>
        <li><strong>Offline-First Architecture</strong> — Full functionality without internet connectivity. The App stores all data locally on your device and operates seamlessly offline.</li>
        <li><strong>Cloud Sync</strong> — Automatic bidirectional synchronization via Google Firebase when internet is available. Your data is backed up securely in the cloud.</li>
        <li><strong>Profile & Shop Settings</strong> — Customize your shop name, contact details, and business information. Profile images are generated via Gravatar based on your email.</li>
        <li><strong>Push Notifications</strong> — Receive notifications about app updates, features, and important announcements via Firebase Cloud Messaging (FCM).</li>
      </ul>
    </section>

    <section>
      <h2>3. Early Access Program</h2>
      <p>
        By registering for early access through our Website, you provide your email address to be notified when 
        Vyapify is officially available on the Google Play Store. Early access registration does not guarantee 
        any specific launch date, exclusive features, or preferential treatment. We will use your email solely 
        to notify you of the App's availability and may send occasional updates about our progress. You may 
        unsubscribe from these notifications at any time.
      </p>
    </section>

    <section>
      <h2>4. User Accounts</h2>
      <p>
        To use Vyapify, you must create an account using Google Sign-In. You are responsible for maintaining 
        the security of your account credentials. Each account is fully isolated — your business data is only 
        accessible to your authenticated session and cannot be viewed, modified, or accessed by any other user. 
        Vyapify enforces strict user-scoped data isolation at both the application level and the database level 
        through Firebase Security Rules.
      </p>
    </section>

    <section>
      <h2>5. User Data & Storage</h2>
      <p>
        Your business data (products, bills, dues, stock logs, and shop settings) is stored locally on your device 
        using Hive, an encrypted local database. When internet connectivity is available, data is synchronized to 
        Google Firebase Cloud Firestore under your user-scoped collection. Product images are stored locally only 
        and are never uploaded to the cloud, minimizing storage costs and bandwidth consumption.
      </p>
    </section>

    <section>
      <h2>6. Subscription & Pricing</h2>
      <p>
        Vyapify operates on a subscription model at ₹100/month. Payment terms, billing cycles, and any free trial 
        periods will be communicated within the App and at the time of subscription. Pricing is subject to change 
        with prior notice. No refunds will be issued for partial months of usage.
      </p>
    </section>

    <section>
      <h2>7. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the App for any unlawful purpose or in violation of any applicable Indian or international laws</li>
        <li>Attempt to gain unauthorized access to other users' data, accounts, or the App's backend systems</li>
        <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App</li>
        <li>Use the App to transmit any malicious, harmful, or fraudulent content</li>
        <li>Resell, redistribute, sublicense, or commercially exploit the App without prior written consent from Vyapify</li>
        <li>Use automated systems, bots, or scripts to interact with the App or Website</li>
        <li>Create multiple accounts to circumvent usage limits or restrictions</li>
        <li>Interfere with or disrupt the App's servers, networks, or connected infrastructure</li>
      </ul>
    </section>

    <section>
      <h2>8. Intellectual Property</h2>
      <p>
        The App, including its source code, design, user interface, logos, icons, animations, documentation, 
        and all associated content, is the exclusive intellectual property of Vyapify Technologies. You are 
        granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal 
        or commercial business management purposes. This license does not grant you any ownership rights, 
        and you may not claim any part of the App as your own intellectual property.
      </p>
    </section>

    <section>
      <h2>9. Data Reset & Deletion</h2>
      <p>
        You may reset all your data at any time using the "Reset All Data" feature in the Profile section of the App. 
        This will permanently and irreversibly delete all your products, bills, dues, stock logs, and settings from 
        both your device and the cloud backend. Vyapify is not responsible for any data loss resulting from your 
        use of this feature. We recommend exporting your data (CSV/PDF) before performing a reset.
      </p>
    </section>

    <section>
      <h2>10. Third-Party Services</h2>
      <p>
        Vyapify integrates with the following third-party services to provide its functionality:
      </p>
      <ul>
        <li><strong>Google Firebase</strong> — Authentication (Firebase Auth), cloud storage (Cloud Firestore), and push notifications (Firebase Cloud Messaging)</li>
        <li><strong>Google ML Kit</strong> — On-device OCR text recognition for product scanning</li>
        <li><strong>Gravatar</strong> — Profile image generation based on email hash</li>
        <li><strong>WhatsApp</strong> — Invoice sharing via deep link integration</li>
      </ul>
      <p>
        Your use of these third-party services is subject to their respective terms of service and privacy policies. 
        Vyapify is not responsible for the practices or policies of these third-party providers.
      </p>
    </section>

    <section>
      <h2>11. Disclaimer of Warranties</h2>
      <p>
        The App and Website are provided "as is" and "as available" without warranties of any kind, either express 
        or implied, including but not limited to implied warranties of merchantability, fitness for a particular 
        purpose, and non-infringement. Vyapify does not warrant that the App will be uninterrupted, error-free, 
        secure, or free of harmful components. You use the App entirely at your own risk.
      </p>
    </section>

    <section>
      <h2>12. Limitation of Liability</h2>
      <p>
        In no event shall Vyapify, its founders, employees, or affiliates be liable for any indirect, incidental, 
        special, consequential, or punitive damages, including but not limited to loss of profits, data, business 
        opportunities, or goodwill, arising from your use of or inability to use the App or Website, even if 
        Vyapify has been advised of the possibility of such damages.
      </p>
    </section>

    <section>
      <h2>13. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising 
        from these Terms or your use of the App shall be subject to the exclusive jurisdiction of the courts 
        located in India.
      </p>
    </section>

    <section>
      <h2>14. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Updated Terms will be posted within the App and on 
        this page with an updated "Last updated" date. Continued use of the App after any changes constitutes your 
        acceptance of the revised Terms. We encourage you to review these Terms periodically.
      </p>
    </section>

    <section>
      <h2>15. Contact</h2>
      <p>
        For questions, concerns, or feedback about these Terms, please contact us at{' '}
        <a href="mailto:vyapify@gmail.com">vyapify@gmail.com</a>.
      </p>
    </section>
  </article>
);

const PrivacyPolicy = () => (
  <article className="legal-content">
    <h1>Privacy Policy</h1>
    <p className="legal-updated">Last updated: April 8, 2026</p>

    <section>
      <h2>1. Introduction</h2>
      <p>
        Vyapify ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we 
        collect, use, store, and protect your information when you use our mobile application ("App") and our 
        website at vyapify.online ("Website"), including our early access registration program.
      </p>
    </section>

    <section>
      <h2>2. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      
      <h3>2.1 Account Information</h3>
      <ul>
        <li>Google account email address, display name, and profile photo URL (via Google Sign-In)</li>
        <li>User ID (UID) generated by Firebase Authentication</li>
      </ul>

      <h3>2.2 Business Data (App)</h3>
      <ul>
        <li>Products — names, categories, prices, quantities, units, and locally stored product images</li>
        <li>Bills — itemized invoices, customer names, payment status, timestamps, and bill totals</li>
        <li>Due Records — customer names, amounts, and collection status</li>
        <li>Stock Logs — stock change history, quantities, and timestamps</li>
        <li>Shop Settings — shop name, contact information, and business preferences</li>
      </ul>

      <h3>2.3 Early Access Data (Website)</h3>
      <ul>
        <li>Email address — provided voluntarily when registering for early access notifications</li>
      </ul>

      <h3>2.4 Device & Technical Information</h3>
      <ul>
        <li>Basic device identifiers necessary for Firebase Authentication</li>
        <li>Firebase Cloud Messaging (FCM) token for push notifications</li>
        <li>Crash reports and basic performance metrics (via Firebase)</li>
      </ul>
    </section>

    <section>
      <h2>3. How We Use Your Information</h2>
      <p>Your information is used exclusively for the following purposes:</p>
      <ul>
        <li><strong>Authentication</strong> — Verify your identity and provide secure access to your account</li>
        <li><strong>Core App Functionality</strong> — Store and manage your inventory, billing, stock tracking, and due management data</li>
        <li><strong>Cloud Synchronization</strong> — Sync your business data across sessions when online</li>
        <li><strong>Invoice Generation</strong> — Generate PDF invoices and CSV export files for your personal or business use</li>
        <li><strong>Profile Display</strong> — Show your name, email, and Gravatar-based profile image within the App</li>
        <li><strong>Push Notifications</strong> — Send important updates, feature announcements, and app availability notifications</li>
        <li><strong>Early Access Notifications</strong> — Notify you when Vyapify launches on the Play Store (if you registered for early access)</li>
        <li><strong>OCR Processing</strong> — Process product images on-device for text extraction (no image data leaves your device)</li>
      </ul>
    </section>

    <section>
      <h2>4. Data Storage & Architecture</h2>
      <p>Your data is stored in two locations:</p>
      <ul>
        <li>
          <strong>Local Device Storage</strong> — All business data is stored locally on your device using Hive, 
          an encrypted local database system. The App works fully offline using this local data. This is the 
          primary data store, ensuring you always have access to your data regardless of internet connectivity.
        </li>
        <li>
          <strong>Cloud Storage (Firebase Firestore)</strong> — When internet is available, your data is automatically 
          synchronized to Google Firebase Cloud Firestore. All cloud data is stored under your user-scoped collection 
          (keyed by your unique UID) and is completely inaccessible to other users. Firebase Security Rules enforce 
          strict per-user data isolation at the database level.
        </li>
      </ul>
      <p>
        <strong>Product images</strong> are stored locally only on your device and are never uploaded to our servers 
        or the cloud. This protects your bandwidth and storage while ensuring your product photos remain private.
      </p>
      <p>
        <strong>Early access emails</strong> are collected via our website and stored securely. They are used 
        solely for sending launch notifications and occasional progress updates.
      </p>
    </section>

    <section>
      <h2>5. Data Sharing</h2>
      <p>
        <strong>We do not sell, trade, rent, or share your personal data or business data with any third parties 
        for marketing, advertising, or any other commercial purpose.</strong>
      </p>
      <p>Your data may be processed by the following service providers as part of our technical infrastructure:</p>
      <ul>
        <li><strong>Google Firebase (Google LLC)</strong> — For authentication (Firebase Auth), cloud data storage (Cloud Firestore), push notifications (FCM), and crash analytics</li>
        <li><strong>Google ML Kit</strong> — For on-device OCR text recognition. All OCR processing happens entirely on your device; no image data or recognition results are sent to external servers.</li>
        <li><strong>Gravatar (Automattic Inc.)</strong> — For profile image display based on an MD5 hash of your email address. No personal data beyond the hashed email is transmitted.</li>
      </ul>
      <p>
        These providers process data strictly as necessary to deliver the App's functionality. We have no 
        advertising partners, data brokers, or analytics tracking beyond what is listed above.
      </p>
    </section>

    <section>
      <h2>6. Data Retention</h2>
      <p>
        Your business data is retained for as long as your account is active. You may delete all your data at 
        any time using the "Reset All Data" feature in the App's Profile section, which permanently removes all 
        data from both your device and the cloud backend. Upon data reset, all associated records (products, 
        bills, dues, stock logs, settings) are immediately and irreversibly deleted.
      </p>
      <p>
        Early access email addresses are retained until the App launches and the notification is sent, or until 
        you request removal by contacting us.
      </p>
    </section>

    <section>
      <h2>7. Data Security</h2>
      <p>We implement industry-standard security measures to protect your data:</p>
      <ul>
        <li><strong>User-Scoped Isolation</strong> — Firebase Security Rules ensure each user can only read and write their own data. No cross-user data access is possible.</li>
        <li><strong>Encrypted Communication</strong> — All cloud communication is encrypted via HTTPS/TLS.</li>
        <li><strong>Authentication Validation</strong> — Every sync operation validates user authentication tokens before processing.</li>
        <li><strong>UID Verification</strong> — The App validates user identity (UID) on every data operation to prevent data leakage or unauthorized access.</li>
        <li><strong>Local Storage</strong> — Local data is stored in Hive's binary format on device storage, providing an additional layer of obfuscation.</li>
        <li><strong>Session Management</strong> — Authenticated sessions are managed securely through Firebase Auth with automatic token refresh.</li>
      </ul>
    </section>

    <section>
      <h2>8. Your Rights</h2>
      <p>You have the following rights regarding your data:</p>
      <ul>
        <li><strong>Access</strong> — View all your data within the App at any time, including products, bills, dues, and stock logs</li>
        <li><strong>Export</strong> — Export your sales and stock data as CSV files, and export invoices as PDF documents</li>
        <li><strong>Delete</strong> — Permanently delete all your data using the "Reset All Data" feature</li>
        <li><strong>Portability</strong> — Export your data in standard, machine-readable formats (CSV, PDF)</li>
        <li><strong>Opt-Out</strong> — Unsubscribe from early access notifications at any time by contacting us</li>
      </ul>
    </section>

    <section>
      <h2>9. Cookies & Tracking</h2>
      <p>
        Our Website does not use cookies for tracking or advertising purposes. We do not use any third-party 
        analytics services, pixel trackers, or behavioral tracking tools on our website. The App does not 
        contain any advertising SDKs or user tracking mechanisms beyond what is necessary for Firebase 
        Authentication and Cloud Messaging.
      </p>
    </section>

    <section>
      <h2>10. Children's Privacy</h2>
      <p>
        Vyapify is a business management tool intended for use by adults (age 18+) and business owners. We do 
        not knowingly collect personal information from children under the age of 13. If we discover that a 
        child under 13 has provided us with personal information, we will take immediate steps to delete that 
        information from our systems.
      </p>
    </section>

    <section>
      <h2>11. International Users</h2>
      <p>
        Vyapify is primarily designed for Indian merchants and businesses. If you access the App or Website from 
        outside India, please be aware that your data may be transferred to and processed on servers located in 
        data centers operated by Google (Firebase) which may be in various countries. By using the App, you 
        consent to such cross-border data transfers.
      </p>
    </section>

    <section>
      <h2>12. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or 
        legal requirements. Changes will be posted on this page with an updated "Last updated" date. We encourage 
        you to review this policy periodically. Your continued use of the App or Website after any changes 
        constitutes acceptance of the updated policy.
      </p>
    </section>

    <section>
      <h2>13. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy, your personal data, or 
        wish to exercise any of your data rights, please contact us at:{' '}
        <a href="mailto:vyapify@gmail.com">vyapify@gmail.com</a>.
      </p>
      <p>
        You may also reach us through our social media channels:{' '}
        <a href="https://x.com/vyapify" target="_blank" rel="noopener noreferrer">Twitter/X</a>,{' '}
        <a href="https://www.instagram.com/vyapify.online" target="_blank" rel="noopener noreferrer">Instagram</a>,{' '}
        <a href="https://www.linkedin.com/company/vyapify/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
      </p>
    </section>
  </article>
);

export default Legal;
