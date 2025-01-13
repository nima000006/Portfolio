import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Dennis Jacques",
    title: "User from USA",
    image: "/customer1.jpg",
    review:
      "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. Priced simply dummy text of the printing and typesetting industry.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jay Shah",
    title: "Founder at Icomatic Pvt Ltd",
    image: "/customer2.jpg",
    review:
      "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jay Shah",
    title: "Founder at Icomatic Pvt Ltd",
    image: "/customer3.jpg",
    review:
      "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jay Shah",
    title: "Founder at Icomatic Pvt Ltd",
    image: "customer4.jpg",
    review:
      "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
    rating: 5,
  },
];

function TestimonialSlider() {
  return (
    <div className="bg-gray-900 py-12 px-6 mt-20 z-20 relative">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index,className) =>
            `<span class="${className} custom-dot"></span>`, // Custom pagination dots
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
              }}
              className="overflow-visible"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-600"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.review}</p>
              <div className="flex">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.014 9.397c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
