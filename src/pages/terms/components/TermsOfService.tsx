import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <section className="container mx-auto px-4 py-8" id="terms-of-services">
      <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Terms Of Services</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Collecting and Using Your Personal Data</h2>
      <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-3">Types of Data Collected</h3>
      <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Personal Data</h4>
      <p className="text-gray-700 mb-4">
        While using Our Service, we may ask you to provide us with certain personally identifiable information that can
        be used to contact or identify you. Personally identifiable information may include, but is not limited to:
      </p>
      <ul className="list-disc pl-8 mb-4 text-gray-700">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Usage Data</li>
      </ul>
      <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Usage Data</h4>
      <p className="text-gray-700 mb-4">Usage Data is collected automatically when using the Service.</p>
      <p className="text-gray-700 mb-4">
        Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser
        type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent
        on those pages, unique device identifiers and other diagnostic data.
      </p>
      <p className="text-gray-700 mb-4">
        When You access the Service by or through a mobile device, We may collect certain information automatically,
        including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address
        of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device
        identifiers and other diagnostic data.
      </p>
      <p className="text-gray-700 mb-4">
        We may also collect information that Your browser sends whenever You visit our Service or when You access the
        Service by or through a mobile device.
      </p>
      <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
        Information from Third-Party Social Media Services
      </h4>
      <p className="text-gray-700 mb-4">
        The Company allows You to create an account and log in to use the Service through the following Third-party
        Social Media Services:
      </p>
      <p className="text-gray-700 mb-6">
        The Company allows You to create an account and log in to use the Service through the following Third-party
        Social Media Services:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Google</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
      <p className="text-gray-700 mb-6">
        If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may
        collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as
        Your name, Your email address, Your activities or Your contact list associated with that account.
      </p>
      <p className="text-gray-700 mb-6">
        You may also have the option of sharing additional information with the Company through Your Third-Party Social
        Media Service's account. If You choose to provide such information and Personal Data, during registration or
        otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this
        Privacy Policy.
      </p>
      <h4 className="text-xl font-semibold text-gray-900 mb-4">Tracking Technologies and Cookies</h4>
      <p className="text-gray-700 mb-6">
        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
        information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to
        improve and analyze Our Service. The technologies We use may include:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct
          Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept
          Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting
          so that it will refuse Cookies, our Service may use Cookies.
        </li>
        <li>
          <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic
          files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the
          Company, for example, to count users who have visited those pages or opened an email and for other related
          website statistics (for example, recording the popularity of a certain section and verifying system and server
          integrity).
        </li>
      </ul>
      <p className="text-gray-700 mb-6">
        Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile
        device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can
        learn more about cookies on{' '}
        <Link
          to="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800">
          TermsFeed website
        </Link>{' '}
        article.
      </p>
      <p className="text-gray-700 mb-4">We use both Session and Persistent Cookies for the purposes set out below:</p>
      <ul>
        <li className="list-disc pl-8 space-y-3 mb-6">
          <p>
            <strong>Necessary / Essential Cookies</strong>
          </p>
          <p>Type: Session Cookies</p>
          <p>Administered by: Us</p>
          <p>
            Purpose: These Cookies are essential to provide You with services available through the Website and to
            enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user
            accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use
            these Cookies to provide You with those services.
          </p>
        </li>
        <li className="list-disc pl-8 space-y-3 mb-6">
          <p>
            <strong>Cookies Policy / Notice Acceptance Cookies</strong>
          </p>
          <p>Type: Persistent Cookies</p>
          <p>Administered by: Us</p>
          <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
        </li>
        <li className="list-disc pl-8 space-y-3 mb-6">
          <p>
            <strong>Functionality Cookies</strong>
          </p>
          <p>Type: Persistent Cookies</p>
          <p>Administered by: Us</p>
          <p>
            Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering
            your login details or language preference. The purpose of these Cookies is to provide You with a more
            personal experience and to avoid You having to re-enter your preferences every time You use the Website.
          </p>
        </li>
      </ul>
      <p className="text-gray-700 mb-6">
        For more information about the cookies we use and your choices regarding cookies, please visit our Cookies
        Policy or the Cookies section of our Privacy Policy.
      </p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Use of Your Personal Data</h3>
      <p className="text-gray-700 mb-4">The Company may use Personal Data for the following purposes:</p>
      <ul className="list-disc pl-8 space-y-3 mb-6">
        <li className="list-disc pl-2">
          <p>
            <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
          </p>
        </li>
        <li className="list-disc pl-2">
          <p>
            <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal
            Data You provide can give You access to different functionalities of the Service that are available to You
            as a registered user.
          </p>
        </li>
        <li className="list-disc pl-2">
          <p>
            <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the
            purchase contract for the products, items or services You have purchased or of any other contract with Us
            through the Service.
          </p>
        </li>
        <li className="list-disc pl-2">
          <p>
            <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of
            electronic communication, such as a mobile application's push notifications regarding updates or informative
            communications related to the functionalities, products or contracted services, including the security
            updates, when necessary or reasonable for their implementation.
          </p>
        </li>
        <li className="list-disc pl-2">
          <p>
            <strong>To provide You</strong> with news, special offers and general information about other goods,
            services and events which we offer that are similar to those that you have already purchased or enquired
            about unless You have opted not to receive such information.
          </p>
        </li>
        <li className="list-disc pl-2">
          <p>
            <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
          </p>
        </li>
        <li className="list-disc pl-2">
          <p>
            <strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger,
            divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our
            assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which
            Personal Data held by Us about our Service users is among the assets transferred.
          </p>
        </li>
        <li className="list-disc pl-2">
          <p>
            <strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis,
            identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and
            improve our Service, products, services, marketing and your experience.
          </p>
        </li>
      </ul>

      <p className="text-gray-700 mb-4">We may share Your personal information in the following situations:</p>
      <ul className="list-disc pl-8 space-y-3 mb-6">
        <li className="list-disc pl-2">
          <strong>With Service Providers:</strong> We may share Your personal information with Service Providers to
          monitor and analyze the use of our Service, to contact You.
        </li>
        <li className="list-disc pl-2">
          <strong>For business transfers:</strong> We may share or transfer Your personal information in connection
          with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a
          portion of Our business to another company.
        </li>
        <li className="list-disc pl-2">
          <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will
          require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other
          subsidiaries, joint venture partners or other companies that We control or that are under common control with
          Us.
        </li>
        <li className="list-disc pl-2">
          <strong>With business partners:</strong> We may share Your information with Our business partners to offer You
          certain products, services or promotions.
        </li>
        <li className="list-disc pl-2">
          <strong>With other users:</strong> when You share personal information or otherwise interact in the public
          areas with other users, such information may be viewed by all users and may be publicly distributed outside.
          If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the
          Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity.
          Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your
          profile.
        </li>
        <li className="list-disc pl-2">
          <strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your
          consent.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">Retention of Your Personal Data</h3>
      <p className="text-gray-700 mb-4">
        The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this
        Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal
        obligations (for example, if we are required to retain your data to comply with applicable laws), resolve
        disputes, and enforce our legal agreements and policies.
      </p>
      <p className="text-gray-700 mb-4">
        The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a
        shorter period of time, except when this data is used to strengthen the security or to improve the functionality
        of Our Service, or We are legally obligated to retain this data for longer time periods.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">Transfer of Your Personal Data</h3>
      <p className="text-gray-700 mb-4">
        Your information, including Personal Data, is processed at the Company's operating offices and in any other
        places where the parties involved in the processing are located. It means that this information may be
        transferred to — and maintained on — computers located outside of Your state, province, country or other
        governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
      </p>
      <p className="text-gray-700 mb-4">
        Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to
        that transfer.
      </p>
      <p className="text-gray-700 mb-4">
        The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in
        accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or
        a country unless there are adequate controls in place including the security of Your data and other personal
        information.
      </p>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Delete Your Personal Data</h3>
      <p className="text-gray-700 mb-4">
        You have the right to delete or request that We assist in deleting the Personal Data that We have collected
        about You.
      </p>
      <p className="text-gray-700 mb-4">
        Our Service may give You the ability to delete certain information about You from within the Service.
      </p>
      <p className="text-gray-700 mb-4">
        You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one,
        and visiting the account settings section that allows you to manage Your personal information. You may also
        contact Us to request access to, correct, or delete any personal information that You have provided to Us.
      </p>
      <p className="text-gray-700 mb-4">
        Please note, however, that We may need to retain certain information when we have a legal obligation or lawful
        basis to do so.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">Disclosure of Your Personal Data</h3>
      <h4 className="text-md font-semibold">Business Transactions</h4>
      <p className="text-gray-700 mb-4">
        If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We
        will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
      </p>
      <h4 className="text-md font-semibold">Law enforcement</h4>
      <p className="text-gray-700 mb-4">
        Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by
        law or in response to valid requests by public authorities (e.g. a court or a government agency).
      </p>
      <h4 className="text-md font-semibold">Other legal requirements</h4>
      <p className="text-gray-700 mb-4">
        The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
      </p>

      <ul className="list-disc pl-8 space-y-3 mb-6">
        <li className="list-disc pl-2">Comply with a legal obligation</li>
        <li className="list-disc pl-2">Protect and defend the rights or property of the Company</li>
        <li className="list-disc pl-2">Prevent or investigate possible wrongdoing in connection with the Service</li>
        <li className="list-disc pl-2">Protect the personal safety of Users of the Service or the public</li>
        <li className="list-disc pl-2">Protect against legal liability</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">Security of Your Personal Data</h3>
      <p className="text-gray-700 mb-4">
        The security of Your Personal Data is important to Us, but remember that no method of transmission over the
        Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means
        to protect Your Personal Data, We cannot guarantee its absolute security.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Children's Privacy</h2>
      <p className="text-gray-700 mb-4">
        Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
        information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child
        has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data
        from anyone under the age of 13 without verification of parental consent, We take steps to remove that
        information from Our servers.
      </p>
      <p className="text-gray-700 mb-4">
        If We need to rely on consent as a legal basis for processing Your information and Your country requires consent
        from a parent, We may require Your parent's consent before We collect and use that information.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Links to Other Websites</h2>
      <p className="text-gray-700 mb-4">
        Our Service may contain links to other websites that are not operated by Us. If You click on a third party link,
        You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every
        site You visit.
      </p>
      <p className="text-gray-700 mb-4">
        We have no control over and assume no responsibility for the content, privacy policies or practices of any third
        party sites or services.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Changes to this Privacy Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy
        Policy on this page.
      </p>
      <p className="text-gray-700 mb-4">
        We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective
        and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
      </p>
      <p className="text-gray-700 mb-4">
        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
        effective when they are posted on this page.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul>
        <li className="font-bold">By email: gusals121234@shinmini.com</li>
      </ul>
    </section>
  );
};

export default TermsOfService;
