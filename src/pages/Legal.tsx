import React from 'react';

const linkClass = "text-plk-navy underline underline-offset-2 hover:text-plk-navy/70 transition-colors";

const Ext: React.FC<{ href: string }> = ({ href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{href}</a>
);

const Mail: React.FC<{ to: string }> = ({ to }) => (
  <a href={`mailto:${to}`} className={linkClass}>{to}</a>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="text-xl md:text-2xl font-montserrat font-medium text-plk-navy">{title}</h2>
    {children}
  </section>
);

const List: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

const LegalPage: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <main className="flex-grow bg-plk-white text-plk-navy pb-20">
    <section className="w-full bg-plk-navy font-montserrat font-medium uppercase pt-52 pb-24 px-6 leading-snug tracking-[0.05em] md:px-12 mb-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-white drop-shadow-sm">
          {title}<span className="text-plk-lima">.</span>
        </h1>
      </div>
    </section>
    <article className="max-w-4xl mx-auto px-6 md:px-12 pt-12 md:pt-20 space-y-10 font-sans font-light text-base md:text-lg leading-relaxed text-plk-navy/90">
      {children}
    </article>
  </main>
);

export const Disclaimer: React.FC = () => (
  <LegalPage title="Disclaimer">
    <p>
      The Terms and Conditions below apply to your use of this website, owned and operated by PLK Capital Advisors Private Limited (CIN: U66190KA2025PTC210648) ("PLK Capital", "we", "us"). PLK Capital is registered with the Securities and Exchange Board of India (SEBI) as an Investment Adviser under the SEBI (Investment Advisers) Regulations, 2013, Registration No. INA000023409.
    </p>

    <Section title="1. Information only">
      <p>The content on this website is for general information purposes only. Nothing on this website is investment advice, a recommendation or a solicitation to buy or sell any mutual fund units, shares, financial instruments or other securities, or to avail any service, to any person or entity. Investment advice is provided only to clients who have completed our onboarding process, including risk profiling and suitability assessment, and signed an Investment Advisory Agreement with us.</p>
    </Section>

    <Section title="2. No liability for information">
      <p>While we take reasonable care to keep the information on this website accurate, PLK Capital does not guarantee its accuracy, completeness or timeliness and is not responsible for any loss or damage caused by incorrect, inaccurate or erroneous information or data on this website. PLK Capital is under no obligation to update any information on this website.</p>
    </Section>

    <Section title="3. Use of content">
      <p>You may use the information, material, services and data on this website for your own needs only. You may not copy it for sale or for use by others. PLK Capital retains all rights, including copyrights, trademarks, patents and other intellectual property rights, in all content on this website, including text, graphics and logos, unless expressly stated otherwise. You may not delete, modify or interfere with any copyright or other intellectual property notice on this website.</p>
    </Section>

    <Section title="4. Access and changes">
      <p>PLK Capital may, at its discretion, restrict or prohibit your access to this website or related services, and may amend or discontinue any service offered through this website, at any time and without prior notice.</p>
    </Section>

    <Section title="5. Forward-looking statements">
      <p>Actual results may differ materially from those suggested by any statement on this website because of risks and uncertainties, including market risk, general economic and political conditions in India and globally, monetary and interest rate policies, inflation, interest rate and foreign exchange movements, equity price movements, the performance of Indian and global financial markets, and changes in domestic and foreign laws and regulations. Past performance is not indicative of future results.</p>
    </Section>

    <Section title="6. Limitation of liability">
      <p>PLK Capital, its directors, officers, personnel and employees are not liable for any loss or damage of any nature, including direct, indirect, punitive, exemplary or consequential loss and loss of profit, arising from the use of this website or its content in any manner.</p>
    </Section>

    <Section title="7. Disclosure of interest">
      <p>PLK Capital, its directors, employees and their relatives may hold or have an outstanding position in securities that are discussed or advised upon. Where such holdings or any other conflict of interest exist in relation to advice given to a client, they will be disclosed to that client as required under the SEBI (Investment Advisers) Regulations, 2013. PLK Capital does not receive any consideration, commission or distribution fee from any product provider for advice given to clients.</p>
    </Section>

    <Section title="8. Jurisdiction">
      <p>PLK Capital operates from within India and is subject to Indian law. This website is not intended for US Persons (as defined under Regulation S of the US Securities Act of 1933 or by the US Commodity Futures Trading Commission) or for residents of Canada. Anyone accessing this website from outside India does so at their own risk and is solely responsible for complying with local laws. Any dispute will be subject to the exclusive jurisdiction of the courts at Bengaluru, Karnataka, India.</p>
    </Section>

    <Section title="9. Grievances">
      <p>Investors may raise a complaint with us at <Mail to="grievances@plkcapital.co.in" />, and may also use SEBI SCORES (<Ext href="https://scores.sebi.gov.in/" />) or the SEBI Online Dispute Resolution portal, SMARTODR (<Ext href="https://smartodr.in/login" />).</p>
    </Section>

    <p className="border-t border-plk-navy/10 pt-8">
      <strong className="font-montserrat font-medium text-plk-navy">Standard SEBI disclaimer:</strong> Investments in the securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee the performance of the intermediary or provide any assurance of returns to investors.
    </p>
  </LegalPage>
);

export const PrivacyPolicy: React.FC = () => (
  <LegalPage title="Privacy Policy">
    <p>
      PLK Capital Advisors Private Limited ("PLK Capital", "we", "us") respects your privacy. This policy explains what personal information we collect through this website and in the course of providing investment advisory services, how we use and protect it, and the choices you have. By using this website or our services, you agree to this policy.
    </p>

    <Section title="1. Information we collect">
      <List items={[
        <><strong className="font-medium">Information you give us:</strong> name, email address, phone number, address, PAN, date of birth, occupation, income and net worth details, investment goals, risk profile, bank and demat details, and other KYC documents needed to onboard you as a client.</>,
        <><strong className="font-medium">Information from your portfolio:</strong> holdings and transaction data that you or your broker, custodian, depository, mutual fund registrar or other agent share with us, with your authorisation, to prepare reports and analysis.</>,
        <><strong className="font-medium">Technical information:</strong> IP address, browser type, device information and pages visited, collected through cookies and similar technologies when you use this website.</>,
      ]} />
    </Section>

    <Section title="2. How we use your information">
      <List items={[
        "To verify your identity and complete KYC, onboarding and risk profiling as required by SEBI and other applicable law.",
        "To provide investment advisory services, suitability assessment, portfolio review and client reporting.",
        "To communicate with you about our services, respond to your queries and handle complaints.",
        "To maintain records, carry out audits and comply with legal and regulatory requirements.",
        "To improve the security and performance of this website.",
      ]} />
      <p>We do not sell your personal information. We do not use it for unsolicited marketing, and we send you promotional communication only where you have asked for it or consented to it.</p>
    </Section>

    <Section title="3. Sharing of information">
      <p>We share your information only where needed and only with:</p>
      <List items={[
        "Regulators, exchanges, depositories, KYC registration agencies and other authorities, when required by law or regulation.",
        "Service providers who help us run our business, such as IT and software vendors, cloud and data storage providers, and auditors and compliance professionals. They are bound by confidentiality obligations and may use the information only for the service they provide to us.",
        "Your broker, custodian, distributor or other agents, where you have authorised us to receive or update portfolio and transaction data.",
        "Any other person, where you have given us your consent.",
      ]} />
    </Section>

    <Section title="4. Cookies">
      <p>This website may use cookies and similar technologies to make it work properly and to understand how visitors use it. You can disable cookies in your browser settings, but parts of the website may not work as intended.</p>
    </Section>

    <Section title="5. Data security">
      <p>We use reasonable technical and organisational safeguards, including access controls and secure storage, to protect your information against unauthorised access, loss, misuse or disclosure. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. Please keep your own passwords and login details confidential and tell us at once if you suspect unauthorised use.</p>
    </Section>

    <Section title="6. Retention">
      <p>We keep your information for as long as you are a client and afterwards for the period required under the SEBI (Investment Advisers) Regulations, 2013 and other applicable law, after which it is deleted or anonymised.</p>
    </Section>

    <Section title="7. Your rights">
      <p>Subject to applicable law, you may ask us to give you access to your personal information, correct or update it, or erase it, and you may withdraw consent you have given. Withdrawal does not affect processing already done, and we may be unable to delete information that we must keep under law or regulation. To make a request, write to us at the contact details below.</p>
    </Section>

    <Section title="8. Third-party links">
      <p>This website may link to other websites, including those of regulators. We do not control them and are not responsible for their content or privacy practices.</p>
    </Section>

    <Section title="9. Children">
      <p>Our services are not directed at persons below the age of 18, and we do not knowingly collect their personal information.</p>
    </Section>

    <Section title="10. Changes to this policy">
      <p>We may update this policy from time to time. The current version is always on this website, and your continued use of the website or our services means you accept the updated policy.</p>
    </Section>

    <Section title="11. Contact and grievances">
      <p>PLK Capital Advisors Private Limited, #51, Pushpa Vatika, 1st Floor, C Flat, Vanivilas Road, Basavanagudi, Bangalore – 560004, Karnataka</p>
      <p>
        Email: <Mail to="info@plkcapital.co.in" /> · Phone: <a href="tel:+919620050062" className={linkClass}>+91-9620050062</a> · Grievances: <Mail to="grievances@plkcapital.co.in" />
      </p>
      <p>If your concern is not resolved to your satisfaction, you may escalate it to SEBI through SCORES (<Ext href="https://scores.sebi.gov.in/" />) or to the SMARTODR portal (<Ext href="https://smartodr.in/login" />).</p>
    </Section>
  </LegalPage>
);
