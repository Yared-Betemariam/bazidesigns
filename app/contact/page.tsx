import { Metadata } from "next";
import Link from "next/link";
import { FaAddressCard, FaLocationArrow } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdMail, MdPhone } from "react-icons/md";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us for business purposes or if you have any questions.",
};

const ContactPage = () => {
  const phone = ["+251984740012", "+251912047359", "+251906746898"];
  return (
    <main className="flex relative flex-col flex-1 bg-[#EA8952]">
      <div className="pat1 bg-bottom absolute inset-0"></div>
      <section className="wrapper flex">
        <div className="bg-gray-800 p-16 w-full text-gray-200 rounded-xl shadow-xl my-20 flex gap-12 flex-col md:flex-row">
          <div className="flex flex-col md:w-[40%] gap-2 text-center justify-center sm:justify-start sm:text-start">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-base opacity-75">
              Know what you want? Great. Got questions? Even better.
            </p>
            <Link
              href="https://www.instagram.com/basiliel_won?igsh=NTc4MTIwNjQ2YQ=="
              target="_black"
              className="mt-4 opacity-80 hover:opacity-100 transition-all flex items-center space-x-4 mx-auto sm:mr-auto sm:ml-0"
            >
              <FaInstagram size={44} />
              <span className="text-xl font-normal">Instagram</span>
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6 flex-col xs:flex-row text-center  xs:text-start">
              <MdMail className="text-7xl p-6 rounded-full bg-gray-200/5 text-gray-200/90" />
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">Email</span>
                <span className="text-sm opacity-75">
                  bazitrades@gmail.com
                </span>{" "}
              </div>
            </div>
            <div className="flex items-center gap-6 flex-col xs:flex-row text-center  xs:text-start">
              <MdPhone className="text-7xl p-6 rounded-full bg-gray-200/5 text-gray-200/90" />
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">Phone Numbers</span>
                <ul className="text-sm opacity-75 flex justify-between lg:items-center lg:space-x-5 flex-col lg:flex-row">
                  {phone.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-6 flex-col xs:flex-row text-center  xs:text-start">
              <FaLocationArrow className="text-7xl p-6 rounded-full bg-gray-200/5 text-gray-200/90" />
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">Address</span>
                <span className="text-sm opacity-75">
                  Nifas Silk Lafto, Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ContactPage;
