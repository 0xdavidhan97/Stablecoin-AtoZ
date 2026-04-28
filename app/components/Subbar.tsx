const tags = ["#Blockchain", "#Stablecoin", "x402"];

export default function Subbar() {
  return (
    <div
      className="bg-[#D9D9D9] mx-[6px] mt-[11px] rounded-[5px] flex flex-col gap-2 px-3 py-2 md:h-8 md:flex-row md:items-center md:justify-between md:px-0 md:py-0"
    >
      <span
        className="text-[#575757] text-[11px] leading-none pl-3 md:text-[14px] md:pl-[18px]"
        style={{ fontWeight: 400 }}
      >
        바이브코딩 하는 쟁쟁이가 만드는 스테이블코인 대시보드
      </span>
      <div className="flex items-center gap-2 flex-wrap pr-3 md:pr-[18px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#BDBDBD] text-[#575757] rounded-[15px] px-2 text-[11px] leading-none md:text-[13px]"
            style={{ height: 17, display: "inline-flex", alignItems: "center" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
