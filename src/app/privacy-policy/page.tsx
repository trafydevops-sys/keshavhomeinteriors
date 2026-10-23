import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
};

const address = `${site.address.line1}, ${site.address.line2}, ${site.address.city} ${site.address.pincode}`;

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="23 October 2026"
      intro={`${site.name} respects your privacy. This policy explains what personal information we collect when you visit this website or get in touch with us, how we use it, and the choices you have.`}
    >
      <LegalSection title="1. Who we are">
        <p>
          {site.name} is a home interior design and execution studio based in{" "}
          {site.city}. In this policy, “we”, “us” and “our” mean {site.name}.
        </p>
        <p>
          Studio address: {address}.
          <br />
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          <br />
          Phone: <a href={site.phoneHref}>{site.phone}</a>
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>
          This website does not have user accounts or sign-up forms. We collect
          personal information only when you choose to share it with us:
        </p>
        <ul>
          <li>
            <strong>Contact details</strong> — such as your name, phone number
            and email address, when you message us on WhatsApp, call us or
            send us an email.
          </li>
          <li>
            <strong>Project details</strong> — such as the address of your
            property, floor plans, photographs, measurements, budget and design
            preferences that you share, or that we record during consultations
            and site visits.
          </li>
          <li>
            <strong>Technical data</strong> — like most websites, our hosting
            provider may keep standard server logs (for example IP address,
            browser type and pages requested) for security and to keep the site
            running.
          </li>
        </ul>
        <p>
          We do not run advertising trackers on this website, and we do not
          set cookies of our own for tracking or analytics.
        </p>
      </LegalSection>

      <LegalSection title="3. How we use your information">
        <ul>
          <li>To respond to your enquiries and arrange consultations and site visits.</li>
          <li>To prepare design proposals, quotations and invoices.</li>
          <li>To plan, carry out and follow up on interior work at your property.</li>
          <li>To keep records that we are required to maintain by law.</li>
          <li>To improve our website and services.</li>
        </ul>
        <p>
          We use your information only for these purposes, and only because you
          have shared it with us in order to receive our services.
        </p>
      </LegalSection>

      <LegalSection title="4. Third-party services on this website">
        <ul>
          <li>
            <strong>WhatsApp.</strong> Our “WhatsApp” buttons open a chat with
            us in WhatsApp. Messages you send are handled by WhatsApp (Meta)
            under its own terms and privacy policy.
          </li>
          <li>
            <strong>Google Maps.</strong> The map in our contact section is
            embedded from Google. When it loads, Google may collect information
            about your visit and set cookies, as described in Google’s privacy
            policy.
          </li>
        </ul>
        <p>
          We do not control these services and are not responsible for their
          privacy practices. Please review their policies if you have concerns.
        </p>
      </LegalSection>

      <LegalSection title="5. Who we share information with">
        <p>We do not sell your personal information. We may share it only:</p>
        <ul>
          <li>
            with carpenters, installers, site supervisors, vendors and suppliers
            who need it to carry out your project (for example your site
            address and measurements);
          </li>
          <li>
            with service providers that help us run our website and business,
            such as hosting providers; and
          </li>
          <li>
            where required by law, court order or a government authority, or to
            protect our legal rights.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. How long we keep it">
        <p>
          We keep your information for as long as needed to deal with your
          enquiry, deliver and support your project, and meet our legal and
          accounting obligations. After that, we delete it or anonymise it.
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          We take reasonable steps to protect your information from loss,
          misuse and unauthorised access. No method of transmission or storage
          is completely secure, so we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="8. Your rights">
        <p>
          Under applicable Indian law, including the Digital Personal Data
          Protection Act, 2023, you may:
        </p>
        <ul>
          <li>ask what personal information we hold about you;</li>
          <li>ask us to correct inaccurate or incomplete information;</li>
          <li>ask us to delete your information, unless we must keep it by law;</li>
          <li>withdraw your consent to our use of your information; and</li>
          <li>raise a grievance about how your information is handled.</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond
          within a reasonable time.
        </p>
      </LegalSection>

      <LegalSection title="9. Children">
        <p>
          Our website and services are meant for adults. We do not knowingly
          collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to this policy">
        <p>
          We may update this policy from time to time. The “last updated” date
          at the top of this page shows when it was last changed. Continued use
          of the website after a change means you accept the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact us">
        <p>
          Questions or complaints about this policy? Contact {site.name} at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={site.phoneHref}>{site.phone}</a>, or write to us at {address}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
