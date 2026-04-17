'use client'

import PageHero from "@/components/site/PageHero";
import { useSite } from "@/contexts/SiteContext";

export default function TermsMain() {
  const { site } = useSite();
  const companyName = site?.companyName?.trim() || 'Our company'
  const contactEmail = site?.email?.trim()
  const copyrightEmail = contactEmail ? (
    <a href={`mailto:${contactEmail}`} className="text-accent underline">
      {contactEmail}
    </a>
  ) : (
    'the contact information on our website'
  )
  const adminContact = contactEmail ? (
    <>
      sending a message to the system administrator at{' '}
      <a href={`mailto:${contactEmail}`} className="text-accent underline">
        {contactEmail}
      </a>
    </>
  ) : (
    'sending a message to the system administrator using the contact information on our website'
  )
  const spamReportContact = contactEmail ? (
    <>
      forwarding the unedited message with the full message header to{' '}
      <a href={`mailto:${contactEmail}`} className="text-accent underline">
        {contactEmail}
      </a>
    </>
  ) : (
    'forwarding the unedited message with the full message header using the contact information on our website'
  )

  return (
    <>
      <PageHero
        title="Terms & conditions"
        description="The terms that govern your use of this website and our services."
      />

      <article className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-slate max-w-none">
            <p className="text-ink-muted leading-relaxed font-semibold text-ink uppercase text-sm tracking-wide">
              By using any website, mobile app or service of {companyName} (&ldquo;{companyName}&rdquo;) you agree to
              abide by these terms of use between you and {companyName}, which include the referenced privacy policy
              (&ldquo;Agreement&rdquo;). If you do not agree to be bound by this Agreement, you are not authorized to use
              any {companyName} website or to obtain any services from {companyName}.
            </p>

            <p className="text-ink-muted leading-relaxed mt-6">
              The {companyName} websites and mobile apps (collectively, &ldquo;Websites&rdquo;; and individually,
              &ldquo;Website&rdquo;). {companyName} provides numerous services, including as referenced on the Websites
              (&ldquo;Services&rdquo;).
            </p>

            <p className="text-ink-muted leading-relaxed">
              {companyName} reserves the right, at its discretion, to revise the terms of this Agreement and/or change,
              suspend, discontinue or modify any aspect of any Website. Such modifications may include, without
              limitation, changes in content, in user priorities, and discontinuance of functional aspects of any
              Website. Your continued use of any Website after the posting of revisions to the Terms Of Use shall
              constitute your acceptance to be bound by the express terms of any such revisions.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">1. Certification of user</h2>
            <p className="text-ink-muted leading-relaxed">
              By using or attempting to use this Website, you certify to {companyName} that you are a resident of the
              United States or otherwise authorized to conduct business in the United States, are at least 18 years of
              age or older and have the legal capacity to enter into this Agreement.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">2. Content and registration</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">2.1.</span> The Website content shall mean all areas and aspects
              of the Website and Services including, without limitation, text, data, photos, graphics and/or video or
              any information whatsoever obtained through the Website (collectively referred to herein as
              &ldquo;Information&rdquo;), {companyName}&apos;s computers or network and any subscription or software,
              product, service, or information provided by {companyName}.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">2.2 Vendor content –</span> {companyName} has entered into
              contractual relationships with certain vendors, sponsors, and advertisers of products or services
              (&ldquo;Vendors&rdquo;), pursuant to which {companyName} may link to or display information, advertisements,
              discounts, products, goods, or services offered by the Vendors (&ldquo;Vendor Content&rdquo;).{' '}
              {companyName} does not guarantee the availability or accuracy of any such Vendor Content or offers, nor
              does it endorse, guarantee nor insure any Vendor products or services.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">2.3</span> {companyName} shall not be held liable, directly or
              indirectly, for any loss or damage caused by your use of: (a) any external site linked to the Service, (b)
              Vendor Information, or (c) Vendor products or services. Statements made on the Service Area concerning the
              products or services of {companyName} do not constitute an offer, but are merely solicitations of an offer.
            </p>
            <p className="text-ink-muted leading-relaxed">
              <span className="font-semibold text-ink">2.4 Registration –</span> You may browse and view certain content
              on the Website without registering, but as a condition to using certain other aspects of the Website or
              accessing certain services, you may be required to register and select a user identification and password.
              You agree to maintain the confidentiality of such registration information, be the sole user of such
              registration and use your registration solely to access the Website and to obtain Services.{' '}
              {companyName} reserves the right to monitor your use of the registration and to discontinue it at any time
              in {companyName}&apos;s sole discretion. If you believe that your registration has been compromised, you
              must promptly change your registration information and notify us immediately.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">3. Limitations on use and user submissions</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">3.1. Copyright, patent and trademark notice.</span> All content of
              the Website provided by {companyName}, including, but not limited to, all text, photos, graphics, audio,
              software, webpage layouts or configurations, presentations in any format and/or video is copyrighted by{' '}
              {companyName}, or its affiliates or subsidiaries. Copyright © 2013-2019 {companyName}. All rights reserved.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              No portion of the Content or other materials may be directly or indirectly copied, published, reproduced,
              modified, performed, displayed, sold, transmitted, published, broadcast, rewritten for broadcast or
              publication or redistributed in any medium, whether now known or hereafter created. The foregoing
              prohibition includes, but is not limited to &ldquo;screen scraping&rdquo; or &ldquo;database scraping&rdquo;
              to obtain lists of users or other Information. Nor may any portion of the Information or other materials be
              stored in a computer or distributed over any network, except that you may download or print one copy of
              pages strictly for personal and non-commercial use; however, any print out of any page of the Website or
              portion thereof, must include {companyName}&apos;s copyright notice. {companyName}, and its associated logos,
              page headers, custom graphics, buttons, and other icons are service marks, trademarks, registered service
              marks, registered trademarks, and/or trade dress of {companyName}. All other content product names and
              company logos are trademarks of their respective owners. Neither these materials, nor any portion thereof,
              may be stored in a computer except as reasonably necessary for personal and non-commercial use; however, any
              print out of any page of the Website or portion thereof, must include {companyName}&apos;s copyright notice
              and/or trademark registration notice as appropriate.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">3.2. Notice of copyright infringement –</span> {companyName}{' '}
              respects the copyrights of others. {companyName} reserves the right, but not the obligation, to terminate
              your license to use the Services if it determines in its sole and absolute discretion that you are involved
              in infringing activity, including alleged acts of first-time or repeat infringement, regardless of whether
              the material or activity is ultimately determined to be infringing. {companyName} has implemented procedures
              for receiving written notification of claimed infringements. If you believe that your copyrighted work has
              been reproduced on the Website in a way that constitutes copyright infringement you may notify us by e-mail
              at {copyrightEmail}.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">3.3. Restricted use –</span> You agree to use the Service Area and
              Information for lawful purposes only. You agree not to post or transmit any information through the Service
              Area which: (a) infringes any patent, trademark or copyright rights of others or violates their privacy or
              publicity rights, (b) is unlawful, threatening, abusive, defamatory, libelous, vulgar, obscene, profane,
              indecent or otherwise objectionable, or (c) is protected by patent, copyright, trademark or other proprietary
              right without the express permission of the owner of such right. You shall be solely liable for any damages
              resulting from any infringement of patent, copyright, trademark or other proprietary rights, or any other
              harm resulting from your use of the Service.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">3.4. Your submission of messages –</span> You hereby grant to{' '}
              {companyName} a worldwide, royalty-free, perpetual, irrevocable, non-exclusive right and license to use,
              reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, display and
              use for any purpose all messages or other materials posted by you on the Service or any e-mail sent by you
              to {companyName} (in whole or in part) and to incorporate any such messages or other materials or e-mails in
              any form, into other media or technology whether now known or hereafter developed.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">3.5. Public messages –</span> All electronic forums made available
              to users of the Service are the sole property of {companyName} and are not a public forum. You understand and
              acknowledge that all information, data, files, software, music, sound, photographs, graphics, video, messages
              or other materials posted by any person or entity other than {companyName} (&ldquo;Third-Party
              Content&rdquo;), whether publicly posted or privately transmitted, are the sole responsibility of the person
              from which such Third-Party Content originated. You assume total liability for all Third-Party Content that
              you upload, post, email or otherwise transmit via the Service. {companyName} assumes no liability for any
              such Third-Party Content. You agree not to use the Service to:
            </p>
            <ol className="list-decimal pl-6 text-ink-muted space-y-3 mb-4">
              <li>
                upload, post, e-mail or otherwise transmit any Third-Party Content that is unlawful, harmful, threatening,
                abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another&apos;s privacy, or
                hateful, or is racially, ethnically or otherwise objectionable;
              </li>
              <li>harm minors in any way;</li>
              <li>
                impersonate any person or entity, including, but not limited to, an official or representative of{' '}
                {companyName}, or falsely state or otherwise misrepresent your affiliation with a person or entity;
              </li>
              <li>
                forge headers or otherwise manipulate identifiers to disguise the origin of any Content transmitted through
                the Service;
              </li>
              <li>
                upload, post, e-mail or otherwise transmit any Third-Party Content that you do not have a right to transmit
                under any law or under contractual or fiduciary relationships (such as inside information, proprietary and
                confidential information learned or disclosed as part of employment relationships or under nondisclosure
                agreements);
              </li>
              <li>
                upload, post, e-mail or otherwise transmit any Third-Party Content that infringes any patent, trademark,
                trade secret, copyright or other proprietary rights of any party;
              </li>
              <li>
                upload, post, e-mail or otherwise transmit any unsolicited or unauthorized advertising, promotional
                materials, &ldquo;junk mail,&rdquo; &ldquo;spam,&rdquo; &ldquo;chain letters,&rdquo; &ldquo;pyramid
                schemes,&rdquo; or any other form of solicitation;
              </li>
              <li>
                upload, post, e-mail or otherwise transmit any material that contains software viruses or any other computer
                code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or
                hardware or telecommunications equipment or network;
              </li>
              <li>
                disrupt the normal flow of dialogue, cause a screen to &ldquo;scroll&rdquo; faster than other users of the
                Service are able to type, or otherwise act in a manner that negatively affects other users&apos; ability to
                engage in real time exchanges;
              </li>
              <li>
                interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any
                requirements, procedures, policies or regulations of networks connected to the Service;
              </li>
              <li>
                intentionally or unintentionally violate any applicable local, state, national or international law,
                including, but not limited to, regulations promulgated by the U.S. Securities and Exchange Commission, any
                rules of any national or other securities exchange, including, without limitation, the New York Stock
                Exchange, the American Stock Exchange or the NASDAQ, and any regulations having the force of law;
              </li>
              <li>&ldquo;stalk&rdquo; or otherwise harass another; or</li>
              <li>collect or store personal data about other users.</li>
            </ol>
            <p className="text-ink-muted leading-relaxed mb-4">
              You acknowledge that {companyName} does not pre-screen Third-Party Content, but that {companyName} and its
              designees shall have the right (but not the obligation) in their sole discretion to refuse or move any
              Third-Party Content that is available via the Service. Without limiting the foregoing, {companyName} and its
              designees shall have the right to remove any Third-Party Content that violates this Agreement or is otherwise
              objectionable. You agree that you must evaluate, and bear all risks associated with, the use of any
              Third-Party Content, including any reliance on the accuracy, completeness, or usefulness of such Third-Party
              Content.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              You acknowledge and agree that {companyName} may preserve Third-Party Content and may also disclose Third-Party
              Content if required to do so by law or in the good faith belief that such preservation or disclosure is
              reasonably necessary to: (a) comply with legal process; (b) enforce this Agreement; (c) respond to claims that
              any Third-Party Content violates the rights of other third-parties; or (d) protect the rights, property, or
              personal safety of {companyName}, its users, or the public.
            </p>
            <p className="text-ink-muted leading-relaxed">
              <span className="font-semibold text-ink">3.6. Linking –</span> Without the prior written consent of{' '}
              {companyName}, you may not use any of {companyName}&apos;s proprietary logos, marks, or other distinctive
              graphics, video, or audio material in your links. You may not link to the Website or to any page thereof or
              engage in the practice of &ldquo;deep linking&rdquo; in any manner reasonably likely to: (a) imply
              affiliation with or endorsement or sponsorship of or by {companyName}; (b) cause confusion, mistake, or
              deception; (c) dilute {companyName}&apos;s trademarks or service marks; (d) otherwise violate state or federal
              law; or (e) constitute improper disparagement or disclosure concerning {companyName} or any of its respective
              affiliates, or their respective officers, directors, agents, franchises, or Vendors. You may not frame or
              otherwise incorporate into another Website any of the Information or other materials on this Website without
              the prior written consent of {companyName}.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">4. Access and delays in services</h2>
            <p className="text-ink-muted leading-relaxed">
              {companyName}, its affiliates, subsidiaries, and Vendors shall have no responsibility to provide you access
              to the Website. Further, {companyName}, its affiliates, subsidiaries, and Vendors shall not be liable to you
              for any loss or liability resulting, directly or indirectly, from delays, inaccuracies, errors, omissions or
              interruptions of the Service for any reason, including, without limitation, due to electronic or mechanical
              equipment failures, telephone interconnect problems, defects, weather, strikes, walkouts, fire, acts of God,
              riots, armed conflicts, acts of war, acts of terrorism, or to other like causes.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">5. Monitoring by {companyName}</h2>
            <p className="text-ink-muted leading-relaxed">
              You acknowledge that {companyName} reserves the right to, and may from time to time, monitor for all lawful
              purposes any and all Third-Party Content transmitted or received through the Service. During monitoring,
              information may be examined, recorded, copied, and used for authorized purposes. All Third-Party Content,
              including personal information, placed on or sent over the Service may be monitored. Use of the Service,
              authorized or unauthorized, constitutes consent to such monitoring and to the other terms of this Agreement.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">6. Representations, warranties and limitation of liability</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">6.1. General disclaimer and limited warranty –</span> You acknowledge
              that certain aspects of the Information and/or Vendor Information and links provided through the Website are
              compiled from sources which may be beyond the control of {companyName}. Though such Information and links are
              recognized by the parties to be generally reliable, the parties acknowledge that inaccuracies may occur.{' '}
              {companyName}, its licensors and Vendors do not warrant the accuracy or suitability of any such Information.
              Neither {companyName} nor its licensors or Vendors represent or endorse the accuracy or reliability of the
              Information distributed through the Service.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4 font-semibold text-ink uppercase text-sm">
              For this reason, you acknowledge that the Website is provided to you on an &ldquo;as is with all faults
              basis.&rdquo; {companyName} and its licensors and vendors expressly disclaim any and all warranties, whether
              express, oral, implied, statutory or otherwise, including any implied warranty of merchantability, fitness for a
              particular purpose, title, non-infringement, or any warranties arising by virtue of custom of trade or course
              of dealing. Further, {companyName} and its licensors and vendors neither represent nor warrant that the Website
              will meet your requirements or is suitable for your needs or will achieve any desired result.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">6.2.</span> You assume all risk of errors and/or omissions in the
              Website, including the transmission or translation of data. You assume full responsibility for implementing
              sufficient procedures and checks to satisfy your requirements for the accuracy and suitability of the
              Website, including the Information, and for maintaining any means which you may require for the reconstruction
              of lost data or subsequent manipulations or analyses of the Information provided under this Agreement.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4 font-semibold text-ink uppercase text-sm">
              <span className="font-semibold text-ink">6.3. Viruses –</span> You acknowledge and agree that {companyName}{' '}
              uses reasonable efforts to assure that no viruses or programs with similar functions operate on, or are passed
              through, the Website or the Information. However, you hereby assume all responsibility (and thereby hold{' '}
              {companyName} harmless), by whatever means you deem most appropriate for your needs, for detecting and
              eradicating any virus or program with a similar function.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4 font-semibold text-ink uppercase text-sm">
              <span className="font-semibold text-ink">6.4. Limitation of liability –</span> You agree that {companyName}{' '}
              and its affiliates, subsidiaries, and vendors shall not in any event be liable for any special, incidental or
              consequential damages arising out of the use or inability to use the Service for any purpose whatsoever. If
              the above limitations of liabilities should fail in their essential purpose for any reason, such liability is
              and shall be limited to a sum equal in amount to ten (10%) percent of the sums paid to {companyName} by you
              under the terms of this Agreement or $100.00, whichever is greater, as liquidated damages and not as a penalty
              even if {companyName} or its affiliates have been advised of the possibility of such damages. This liability,
              if any, shall be complete and exclusive. The provisions contained in this Section 6 shall survive termination of
              this Agreement.
            </p>
            <p className="text-ink-muted leading-relaxed font-semibold text-ink uppercase text-sm">
              <span className="font-semibold text-ink">6.5. FTC notice –</span> Some states do not allow limitations on how
              long an implied warranty lasts, so the above limitation may not apply to you. Some states do not allow the
              exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not
              apply to you. This warranty gives you specific legal rights, and you may also have other rights which vary from
              state to state.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">7. Indemnification</h2>
            <p className="text-ink-muted leading-relaxed font-semibold text-ink uppercase text-sm">
              You shall release, discharge, and relinquish, defend, indemnify and hold harmless {companyName} and its
              affiliates, subsidiaries, and vendors, and each of their members, shareholders, directors, employees, agents,
              representatives, vendors, and contractors of whatever tier (collectively, the Indemnitees) from and against all
              loss, claims, demands and causes of action of whatever kind or character, including without limitation costs,
              attorneys&apos; fees and expenses incurred in connection with any claim brought by any person(s) or entity(ies)
              arising from, in connection with, or relating to, your access and use of the Website, including your use of the
              Information obtained through the Website. The obligations to release, defend and to indemnify contained in
              this section shall apply even if caused, in whole or in part, by the joint, sole, gross or concurrent negligence,
              strict liability, contractual liabilities of third parties, or other fault, whether passive or active, of any
              person or entity, including but not limited to the Indemnitees, jointly or severally. You shall cooperate as
              fully as reasonably required in the defense of any such claim.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">8. Privacy policies</h2>
            <p className="text-ink-muted leading-relaxed">
              These Terms of Use include our Privacy Policy as contained on our website, which is incorporated fully herein.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">9. Unsolicited marketing</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">9.1. Unsolicited marketing –</span> {companyName} supports responsible
              e-commerce. {companyName} does not authorize anyone to use the Service to broadcast, distribute, transmit or
              retransmit unsolicited commercial, non-commercial, bulk, or junk electronic mail, including email
              (&ldquo;SPAM&rdquo;).
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">9.2. Electronic direct marketing programs –</span> {companyName} may
              develop and participate in electronic direct marketing to users of the Website who elect to receive electronic
              mail of specific interest to them. In keeping with this Agreement, {companyName} does not forward the names
              and addresses (electronic or otherwise) to third parties. Advertisers who participate in {companyName}&apos;s
              electronic direct marketing programs identify the category of users who would most likely be interested in their
              goods and services. {companyName} then forwards the advertisements to users who have elected to receive that
              category of electronic mail. Users may elect to not receive similar electronic mail by requesting that their
              e-mail address be removed from the mailing list by selecting the appropriate option included with each e-mail
              advertisement sent by {companyName}. In addition, users may elect to be removed from such lists at any time by{' '}
              {adminContact}.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">9.3. Reporting SPAM –</span> Users who receive SPAM or any threatening
              or offensive e-mail through the Services may report it to {companyName} by {spamReportContact}.
            </p>
            <p className="text-ink-muted leading-relaxed">
              <span className="font-semibold text-ink">9.4. Reservation of rights –</span> {companyName} reserves the right
              to take all legal or technical steps that it deems necessary to prevent the broadcast, distribution,
              transmission, or retransmission over the Service of SPAM, junk e-mail, threatening or offensive e-mail, or
              e-mail otherwise determined by {companyName}, in its sole discretion, to be objectionable. {companyName}{' '}
              reserves the right to suspend or terminate any person or entity&apos;s use of or access to the Service if it
              determines, in its sole and absolute discretion, that such person has used or intends to use the Service in
              violation of this policy. A failure of {companyName} to exercise any right provided for herein shall not be
              deemed to be a waiver of such right.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-10 mb-4">10. Miscellaneous</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">10.1. Governing law; limitations; venue –</span> The laws of the State
              of Texas, excluding any rule or principle that would refer to and apply the substantive law of another state or
              jurisdiction, shall govern this Agreement. To the extent allowed by applicable law, any claims or causes of
              action arising from or relating to your access and use of the Service as contemplated by this Agreement must be
              instituted within two (2) years from the date upon which such claim or cause arose. Further, any such claim or
              cause of action shall be brought EXCLUSIVELY in the state or federal courts located in Dallas County, Texas,
              and you agree to submit to the exclusive personal jurisdiction of such courts and hereby appoint the Secretary
              of State of Texas as your agent for service of process. You agree to waive any objection that the state or
              federal courts of Dallas County, Texas, are an inconvenient forum.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">10.2. Assignments –</span> You may not assign any of your rights,
              obligations, privileges, or performance hereunder without the prior written consent of {companyName}. Any
              assignment other than as provided for in this Section 10.2 shall be null and void.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">10.3. Severability –</span> If any provision of this Agreement is found
              to be unlawful or unenforceable in any respect, the court shall reform such provision so as to render it
              enforceable (or, if it is not possible to reform such provision so as to make it enforceable, then delete such
              provision); and, as so reformed or modified, fully enforce this Agreement.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">10.4 Connectivity charges –</span> You understand that your access to the
              Website and use of the Services may incur third party connectivity charges. You understand that you are
              responsible for any such charges that your use incurs, including from your cell phone or internet service
              provider, including fees related to text messaging and data fees.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">10.5. Termination –</span> {companyName} may terminate or suspend your
              use of the Website for any reason. Termination or cancellation of your use of the Website shall not affect any
              right or relief to which {companyName} may be entitled, at law or in equity. Upon termination of this Agreement,
              all rights granted to you will terminate and revert to {companyName}.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">10.6. Notice –</span> Official correspondence must be sent via postal
              mail to: {companyName}, 6500 Greenville Avenue, Suite 400, Dallas, TX 75206.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">10.7 Notice regarding electronic commercial service for California users –</span>{' '}
              Pursuant to California Civil Code Section 1789.3, California Site users are entitled to the following specific
              consumer rights notice: The Complaint Assistance Unit of the Division of consumer Services of the California
              Department of consumer Affairs may be contacted in writing at 1625 North Market Blvd., Sacramento, CA 95834, or
              by telephone at 916-445-1254 or 800-952-5210.
            </p>
            <p className="text-ink-muted leading-relaxed mb-4">
              <span className="font-semibold text-ink">10.8 Entire agreement –</span> This Agreement is complete and effective at
              the time you begin use of the Service. This Agreement constitutes the entire agreement between the parties, and
              no other agreement, written or oral, exists between you and {companyName}. In the event that any inconsistencies
              exist between this Agreement and any future published terms or understanding, the last published Agreement or
              terms of use shall control.
            </p>
            <p className="text-ink-muted leading-relaxed font-semibold text-ink uppercase text-sm">
              Any rights not expressly granted herein are reserved by {companyName}.
            </p>

            <p className="text-ink-muted leading-relaxed mt-8 text-center">© 2023 {companyName}. All rights reserved.</p>
          </div>
        </div>
      </article>
    </>
  )
}
