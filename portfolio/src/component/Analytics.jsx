function Analytics({ number, title }) {
  return (
    <div className="whitespace-nowrap text-center text-slate-500 flex flex-col justify-center items-center border-r border-dashed border-r-slate-500 last:border-none">
      <h2 className="text-3xl font-extrabold">{number}</h2>
      <p>{title}</p>
    </div>
  );
}

export default Analytics;
