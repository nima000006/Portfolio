function CustomerPicture() {
  return (
    <div className="rounded-full w-[160px] h-[160px] overflow-hidden flex justify-center items-center bg-theme">
      <img
        src="/profile.jpg"
        alt=""
        className="rounded-full w-[150px] h-[150px] object-cover"
      />
    </div>
  );
}

export default CustomerPicture;
