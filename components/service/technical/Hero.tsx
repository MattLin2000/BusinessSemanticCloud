import React from 'react';

const Hero = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="text-white flex flex-col text-start justify-start items-start  max-w-3xl ">
        <h1 className="text-[56px] pb-10 font-bold ">核心技術</h1>
        <p className="hidden md:block text-[16px]">
          This is your Services Page. It's a great opportunity to provide information about the
          services you provide. Double click on the text box to start editing your content and make
          sure to add all the relevant details you want to share with site visitors. Whether you're
          offering multiple services,
          <br />
          courses or programs, you can edit this space to fit your website's needs. Simply double
          click on this section to open the content manager and modify the content. Explain what
          each item entails and add photos or videos for even more engagement.
        </p>
      </div>
    </div>
  );
};

export default Hero;
