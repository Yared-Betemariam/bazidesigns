import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Footer = () => {
  const date = new Date();
  const links = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Works",
      path: "/works",
    },
  ];
  return (
    <footer className="bg-black text-gray-200">
      <section className="wrapper py-10 flex flex-col gap-6 text-base">
        <div className="flex md:items-start opacity-85 md:justify-between">
          <div className="flex items-start space-x-16 justify-between w-full md:justify-start">
            <div className="flex flex-col gap-2">
              <Logo />
              <p className="opacity-60 w-32 text-sm font-normal">
                Nifas Silk Lafto, Addis Ababa, Ethiopia
              </p>
            </div>
            <nav className="flex sm:items-center sm:space-x-6 space-y-2 text-base font-semibold my-8 flex-col sm:flex-row">
              {links.map((item, i) => [
                <Link key={i} href={item.path}>
                  {item.name}
                </Link>,
              ])}
            </nav>
          </div>
          <div className="flex-col items-end my-8 hidden md:flex">
            <span className="font-bold text-lg">Contact Us</span>
            <span className="opacity-70 ">bazitrades@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center justify-between opacity-65 flex-col md:flex-row">
          <span className="font-semibold">
            Copyright &copy; {date.getFullYear()}. All Rights Reserved.
          </span>
          <div className="flex items-center space-x-4">
            <Button variant={"link"} className="p-0 text-gray-50 text-base">
              Terms of Services
            </Button>
            <Button variant={"link"} className="p-0 text-gray-50 text-base">
              Privacy Policy
            </Button>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
