import AnimateNextPage from "../component/AnimateNextPage";
import TestimonialSlider from "../component/CustomerSwiper";
import DynamicTitle from "../component/DynamicTitle";

function Testimonial() {
  return (
    <div className="relative bg-slate-900 min-h-screen h-full w-full px-10 pb-10">
      <DynamicTitle title={"Client Speak"} backText={"TESTIMONIAL"} />
      <TestimonialSlider />
      <AnimateNextPage href={"/contact"} />
    </div>
  );
}

export default Testimonial;
