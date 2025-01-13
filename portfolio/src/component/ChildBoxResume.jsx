/* eslint-disable react/prop-types */
function ChildBoxResume({ date, title, subTitle, description }) {
  return (
    <div className="flex flex-col  gap-3 sm:gap-3 p-4 mb-4 sm:mb-6 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 transition-all">
      <div className="bg-theme px-2 py-1 w-fit flex flex-nowrap text-green-100 text-sm rounded-md ">
        {date}
      </div>
      <p className="text-green-50 text-xl ">{title}</p>
      <p className="text-theme text-sm">{subTitle}</p>
      <p className="text-slate-500">{description}</p>
    </div>
  );
}

export default ChildBoxResume;
