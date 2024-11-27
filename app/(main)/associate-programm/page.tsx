import React from 'react';

const AssociateProgram = () => {
  return (
    <div className='mt-[200px] max-w-4xl min-w-full'>
      {/* Title */}
      <h1 className='text-primary text-3xl font-bold shadow-md shadow-destructive rounded-md'>
        Associate-program with Nordic Data Compliance Centre
      </h1>

      {/* Introduction */}
      <p className='mt-4 text-lg mb-10'>
        Joining our associate program means becoming part of a collaborative
        network dedicated to advancing data compliance services. We value
        specialists who bring expertise, passion, and a commitment to
        excellence. Here’s what a partnership with us entails:
      </p>

      {/* Benefits Section */}
      <h2 className='text-primary text-2xl font-semibold shadow-md shadow-destructive p-3 rounded-md mt-6'>
        Benefits of our Associate-program:
      </h2>
      <ul className='mt-4 space-y-4'>
        <li className='flex items-start gap-3'>
          <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
            •
          </span>
          <div>
            <strong>Flexibility:</strong> Work remotely or{' '}
            <strong>on-site</strong>, and decide how much you want to
            contribute. This setup provides you the freedom to balance work with
            other professional or personal commitments.
          </div>
        </li>
        <li className='flex items-start gap-3'>
          <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
            •
          </span>
          <div>
            <strong>Diverse Project Opportunities:</strong> Engage in a wide
            range of projects across various industries. Our{' '}
            <strong>associate-program</strong> allows consultants to focus on
            areas of expertise while gaining exposure to new challenges.
          </div>
        </li>
        <li className='flex items-start gap-3'>
          <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
            •
          </span>
          <div>
            <strong>Collaborative Community:</strong> As an associate, you’ll
            join a network of data protection specialists who support and learn
            from each other. We encourage sharing best practices and insights to
            foster professional growth and continuously improve our services.
          </div>
        </li>
        <li className='flex items-start gap-3 '>
          <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
            •
          </span>
          <div className='mb-10'>
            <strong>Business Development Support:</strong> We handle
            administrative tasks and client acquisition, allowing you to focus
            on delivering quality service. Additionally, we offer resources to
            support your growth and keep you <strong>up-to-date</strong> with
            industry standards.
          </div>
        </li>
      </ul>

      {/* Requirements Section */}
      <h2 className='text-primary text-2xl font-semibold shadow-md shadow-destructive p-3 rounded-md mt-6'>
        Requirements
      </h2>
      <p className='mt-4'>
        To ensure seamless collaboration, consultants should:
      </p>
      <ul className='mt-4 space-y-4'>
        <li className='flex items-start gap-3'>
          <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
            •
          </span>
          Be a registered freelancer or own a business with a VAT number.
        </li>
        <li className='flex items-start gap-3'>
          <span className='bg-transparent shadow-md text-destructive p-1 rounded-full'>
            •
          </span>
          Bring proven expertise in data compliance.
        </li>
        <li className='flex items-start gap-3 '>
          <span className='bg-transparent shadow-md text-destructive p-1 rounded-full mb-10'>
            •
          </span>
          Show commitment to staying current with regulations and compliance
          trends.
        </li>
      </ul>

      {/* Join Us Section */}
      <h2 className='text-primary text-2xl font-semibold shadow-md shadow-destructive p-3 rounded-md mt-6'>
        Join Us
      </h2>
      <p className='mt-4'>
        If you’re passionate about data compliance and looking for a flexible,
        growth-oriented associate-program, we would love to hear from you.
        Collaborating with Nordic Data Compliance Centre means growing your
        expertise while contributing to impactful projects. Reach out to us at{' '}
        <a
          href='mailto:hello@datacompliancecentre.com'
          className='text-destructive underline'
        >
          hello@datacompliancecentre.com
        </a>
        .
      </p>
    </div>
  );
};

export default AssociateProgram;
