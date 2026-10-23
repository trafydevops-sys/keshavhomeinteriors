import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that apply to your use of the ${site.name} website and our interior design services.`,
};

const address = `${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.pincode}`;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="23 October 2026"
      intro={`These terms apply to your use of the ${site.name} website and to our interior design consultation and execution services. Please read them before engaging with us.`}
    >
      <LegalSection title="1. Acceptance of these terms">
        <p>
          By using this website or engaging {site.name} (“we”, “us”), you agree
          to these terms and to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>. If you do not
          agree, please do not use the website or our services.
        </p>
      </LegalSection>

      <LegalSection title="2. This website">
        <p>
          This website showcases our work and services. Project photographs
          show real completed interiors, but colours, finishes, wood grain and
          materials can look different on screen and in person, and every home
          is designed to its own brief. Nothing on this website is a binding
          offer, quotation or guarantee of a particular result.
        </p>
      </LegalSection>

      <LegalSection title="3. Consultation and engagement">
        <ul>
          <li>
            Our first consultation is free and carries no obligation.
          </li>
          <li>
            Our usual process is: consultation, site visit, then a quotation
            and invoice. Work on your project begins only once you accept our
            written quotation or invoice.
          </li>
          <li>
            The accepted quotation or invoice sets out the scope of work, price
            and schedule, and prevails over anything on this website if the
            two differ.
          </li>
          <li>
            Changes you request after acceptance may change the price and the
            timeline. We will confirm such changes with you before proceeding.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Timelines">
        <p>
          Timelines we share are good-faith estimates. They can be affected by
          factors such as your design approvals, availability of materials,
          readiness of the site, society or landlord permissions, weather and
          events beyond our reasonable control. We will keep you informed of
          any material delay.
        </p>
      </LegalSection>

      <LegalSection title="5. Your responsibilities">
        <ul>
          <li>Give us accurate information about your property and requirements.</li>
          <li>Provide safe and timely access to the site.</li>
          <li>
            Obtain any permissions needed from your housing society, landlord or
            authorities for the work.
          </li>
          <li>Review and approve designs, materials and samples in good time.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Payments">
        <p>
          Fees and the payment schedule are as stated in your accepted
          quotation or invoice. Payments are due as stated there, and we may
          pause work if payments are overdue.
        </p>
      </LegalSection>

      <LegalSection title="7. Materials and warranties">
        <p>
          Materials, fittings and appliances may carry the manufacturer’s own
          warranty, which applies in addition to anything we agree with you.
          Natural materials such as wood and stone vary in grain, tone and
          texture, and this is not a defect. Any warranty on our workmanship
          is as stated in your written quotation or agreement.
        </p>
      </LegalSection>

      <LegalSection title="8. Intellectual property">
        <p>
          The content of this website — including text, photographs, designs,
          drawings, logos and the {site.name} name — belongs to us or is used
          with permission. You may not copy, reproduce or use it commercially
          without our written consent. Design drawings and concepts we prepare
          remain our property unless we agree otherwise in writing.
        </p>
        <p>
          We may photograph completed projects for our portfolio. If you
          prefer that we do not, please tell us in writing before work begins.
        </p>
      </LegalSection>

      <LegalSection title="9. Acceptable use of the website">
        <p>You agree not to:</p>
        <ul>
          <li>use the website for any unlawful purpose;</li>
          <li>
            attempt to disrupt, damage or gain unauthorised access to the
            website or its servers; or
          </li>
          <li>
            copy or scrape the website’s content in bulk without our permission.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Third-party services and links">
        <p>
          The website uses or links to third-party services such as WhatsApp
          and Google Maps. We do not control them and are not responsible for
          their content or availability.
        </p>
      </LegalSection>

      <LegalSection title="11. Disclaimer and limitation of liability">
        <p>
          The website is provided “as is” without warranties of any kind. To
          the fullest extent permitted by law, we are not liable for indirect
          or consequential losses arising from your use of the website. For our
          services, our total liability is limited to the amount you have paid
          us for the relevant project, except where the law does not allow such
          a limit.
        </p>
      </LegalSection>

      <LegalSection title="12. Governing law">
        <p>
          These terms are governed by the laws of India. Any dispute will be
          subject to the exclusive jurisdiction of the courts at{" "}
          {site.city}, Tamil Nadu.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to these terms">
        <p>
          We may update these terms from time to time. The “last updated” date
          at the top of this page shows when they were last changed. Continued
          use of the website after a change means you accept the updated
          terms.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact us">
        <p>
          Questions about these terms? Contact {site.name} at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={site.phoneHref}>{site.phone}</a>, or write to us at {address}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
