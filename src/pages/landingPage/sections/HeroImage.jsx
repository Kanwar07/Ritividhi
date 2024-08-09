import React from "react";
import generatedTemple from "../../../assets/generatedTemple.png";
import mantra from "../../../assets/mantra.png";

function HeroImage() {
  const list = [
    { id: 1, value: "🕉️ Mantra Jaap" },
    { id: 2, value: "📜 Stotra Paath" },
    { id: 3, value: "🔥 Vaidik Yagya" },
    { id: 4, value: "🕉️ Mantra Jaap" },
    { id: 5, value: "📜 Stotra Paath" },
    { id: 6, value: "🔥 Vaidik Yagya" },
  ];
  return (
    <div className="relative z-0 h-screen w-screen rounded-2xl">
      <div className="absolute bg-custom-gradient h-screen w-screen top-28 font-rubik-mono shadow-2xl rounded-2xl">
        <div className="text-[100px] font-normal leading-[16rem] pl-20">
          <span className="[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
            Experience the
          </span>
          <div className="absolute z-20 text-[100px] top-56 leading-[7.5rem] overflow-hidden h-[110px] text-[#FF8213]">
            <span className="relative animate-animation [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
              Adhyatm
              <br />
              Pavitrata
              <br />
              Parampara
              <br />
              Anant
            </span>
          </div>
          <br />
          <span className="[text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
            At Home
          </span>
        </div>
        <div className="font-devanagari-sangam text-[20px] font-bold mt-6 pl-20">
          सत्यं श्रद्धया सम्पूर्णं पूजनम्।
        </div>
        <div className="font-quicksand text-[12px] font-bold mt-6 pl-20">
          (Pooja performed with truth and devotion.)
        </div>

        <div className="flex flex-row gap-8 mt-12 font-quicksand font-bold mt-6 pl-20">
          <button className="px-8 py-2 bg-[#FF8213] rounded-3xl">
            Book Pooja
          </button>
          <button className="px-8 py-2 bg-[#FF8213] rounded-3xl">
            Learn More
          </button>
        </div>
        <div className="flex flex-row mt-14 gap-8 pl-0">
          {list.map((item) => {
            const { id, value } = item;
            return (
              <div
                key={id}
                style={{
                  color: "#FFF",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "rgba(0, 0, 0, 0.50)",
                  fontFamily: '"Rubik Mono One", sans-serif',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute z-10 h-screen top-0 right-0 mt-40">
        <img
          src={mantra}
          alt="mantra"
          className="size-[48rem] animate-rotation"
        />
      </div>
      <div className="absolute h-screen z-20 top-0 right-0 mt-48">
        <img
          src={generatedTemple}
          alt="generatedTemple"
          className="size-[60rem] drop-shadow-[0_80px_100px_rgba(0,0,0,1)]"
        />
      </div>
    </div>
  );
}

export default HeroImage;
