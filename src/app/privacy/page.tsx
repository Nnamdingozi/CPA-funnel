import LegalPage from "@/components/legalPageComponent";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="August 2024">
      <section>
        <h2>1. Data Collection</h2>
        <p>We collect your email address solely for the purpose of providing access to our digital vault and sending occasional updates regarding new AI tools. We do not sell your data to third parties.</p>
      </section>
      <section>
        <h2>2. Tracking Technologies</h2>
        <p>We use the Meta Pixel and standard web analytics to understand how users interact with our vault. This helps us improve our resource selection and user experience.</p>
      </section>
      <section>
        <h2>3. Third-Party Links</h2>
        <p>Our verification process uses CPAGrip, a third-party monetization platform. When you interact with verification offers, you are subject to the privacy policies of those specific advertisers and CPAGrip.</p>
      </section>
    </LegalPage>
  );
}