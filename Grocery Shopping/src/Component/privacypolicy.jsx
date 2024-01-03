import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1 style={{ color: '#336699', textAlign: 'center', marginBottom: '20px' }}>
        Privacy Policy
      </h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        <p>
          This Privacy Policy describes how Grocery Mania collects,
          uses, shares, and protects information obtained from users of our website or services.
          By using our website or services, you agree to the collection and use of information
          in accordance with this policy.
        </p>
        <h2 style={{ color: '#336699', marginBottom: '10px' }}>Information Collection</h2>
        <p>
          We may collect several different types of information for various purposes to provide
          and improve our services to you.
        </p>
        <h2 style={{ color: '#336699', marginBottom: '10px' }}>Log Data</h2>
        <p>
          We want to inform you that whenever you visit our website, we may collect information
          that your browser sends to us. This Log Data may include information such as your
          computer's Internet Protocol (“IP”) address, browser version, pages of our site that
          you visit, the time and date of your visit, the time spent on those pages, and other
          statistics.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
