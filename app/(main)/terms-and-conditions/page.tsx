
import React from 'react';

const Section = ({ title, children }:{title:string, children:React.ReactNode}) => (
  <section className="p-6 md:p-12 lg:px-16 lg:py-14 bg-white dark:bg-gray-900 mb-8 rounded-lg shadow-md">
    {title && (
      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
        {title}
      </h2>
    )}
    <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 space-y-4">
      {children}
    </div>
  </section>
);

function TermsAndConditions() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
      <header className="p-6 md:p-12 lg:px-16 lg:py-14 bg-white dark:bg-gray-900 rounded-lg shadow-md mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          TERMS AND CONDITIONS OF USE AND SALE
        </h1>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
          Terms and conditions were last updated on{' '}
          <span className="text-accent font-medium">1st of July 2024</span>
        </p>
      </header>

      <Section title="TERMS AND CONDITIONS OF USE">
        <p>
          This website www.datacompliancecentre.com and the related services and content (hereinafter the
          “Site”) is provided to the users and/or customers (the “Users” or “User”) for the promotion and
          sale of the B2B services of Nordic Data Compliance Centre ApS (the Provider).
        </p>
        <p>
          The access, consultation, registration or any other use of the Site and of the related content and
          services and the purchase of services offered on the Site (the “Use” or “Using”) are activities
          governed by these terms and conditions (the “Terms and Conditions of Use”). Use of the Site assumes
          knowledge of these Terms and Conditions of Use and requires their full, unconditional acceptance.
        </p>
        <p>
          The User is therefore asked to read these Terms and Conditions of Use carefully, together with the
          privacy statement and the terms and conditions of sale, before using the Site.
        </p>
      </Section>

      <Section title="1. USE OF THE SITE">
        <p>1.1. Use of the Site is only permitted for business purposes.</p>
        <p>1.2. Use of the Site is only permitted to persons over the age of 18.</p>
        <p>1.3. When using the Site, the User agrees NOT to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>1.3.1. Disclose false data or information or make any improper use of such data.</li>
          <li>
          1.3.2. Upload content that may be obscene, offensive, fraudulent, or harmful (e.g., viruses, spam).
          </li>
          <li>
                        May be obscene, intimidating, offensive, damaging, violent, fraudulent, confidential, or illegal
                        in nature.
                    </li>
                    <li>
                        Constitutes spam, pyramid or chain communications or other forms of commercial promotional
                        communications or advertising.
                    </li>
                    <li>
                        Is technically hazardous or harmful such as computer viruses, malware, codes, and other
                        instruments that may damage the computer systems of the Provider or of a third party.
                    </li>
          <li>
          1.3.3. Interfere with, interrupt, or tamper with the Site and its normal functioning.
          </li>
          <li>
                    1.3.4. Infringes the rights of third parties, the Terms and Conditions of Use and the Terms and
                    Conditions of Sale of this site and/or any provision of current law.
                </li>
          <li>Violate third-party rights, laws, or these Terms and Conditions.</li>
        </ul>
        <p>
          1.4. The Provider may, at any time, interrupt, suspend and/or revoke the Use of the Site at any
                    time, at its own discretion, without the obligation to give a reason. The User hereby acknowledges
                    and accepts that the Provider shall not under any circumstances be held liable for any
                    interruptions, suspensions and/or revocations of Use of the Site.
        </p>
      </Section>

      <Section title="2. RIGHTS OF INTELLECTUAL AND INDUSTRIAL PROPERTY">
        <p>
          2.1. Any rights to the content present in or made available on the Site or related to the same,
                    including but not limited to: text, images, photographs, music, sounds, videos, drawings, logos,
                    graphics, layouts, source codes, software programs, designs, technical solutions and the structure
                    utilized for the Site, (hereinafter the “Content”) is owned by the Provider, and is protected by
                    national and international laws on intellectual and/or industrial property rights.
        </p>
        <p>2.2. The Content may not be modified, reproduced, published, transferred, circulated or otherwise
        used in any form or in any way without the express written consent of the Provider.</p>
        <p>
        2.3. In any case, it is agreed that the User&lsquo;s use of the Site shall not give the User any right
        whatsoever to any of the Content.
        </p>
        <p>
        2.4. Within the limits of the provisions of the applicable national and international laws on
                    intellectual and industrial property, the systematic extraction and/or utilization of the Content on
                    the Site is strictly prohibited, also by means of data mining, robots or other data mining or
                    acquisition systems.
        </p>
      </Section>
      <Section title="3. MARKS AND DOMAIN NAMES">
      <p>
                    3.1. The marks, domain names and all the other distinctive marks contained in and/or related to the
                    Site are the exclusive property of the Provider.
                </p>
                <p>
                    3.2. The use of distinctive marks in any form or in any way is strictly prohibited, without the
                    prior written consent of the Provider.
                </p>
                <p>
                    3.3. In any case, there is a strict prohibition on using the name of the Provider or of persons who
                    have direct and/or indirect commercial relations with the Provider or of their proprietary
                    distinctive marks such as domain names and marks by means of metadata (such as meta tags and keyword
                    tags) without the written consent of the Provider.
                </p>  

      </Section>

      <Section title="4. LINKS TO OTHER WEBSITES">
      <p>
                    4.1. The Site may contain hypertext links or links to other websites that may have no connection
                    whatsoever to this Site.
                </p>
                <p>
                    4.2. Such links have only been included by the Provider for the purposes of facilitating the Users&lsquo;
                    connection to other websites, that may benefit the User for information purposes, such as news, law
                    texts, caselaw etc. within the data compliance area.
                </p>
                <p>
                    4.3. The inclusion of a link does not imply any form of suggestion, sponsorship and/or
                    recommendation by the Provider for the Use of the linked websites, nor does it constitute any type
                    of guarantee as to the content, services or goods offered or sold by such sites.
                </p>
                <p>
                    4.4. The Provider does not check, in any way, the websites linked via these links nor the
                    information, materials or products contained on them and therefore the User hereby acknowledges and
                    accepts that the Provider may not be held liable for the actions, services, products, content or
                    policies on those websites, also in relation to their processing of personal data and their terms of
                    sale.
                </p>
                <p>
                    4.5. We therefore suggest that the User carefully reads the terms of use, conditions of sale,
                    privacy policies and any other legal information on websites other than the Site.
                </p>


        </Section>


        <Section title="5. LINKS TO THE SITE">
        <p>
                    5.1. Hypertext links may be activated to the Site with the written authorization of the Provider.
                    For this purpose, the Provider should be contacted at the following email address:
                    hello@datacompliancecentre.com. The Provider may, at any time, object to the activation of links to
                    the Site, also in view of the requester&lsquo;s previous use of unfair business practices or practices
                    that do not conform to industry standards, or any unfair competition or acts that may have damaged
                    the Provide&lsquo;s reputation.
                </p>
                <p>
                    5.2. Links such as deep links or deep frames may not be activated to the Site without the written
                    consent of the Provider.
                </p>
        </Section>

        <Section title="6. GUARANTEES AND RESPONSIBILITY FOR USE OF THE SITE">

        <p>
                    6.1. The Provider presents this Site “as is” without any form of express or implied guarantee for
                    the User.
                </p>
                <p>
                    6.2. The Provider does not give any guarantee as to the regular functioning of the Site or of any
                    sites related directly or indirectly to it. Within the limits permitted by law, the Provider shall
                    not be liable for any loss or damage resulting from Use of the Site or the sites of third parties
                    connected to it directly or indirectly, including but not limited to: damage to computer systems,
                    damage due to loss of data or business opportunities, damage due to the interruption of economic
                    activity or deriving from any error, delay, omission or inaccuracy on the Site.
                </p>
                <p>
                    6.3. The User hereby acknowledges and accepts that the Provider may not be considered to be in
                    breach of its obligations nor shall it be held liable for any loss or damage caused by the
                    non-functioning or malfunctioning of the hardware or software of the User or of any third party, of
                    telephone lines and/or data lines not managed directly by the Provider, or caused by actions of
                    other Users and/or third parties.
                </p>
                <p>
                    6.4. The User is the only party responsible for the Use of the Site. Within the limits permitted by
                    law, no liability whatsoever shall be attributed to the Provider for any use of the site by the User
                    that may conflict with the provisions of laws in force, with the legal information contained on the
                    Site and/or which may harm any rights of any third party. Within the limits permitted by the
                    applicable laws in force, the User shall indemnify the Provider in respect of any cost or damage,
                    including any legal costs that may be caused by its Use of the Site which violates the provisions of
                    laws in force, the legal information contained on the Site and/or which may harm the rights of a
                    third party.
                </p>
        </Section>

        <Section title="7. PRIVACY STATEMENT AND COOKIE POLICYE">
        <p>
                    7.1. With regard to the processing of the User&lsquo;s personal data and cookies on the Site, please read
                    the Privacy Statement in the footer of the website and Cookie Policy in the cookie banner.
                </p>
          </Section>

          <Section title="8. GOVERNING LAW AND RESOLUTION OF DISPUTES">

          <p>8.1. These Terms and Conditions of Use are governed by Danish law.</p>
                <p>
                    8.2. All disputes arising out of or in connection with the Terms and Conditions of Use which cannot
                    be solved amicably, shall be exclusively brought before the Danish courts.
                </p>
</Section>

<Section title="9. AMENDMENTS TO THE TERMS AND CONDITIONS OF USE">
<p>
                    9.1. The Provider may amend all or part of these Terms and Conditions of Use, also in consideration
                    of any changes in the law and/or changes to its own commercial policies. Any changes shall be
                    communicated to the Users on this page of the Site and shall be binding as soon as they are
                    published on the Site.
                </p>
                <p>
                    9.2. The User shall be bound by the Terms and Conditions of Use in force at the time on which they
                    Use the Site.
                </p>
  </Section>


      <Section title="10. CUSTOMER SERVICE">
      <p>
                    These terms and conditions of sale (“Terms and Conditions of Sale”) govern the offer and sale of the
                    services on this website www.datacompliancecentre.com (the “Site”).
                </p>
                <p>
                    The services on this Site (the “Services” or “Service”) are sold directly by Nordic Data Compliance
                    Centre ApS, VAT DK44251434, and purchased by B2B customers (the “Buyer”). The Buyer can be an
                    individual&lsquo;s own company or a company&lsquo;s representative, an employee, that has the mandate to bind
                    the company.
                </p>
                <p>
                    These Terms and Conditions of Sale must be read and accepted before a purchase order can be placed.
                    Failure to accept these Terms and Conditions of Sale will make it impossible to make purchases on
                    the Site.
                </p>
      </Section>


      <Section title='1. PREAMBLE'>
      <p>
                    1.1. The Terms and Conditions of Sale only govern the offer, placement and acceptance of orders to
                    buy Services on the Site, between the Provider and the Buyer.
                </p>
                <p>
                    1.2. On the Site, the Provider offers the Services for sale and provides e-commerce activities only
                    for its end B2B customers who are over the age of 18.
                </p>
                <p>
                    1.3. The Provider reserves the right not to fulfil any orders from individuals that are not B2B
                    related, consumers individuals under the age of 18, or any individual that has negative intentions
                    regarding the Site, the Provider in general or other purposes and values that are not aligned with
                    the ethical values of the Provider.
                </p>
                <p>
                    1.4. The Terms and Conditions of Sale do not govern the sale of Services by parties other than the
                    Provider, even if they are present on the Site through links, banners, or other forms of connection.
                    It is the Buyer&lsquo;s responsibility to check the conditions of sale before submitting an order or
                    buying goods and services from parties other than the Provider. The Provider shall not therefore be
                    held liable for the sale of any goods and/or the provision of any services by third parties and/or
                    for the formation of agreements between the Buyer and such third parties.
                </p>
        </Section>


        <Section title='2. PURCHASING SERVICES'>
        <p>
                    2.1. To buy one or more Services on the Site, the Buyer must select the Services the Buyer wishes to
                    purchase and add them to the cart. After all the chosen Services have been selected, the Buyer must
                    continue to the checkout on the Cart page, complete the online order form as instructed, and send it
                    to the Provider.
                </p>
                <p>
                    2.2. To proceed with the order, The Buyer must fill out the form, as a company and provide the
                    company&lsquo;s information such as VAT and the address. The individual purchasing the Service must
                    provide information such as name, own company email and telephone number. The individual must not
                    provide own private personal data such as home address, private email and telephone number. If the
                    order form is filled out with private personal data, the Provider will cancel the order and contact
                    the Buyer to proceed with a new order but with company information.
                </p>
                <p>
                    2.3. Before buying Services through submission of an order form, the Buyer must carefully read the
                    Terms and Conditions of Sale, which can also be printed, stored or copied for personal use. When
                    sending the order form, the Buyer must declare that they have understood and approved the contents
                    of the form, and that they have also accepted the Terms and Conditions of Use and Sale for the Site.
                    Otherwise, it will not be possible to complete the purchase order.
                </p>
                <p>
                    2.4. Before submitting the purchase order, the Buyer must check the details of the order and
                    identify or correct any data entry errors.
                </p>
                <p>
                    2.5. The submission of the order form by the Buyer implies an obligation to pay the price stated on
                    the order. If the Buyer purchased a Service that is either an annual subscription or an add-on to
                    the annual subscription, the Buyer&lsquo;s account will NOT be debited before the first online meeting as
                    stated below under Payment or at the description of the Service.
                </p>
                <p>
                    2.6. Once the order form has been accepted, the Provider shall send the Buyer, by email, a receipt
                    for the purchase order. This will contain a summary of the terms and conditions of sale, information
                    about the key characteristics of the Services and full details of the price (including all the
                    applicable taxes or duties), the means of payment, the terms applicable to the right of termination,
                    and depending on the Service, information about onboarding of the Buyer, as the first step of the
                    collaboration with the Provider.
                </p>
                <p>2.7. The Provider may refuse a purchase order if:</p>
                <ul>
                    <li>The order is incomplete or inaccurate.</li>
                    <li>There is an insufficient guarantee of payment.</li>
                    <li>The Services are unavailable.</li>
                    <li>
                        The Provider considers that there might be a conflict of interest by accepting the order and
                        entering a contract with the Buyer.
                    </li>
                </ul>
                <p>
                    In such cases the Provider shall immediately cancel the order and inform the Buyer. If the Buyer
                    purchased a Service that required the immediate payment, the Provider will refund the amount paid.
                </p>
                <p>
                    2.8. The order form will be stored in the Provider&lsquo;s database for the period of time necessary to
                    fulfil the order, in accordance with the legal requiremets.
                </p>

          </Section>


          <Section title="3. CHARACTERISTICS OF THE SERVICES, INCLUDING THE PROVIDER'S AND THE BUYER'S OBLIGATIONS">
          <p>
                    3.1. The Services offered for sale on the Site are original Services from the Provider, Services
                    that are customized to meet the specific needs of the Buyer&lsquo;s chosen plan.
                </p>
                <p>
                    3.2. The Buyer can choose between 3 different plans Start-up, Micro and SME. The Buyer is
                    responsible to choose the plan that fits the company&lsquo;s most accurate profile, whether that is a
                    Start-up, Micro or SME. If the Buyer needs a different plan than the ones offered on the Site, the
                    Provider will help customize a different plan for the Buyer, and a new set of terms of sale will
                    govern the collaboration.
                </p>
                <p>
                    3.3. For the Buyer to choose a Start-up plan, the Buyer&lsquo;s company, at the time of entering the
                    contract with the Provider, meaning purchase a Service, has: 0-5 employees, 0-10 data processors,
                    0-10 processing activities, 0-10 data subject requests and complaints, 0-10 data breach cases,
                    0-2,5m DKK revenue.
                </p>
                <p>
                    3.4. For the Buyer to choose a Micro plan, the Buyer&lsquo;s company, at the time of entering the contract
                    with the Provider, meaning purchase a Service, has: 0-20 employees, 0-25 data processors, 0-25
                    processing activities, 0-25 data subject requests and complaints, 0-25 data breach cases, 0-5m DKK
                    revenue.
                </p>
                <p>
                    3.5. For the Buyer to choose an SME plan, the Buyer&lsquo;s company, at the time of entering the contract
                    with the Provider, meaning purchase a Service, has: 0-50 employees, 0-40 data processors, 0-40
                    processing activities, 0-40 data subject requests and complaints, 0-40 data breach cases, 0-10m DKK
                    revenue.
                </p>
                <p>
                    3.6. Each Service is sold on the Site either as an annual subscription, an add-on to the annual
                    subscription and/or as a one-time purchase.
                </p>
                <p>
                    3.7. A 24/7 service means, that the Provider will contact the Buyer within 4 working hours or less
                    from the time of the received call or email, every day of the week.
                </p>
                <p>
                    3.8. The Buyer must sign a sworn statement after placing an order on the Site. The sworn statement
                    is signed at the onboarding meeting. Failure to sign such statement results that the Provider is
                    entitled to cancel the order.
                </p>
                <p>
                    3.9. The Buyer is responsible without undue delay, to inform the Provider and be transparent of all
                    aspects of the Buyer&lsquo;s data compliance situation in order for the Provider to perform its tasks.
                </p>
                <p>
                    3.10. The Buyer is responsible without undue delay to inform the Provider and be transparent of all
                    aspects of its business including but not limited to a necessary change of plans between Start-up,
                    Micro and SME, in order for the plan to be adjusted accordingly and the Buyer to receive the proper
                    set-up.
                </p>
                <p>
                    3.11. If the Buyer fails to provide the correct and transparent information, the Provider can
                    terminate the contract immediately, with no further notice.
                </p>
                <p>
                    3.12. By purchasing a Service, the Buyer binds the company to enter into a contract with the
                    Provider.
                </p>
                <p>
                    3.13. The Buyer understands and accepts that by entering into a contract with the Provider, the data
                    compliance responsibilities remain of the Buyer. The Provider is acting on the Buyer&lsquo;s behalf and
                    has the ethical responsibilities to cancel a contract with no further notice, if the Buyer does not
                    act according to the Provider&lsquo;s ethical values including and not limited to the Buyer not presenting
                    the transparent and truthful information about the company&lsquo;s compliance situation.
                </p>
                <p>
                    3.14. The Provider&lsquo;s free of charge services that are given with a Service that the Buyer purchased
                    on the Site, cannot be redeemed for cash or exchanged for other Services from the Site. It is up to
                    each Buyer if the free of charge Service is accepted and used as agreed with the Provider and cannot
                    be agreed to be used in another context. The current free of charge Services included in all annual
                    subscription plans are: Data Compliance Maturity Assessment, Online Onboarding, Support by email and
                    phone, Virtual Data Compliance Status every 3 months.
                </p>
                <p>
                    3.14.1. The Data Compliance Maturity Assessment is an assessment where the Provider helps the Buyer
                    to identify the high risk compliance areas that needs the Buyer&lsquo;s full attention.
                </p>
                <p>
                    3.14.2. The Online Onboarding is an onboarding session that that the Provider schedules with the
                    Buyer in order to establish the collaboration.
                </p>
                <p>
                    3.14.2.1. The Buyer ensures availability for the onboarding meeting that must take place no later
                    than 14 days after the order has been placed. If the Buyer is not available during the 14 days after
                    the order has been placed, the Provider can cancel the order with no further notice. Is the Buyer
                    still interested in the service after the Provider canceled the order, the Buyer must place a new
                    order.
                </p>
                <p>
                    3.14.3. The Support by email and phone is available 24/7 for the Buyer. This service means, that the
                    Provider will, as soon as possible after assessing the Buyer&lsquo;s needs, contact the Buyer within 4
                    working hours or less from the time of the received call or email, every day of the week.
                </p>
                <p>
                    3.14.4. The Virtual data compliance status to the Buyer means that every 3 months the Buyer is
                    provided with a status of the current situation. Ongoing assessment of current situation is done by
                    the Provider, and should a situation occur that requires the Buyer&lsquo;s attention, the Provider will
                    contact the Buyer as soon as possible.
                </p>
                <p>
                    3.15. The Provider ensures total confidentiality and no conflict of interest when entering into a
                    contract with the Buyer and provides an NDA at the first onboarding meeting with the Buyer.
                </p>
            </Section>
      
 <Section title='4. SERVICES'>
   <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 space-y-4">
     <h3 className="text-lg font-semibold">4.1. Annual subscription services</h3>
     <div>
       <h4 className="font-semibold">4.1.1. Annual subscription - Governance structure</h4>
       <p>
         <strong>a)</strong> The Provider manages on the Buyer’s behalf the governance structure in the
         company, including ongoing support to the employees that are responsible for data compliance.
       </p>
     </div>
     <div>
       <h4 className="font-semibold">
         4.1.2. Annual subscription - Personal data inventory and data transfer mechanisms
       </h4>
       <p>
         <strong>a)</strong> The Provider manages on the Buyer’s behalf the RoPA (record of processing
         activities, GDPR Art.30), including data transfer mechanism.
       </p>
       <p>
         <strong>b)</strong> The Provider monitors and implements on the Buyer’s behalf all the new compliance
         requirements and best practices that fit the Buyer’s company’s profile.
       </p>
     </div>
     <div>
       <h4 className="font-semibold">
         4.1.3. Annual subscription - Embed data compliance into current and new operations
       </h4>
       <p>
         <strong>a)</strong> The Provider manages on the Buyer’s behalf the necessary internal policies,
         processes, and procedures (e.g., employee privacy policy, before-during-after employment, CCTV, etc.).
       </p>
       <p>
                    <strong>b)</strong> The Provider manages on the Buyer&lsquo;s behalf the privacy and security by design
                    into new operations (e.g. ensure that new projects and processing activities follow data compliance
                    principles).
                </p>
       <p>
         <strong>c)</strong> The Provider conducts periodic testing and reports the effectiveness to the Buyer.
       </p>
       <p>
                    <strong>d)</strong> The Provider monitors and implements on the Buyer&lsquo;s behalf all the new
                    compliance requirements and best practices that fits the Buyer&lsquo;s company&lsquo;s profile.
                </p>
     </div>
     <div>
       <h4 className="font-semibold">
         4.1.4. Annual subscription - External policies and notices to individuals
       </h4>
       <p>
                    <strong>a)</strong> The Provider manages on the Buyer&lsquo;s behalf the necessary external policies and
                    notices to individuals consistent with data compliance regulations and operational risk tolerance,
                    including the direct marketing and electronic communications areas (e.g. website, newsletter, social
                    media campaigns etc.)
                </p>
       <p>
         <strong>b)</strong> The Provider conducts periodic testing and reports the effectiveness to the Buyer.
       </p>
       <p>
                    <strong>c)</strong> The Provider monitors and implements on the Buyer&lsquo;s behalf all the new
                    compliance requirements and best practices that fits the Buyer&lsquo;s company&lsquo;s profile.
                </p>
     </div>
     <div>
       <h4 className="font-semibold">4.1.5. Annual subscription - Basic information security</h4>
       <p>
                    <strong>a)</strong> Maintain a basic information security program based on legal requirements,
                    international standards and ongoing risk assessments and risk tolerance (e.g. security policy,
                    security measures, contingency plan etc.)
                </p>
       <p>
         <strong>b)</strong> The Provider conducts periodic testing and reports the effectiveness of the
         program to the Buyer.
       </p>
       <p>
                    <strong>c)</strong> The Provider monitors and implements on the Buyer&lsquo;s behalf all the new
                    compliance requirements and best practices that fits the Buyer&lsquo;s company&lsquo;s profile.
                </p>



     </div>
     <div>
       <h4 className="font-semibold">
         4.1.6. Annual subscription - Respond to requests and complaints from individuals
       </h4>
       <p>
         <strong>a)</strong> The Provider manages on the Buyer’s behalf individuals’ requests (e.g., deletion,
         access, etc.).
       </p>
       <p>
         <strong>b)</strong> The Provider manages on the Buyer’s behalf individuals’ complaints regarding data
         processing.
       </p>
       <p>
                    <strong>c)</strong> The Provider conducts periodic testing of the processes and procedures to
                    address requests and complaints from individuals, and reports to the Buyer the effectiveness of the
                    process.
                </p>
                <p>
                    <strong>d)</strong> The Provider monitors and implements on the Buyer&lsquo;s behalf all the new
                    compliance requirements and best practices that fits the Buyer&lsquo;s company&lsquo;s profile.
                </p>


     </div>
     <div>
       <h4 className="font-semibold">4.1.7. Annual subscription - Vendor management</h4>
       <p>
         <strong>a)</strong> The Provider manages on the Buyer’s behalf the record of all data processors,
         sub-processors, and joint controllers.
       </p>
       <p>
                    <strong>b)</strong> The Provider manages on the Buyer&lsquo;s behalf the data processors due diligence
                    before onboarding a new vendor, including assessment and security questionnaire.
                </p>

                <p>
                    <strong>c)</strong> The Provider manages on the Buyer&lsquo;s behalf the data processing agreements
                    drafting and negotiations.
                </p>
                <p>
                    <strong>d)</strong> The Provider manages on the Buyer&lsquo;s behalf the data processors audit.
                </p>
                <p>
                    <strong>e)</strong> The Provider conducts periodic testing of the vendor management process and
                    reports to the Buyer the effectiveness of the process.
                </p>

                <p>
                    <strong>f)</strong> The Provider monitors and implements on the Buyer&lsquo;s behalf all the new
                    compliance requirements and best practices that fits the Buyer&lsquo;s company&lsquo;s profile.
                </p> 




     </div>
     <div>
       <h4 className="font-semibold">4.1.8. Annual subscription - Personal data breach management</h4>
       <p>
         <strong>a)</strong> The Provider manages on the Buyer’s behalf personal data breach cases, including
         notifications to the Data Protection Agency and communication to individuals if necessary.
       </p>
       <p>
                    <strong>b)</strong> The Provider keeps the personal data breach record updated.
                </p>

       <p>
         <strong>c)</strong> The Provider conducts periodic testing of the data breach process and reports the
         effectiveness of the process.
       </p>

       <p>
                    <strong>d)</strong> The Provider monitors and implements on the Buyer&lsquo;s behalf all the new
                    compliance requirements and best practices that fits the Buyer&lsquo;s company&lsquo;s profile.
                </p>



     </div>
     <div>
       <h4 className="font-semibold">4.1.9. Annual subscription - Training and awareness program</h4>
       <p>
                    <strong>a)</strong> The Provider ensures necessary ongoing online training for the Buyer&lsquo;s employees
                    to promote data compliance and to mitigate operational risks. The subscription ensures 4 online
                    training sessions per year of one hour per training session, and only for the employees that process
                    personal data.
                </p>
     </div>
     <h3 className="text-lg font-semibold">4.2. Add-ons to annual subscription services</h3>
     <div>
       <h4 className="font-semibold">4.2.1. Annual subscription add-on - Point of contact</h4>
       <p>
         <strong>a)</strong> The Provider serves as the primary contact for the Buyer’s local Data Protection
         Agency.
       </p>
       <p>
                    <strong>b)</strong> The Provider assists the Buyer in a potential audit from the Buyer&lsquo;s local Data
                    Protection Agency.
                </p>

     </div>
     <div>
       <h4 className="font-semibold">
         4.2.2. Annual subscription add-on - Risk assessments for current and new operations
       </h4>
      <p>
                    <strong>a)</strong> The Provider conducts on the Buyer&lsquo;s behalf the necessary ongoing risk
                    assessments for current and new operations.
                </p>



     </div>
     <div>
       <h4 className="font-semibold">
         4.2.3. Annual subscription add-on - GDPR Light implementation
       </h4>
       <p>
                    <strong>a)</strong> The Provider offers a light GDPR implementation for the Buyer that already has
                    implemented some of the GDPR requirements, such as policies, processes, procedures, etc.
                </p>
                <p>
                    <strong>b)</strong> The price for this add-on is for only a 12-month period. In this period the
                    Provider will finalize the implementation and the Buyer will be GDPR operational.
                </p>
     </div>
     <div>
       <h4 className="font-semibold">
         4.2.4. Annual subscription add-on - GDPR Total implementation
       </h4>
       <p>
                    <strong>a)</strong> The Provider offers a total GDPR implementation for the Buyer that has not yet
                    implemented GDPR.
                </p>
                <p>
                    <strong>b)</strong> The price for this add-on is for only a 12-month period. In this period the
                    Provider will finalize the implementation and the Buyer will be GDPR operational.
                </p>


     </div>
     <h3 className="text-lg font-semibold">4.3. One-time purchase services</h3>
     <div>
       <h4 className="font-semibold">4.3.1. Extra hours</h4>
       <p>
                    <strong>a)</strong> This Service is a one-time purchase and is available for 10, 20 and 30 hours.
                </p>
                <p>
                    <strong>b)</strong> The extra hours can be used with any of the Services from the Site or as a
                    stand-alone Service.
                </p>
                <p>
                    <strong>c)</strong> The extra hours must be used within 6 months from purchasing date.
                </p>
                <p>
                    <strong>d)</strong> If the extra hours are not used within 6 months from purchasing date, the Buyer
                    is not able to ask for a refund. The Buyer has however the option to transfer the hours to a
                    subscription Service from the Site.
                </p>



     </div>
     <div>
       <h4 className="font-semibold">4.3.2. DPO training</h4>
       <p>
                    <strong>a)</strong> This Service is available as a one-time purchase.
                </p>
                <p>
                    <strong>b)</strong> All training sessions are online customized and interactive one-on-one.
                </p>
                <p>
                    <strong>c)</strong> All training sessions have a 3-step approach: 1,5-hour interview, 4-hour
                    training and 1,5-hour follow-up.
                </p>
                <p>
                    <strong>d)</strong> The Buyer ensures availability for the interview meeting that must take place no
                    later than 14 days after the order has been placed. If the Buyer is not available during the 14 days
                    after the order has been placed, the Provider can cancel the order with no further notice. Is the
                    Buyer still interested in the service after the Provider canceled the order, the Buyer must place a
                    new order.
                </p>
     </div>
 




 
   
    <h3 className="text-xl font-bold">4.3.3. Data compliance audit</h3>
    <div className="space-y-4">
        <p><strong className="font-semibold">a)</strong> This Service is available as a one-time purchase and it has a 3-step approach: onboarding, audit, and reporting.</p>
        <p><strong className="font-semibold">b)</strong> The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
        <p><strong className="font-semibold">c)</strong> The Buyer ensures availability of the management and/or the employees before, during, and after the audit, in order for the Provider to perform its tasks.</p>
        <p><strong className="font-semibold">d)</strong> The audit performed is based on the Provider’s own framework customized according to the Buyer’s company and sector.</p>
        <p><strong className="font-semibold">e)</strong> The audit process from onboarding to reporting takes place over a period of 3 months. Any specific needs to delay or extend the audit process must be agreed with the Provider, in writing. If there is no such agreement and the Provider is not able to perform its tasks due to various circumstances on the Buyer’s side, the Provider will end the audit based on the existing basis that has been given by the Buyer.</p>


        <p><strong className="font-semibold">f)</strong> If the Provider is not able to complete the audit including presenting a report to the Buyer due to the various circumstances on the Buyer’s side such as, but not limited to, the Buyer’s and/or the Buyer’s employees’ availability and/or not providing the proper documentation, the Provider ends the audit without a report, and the Buyer is not qualified for a refund.</p>
    </div>

    <h3 className="text-xl font-bold">4.3.4. Interim DPO or data compliance consultant</h3>
    <div className="space-y-4">
        <p><strong className="font-semibold">a)</strong> This service is available as a one-time purchase with a fixed price per hour. The Buyer may purchase as many hours as the Buyer and the Provider agree, until this service is terminated by one of the parties.</p>


        <p><strong className="font-semibold">b)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
    </div>

    <h3 className="text-xl font-bold">4.3.5. Support line for in-house compliance team or DPO</h3>
    <div className="space-y-4">
        <p><strong className="font-semibold">a)</strong> This service is available as a one-time purchase with a fixed price per hour. The Buyer may purchase as many hours as the Buyer and the Provider agree, until this service is terminated by one of the parties.</p>


        <p><strong className="font-semibold">b)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for an onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
    </div>

   

    <h3 className="text-xl font-bold">4.3.6. DPO as a Service</h3>
    <div className="space-y-4">
        <p><strong className="font-semibold">a)</strong> This Service is available as a one-time purchase.</p>
        <p><strong className="font-semibold">b)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>


        <p><strong className="font-semibold">c)</strong> The Provider will be able to perform the DPO tasks according to GDPR only if the Buyer shows total transparency and collaboration.</p>
        <p><strong className="font-semibold">d)</strong> If the Buyer does not comply with the GDPR requirements when appointing the Provider as DPO, the Provider can cancel the order immediately with no further notice, due to the Provider not being able to deliver a compliant solution for the Buyer.</p>
    </div>




    <h3 className="text-xl font-bold">4.3.7. Data processing agreement</h3>
    <div className="space-y-4">
        <p><strong className="font-semibold">a)</strong> This Service is available as a one-time purchase.</p>
        <p><strong className="font-semibold">b)</strong> The Provider drafts and negotiates the data processing agreement on the Buyer’s behalf.</p>
        <p><strong className="font-semibold">c)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
    </div>

    <h3 className="text-xl font-bold">4.3.8. Individuals’ rights and complaints process</h3>
    <div className="space-y-4">



        <p><strong className="font-semibold">a)</strong> This Service is available as a one-time purchase.</p>
        <p><strong className="font-semibold">b)</strong> The Provider creates and implements the process and procedures customized to the Buyer’s company and sector.</p>
        <p><strong className="font-semibold">c)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
        <p><strong className="font-semibold">d)</strong> The Provider will be able to perform this service only if the Buyer shows total transparency and collaboration.</p>
    </div>

    <h3 className="text-xl font-bold">4.3.9. Vendor management process</h3>
    <div className="space-y-4">




        <p><strong className="font-semibold">a)</strong> This Service is available as a one-time purchase.</p>
        <p><strong className="font-semibold">b)</strong> The Provider creates and implements the process and procedures customized to the Buyer’s company and sector.</p>
        <p><strong className="font-semibold">c)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
        <p><strong className="font-semibold">d)</strong> The Provider will be able to perform this service only if the Buyer shows total transparency and collaboration.</p>
    </div>

    <h3 className="text-xl font-bold">4.3.10. Basic information security program</h3>
    <div className="space-y-4">
        <p><strong className="font-semibold">a)</strong> This Service is available as a one-time purchase.</p>
        <p><strong className="font-semibold">b)</strong> The Provider creates and implements the process and procedures customized to the Buyer’s company and sector.</p>
        <p><strong className="font-semibold">c)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
        <p><strong className="font-semibold">d)</strong> The Provider will be able to perform this service only if the Buyer shows total transparency and collaboration.</p>
    </div>











    <h3 className="text-xl font-bold">4.3.11. RoPA - record of processing activities</h3>
    <div className="space-y-4">
        <p><strong className="font-semibold">a)</strong> This Service is available as a one-time purchase.</p>
        <p><strong className="font-semibold">b)</strong> The Provider creates and implements the process and procedures customized to the Buyer’s company and sector.</p>
        <p><strong className="font-semibold">c)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
        <p><strong className="font-semibold">d)</strong> The Provider will be able to perform this service only if the Buyer shows total transparency and collaboration.</p>
    </div>





    <h3 className="text-xl font-bold">4.3.12. Governance structure</h3>
    <div className="space-y-4">
        <p><strong className="font-semibold">a)</strong> This Service is available as a one-time purchase.</p>
        <p><strong className="font-semibold">b)</strong> The Provider creates and implements the process and procedures customized to the Buyer’s company and sector.</p>
        <p><strong className="font-semibold">c)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
        <p><strong className="font-semibold">d)</strong> The Provider will be able to perform this service only if the Buyer shows total transparency and collaboration.</p>
    </div>




    <h3 className="text-xl font-bold">4.3.13. Data breach process</h3>
    <div className="space-y-4">
        <p><strong className="font-semibold">a)</strong> This Service is available as a one-time purchase.</p>
        <p><strong className="font-semibold">b)</strong> The Provider creates and implements the process and procedures customized to the Buyer’s company and sector.</p>
        <p><strong className="font-semibold">c)</strong> To perform this service, the Provider must be onboarded by the Buyer. The Buyer ensures availability for the onboarding meeting that must take place no later than 14 days after the order has been placed. If the Buyer is not available during the 14 days after the order has been placed, the Provider can cancel the order with no further notice. If the Buyer is still interested in the service after the Provider canceled the order, the Buyer must place a new order.</p>
        <p><strong className="font-semibold">d)</strong> The Provider will be able to perform this service only if the Buyer shows total transparency and collaboration.</p>
    </div>
    </div>
    </Section>

  



<Section title='5. PRICES AND PAYMENTS'>

  <div className="space-y-4">
    <p>
      <span className="font-semibold">5.1.</span> The prices of the Services indicated on the Site are stated
      per month or in total, depending on the Service. The prices are stated in DKK plus VAT. The total
      amount will be indicated in the shopping cart at check out, therefore the Buyer must check the final
      price before submitting the order form.
    </p>
    <p>
      <span className="font-semibold">5.2.</span> After submitting the order form regarding a service that
      requires an onboarding meeting, the price will be reserved on the Buyer&apos;s account and will NOT be
      debited. Only after the Buyer and the Provider have had the onboarding meeting, the reserved amount
      will be debited from the Buyer&apos;s account and the billing period will start as stated in this
      article 5.5.1.
    </p>
    <p>
      <span className="font-semibold">5.3.</span> Should the Buyer switch between plans Start-up, Micro, or
      SME, the plan will start immediately after informing the Provider, and the price will be adjusted
      accordingly.
    </p>
    <p>
      <span className="font-semibold">5.4.</span> If the payment is made by credit card, the payment details
      (such as the debit/credit card number or date of expiry) will be sent using an encrypted protocol to
      the bank or payment services provider, without the possibility of any third party accessing such data.
      This information will never be used by the Provider except to complete the purchase process for which
      it was provided or to issue a refund if the Buyer is entitled to such, if the Provider exercises the
      right of cancellation and a refund to the Buyer is issued, or if use of the data is necessary in order
      to prevent fraud or report to the police any fraud on the Site.
    </p>
    <p>
      <span className="font-semibold">5.5.</span> The Services can be bought as an annual subscription and/or
      as a one-time purchase.
    </p>
    <p>
      <span className="font-semibold">5.5.1.</span> By annual subscription means that the subscription begins
      shortly after the onboarding meeting and will be debited from the Buyer&apos;s account until the
      Buyer&apos;s or Provider&apos;s cancellation.
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>
        The Buyer shall pay monthly in advance, payable on the 1st of each month. Where the payment date
        cannot be made on the 1st of a month, it shall be the nearest day after (i.e., if the payment date
        1st of the month is a Sunday, then the payment would be due on Monday the 2nd).
      </li>
      <li>There is no binding period for the subscription.</li>
      <li>The Buyer can cancel the subscription at any time with a 3-month notice.</li>
      <li>
        Cancellation notice must be received by the Provider in writing at
        <a
          href="mailto:hello@datacompliancecentre.com"
          className="text-blue-500 underline"
        >
          hello@datacompliancecentre.com
        </a>.
      </li>
      <li>
        If the payment is unsuccessful, the Buyer may have a grace period of 10 days to update the payment
        method. During the grace period, the subscription is placed on hold.
        <ul className="list-disc pl-5 space-y-2">
          <li>
            When the grace period ends and the payment issue is not solved, the Provider can give another
            grace period of 10 days or cancel the order immediately, with no further notice.
          </li>
          <li>
            When the grace period ends and the payment issue is solved, the Buyer&apos;s subscription is
            activated immediately.
          </li>
        </ul>
      </li>
    </ul>
    <p>
      <span className="font-semibold">5.5.2.</span> By one-time purchase means that the Buyer purchases a
      Service that is not a subscription, and the payment will be debited from the Buyer&apos;s account,
      shortly after the Provider has received the order. However, if the service requires an onboarding
      meeting, the amount will be reserved and debited from the Buyer&apos;s account after the meeting.
    </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>
        The one-time purchase has a time limit. If the service is purchased and paid, or reserved, but not
        used within 6 months from the purchase date, the Service expires, and the Buyer has no right for a
        refund.
      </li>
      <li>
        The Buyer can cancel the order no later than 72 hours from the time of purchase and if the amount has
        been debited from the Buyer&apos;s account, the amount will be returned to the Buyer.
      </li>
    </ul>
    <p>
      <span className="font-semibold">5.6.</span> If the Buyer receives a special discount by purchasing more
      than 3 services, the discount can be used only for a period of 3 months. After the 3 months, the
      Buyer&apos;s account will be debited the prices stated on the Site at the time of purchasing the
      services. The subscriptions will then continue with the prices stated on the Site.
    </p>
    <p>
      <span className="font-semibold">5.7.</span> The Provider has the right to adjust the prices for the
      Services provided to the Buyer once per year, due to market price changes. The Provider will inform
      the Buyer with a formal notice 3 months prior to any price changes, so the Buyer has the time to cancel
      the subscription, as stated in 5.5.1.
    </p>
  </div>
</Section>

<Section title="6. THE BUYER'S RIGHTS">

<p>
                    <strong>Exercising the right to cancel</strong>
                </p>
                <p>
                    6.1. The Buyer may cancel the contract with the Provider free of charge, without giving a reason,
                    within 72 hours after the Service was bought on the Site.
                </p>
                <p>
                    6.2. To exercise the right of cancellation, the Buyer must give notice of their decision sending an
                    email to hello@datacompliancecentre.com.
                </p>
                <p>6.3. The right of cancellation may not be exercised in cases where:</p>
                <ul>
                    <li>The Service has already been customized.</li>
                    <li>
                        The Provider and the Buyer have already booked the onboarding meeting, even though the Service
                        has not been purchased more than 72 hours.
                    </li>
                </ul>
                <p>
                    <strong>Terms and conditions of cancelled subscriptions</strong>
                </p>
                <p>
                    6.4. The cancelled Subscriptions either by the Provider or the Buyer will trigger the Buyer&lsquo;s right
                    to receive the documentation that the Provider has worked on during the subscription period. The
                    documentation will be delivered digitally and secured.
                </p>
</Section>

<Section title="7. LIABILITY">

<p>
                    7.1. The Provider is liable under the general rules of the Danish law. However, the Provider cannot
                    be held liable for the Buyer&lsquo;s indirect losses, including - but not limited to - loss of business,
                    loss of profits, loss of goodwill or any other incidental loss. The Provider&lsquo;s liability is at any
                    event limited to the value of the services provided.
                </p>
                <p>
                    7.2. The Buyer understands and accepts, that by outsourcing the task to the Provider or by
                    purchasing any Service from the Site or customized services, the Buyer remains the main and only
                    responsible for the data compliance in the Buyer&lsquo;s own company regardless if the Buyer is the owner
                    of the company or employee of the company, and cannot at any time be able to outsource the Buyer&lsquo;s
                    responsibility as a data controller, data processor or both.
                </p>
</Section>

<Section title="8. PRIVACY">

<p>
                    8.1. With regard to the processing of the personal data for any purpose, please read the Privacy
                    Statement in the footer of the website and Cookie Policy in the cookie banner.
                </p>
</Section>
<Section title="9. GOVERNING LAW AND RESOLUTION OF DISPUTES">
<p>
                    9.2. All disputes arising out of or in connection with the Terms and Conditions of Sale which cannot
                    be solved amicably, shall be exclusively brought before the Danish courts.
                </p>


</Section>

<Section title="10. AMENDMENTS TO TERMS AND CONDITIONS OF SALE">

<p>
                    10.1. These Terms and Conditions of Sale may be amended by the Provider at any time, to reflect
                    changes in the law. The new Terms and Conditions of Sale will be effective from the date of
                    publication on the Site. The Buyer is therefore asked to visit the Site regularly and to read the
                    latest version of the Terms and Conditions before making any purchase.
                </p>
                <p>
                    10.2. The Terms and Conditions of Sale applicable to each contract made by the Buyer on the Site or
                    offline, are those in force on the date on which the purchase order is sent.
                </p>
</Section>

<Section title="11. CUSTOMER SERVICE">

<p>
                    11.1. For assistance with the Services, or for more information, suggestions, complaints and/or any
                    other requests, the Customer may contact the Provider&lsquo;s customer service department at any time
                    using the following contact details:
                </p>
                <ul>
                    <li>by email: hello@datacompliancecentre.com.</li>
                </ul>
</Section>






</div>
  )
}

export default TermsAndConditions
