import Image from "next/image";
import Link from "next/link";

interface Props {
  w?: boolean;
}

const Logo: React.FC<Props> = ({ w }) => {
  return (
    <Link href={"/"}>
      <Image
        src={w ? "/w.jpg" : "/b.jpg"}
        alt="logo"
        width={1280}
        height={960}
        className="w-[5.725rem] object-cover"
      />
    </Link>
  );
};
export default Logo;
