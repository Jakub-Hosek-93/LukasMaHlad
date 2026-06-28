'use client';
import Link from "next/link";
import BlurText from "./components/BlurText";
import AnimatedContent from './components/AnimatedContent'
import ProgressBar from "@/app/components/ProgressBar";
import { Icon } from "@iconify/react";

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};


export default function Home() {
    return (
        <main className="min-h-screen font-[inter] bg-white">

            <nav className={"bg-white fixed max-w-full z-1000 h-16 shadow-md container mx-auto flex justify-center items-center sm:justify-between px-15"}>
                <div><Link href={"#"}><img src={"/logo.png"} width={"130"} alt={"logo"}/></Link></div>
                <div className={"space-x-6 font-bold text-stone-700 hidden sm:flex text-sm"}>
                    <Link href="#hero" className={"hover:text-black transition-colors duration-300"}>Bageta</Link>
                    <Link href="#about" className={"hover:text-black transition-colors duration-300"}>Příběh</Link>
                    <Link href="#payment" className={"hover:text-black transition-colors duration-300"}>Staty</Link>
                    <Link href="#payment" className={"hover:text-black transition-colors duration-300"}>Přispět</Link>

                </div>
                <div>
                    <Link href={"#"} className={"text-white text-sm hidden sm:flex transition-colors duration-300 bg-black py-2 px-6 rounded-3xl hover:bg-stone-800"}>Nakrmit Lukáše</Link>
                </div>
            </nav>

            {/*Hero DONE*/}
            <section className="z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center bg-black overflow-hidden mr-0 ml-0" id={"hero"}>
                <h1 className={"font-medium text-xl text-amber-600"}>Nové. Naléhavé. Hladové.</h1>

                <BlurText
                    text="Lukáš má hlad."
                    delay={180}
                    animateBy="words"
                    direction="bottom"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.3] z-100 justify-center"
                />

                <BlurText
                    text={"A tentokrát je to vážné."}
                    delay={50}
                    animateBy="words"
                    direction="bottom"
                    onAnimationComplete={handleAnimationComplete}
                    className="flex md:text-3xl text-2xl text-gray-300 font-medium max-w-4xl leading-relaxed justify-center z-10"
                />

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-5 h-auto font-bold z-10">
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
                        <Link href="#payment" className="inline-block bg-amber-600 text-black font-bold text-xl px-6 py-4 rounded-3xl transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ease-in-out">
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
                        <Link href="#about" className="text-amber-600 font-bold text-xl px-6 py-4 rounded-lg hover:underline">
                            Zjistit více
                        </Link>
                    </AnimatedContent>
                </div>

                <div className={"absolute justify-center sm:justify-end bottom-10 flex gap-5 mt-16 z-10 w-10/11"}>
                    <Link
                        href={"https://www.instagram.com/jakub._.hosek?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
                        target={"_blank"}
                        className={"text-amber-600 hover:text-white transition-colors duration-300"}
                    >
                        <Icon icon="line-md:instagram" width="60" height="60"/>
                    </Link>

                    <Link
                        href={"https://www.instagram.com/_lukas__vesely_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
                        target={"_blank"}
                        className={"text-amber-600 hover:text-white transition-colors duration-300"}
                    >
                        <Icon icon="line-md:instagram" width="60" height="60"/>
                    </Link>
                </div>
            </section>

            {/*About Section DONE*/}
            <section className={"min-h-screen font-[inter] items-center rounded-lg bg-white pt-20 mr-10 ml-10"}
                     id={"about"}>
                <h1 className={"flex text-5xl md:text-7xl text-center lg:text-7xl justify-center items-center font-black text-black leading-[1.3]"}>Jak
                    tento web vznikl?</h1>
                <div
                    className={"flex flex-col items-center justify-center gap-20 w-full font-bold z-10 text-gray-600 leading-[1.5] mt-20"}>
                    <p className="text-lg md:text-xl max-w-5xl text-center">
                        Mám kamaráda Lukáše, který je plavec. Je mu 17 let a týpek má realně furt hlad. Kdo ho zná, tak
                        ví, že jeho nejoblíbenější disciplína není motýlek, ale sprint do 100leté pro bagetu hned jak
                        může.

                        Tuhle stránku jsem udělal víceméně ze srandy, aby mu lidi mohli hodit pár korun právě na bagetu
                        s
                        kuřecími řízečky, protože ten kluk prostě prožere i vlastní peněženku.
                    </p>
                </div>

                <div className={"flex flex-col justify-center items-center w-full font-bold z-10 mt-40 text-black"}>
                    <p className={"text-2xl text-center"}>Kolik ještě chybí do další bagety s řízkem?</p>
                    <div className={"flex flex-col justify-start w-9/12 font-bold"}>
                        <p className={"text-gray-500 mt-5 justify-start flex"}>20Kč / 89Kč</p>
                    </div>
                    <ProgressBar></ProgressBar>
                </div>
            </section>

            {/*QR Code Section todo: add download qrcode*/}
            <section
                className={"min-h-screen font-[inter] items-center rounded-lg bg-white pt-20 mr-10 ml-10 text-center"}
                id={"payment"}>
                <h1 className={"flex text-5xl md:text-7xl lg:text-7xl justify-center items-center font-black text-black leading-[1.3]"}>Jak
                    přispět?</h1>
                <div className={"flex flex-col items-center"}>
                    <p className={"flex justify-center text-gray-600 mt-20 font-bold text-xl text-center"}>
                        Stačí pouze naskenovat v aplikaci vaší banky QR kód a vybrat jakou částku chcete Lukášovi
                        přispět
                    </p>
                    <img src={"/QRCode.jpg"} alt={"qr code"} className={"w-50 sm:w-70 h-auto mt-10 justify-center "}/>

                    <div className={"flex flex-col items-center"}>
                        <Link href={"/QRCode.jpg"} download={"LukasQRCode.jpg"} className={"bg-amber-300 text-[#563119] font-bold text-xl px-6 py-4 rounded-lg hover:bg-[#563119] hover:text-white transition duration-300 shadow-md mt-5"}>
                            Stáhnout QR code
                        </Link>
                        <Link href={"https://veil-occupation-652.notion.site/N-vod-Jak-zaplatit-pomoc-QR-k-du-3232e681ad7880f4a8a3f76c6d03fb9d?source=copy_link"} target={"_blank"}>
                            <p className={"flex justify-center text-gray-600 mt-5 mb-5 font-bold text-xl text-center hover:underline"}>Potřebujete pomoct? Klikněte zde.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/*Footer DONE*/}
            <footer className={"bg-amber-300 w-full  text-white flex flex-col items-center justify-center gap-2 py-6 "}>
                <p className={"text-[#563119] font-bold text-sm sm:text-[18px]  "}>© 2026 LUKÁŠ MÁ HLAD | Vytvořil <a
                    href={"https://jakub-hosek.cz"} target={"_blank"} className={"text-gray-500 hover:underline"}>Jakub
                    Hošek</a></p>
                <p
                    className={"text-[#563119] font-bold text-xs sm:text-[15px]"}
                >
                    Všechna práva vyhrazena</p>
            </footer>
        </main>
    );
}
