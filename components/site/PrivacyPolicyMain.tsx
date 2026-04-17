'use client'

import { formatPhoneNumberForDisplay } from '@/lib/formatPhoneNumberForDisplay'
import PageHero from "@/components/site/PageHero";
import { useSite } from "@/contexts/SiteContext";

export default function PrivacyPolicyMain() {
  const { site } = useSite();
  const companyName = site?.companyName?.trim() || 'Our company'
  const helpSmsPhone = site?.phoneNumber?.trim() ?? ''
  const helpSmsPhoneLabel = formatPhoneNumberForDisplay(helpSmsPhone)
  const contactEmail = site?.email?.trim()
  const optOutContact = contactEmail
    ? `you may opt-out later by contacting ${contactEmail}`
    : 'you may opt-out later using the contact information on our website'

  return (
    <>
      <PageHero
        title="Privacy policy"
        description="How we collect, use, and protect your information when you use this site."
      />

      <article className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-slate max-w-none">
            <p className="text-ink-muted leading-relaxed">
              Our Privacy Policy outlines the collection, use, and disclosure of personal information when you use our
              website. By accessing or using our website, you consent to the collection and use of your personal
              information in accordance with this policy.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">What information do we collect?</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              We collect your personal information when you subscribe to our newsletter, fill out a form, or submit
              property information. Additionally, we collect information about your computer, including your IP address,
              operating system, and browser type, to improve the browsing experience. This data is collected using
              Google Analytics, which does not identify any individual.
            </p>
            <p className="text-ink-muted leading-relaxed">
              When you order or register on our site, we may ask you to provide your name, email address, mailing
              address, or phone number. However, you can visit our site anonymously. If {companyName} is acquired by or
              merged with another company, we will notify you before transferring your information, which will become
              subject to a different privacy policy.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Consent for future marketing</h2>
            <p className="text-ink-muted leading-relaxed">
              When you type your name or contact information into our website or otherwise submit the same to us, you
              agree that this shall act as your binding electronic signature and express written consent that{' '}
              {companyName}, along with its agents and assigns, may email, call and text you at the address(es) &amp;
              number(s) provided (or provided later), with property-related marketing offers and other information,
              including possibly using an automatic telephone dialing system, prerecorded messages, and artificial/AI
              voices. Consent is not a condition of purchase and you may opt-out later through any reasonable means.
              Your opt-out will be honored and effective as fast as our existing technology allows, but in no event more
              than 10 days from your request. Reply STOP to unsubscribe from text messages. You agree that if you opt
              out by phone, we may still contact you through email unless you specify otherwise, and vice versa.
              Standard rates apply and all calls may be recorded and monitored. Message frequency varies over time. By
              consenting, you are expressly requesting that we share your information in this manner and for these
              purposes. You agree to do business with us electronically and to receive copies of these terms
              electronically, but {optOutContact}. These terms will be stored in a manner which you can print or request
              from us later in hard copy. This website may record your interactions with it.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">How do we use your information?</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              We may use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-ink-muted space-y-2 mb-6">
              <li>
                <span className="font-semibold text-ink">To process transactions:</span> Your information will not be
                sold, exchanged, transferred, or given to any other company without your consent, other than for
                delivering the purchased product or service requested.
              </li>
              <li>
                <span className="font-semibold text-ink">To send periodic emails:</span> We may use the email address you
                provide to send you information, respond to inquiries, and/or other requests or questions.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">How do we protect your information?</h2>
            <p className="text-ink-muted leading-relaxed">
              We implement various security measures to maintain the safety of your personal information when you enter,
              submit, or access it.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Do we disclose any information to outside parties?</h2>
            <p className="text-ink-muted leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties,
              except for trusted third parties that assist us in operating our website, conducting our business, or
              servicing you. These parties must agree to keep your information confidential. We may release your
              information when necessary to comply with the law, enforce our site policies, or protect ours or
              others&apos; rights, property, or safety. However, non-personally identifiable visitor information may be
              provided to other parties for marketing, advertising, or other uses.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Third party links and services</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              We may include or offer third party products or services on our website. These third-party sites have
              separate and independent privacy policies, and we have no responsibility or liability for their content and
              activities. We recommend that you read their privacy policies to understand how your personal information
              will be handled.
            </p>
            <p className="text-ink-muted leading-relaxed">
              Additionally, third-party providers we use will only collect, use, and disclose your information to the
              extent necessary to perform the services they provide to us. Payment gateways and other payment transaction
              processors have their own privacy policies for purchase-related transactions. We recommend that you read
              their policies to understand how they will handle your personal information.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Remarketing</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              We use third-party vendor remarketing tracking cookies, including Google Adwords, to show you ads across
              the internet, specifically on the Google Content Network (GCN). We respect your privacy and do not collect
              any identifiable information through Google&apos;s or any other third-party remarketing system.
            </p>
            <p className="text-ink-muted leading-relaxed">
              We may use Google&apos;s &ldquo;remarketing&rdquo; service to target our ads to you based on your prior use
              of the Site when you visit other sites in Google&apos;s content network.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Google AdWords</h2>
            <p className="text-ink-muted leading-relaxed">
              We use the Google AdWords remarketing service to advertise on third-party websites, including Google, to
              previous visitors to our site. This may mean advertising to previous visitors who have not completed a
              task on our site, such as using the contact form to make an inquiry. Third-party vendors, including
              Google, use cookies to serve ads based on a visitor&apos;s past visits to our website.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">
              Compliance with California Online Privacy Protection Act
            </h2>
            <p className="text-ink-muted leading-relaxed">
              We respect your privacy and have taken necessary measures to comply with the California Online Privacy
              Protection Act. We will not disclose your personal information to third parties without your consent.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">
              Compliance with Children&apos;s Online Privacy Protection Act
            </h2>
            <p className="text-ink-muted leading-relaxed">
              We comply with the regulations outlined in the Children&apos;s Online Privacy Protection Act (COPPA) and
              do not collect any information from individuals under the age of 13. Our website, products, and services
              are intended for individuals who are at least 13 years of age or older.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Personal, financial, and property information</h2>
            <p className="text-ink-muted leading-relaxed">
              As a real estate services firm, we may require certain information from you to assist you in your
              situation. This information may include your contact information, property details, and, in some cases,
              financial information required for us to analyze your property and situation. We will only use this
              information internally and will not share it with external parties unless necessary to help resolve your
              real estate situation.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Online privacy policy</h2>
            <p className="text-ink-muted leading-relaxed">
              This online privacy policy pertains solely to the information collected through our website and not to any
              offline information collected.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Changes to our privacy policy</h2>
            <p className="text-ink-muted leading-relaxed">
              In the event that we modify our privacy policy, we will post those changes on this page.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">Contact us</h2>
            <p className="text-ink-muted leading-relaxed">
              If you have any questions regarding our privacy policy, please refer to the contact information on our
              website.
            </p>

            <p className="text-ink-muted leading-relaxed mt-8">
              By completing a form on our website, you give consent to {companyName} to send SMS. SMS message frequency
              varies. Standard message and data rates may apply.
              {helpSmsPhone
                ? ` For HELP, text ${helpSmsPhoneLabel}.`
                : ' For HELP, contact us using the information on our website.'}{' '}
              Text STOP to unsubscribe.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
