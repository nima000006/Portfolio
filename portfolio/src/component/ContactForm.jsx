import { useForm } from "react-hook-form";
import FooterSideBar from "./FooterSideBar";
import {  FaMailBulk, FaMobile } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-gray-900 text-white py-10 px-2 lg:px-6">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-6  z-20">
        {/* Address Section */}
        <div className="col-span-2 z-20">
          <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
          <p> Iran, Tehran, Ekbatan Complex, Block B4, Entrance 13, No. 418</p>
          <p className="mt-4">
            <a href="tel:00989194273578">
              <span className="inline-block text-theme">
                <FaMobile />
              </span>{" "}
              (+98)9194273578
            </a>
          </p>
          <p className="mt-4">
            <a href="mailto:nimachehreh690@gmail.com ">
              <span className="inline-block text-theme">
                <FaMailBulk />
              </span>{" "}
              nimachehreh690@gmail.com
            </a>
          </p>
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">FOLLOW ME</h4>

            <FooterSideBar start={true} />
          </div>
        </div>

        {/* Form Section */}
        <div className="col-span-4 z-20">
          <h3 className="text-lg font-semibold mb-4">SEND US A NOTE</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            {/* Name Field */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
                className={`w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <textarea
                placeholder="Tell us more about your needs......."
                {...register("message", { required: "Message is required" })}
                className={`w-full h-32 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none ${
                  errors.message ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="p-2 bg-theme text-white py-2 rounded-lg hover:bg-theme transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
