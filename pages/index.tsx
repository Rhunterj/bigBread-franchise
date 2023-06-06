import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { SubFooter } from '@/components/SubFooter/SubFooter'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Header />
            <Hero image="/Home.png" />
            <main className="flex flex-col content-center">
                <div className="flex flex-col w-full">
                    <div className="md:max-w-[1400px] mx-auto px-6 py-6 md:py-12">
                         <h1 className="mb-6 text-2xl font-bold md:text-5xl">
                            Bij BB Kitchen staat jouw succes op nr 1!
                        </h1>
                        <p className="mb-6 md:text-xl">
                            Wil jij onderdeel zijn van ons bewezen
                            succesformule? Word dan de nieuwe franchisenemer van
                            BB Kitchen!
                        </p>
                        <p className="mb-6 md:text-xl">
                            Wij denken out of the box en maken een combinatie
                            van soft en hard franchising. Anders dan bij de
                            meeste ketens heb je bij ons veel vrijheden. Zo is
                            er een mogelijkheid tot eigen inbreng om het lokale
                            ondernemerschap te versterken.
                        </p>
                        <p className="mb-6 md:text-xl">
                            Geniet van de vele voordelen en onderneem zorgeloos.
                        </p>
                        <img
                            className="relative z-10 w-full"
                            src="/HomeContent.png"
                            alt="BB Kitchen Breda"
                        />
                    </div>
                    <div className="w-full md:bg-secondary md:pt-[200px] md:mt-[-250px]">
                        <div className="md:max-w-[1400px] mx-auto md:w-full px-6 py-6 md:py-12 md:pb-16">
                            <h2 className="mt-6 mb-6 text-2xl font-bold md:text-left md:mb-12">
                                Wij onderscheiden ons, naar onze ondernemers,
                                door;
                            </h2>
                            <ul className="relative z-10 flex justify-between mb-6 md:mb-12">
                                <li className="flex-col mb-2 rounded-full bg-primary w-[80px] h-[80px] md:flex md:text-lg md:justify-center md:w-[200px] md:h-[200px] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <span className="block text-xl text-center md:text-5xl">
                                        1
                                    </span>
                                    Uitgebreide financiële ondersteuning
                                </li>
                                <li className="flex-col mb-2 rounded-full bg-primary w-[80px] h-[80px] md:flex md:text-lg md:justify-center md:w-[200px] md:h-[200px] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <span className="block text-xl text-center md:text-5xl">
                                        2
                                    </span>
                                    Ondersteuning in bedrijfsvoering
                                </li>
                                <li className="flex-col mb-2 rounded-full bg-primary w-[80px] h-[80px] md:flex md:text-lg md:justify-center md:w-[200px] md:h-[200px] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <span className="block text-xl text-center md:text-5xl">
                                        3
                                    </span>
                                    Marketing- technische ondersteuning
                                </li>
                                <li className="flex-col mb-2 rounded-full bg-primary w-[80px] h-[80px] md:flex md:text-lg md:justify-center md:w-[200px] md:h-[200px] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <span className="block text-xl text-center md:text-5xl">
                                        4
                                    </span>
                                    Mogelijkheid tot eigen inbreng
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-secondary relative mt-[-95px] md:mt-[-110px] h-[126px] py-16 flex justify-center">
                    <button className="px-8 py-2 mt-4 text-s md:text-2xl font-bold bg-[#FFF] rounded text-primary absolute bottom-[33px] md:bg-primary md:text-[#fff]">
                        <Link href="/about">Franchisenemer worden?</Link>
                    </button>
                </div>

                <div className="flex flex-col w-full px-6 py-6 md:py-12 md:bg-primary">
                    <div className="md:max-w-[1400px] md:mx-auto md:w-full">
                        <h2 className="mb-6 text-2xl font-bold text-center md:text-left">
                            Onze Statistieken
                        </h2>
                        <ul className="flex justify-between">
                            <li className="mb-6 text-[10px] md:text-xl flex-col text-center">
                                <span className="block mb-2 text-2xl font-semibold">
                                    30
                                </span>
                                Vestigingen
                            </li>
                            <li className="mb-6 text-[10px] md:text-xl flex-col text-center">
                                <span className="block mb-2 text-2xl font-semibold">
                                    29
                                </span>
                                Franchisenemers
                            </li>
                            <li className="mb-6 text-[10px] md:text-xl flex-col text-center">
                                <span className="block mb-2 text-2xl font-semibold">
                                    38.100
                                </span>
                                Burgers gebakken
                            </li>
                            <li className="mb-6 text-[10px] md:text-xl flex-col text-center">
                                <span className="block mb-2 text-2xl font-semibold">
                                    450
                                </span>
                                Medewerkers
                            </li>
                        </ul>
                    </div>
                </div>
                <SubFooter />
            </main>
            <Footer />
        </>
    )
}
