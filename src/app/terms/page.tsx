import LegalPage from "@/components/legalPageComponent";


export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="August 2024">
      <section>
        <h2>1. Access to Content</h2>
        <p>Access to the FreeVault library is granted upon successful completion of our security verification process. We reserve the right to modify or remove content at any time without notice.</p>
      </section>
      <section>
        <h2>2. Intellectual Property</h2>
        <p>The AI prompts provided are for personal and educational use. Redistribution, reselling, or commercial packaging of these prompts without explicit permission is prohibited.</p>
      </section>
      <section>
        <h2>3. Disclaimer of Warranty</h2>
        <p>AI prompts are provided "as is." While we engineer them for high performance, we do not guarantee specific academic or financial results from their use.</p>
      </section>
    </LegalPage>
  );
}