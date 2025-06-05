import React, { useEffect, useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/firebase";

const TestimonialCard = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const shortText = testimonial.content
    ? testimonial.content.slice(0, 100) + "..."
    : "";

  useEffect(() => {
    const fetchImageUrl = async () => {
      if (testimonial.imagePath) {
        try {
          const imageRef = ref(storage, testimonial.imagePath);
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        } catch (error) {
          console.error("Error fetching image URL:", error);
        }
      }
    };
    fetchImageUrl();
  }, [testimonial.imagePath]);

  return (
    <div className="bg-gray-50 rounded-lg shadow p-6 max-w-md mx-auto h-full flex flex-col justify-between">
      <div className="flex items-center gap-3 mb-2">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div className="text-left">
          <p className="font-semibold text-gray-800">{testimonial.name}</p>
          <p className="text-sm text-gray-500">
            {testimonial.date || new Date().toISOString().split("T")[0]}
          </p>
        </div>
      </div>

      <div className="flex items-center text-yellow-500 mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} />
        ))}
        <FaCheckCircle className="text-blue-500 ml-2" />
      </div>

      <p className="text-sm text-gray-700">
        {testimonial.content && (expanded ? testimonial.content : shortText)}
      </p>

      {testimonial.content?.length > 100 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 mt-2 text-sm hover:underline self-start"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      {testimonial.videoPath && (
        <video controls className="mt-4 w-full rounded-md">
          <source src={testimonial.videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const snapshot = await getDocs(collection(db, "testimonials"));
        const fetched = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            name: data.name || "Anonymous",
            content: data.content || "",
            imagePath: data.imagePath || "",
            videoPath: data.videoPath || "",
            date: data.date || new Date().toISOString().split("T")[0],
          };
        });

        // Optional: sort by date
        fetched.sort((a, b) => new Date(b.date) - new Date(a.date));

        setTestimonials(fetched);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="bg-white py-16 px-4 text-center">
      <span className="flex flex-col md:flex-row items-center gap-4 w-full mb-7">
        <hr className="flex-grow border-t border-gray-300" />
        <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-center px-4">
          WHAT OUR CUSTOMERS ARE SAYING
        </h1>
        <hr className="flex-grow border-t border-gray-300" />
      </span>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full">
          <MdChevronLeft className="text-2xl" />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full">
          <MdChevronRight className="text-2xl" />
        </div>
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;




































// import React, { useContext, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { FaStar, FaCheckCircle } from "react-icons/fa";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const TestimonialCard = ({ testimonial }) => {
//   const [expanded, setExpanded] = useState(false);
//   const shortText = testimonial.content.slice(0, 100) + "...";

//   return (
//     <div className="bg-gray-50 rounded-lg shadow p-6 max-w-md mx-auto h-full flex flex-col justify-between">
//       <div className="flex items-center gap-3 mb-2">
//         {testimonial.image ? (
//           <img
//             src={testimonial.image}
//             alt={testimonial.name}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//         ) : (
//           <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
//             {testimonial.name.charAt(0)}
//           </div>
//         )}
//         <div className="text-left">
//           <p className="font-semibold text-gray-800">{testimonial.name}</p>
//           <p className="text-sm text-gray-500">{testimonial.date}</p>
//         </div>
//       </div>
//       <div className="flex items-center text-yellow-500 mb-2">
//         {Array.from({ length: 5 }, (_, i) => (
//           <FaStar key={i} />
//         ))}
//         <FaCheckCircle className="text-blue-500 ml-2" />
//       </div>
//       <p className="text-sm text-gray-700">
//         {expanded ? testimonial.content : shortText}
//       </p>
//       {testimonial.content.length > 100 && (
//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="text-blue-600 mt-2 text-sm hover:underline self-start"
//         >
//           {expanded ? "Read less" : "Read more"}
//         </button>
//       )}
//     </div>
//   );
// };

// const TestimonialsSection = () => {
//   const { testimonials } = useContext(AppContext);

//   return (
//     <section className="bg-white py-16 px-4 text-center">
//       <span className="flex flex-col md:flex-row items-center gap-4 w-full mb-7">
//         <hr className="flex-grow border-t border-gray-300" />
//         <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-center px-4">
//           WHAT OUR CUSTOMERS ARE SAYING
//         </h1>
//         <hr className="flex-grow border-t border-gray-300" />
//       </span>

//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           prevEl: ".swiper-button-prev",
//           nextEl: ".swiper-button-next",
//         }}
//         spaceBetween={20}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="relative"
//       >
//         {testimonials.map((testimonial, idx) => (
//           <SwiperSlide key={idx}>
//             <TestimonialCard testimonial={testimonial} />
//           </SwiperSlide>
//         ))}
//         <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full">
//           <MdChevronLeft className="text-2xl" />
//         </div>
//         <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full">
//           <MdChevronRight className="text-2xl" />
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default TestimonialsSection;



























// import React, { useState } from "react";
// import { FaStar, FaCheckCircle } from "react-icons/fa";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import 'swiper/css/pagination';


// const testimonials = [
//   {
//     name: "Awaye Oluwayobi",
//     date: "2025-04-02",
//     content:
//       "On behalf of hospital management ASO are amazing with 100% satisfactory to the morgue disinfestation,deratization and fumigation Service done.",
//     image: "/assets/pct1.jpg",
//   },
//   {
//     name: "Mrs Taiwo Alapoti",
//     date: "2025-04-01",
//     content:
//       "ASO team are competent Fumigation Service Provider and satisfactory well-done job",
//     image: "/assets/pct2.jpg",
//   },
//   {
//     name: "ICPC chairman General Hospital Ijaya",
//     date: "2025-04-01",
//     content:
//       "Satisfactory and well-done to effective fumigation Service Provided by us within hospital premises.",
//     image: "/assets/ptc3.jpg",
//   },
// ];

// const TestimonialCard = ({ testimonial }) => {
//   const [expanded, setExpanded] = useState(false);
//   const shortText = testimonial.content.slice(0, 100) + "...";

//   return (
//     <div className="bg-gray-50 rounded-lg shadow p-6 max-w-md mx-auto h-full flex flex-col justify-between">
//       <div className="flex items-center gap-3 mb-2">
//         {testimonial.image ? (
//           <img
//             src={testimonial.image}
//             alt={testimonial.name}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//         ) : (
//           <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
//             {testimonial.name.charAt(0)}
//           </div>
//         )}
//         <div className="text-left">
//           <p className="font-semibold text-gray-800">{testimonial.name}</p>
//           <p className="text-sm text-gray-500">{testimonial.date}</p>
//         </div>
        
//       </div>
//       <div className="flex items-center text-yellow-500 mb-2">
//         {Array.from({ length: 5 }, (_, i) => (
//           <FaStar key={i} />
//         ))}
//         <FaCheckCircle className="text-blue-500 ml-2" />
//       </div>
//       <p className="text-sm text-gray-700">
//         {expanded ? testimonial.content : shortText}
//       </p>
//       {testimonial.content.length > 100 && (
//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="text-blue-600 mt-2 text-sm hover:underline self-start"
//         >
//           {expanded ? "Read less" : "Read more"}
//         </button>
//       )}
//     </div>
//   );
// };

// const TestimonialsSection = () => {
//   return (
//     <section className="bg-white py-16 px-4 text-center">
//       <span className="flex flex-col md:flex-row items-center gap-4 w-full mb-7">
//             <hr className="flex-grow border-t border-gray-300" />
//             <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-center px-4">
//                 WHAT OUR CUSTOMERS ARE SAYING
//             </h1>
//             <hr className="flex-grow border-t border-gray-300" />
//         </span>
//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           prevEl: ".swiper-button-prev",
//           nextEl: ".swiper-button-next",
//         }}
//         spaceBetween={20}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="relative"
//       >
//         {testimonials.map((testimonial, idx) => (
//           <SwiperSlide key={idx}>
//             <TestimonialCard testimonial={testimonial} />
//           </SwiperSlide>
//         ))}
//         <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full">
//           <MdChevronLeft className="text-2xl" />
//         </div>
//         <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full">
//           <MdChevronRight className="text-2xl" />
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default TestimonialsSection;
