import React from "react";
import Marquee from "react-fast-marquee";

const companies = [
  { name: "Casio", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Casio_logo.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Moonstar", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Moonstar_logo.svg" }, // Updated valid URL
  { name: "Star+", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Star%2B_logo.svg" },
  { name: "StartPeople", logo: "https://www.startpeople.nl/sites/default/files/2021-03/startpeople-logo.svg" },
  { name: "Randstad", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Randstad_Logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Systems_logo_and_wordmark.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
];

const CompanyMarquee = () => {
  return (
    <div className="py-6 mb-[100px]">
      <h2 className="text-center text-xl md:text-2xl font-bold text-secondary mb-10">
        We’ve helped thousands of sales teams
      </h2>
      <Marquee pauseOnHover={true} speed={50} direction="left" gradient={false}>
        <div className="flex gap-10 px-4">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CompanyMarquee;
