import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#353536] h-14 md:h-[88px] flex items-center pl-8 gap-4">
      <Image
        src="/coin-icon.svg"
        alt="Coin icon"
        width={32}
        height={32}
        priority
        unoptimized
        className="rounded-full md:w-[44px] md:h-[44px]"
      />
      <span
        className="text-white text-[18px] leading-[30px] md:text-[28px] md:leading-[30px]"
        style={{ fontWeight: 500 }}
      >
        Stablecoin A to Z
      </span>
    </header>
  );
}
