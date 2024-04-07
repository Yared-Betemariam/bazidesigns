import { beautyFas, coffeeDes, mohDes, works } from "@/lib/utils";
import Image from "next/image";

const WorksPage = () => {
  return (
    <main className="flex flex-col flex-1">
      <section className="wrapper py-14 flex flex-col gap-20">
        <div className="flex flex-col mx-auto gap-6 items-center justify-center text-center sm:text-start">
          <h1 className="text-5xl font-bold">Our Past Works</h1>
          <div className="bg-primary h-2 w-20 rounded-md"></div>
          <p className="opacity-70 max-w-md text-center">
            Graphics Design and Video Editing
          </p>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((item) => (
            <div
              key={item}
              className="relative h-60 shadow-md border border-gray-900/20"
            >
              <Image
                src={item}
                alt="Work"
                fill
                className="object-center object-cover"
              />
            </div>
          ))}
        </section>
        <div className="flex flex-col gap-3 mx-12">
          <h2 className="text-4xl font-bold opacity-90">With Yonas Moh</h2>
          <div className="bg-primary/80 h-2 w-20 rounded-md"></div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mohDes.map((item) => (
            <div
              key={item}
              className="relative h-60 shadow-md border border-gray-900/20"
            >
              <Image
                src={item}
                alt="Work"
                fill
                className="object-center object-cover"
              />
            </div>
          ))}
        </section>
        <div className="flex flex-col gap-3 mx-12">
          <h2 className="text-4xl font-bold opacity-90">
            For a Coffee Company
          </h2>
          <div className="bg-primary/80 h-2 w-20 rounded-md"></div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {coffeeDes.map((item) => (
            <div
              key={item}
              className="relative h-60 shadow-md border border-gray-900/20"
            >
              <Image
                src={item}
                alt="Work"
                fill
                className="object-center object-cover"
              />
            </div>
          ))}
        </section>
        <div className="flex flex-col gap-3 mx-12">
          <h2 className="text-4xl font-bold opacity-90">Beauty and Fashion</h2>
          <div className="bg-primary/80 h-2 w-20 rounded-md"></div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {beautyFas.map((item) => (
            <div
              key={item}
              className="relative h-80 shadow-md border border-gray-900/20"
            >
              <Image
                src={item}
                alt="Work"
                fill
                className="object-center object-cover"
              />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};
export default WorksPage;
