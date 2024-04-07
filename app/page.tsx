/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";
import { IoVideocam } from "react-icons/io5";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { IoPeople } from "react-icons/io5";

export default function Home() {
  const services = [
    {
      icon: <SiMaterialdesignicons />,
      name: "Graphics Design",
      desc: "We bring your creative vision to life with expertly crafted designs that captivate and inspire.",
    },
    {
      icon: <MdOutlinePhotoSizeSelectLarge />,
      name: "Photo Editing",
      desc: "Transforming photos into works of art with our expert editing techniques and top-of-the-line software.",
    },
    {
      icon: <IoVideocam />,
      name: "Video Editing",
      desc: "We turn your raw footage into polished, professional videos with our expert editing services.",
    },
    {
      icon: <MdOutlineBrandingWatermark />,
      name: "Branding",
      desc: "We amplify brands by crafting compelling stories and building authentic connections with their audiences.",
    },
    {
      icon: <IoPeople />,
      name: "Social Media Managment",
      desc: "We specialize in curating engaging content and fostering meaningful online connections for businesses of all sizes.",
    },
  ];
  const testimonials = [
    {
      desc: "your performance is so cool that engaged new followers to my account, thanks very much !",
      star: 5,
      name: "Yonas Mohammed",
      role: "Content Creator and SMMA Business Owner",
    },
    {
      desc: "thanks for this eye catchy design, it help us to develop our brand easily. !",
      star: 5,
      name: "AL BARKHA COFFEE",
      role: "Graphics Design ( branding)",
    },
    {
      desc: "the designs are so cool, artistic and brand exploring, nice! ",
      star: 5,
      name: "Desalegn burger",
      role: "Graphics Design",
    },
    {
      desc: " nicely done! ",
      star: 5,
      name: "Sarian beauty salon",
      role: "Graphics Design",
    },
    {
      desc: "this is a cool design for our company,  it represents our service perfectly.",
      star: 5,
      name: "Miawa Water",
      role: "Graphics design for social media posts and banners",
    },
    {
      desc: "best design  for our buisness!",
      star: 5,
      name: "MORMOR HARAR COFFEE",
      role: "Logo and Graphics Design",
    },
    {
      desc: "colorful, and cool bright branding",
      star: 5,
      name: "Bersheba Arosto",
      role: "Banner design.",
    },
    {
      desc: "BAZI have a strong team in branding, other roles that they provides,  as they did for us, thanks for BAZI DESIGNS.",
      star: 5,
      name: "Makeda Hotel and Resorts",
      role: "Social media post design.",
    },
    {
      desc: "BAZI'S team satisfied me with their works, as they are expert in branding, videos & photo editing and website designing, they fulfilled the criteria that our company needs in a single design! ",
      star: 5,
      name: "MAKIDA CHICKEN",
      role: "Social media post design.",
    },
  ];
  const starArrays = testimonials.map((testimonial) => {
    return Array.from({ length: testimonial.star }, (_, index) => index);
  });
  return (
    <main className="flex flex-col flex-1 gap-32 pt-16">
      <section className="wrapper flex items-center gap-16 md:gap-12 flex-col-reverse md:flex-row">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Best Video Editors and Graphics Designers
          </h1>
          <div className="bg-primary/80 h-2 w-32 my-2 rounded-md"></div>

          <p className="text-xl sm:text-2xl lg:text-3xl opacity-70">
            we help business grow by providing best graphics designs and videos
          </p>
          <div className="my-6 flex items-center gap-4 flex-col sm:flex-row">
            <Link href="/about">
              <Button
                size={"lg"}
                className="bg-primary rounded-full text-base font-semibold sm:py-6 sm:px-10"
              >
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant={"outline"}
                size={"lg"}
                className=" rounded-full text-base font-semibold sm:py-6 sm:px-10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src={"/hero.png"}
          alt="hero"
          width={792}
          height={857}
          className="w-[60%] md:w-[40%] drp shadow-primary"
        />
      </section>
      <p className="text-base sm:text-lg text-center opacity-70 max-w-xs sm:max-w-xl mx-auto">
        The trusted design partner for many small businesses, startups &
        marketing teams, and Fortune 500 brands
      </p>
      <section className="wrapper flex flex-col mb-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold opacity-90 mx-auto">Services</h2>
          <div className="bg-primary/80 h-2 w-20 rounded-md mx-auto mb-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((item, i) => (
              <div
                key={i}
                className="flex gap-8 items-center flex-col text-center sm:flex-row sm:text-start"
              >
                <span className="bg-gray-900/80 rounded-2xl p-6 text-7xl text-gray-100/85 shadow-lg">
                  {item.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{item.name}</span>
                  <span className="opacity-70 text-base">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrapper flex flex-col">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold opacity-90x mx-auto">
            Testmonials
          </h2>
          <div className="bg-primary/80 h-2 w-20 rounded-md mx-auto mb-12"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="bg-slate-200/90 rounded-2xl shadow-md p-8 sm:p-12 flex flex-col gap-4 sm:mx-6 md:mx-0"
              >
                <p className="py-3 flex-1 font-semibold text-base sm:text-lg">
                  "{item.desc}"
                </p>
                <div className="flex justify-between items-center flex-col gap-2 sm:flex-row sm:gap-0">
                  <div className="flex flex-col">
                    <span className="opacity-85">{item.name}</span>
                    <span className="text-sm opacity-70">{item.role}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-base text-yellow-500">
                    {starArrays[i].map((starIndex) => (
                      <FaStar key={starIndex} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex py-16 bg-primary">
        <div className="wrapper flex items-center gap-16 flex-col sm:flex-row">
          <Image
            src={"/contact.png"}
            alt="contact us"
            width={764}
            height={712}
            className="w-[72%] sm:w-[40%]"
          />
          <div className="flex sm:w-full flex-col gap-3 mx-auto justify-center items-start">
            <h2 className="text-4xl sm:text-5xl font-bold opacity-90">
              Contact Us
            </h2>
            <div className="bg-background h-2 w-20 rounded-md"></div>
            <p className="sm:text-xl opacity-70">
              What to Know More? Let us know
            </p>
            <Link href={"/contact"}>
              <Button
                size={"lg"}
                variant={"secondary"}
                className="text-gray-900 font-bold text-base my-2 p-8 px-20 shadow-lg rounded-xl"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
