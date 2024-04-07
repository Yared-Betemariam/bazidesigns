import { type ClassValue, clsx } from "clsx";
import { Montserrat, Outfit } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const works = [
  "/works/a.jpg",
  "/works/b.jpg",
  "/works/c.jpg",
  "/works/d.jpg",
  "/works/e.jpg",
  "/works/f.jpg",
  "/works/i.jpeg",
  "/works/g.jpeg",
  "/works/h.jpeg",
  "/works/v.jpeg",
  "/works/w.jpeg",
];

export const coffeeDes = [
  "/works/s.jpeg",
  "/works/r.jpeg",
  "/works/q.jpeg",
  "/works/p.jpeg",
  "/works/o.jpeg",
  "/works/r.jpeg",
];

export const beautyFas = ["/works/y.jpeg", "/works/t.jpeg", "/works/l.jpeg"];
export const mohDes = [
  "/works/y/a.jpg",
  "/works/y/b.jpg",
  "/works/y/c.jpg",
  "/works/y/d.jpg",
  "/works/y/e.jpg",
  "/works/y/f.jpg",
  "/works/y/j.jpeg",
];
export const foodDes = ["/works/x.jpeg", "/works/m.jpeg", "/works/k.jpeg"];

export const font = Montserrat({ subsets: ["latin"] });
export const outfit = Outfit({ subsets: ["latin"] });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
