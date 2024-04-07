import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="flex flex-col flex-1">
      <section className="wrapper py-14 flex flex-col gap-12">
        <div className="flex flex-col mx-auto gap-6 items-center justify-center">
          <h1 className="text-5xl font-bold text-center">About Bazi Designs</h1>
          <div className="bg-primary h-2 w-20 rounded-md"></div>
          <p className="opacity-70 max-w-md text-center">
            Our mission is to make graphic design and video editing fast,
            simple, and affordable. The way it should be.
          </p>
        </div>
        <article className="flex gap-6 md:gap-10 lg:gap-16 justify-between flex-col md:flex-row">
          <div className="flex flex-col my-4 w-[60%] sm:w-[40%]  md:w-[65%] bg-gray-900/10 mb-auto shadow-md mx-auto max-w-[65%]">
            <Image
              src={"/owner.jpg"}
              alt="Owner's Photo"
              width={234}
              height={286}
              className="w-full mb-auto border-4 border-orange-600/20 shadow"
            />
            <div className="flex flex-col p-6 py-4">
              <span className="text-base font-bold">Basiliel Wondimu</span>
              <span className="text-sm opacity-70">
                Founder and CEO of Bazi Designes
              </span>
            </div>
          </div>
          <section className="flex flex-col gap-2 text-base opacity-90">
            <p>
              Welcome to our video editing, freelancing, graphics designing, and
              overall branding company! We are a team of talented and creative
              professionals who are passionate about bringing your vision to
              life.{" "}
            </p>
            <p>
              With our expertise in video editing, we can help you create
              captivating and visually stunning content for your business or
              personal projects. Whether you need to edit a promotional video,
              short film, or social media content, we have the skills and tools
              to make it happen.
            </p>
            <p>
              In addition to video editing, we also offer freelancing services
              to help you with a variety of tasks, such as content writing,
              social media management, and digital marketing. Our team of
              freelancers are highly skilled and experienced in their respective
              fields, so you can trust that your projects will be handled with
              care and professionalism.
            </p>
            <p>
              Furthermore, our graphics designing services can elevate your
              branding and marketing efforts. From logo design to website
              graphics, we can create eye-catching visuals that will leave a
              lasting impression on your audience.
            </p>
            <p>
              Overall, our company is dedicated to helping you achieve your
              goals and stand out in a crowded digital landscape. We pride
              ourselves on our attention to detail, creativity, and commitment
              to excellence. Contact us today to learn more about how we can
              help bring your ideas to life!
            </p>
          </section>
        </article>
      </section>
    </main>
  );
};
export default AboutPage;
