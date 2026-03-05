'use client';
import Image from "next/image";
import Link from "next/link";
import BlurText from "./components/BlurText";
import AnimatedContent from './components/AnimatedContent'

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


export default function Home() {
  return (
      <main className="relative min-h-screen font-[inter]">
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-[#064e3b]/40 via-[#78350f]/30 to-black overflow-hidden">
          <BlurText
              text="NENECHTE LUKÁŠE TRPĚT HLADEM!"
              delay={180}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl md:text-7xl lg:text-7xl font-black text-white leading-[1.3]"
          />

          <BlurText
              text="Každá bageta se počítá. Podpořte Lukáše v jeho nekončícím boji s prázdným žaludkem a pomozte mu získat jídlo ještě dnes!"
              delay={50}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="flex mt-5 text-lg md:text-2xl text-amber-50/80 max-w-4xl leading-relaxed justify-center"
          />

          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-5 w-full font-bold">
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={1}
            >
              <Link href="#" className="w-full sm:w-auto">
                <button className="bg-white p-4.5 rounded-md text-[#30261C] text-xl">
                  Přispět na bagetu
                </button>
              </Link>
            </AnimatedContent>

            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={1}
            >
              <Link href="#" className="w-full sm:w-auto">
                <button className=" p-4.5 rounded-md text-white text-xl">
                  Zjistit více
                </button>
              </Link>
            </AnimatedContent>
          </div>
        </section>

        <section className={"min-h-screen font-[inter] items-center bg-black"}>
          <h1 className={"flex text-5xl md:text-7xl lg:text-7xl justify-center items-center font-black text-white leading-[1.3]"}>Kdo jsme?</h1>
        </section>
      </main>


  );
}
