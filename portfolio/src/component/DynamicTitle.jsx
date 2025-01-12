/* eslint-disable react/prop-types */
function DynamicTitle({backText, title}) {
    return (
      <>
        <div className="absolute inset-0 flex justify-center items-start mt-16 text-slate-400 text-8xl font-extrabold opacity-10 select-none">
          {backText}
        </div>
        <p className="relative pt-20 font-bold text-3xl text-slate-100 text-center after:absolute after:top-full after:mt-6 after:h-1 after:w-16 after:rounded-full after:left-[50%] after:bg-theme after:translate-x-[-50%]">
          {title}
        </p>
      </>
    );
}

export default DynamicTitle
