import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Awlad Hossin',
    position: 'Senior Product Designer',
    text: 'Posture Pro helped me stay upright all day while working at my desk. Great support!',
  },
  {
    name: 'Nasir Uddin',
    position: 'CEO',
    text: 'My chronic back pain has reduced since I started using this posture corrector. Highly recommended!',
  },
  {
    name: 'Rasel Ahamed',
    position: 'CTO',
    text: 'Fantastic product! It aligned my shoulders within a week of use. Very comfortable as well.',
  },
  {
    name: 'Nusrat Jahan',
    position: 'UX Designer',
    text: 'I didn’t realize how bad my posture was until I tried Posture Pro. A must-have for remote workers.',
  },
  {
    name: 'Tariq Islam',
    position: 'Software Engineer',
    text: 'It’s sleek, lightweight, and incredibly effective. Can wear it under clothes without hassle.',
  },
  {
    name: 'Farzana Haque',
    position: 'Physiotherapist',
    text: 'As a healthcare professional, I trust this product for both myself and my patients. Love it!',
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 px-4 text-center relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        What our customers are saying
      </h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-10">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
                {({ isActive }) => (
                    <div
                    className={`p-6 rounded-lg mt-9 shadow-md text-left transition-transform duration-300 ease-in-out
                        ${isActive ? 'bg-white scale-105 -translate-y-6' : 'bg-gray-100 opacity-50 translate-y-0'}`}
                    style={{ height: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                    >
                    <div className="text-4xl text-cyan-600 mb-4">“</div>
                    <p className="text-gray-700 mb-6">{item.text}</p>
                    <hr className="mb-4" />
                    <h4 className="font-semibold text-cyan-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.position}</p>
                    </div>
                )}
            </SwiperSlide>

        ))}
      </Swiper>

      {/* Arrows & Pagination in a row */}
      <div className="mt-8 max-w-[200px] mx-auto flex items-center justify-center gap-4">
        <button className="custom-prev bg-white shadow hover:bg-gray-100 p-3 rounded-full">
          <FaArrowLeft className="text-xl text-cyan-700" />
        </button>

        <div className="custom-pagination flex gap-2" />

        <button className="custom-next bg-white shadow hover:bg-gray-100 p-3 rounded-full">
          <FaArrowRight className="text-xl text-cyan-700" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
