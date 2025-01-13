import AnimateNextPage from "../component/AnimateNextPage";
import DynamicTitle from "../component/DynamicTitle"
import Gallery from "../component/FilterableGallery"

function Portfolio() {
    return (
      <div className="relative bg-slate-900 min-h-screen w-full ">
        <DynamicTitle title={"My Work"} backText={"PORTFOLIO"} />
        <div className="mt-10 z-20 relative">
          <Gallery />
          <AnimateNextPage href={"/testimonial"} />
        </div>
      </div>
    );
}

export default Portfolio
