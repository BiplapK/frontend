import React from 'react';

import BackgroundBanner from '../core/components/BackgroundBanner';

import ContactForm from './Components/ContactForm';
import GetInTouch from './Components/GetInTouch';

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <>
      <BackgroundBanner
        bannerTitle="Contact Us"
        contentColor="text-white-100"
        background={{
          background: 'url("/bg-03-free-img.jpg")',
          backgroundSize: 'cover',
          repeat: 'no-repeat',
        }}
      />
      <section className="container mx-auto py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="py-4">
            <h3 className="text-4xl font-bold pb-4 my-2">Get in touch</h3>
            <GetInTouch />
          </div>
          <div className="py-4">
            <h3 className="text-4xl font-bold pb-4 my-2">Contact Us</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
