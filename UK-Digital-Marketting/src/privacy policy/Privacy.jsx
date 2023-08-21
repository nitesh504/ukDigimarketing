import React from "react";
import Navigation from "../Components/Navigation/navigation";
import Footer from "../Components/footer/footer";
import "./privacy.css";

const Privacy = () => {
  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate);
  oneWeekAgo.setDate(currentDate.getDate() - 7);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = oneWeekAgo.toLocaleDateString(undefined, options);

  return (
    <div className="privacy">
      <Navigation />
      <div className="privacy-main">
        <strong>
          Privacy Policy Last Updated:   
          <span style={{ color: "red" }}>{formattedDate}</span>
        </strong>
        <br />
        <br />
        <div className="privecy-greeting">
          <img
            src="https://www.gstatic.com/identity/boq/policies/privacy/privacy_illustration.svg"
            alt=""
            srcset=""
          />
          <p>
            Welcome to DigimarkettingUK, your trusted partner for all your
            digital marketing and creative service requirements. Our foremost
            priority is to guarantee your privacy and the utmost security of
            your personal data. This Privacy Policy serves as a comprehensive
            guide, detailing the categories of information we gather, our
            practices in using and safeguarding this information, and your
            entitlements concerning your personal data. At DigimarkettingUK, we
            are dedicated to transparently outlining our procedures to ensure
            your peace of mind. We believe in providing you with a clear
            understanding of how your data is managed and used to enhance your
            experience with our services.
            <br />
            <br /> Your trust is of paramount importance to us, and we strive to
            maintain the highest standards of data protection and privacy in all
            our interactions. Should you have any inquiries or require
            clarification about our Privacy Policy, please don't hesitate to
            reach out to us. Thank you for choosing DigimarkettingUK; we look
            forward to serving you with excellence and upholding your privacy
            throughout our partnership.
          </p>
        </div>
        <br />
        <hr />
        <br />

        <h2>Information We Collect</h2>
        <ol>
          <li className="privacy-li">
            <strong>Personal Information:</strong>
            <br /> This includes your name, email address, contact number, and
            other details you provide when you fill out forms, subscribe to our
            newsletters, or request information.
          </li>
          <li className="privacy-li">
            <strong>Billing Information:</strong>
            <br /> If you make a purchase, we may collect payment-related
            information, including billing address and credit card details.
            However, we do not store your credit card information; it is
            securely processed by our payment gateway.
          </li>
          <li className="privacy-li">
            <strong>Usage Data:</strong>
            <br /> We may collect information about how you interact with our
            website, including pages visited, time spent, and your IP address.
            This helps us improve our website and services.
          </li>
        </ol>
        <br />
        <br />
        <h2>How We Use Your Information</h2>
        <ol>
          <li className="privacy-li">
            <strong>Providing and improving our services:</strong> We use your
            information to deliver the services you've requested and enhance
            your experience.
          </li>
          <li className="privacy-li">
            <strong>Communication:</strong> We may use your contact information
            to send you updates, newsletters, marketing materials, and respond
            to your inquiries.
          </li>
          <li className="privacy-li">
            <strong>Billing and Transactions:</strong> Your billing information
            is used to process payments and fulfill orders.
          </li>
          <li className="privacy-li">
            <strong>Analytics:</strong> We analyze usage patterns to improve our
            website's functionality and user experience.
          </li>
          <li className="privacy-li">
            <strong>Compliance:</strong> We may use your information to comply
            with legal obligations and enforce our terms and conditions.
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
