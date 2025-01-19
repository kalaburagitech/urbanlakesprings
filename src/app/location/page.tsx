import { FC } from 'react';

const LocationSection: FC = () => {
  return (
    <section id="location" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Location</h2>
        <div className="w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7779.276401261862!2d77.565117!3d12.866629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b7ce9247083%3A0x485e446d2a63b3e!2sNCC%20Urban%20Lake%20Springs!5e0!3m2!1sen!2sus!4v1737010094808!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
