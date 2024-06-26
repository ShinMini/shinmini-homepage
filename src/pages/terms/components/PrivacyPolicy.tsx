import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <section className="container mx-auto" id="privacy-policy">
      <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Privacy Policy</h1>
      <p className="text-base text-gray-600">Last updated: May 01, 2024</p>
      <p className="mt-4 mb-2 text-gray-800">
        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your
        information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      <p className="mt-2 mb-2 text-gray-800">
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
        and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the
        help of the
        <a
          href="https://www.termsfeed.com/privacy-policy-generator/"
          target="_blank"
          className="text-blue-600 hover:text-blue-800"
          rel="noreferrer">
          Privacy Policy Generator
        </a>
        .
      </p>
      <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">Interpretation and Definitions</h2>
      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Interpretation</h3>
      <p className="mt-1 mb-2 text-gray-800">
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The
        following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>
      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Definitions</h3>
      <ul className="list-disc pl-5 mt-1 mb-4 text-gray-800">
        <li>
          <p>
            <strong>Account</strong> means a unique account created for You to access our Service or parts of our
            Service.
          </p>
        </li>
        <li>
          <p>
            <strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with
            a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities
            entitled to vote for election of directors or other managing authority.
          </p>
        </li>
        <li>
          <p>
            <strong>Application</strong> refers to shinmini, the software program provided by the Company.
          </p>
        </li>
        <li>
          <p>
            <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
            &quot;Our&quot; in this Agreement) refers to shinmini-homepage.
          </p>
        </li>
        <li>
          <p>
            <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device
            by a website, containing the details of Your browsing history on that website among its many uses.
          </p>
        </li>
        <li>
          <p>
            <strong>Country</strong> refers to: South Korea
          </p>
        </li>
        <li>
          <p>
            <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a
            digital tablet.
          </p>
        </li>
        <li>
          <p>
            <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
          </p>
        </li>
        <li>
          <p>
            <strong>Service</strong> refers to the Application or the Website or both.
          </p>
        </li>
        <li>
          <p>
            <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the
            Company. It refers to third-party companies or individuals employed by the Company to facilitate the
            Service, to provide the Service on behalf of the Company, to perform services related to the Service or to
            assist the Company in analyzing how the Service is used.
          </p>
        </li>
        <li>
          <p>
            <strong>Third-party Social Media Service</strong> refers to any website or any social network website
            through which a User can log in or create an account to use the Service.
          </p>
        </li>
        <li>
          <p>
            <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the
            Service or from the Service infrastructure itself (for example, the duration of a page visit).
          </p>
        </li>
        <li>
          <p>
            <strong>Website</strong> refers to shinmini-homepage, accessible from{' '}
            <Link to="https://www.shinmini.com" rel="external nofollow noopener noreferrer" target="_blank">
              https://www.shinmini.com
            </Link>
          </p>
        </li>
        <li>
          <p>
            <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal
            entity on behalf of which such individual is accessing or using the Service, as applicable.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default PrivacyPolicy;
