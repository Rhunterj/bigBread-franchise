import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { SubFooter } from '@/components/SubFooter/SubFooter'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Header />
            <Hero image="/hero1.png" />
            <main>
                <div className="flex flex-col w-full px-6 py-6">
                    <h1 className="mb-6 text-2xl font-bold">
                        Bij BB Kitchen staat jouw succes op nr 1!
                    </h1>
                    <p className="mb-6">
                        Wil jij onderdeel zijn van ons bewezen succesformule?
                        Word dan de nieuwe franchisenemer van BB Kitchen!
                    </p>
                    <p className="mb-6">
                        Wij denken out of the box en maken een combinatie van
                        soft en hard franchising. Anders dan bij de meeste
                        ketens heb je bij ons veel vrijheden. Zo is er een
                        mogelijkheid tot eigen inbreng om het lokale
                        ondernemerschap te versterken.
                    </p>
                    <p className="mb-6">
                        Geniet van de vele voordelen en onderneem zorgeloos.
                    </p>
                    <img
                        className="w-full"
                        src="/BBKBreda.png"
                        alt="BB Kitchen Breda"
                    />

                    <h2 className="mt-6 mb-6 text-2xl font-bold">
                        Wij onderscheiden ons, naar onze ondernemers, door;
                    </h2>
                    <ul className="relative z-10 flex justify-between mb-6">
                        <li className="flex-col mb-2 rounded-full bg-primary w-[85px] h-[85px] text-center text-[8px]">
                            <span className="block text-xl text-center">1</span>
                            Uitgebreide financiële ondersteuning
                        </li>
                        <li className="flex-col mb-2 rounded-full bg-primary w-[85px] h-[85px] text-center text-[8px]">
                            <span className="block text-xl text-center">2</span>
                            Ondersteuning in bedrijfsvoering
                        </li>
                        <li className="flex-col mb-2 rounded-full bg-primary w-[85px] h-[85px] text-center text-[8px]">
                            <span className="block text-xl text-center">3</span>
                            Marketing- technische ondersteuning
                        </li>
                        <li className="flex-col mb-2 rounded-full bg-primary w-[85px] h-[85px] text-center text-[8px]">
                            <span className="block text-xl text-center">4</span>
                            Mogelijkheid tot eigen inbreng
                        </li>
                    </ul>
                </div>

                <div className="w-full bg-secondary relative mt-[-95px] h-[126px] py-8 flex justify-center">
                    <button className="px-8 py-2 mt-4 text-xs font-bold bg-[#FFF] rounded text-primary absolute bottom-[33px]">
                        <Link href="/about">Franchisenemer worden?</Link>
                    </button>
                </div>
                <div className="flex flex-col w-full px-6 py-6">
                    <h2 className="mb-6 text-2xl font-bold text-center">
                        Onze Statistieken
                    </h2>
                    <ul className="flex justify-between">
                        <li className="mb-6 text-[9px] flex-col text-center">
                            <span className="block mb-2 text-2xl font-bold">
                                30
                            </span>{' '}
                            Vestigingen
                        </li>
                        <li className="mb-6 text-[9px] flex-col text-center">
                            <span className="block mb-2 text-2xl font-bold">
                                29
                            </span>{' '}
                            Franchisenemers
                        </li>
                        <li className="mb-6 text-[9px] flex-col text-center">
                            <span className="block mb-2 text-2xl font-bold">
                                38.100
                            </span>{' '}
                            Burgers gebakken
                        </li>
                        <li className="mb-6 text-[9px] flex-col text-center">
                            <span className="block mb-2 text-2xl font-bold">
                                450
                            </span>{' '}
                            Medewerkers
                        </li>
                    </ul>
                </div>
                <SubFooter />
            </main>
            <Footer />
        </>
    )
}
