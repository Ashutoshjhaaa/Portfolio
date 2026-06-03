import Image from "next/image";

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      {/* Light Mode Background */}
      <Image
        src="/bglight.png"
        alt=""
        fill
        priority
        className="object-cover opacity-100 block dark:hidden"
      />
      {/* Dark Mode Background */}
      <Image
        src="/bgg.png"
        alt=""
        fill
        priority
        className="object-cover opacity-15 hidden dark:block"
      />
    </div>
  );
}
