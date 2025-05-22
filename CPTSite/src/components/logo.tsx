import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/image.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      <Image
        src={logo}
        fill
        className="cpt-logo"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={logo}
        fill
        className="cpt-logo"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
