import AnimateNextPage from "../component/AnimateNextPage";
import ContactForm from "../component/ContactForm";
import DynamicTitle from "../component/DynamicTitle";

function Contact() {
  return (
    <div className="relative bg-slate-900 min-h-screen h-full w-full ">
      <DynamicTitle title={"Get in Touch"} backText={"CONTACT"} />
      <div className="mt-10 z-20 relative">
        <ContactForm />
        <AnimateNextPage href={"/"} />
      </div>
    </div>
  );
}

export default Contact;
