'use client';
import Link from "next/link";
import BlurText from "./components/BlurText";
import AnimatedContent from './components/AnimatedContent'

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


export default function Home() {
  return (
      <main className="relative min-h-screen font-[inter] bg-white">

        <nav className={"bg-amber-300 fixed max-w-full z-20 h-20 shadow-md container mx-auto flex items-center justify-between py-4 px-6"}>
            <div className={"text-2xl font-black text-[#563119]"}>LUKÁŠ MÁ HLAD</div>
            <div className={"space-x-6 font-black text-[#563119]"}>
              <Link href="#" className={"hover:text-white transition-colors duration-300"}>DOMŮ</Link>
              <Link href="#" className={"hover:text-white transition-colors duration-300"}>O NÁS</Link>
              <Link href="#" className={"hover:text-white transition-colors duration-300"}>PŘISPĚT</Link>
              <Link href="#" className={"hover:text-white transition-colors duration-300"}>KONTAKT</Link>
            </div>
        </nav>

        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white overflow-hidden">
          <BlurText
              text="NENECHTE LUKÁŠE TRPĚT HLADEM!"
              delay={180}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl md:text-7xl lg:text-7xl font-black text-[#563119] leading-[1.3]"
          />

          <BlurText
              text="Každá bageta se počítá. Podpořte Lukáše v jeho nekončícím boji s prázdným žaludkem a pomozte mu získat jídlo ještě dnes!"
              delay={50}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="flex mt-5 text-lg md:text-2xl text-black max-w-4xl leading-relaxed justify-center"
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
                <button className="bg-amber-300 p-4 rounded-md text-black text-xm">
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
                <button className=" p-4 rounded-md text-black text-xm">
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
