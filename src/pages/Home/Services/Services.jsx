import React from 'react';
import { FaBuilding, FaMapMarkedAlt, FaMoneyBillWave, FaShippingFast, FaUndoAlt, FaWarehouse } from 'react-icons/fa';

const Services = () => {
    const servicesData = [
    {
        title: "Express & Standard Delivery",
        description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        icon: <FaShippingFast size={32} />,
        highlight: false,
    },
    {
        title: "Nationwide Delivery",
        description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        icon: <FaMapMarkedAlt size={32} />,
        highlight: true,
    },
    {
        title: "Fulfillment Solution",
        description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        icon: <FaWarehouse size={32} />,
        highlight: false,
    },
    {
        title: "Cash on Home Delivery",
        description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        icon: <FaMoneyBillWave size={32} />,
        highlight: false,
    },
    {
        title: "Corporate Service / Contract In Logistics",
        description:
        "Customized corporate services which includes warehouse and inventory management support.",
        icon: <FaBuilding size={32} />,
        highlight: false,
    },
    {
        title: "Parcel Return",
        description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        icon: <FaUndoAlt size={32} />,
        highlight: false,
    },
    ];

    return (
        <section className="bg-[#073b4c] text-white py-14 px-4 rounded-[30px]">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-2">Our Services</h2>
            <p className="text-sm text-gray-200 max-w-xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((item, idx) => (
            <div
                key={idx}
                className={`rounded-xl p-6 text-center shadow-sm transition-all ${
                item.highlight
                    ? "bg-lime-200 text-gray-800"
                    : "bg-white text-[#073b4c]"
                }`}
            >
                <div className="flex justify-center mb-4"><span className='p-5 rounded-full bg-linear-to-b from-neutral-200 to-base-200 font-extrabold'>{item.icon}</span></div>
                <h3 className="bold text-2xl">{item.title}</h3>
                <p className="text-base mt-2">{item.description}</p>
            </div>
            ))}
        </div>
        </section>

    );
};

export default Services;