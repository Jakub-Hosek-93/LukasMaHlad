'use client';
import Link from "next/link";
import BlurText from "./components/BlurText";
import AnimatedContent from './components/AnimatedContent'
import { Icon } from '@iconify/react';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


export default function Home() {
  return (
      <main className="min-h-screen font-[inter] bg-white">

        <nav className={"bg-amber-300 fixed max-w-full z-20 h-20 shadow-md container mx-auto flex justify-center items-center sm:justify-between py-4 px-6 "}>
            <div><Link href={"#"}><img src={"/logo.png"} width={"180"} alt={"logo"} /></Link></div>
            <div className={" space-x-6 font-black text-[#563119] hidden sm:flex"}>
              <Link href="#hero" className={"hover:text-white transition-colors duration-300"}>DOMŮ</Link>
              <Link href="#about" className={"hover:text-white transition-colors duration-300"}>O NÁS</Link>
              <Link href="#payment" className={"hover:text-white transition-colors duration-300"}>PŘISPĚT</Link>
              <Link href="#" className={"hover:text-white transition-colors duration-300"}>KONTAKT</Link>
            </div>
        </nav>

        <section className="z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white overflow-hidden mr-0 ml-0 sm:mr-10 sm:ml-10" id={"hero"}>
          <BlurText
              text="NENECHTE LUKÁŠE TRPĚT HLADEM!"
              delay={180}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl md:text-7xl lg:text-7xl font-black text-[#563119] leading-[1.3] z-10 justify-center"
          />

          <BlurText
              text="Každá bageta se počítá. Podpořte Lukáše v jeho nekončícím boji s prázdným žaludkem a pomozte mu získat jídlo ještě dnes!"
              delay={50}
              animateBy="words"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="flex mt-5 md:text-xl text-gray-600 font-bold max-w-4xl leading-relaxed justify-center z-10"
          />

            <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-5 h-auto font-bold z-10">
                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    threshold={0.1}
                    delay={1}
                >
                    <Link href="#" className="bg-amber-300 text-[#563119] font-bold text-xl px-6 py-4 rounded-lg hover:bg-[#563119] hover:text-white transition duration-300 shadow-md">
                        Přispět na bagetu
                    </Link>
                </AnimatedContent>

                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    threshold={0.1}
                    delay={1}
                >
                    <Link href="#about" className="text-[#563119] font-bold text-xl px-6 py-4 rounded-lg hover:bg-amber-300 hover:text-[#563119] transition duration-300">
                        Zjistit více
                    </Link>
                </AnimatedContent>

            </div>
        </section >

        <section className={"min-h-screen font-[inter] items-center rounded-lg bg-white pt-20 mr-10 ml-10"} id={"about"}>
          <h1 className={"flex text-5xl md:text-7xl text-center lg:text-7xl justify-center items-center font-black text-black leading-[1.3]"}>Jak tento web vznikl?</h1>
              <div className={"flex flex-col items-center justify-center gap-20 w-full font-bold z-10 text-gray-600 leading-[1.5] mt-20"}>
                  <p className="text-lg md:text-xl max-w-5xl text-center">
                      Mám kamaráda Lukáše, který je plavec. Je mu 17 let a týpek má realně furt hlad. Kdo ho zná, tak ví, že jeho nejoblíbenější disciplína není motýlek, ale sprint do 100leté pro bagetu hned jak může.

                      Tuhle stránku jsem udělal víceméně ze srandy, aby mu lidi mohli hodit pár korun právě na bagetu s kuřecími řízečky, protože ten kluk prostě prožere i vlastní peněženku.
                  </p>
              </div>
        </section>

          <section className={"min-h-screen font-[inter] items-center rounded-lg bg-white pt-20 mr-10 ml-10"} id={"payment"}>
                <h1 className={"flex text-5xl md:text-7xl lg:text-7xl justify-center items-center font-black text-black leading-[1.3]"}>Jak přispět?</h1>
              <div className={"flex flex-col items-center"}>
                  <p className={"flex justify-center text-gray-600 mt-20 font-bold text-xl text-center"}>
                      Stačí pouze naskenovat v aplikaci vaší banky QR code a vybrat jakou částku chcete Lukášovi přispět
                  </p>
                  <img src={"/QRCode.jpg"} alt={"qr code"} className={"w-80 h-80 mt-10 justify-center "}/>
              </div>
          </section>

          {/*Footer DONE*/}
          <footer className={"bg-amber-300 w-full  text-white flex flex-col items-center justify-center gap-2 py-6 "}>
              <p className={"text-[#563119] font-bold text-sm sm:text-[18px]  "}>© 2026 LUKÁŠ MÁ HLAD | Vytvořil  <a href={"https://jakub-hosek.cz"} target={"_blank"} className={"text-gray-500 hover:underline"}>Jakub Hošek</a></p>
              <p
                  className={"text-[#563119] font-bold text-xs sm:text-[15px]"}
              >
                  Všechna práva vyhrazena</p>
          </footer>
      </main>


  );
}
