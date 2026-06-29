'use client';
import Link from "next/link";
import BlurText from "./components/BlurText";
import AnimatedContent from './components/AnimatedContent'
import ProgressBar from "@/app/components/ProgressBar";
import { Icon } from "@iconify/react";



export default function Home() {
    return (
        <main className="min-h-screen font-[inter] bg-white">

            <nav className={"bg-white fixed max-w-full z-1000 h-16 shadow-md container mx-auto flex justify-center items-center sm:justify-between px-15"}>
                <div><Link href={"#"}><img src={"/logo.png"} width={"130"} alt={"logo"}/></Link></div>
                <div className={"space-x-6 font-bold text-stone-700 hidden sm:flex text-sm"}>
                    <Link href="#about" className={"hover:text-black transition-colors duration-300"}>Bageta</Link>
                    <Link href="#story" className={"hover:text-black transition-colors duration-300"}>Příběh</Link>
                    <Link href="#stats" className={"hover:text-black transition-colors duration-300"}>Staty</Link>
                    <Link href="#payment" className={"hover:text-black transition-colors duration-300"}>Přispět</Link>

                </div>
                <div>
                    <Link href={"#payment"} className={"text-white text-sm hidden sm:flex transition-colors duration-300 bg-black py-2 px-6 rounded-3xl hover:bg-stone-800"}>Nakrmit Lukáše</Link>
                </div>
            </nav>

            {/*Hero */}
            <section className="z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center bg-black overflow-hidden mr-0 ml-0" id={"hero"}>
                <h2 className={"font-medium text-lg text-amber-600"}>Nové. Naléhavé. Hladové.</h2>

                <BlurText
                    text="Lukáš má hlad."
                    delay={180}
                    animateBy="words"
                    direction="bottom"
                    className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.3] z-100 justify-center"
                />

                <BlurText
                    text={"A tentokrát je to vážné."}
                    delay={50}
                    animateBy="words"
                    direction="bottom"
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
                        href={"https://www.instagram.com/_lukas__vesely_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}

                        target={"_blank"}
                        className={"text-amber-600 hover:text-white transition-colors duration-300"}
                    >
                        <Icon icon="line-md:instagram" width="60" height="60"/>
                    </Link>

                    <Link
                        href={"https://www.instagram.com/jakub._.hosek?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}
                        target={"_blank"}
                        className={"text-amber-600 hover:text-white transition-colors duration-300"}
                    >
                        <Icon icon="line-md:instagram" width="60" height="60"/>
                    </Link>
                </div>
            </section>

            {/*About Section */}
            <section className={"min-h-screen items-center rounded-lg bg-gray-100 pt-30 pr-5 pl-5"} id={"about"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <h2 className={"font-medium text-lg text-stone-500 justify-center flex"}>
                        Bageta s kuřecími řízečky
                    </h2>
                    <h1 className={"flex justify-center text-5xl md:text-7xl lg:text-7xl font-bold text-black max-w-4xl text-center mt-5 leading-[1.1]"}>
                        Jediná věc <br/> mezi Lukášem a klidem.
                    </h1>
                    <div className={"flex flex-col items-center justify-center gap-20 w-full font-bold z-10 text-gray-600 leading-[1.5] mt-5"}>
                        <p className="text-lg md:text-xl max-w-xl text-center font-medium">
                            Bageta s řízkem, ze <a href="https://www.100leta.cz/bistro" target="_blank" className="text-amber-600 hover:underline">
                                100leté
                            </a> představuje ultimátní záchranu pro Lukášův nekonečný hlad. Je to investice 89 Kč, která mu umožní přežit další hodinu programování.
                        </p>
                    </div>
                </div>

                <div>
                    {/*TODO: ADD photo*/}
                </div>
            </section>

            {/*Story Section*/}
            <section className={"items-center rounded-lg bg-white pt-30 mr-5 ml-5 text-center"} id={"story"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <h2 className={"font-medium text-lg text-stone-500 justify-center flex"}>
                        Příběh
                    </h2>
                    <h1 className={"flex justify-center text-5xl md:text-6xl lg:text-6xl font-bold text-black max-w-4xl text-center mt-5 leading-[1.1]"}>
                        Jak to celé vzniklo.
                    </h1>
                </div>
                <div className="flex flex-col text-left text-stone-800 mt-12 text-lg md:text-xl gap-6 max-w-3xl mx-auto">
                    <p>
                        Mám kamaráda Lukáše. Je mu 17, je to plavec a - kdo ho zná, ten ví - má reálně furt hlad.
                    </p>
                    <p>
                        Jeho nejoblíbenější disciplína není motýlek, ale sprint do 100leté pro bagetu hned, jak může. Tuhle stránku jsem udělal víceméně ze srandy, aby mu lidi mohli hodit pár korun právě na bagetu s kuřecími řízečky.
                    </p>
                    <p>
                        Protože ten kluk prožere i vlastní peněženku.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="flex flex-col items-center rounded-lg bg-black py-30 px-5 text-center mt-50" id="stats">
                <div className="flex flex-col items-center justify-center w-full">
                    <h2 className="font-medium text-lg text-amber-600 flex justify-center">
                        Lukáš v číslech
                    </h2>
                    <h1 className="flex justify-center text-5xl md:text-6xl font-bold text-white max-w-4xl text-center mt-5 leading-[1.1]">
                        Tělo jako stroj.
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full text-gray-400 max-w-4xl text-center mt-20">
                        <div className="flex flex-col items-center">
                            <h3 className="text-7xl font-bold text-amber-600">4000</h3>
                            <p className="text-sm mt-2">Kalorií denně</p>
                        </div>

                        <div className="w-60 h-px md:w-px md:h-24 bg-gray-400"></div>

                        <div className="flex flex-col items-center">
                            <h3 className="text-7xl font-bold text-amber-600">7x</h3>
                            <p className="text-sm mt-2">Jídlo denně (minimum)</p>
                        </div>

                        <div className="w-60 h-px md:w-px md:h-24 bg-gray-400"></div>

                        <div className="flex flex-col items-center">
                            <h3 className="text-7xl font-bold text-amber-600">67.9</h3>
                            <p className="text-sm mt-2">sprint do 100leté*</p>
                        </div>
                    </div>

                    <p className="text-gray-200 text-sm flex justify-center mt-20 max-w-4xl">
                        *Čas měřen z učebny 406
                    </p>
                </div>
            </section>

            {/* Payment Section */}
            <section className="min-h-screen flex flex-col items-center rounded-lg bg-stone-100 pt-32 pb-30 px-5 text-center" id="payment">

                <div className="flex flex-col items-center justify-center w-full">
                    <h2 className="font-medium text-lg text-stone-500 mb-1">
                        Stav sbírky
                    </h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black max-w-4xl text-center leading-[1.1]">
                        Kolik chybí do <br /> další bagety?
                    </h1>
                </div>

                <div className="flex flex-col text-stone-800 mt-20 gap-2 w-full max-w-3xl">
                    <div className="flex justify-between items-baseline gap-50">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl md:text-4xl font-bold text-black">20 Kč</span>
                            <span className="text-xs text-stone-500 font-medium">/ 89 Kč</span>
                        </div>
                        <div className="text-ms font-semibold text-stone-600">
                            22 %
                        </div>
                    </div>

                    <ProgressBar />
                </div>

                <div className="flex flex-wrap mt-20 gap-6 justify-center w-full max-w-6xl  px-4">
                    <div className="flex flex-col items-start justify-start bg-black rounded-3xl p-10 w-full max-w-lg text-white">
                        <div>
                            <h2 className="font-medium flex text-sm text-amber-600 ">QR PLATBA</h2>
                            <p className="flex text-start text-4xl mt-4 font-semibold">Naskenuj a přispěj.</p>

                            <p className="text-start font-light mt-4 w-full text-gray-300 text-lg">
                                Otevři bankovní aplikaci, naskenuj kód a pošli libovolnou částku. Doporučujeme 89 Kč - full experience.
                            </p>

                            <div className="flex items-center justify-center mt-8 bg-white p-4 rounded-3xl w-fit">
                                <img width="220" height="220" src="/QRCode.jpg" alt="QR Kód" className="rounded-xl" />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-12 w-full">
                            <Link href={"#"} className="bg-amber-600 text-black px-6 py-3 rounded-full font-semibold transition">
                                Stáhnout QR kód
                            </Link>
                            <Link href={"#"} className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-stone-800 transition">
                                Potřebuju návod
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-start bg-white border border-gray-100 shadow-sm rounded-3xl p-10 w-full max-w-lg">
                        <h2 className="font-medium text-sm text-gray-500 ">JAK NA TO</h2>
                        <p className="text-4xl mt-4 font-semibold text-black">Tři kroky.</p>

                        <div className="flex flex-col gap-8 mt-12">
                            <div className="flex gap-5 items-start">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-medium shrink-0 mt-1">
                                    1
                                </div>
                                <p className="text-gray-800 text-lg text-start">
                                    Otevři aplikaci své banky a zvol Skenovat QR kód.
                                </p>
                            </div>


                            <div className="flex gap-5 items-start">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-medium shrink-0 mt-1">
                                    2
                                </div>
                                <p className="text-gray-800 text-lg text-start">
                                    Zadej libovolnou částku. Každá koruna se počítá.
                                </p>
                            </div>


                            <div className="flex gap-5 items-start">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white font-medium shrink-0 mt-1">
                                    3
                                </div>
                                <p className="text-gray-800 text-lg text-start">
                                    Potvrď platbu a sleduj, jak Lukášovi rostou síly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer */}
            <footer className="w-full bg-white px-5 py-10 text-sm font-medium text-stone-600 flex flex-wrap justify-center gap-6 md:gap-52 mt-0">
                <p>© 2026 LUKÁŠ MÁ HLAD. Fun-made projekt pro LV</p>

                <p>Vytvořil: <a href="https://jakub-hosek.cz" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                    Jakub Hošek
                </a></p>
            </footer>
        </main>
    );
}
