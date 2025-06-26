import React from 'react';
import { FaTruckLoading, FaMoneyCheckAlt, FaWarehouse, FaBuilding } from 'react-icons/fa';

const HowItWorks = () => {
  const howItWorksData = [
    {
      title: "Booking Pick & Drop",
      icon: <FaTruckLoading size={32} className="text-[#0f2c3f]" />,
      description: "Schedule a pickup and we’ll collect your parcel from your location — fast and reliable."
    },
    {
      title: "Cash On Delivery",
      icon: <FaMoneyCheckAlt size={32} className="text-[#0f2c3f]" />,
      description: "Deliver packages with payment collection at the destination — safe & secure."
    },
    {
      title: "Delivery Hub",
      icon: <FaWarehouse size={32} className="text-[#0f2c3f]" />,
      description: "Your parcels are sorted, managed, and dispatched efficiently from our central hubs."
    },
    {
      title: "Booking SME & Corporate",
      icon: <FaBuilding size={32} className="text-[#0f2c3f]" />,
      description: "Tailored parcel delivery solutions for startups, SMEs, and large businesses."
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-[1300px] mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-[#0f2c3f] mb-10">How it Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksData.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#0f2c3f]">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
