import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { SubFooter } from '@/components/SubFooter/SubFooter'
import Link from 'next/link'

export default function Home() {
    //calculate days between two dates
    const date1 = new Date('2023-06-13')
    const date2 = new Date()
    const diffTime = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const burgers = 438100 + diffDays * 50

    return (
        <>
            <Header />
            <Hero image="/Home.jpg" position="center" />
            <main className="flex flex-col content-center">
                <div className="flex flex-col w-full">
                    <div className="sm:max-w-[1100px] mx-auto px-6 py-6 sm:py-12">
                        <h1 className="mb-6 text-2xl font-bold sm:text-4xl">
                            Bij BB Kitchen staat jouw{' '}
                            <span className="block">succes op nr 1!</span>
                        </h1>
                        <p className="mb-6 sm:text-lg">
                            Wil jij onderdeel zijn van onze bewezen
                            succesformule? <br />
                            Word dan de nieuwe franchisenemer van BB Kitchen!
                        </p>
                        <p className="mb-6 sm:text-lg">
                            Wij denken out of the box en maken een combinatie
                            van soft en hard franchising. Anders dan bij de
                            meeste ketens heb je bij ons veel vrijheden. Zo is
                            er een mogelijkheid tot eigen inbreng om het lokale
                            ondernemerschap te versterken.
                        </p>
                        <p className="mb-6 sm:text-lg">
                            Geniet van de vele voordelen en onderneem zorgeloos.
                        </p>
                        <img
                            className="relative z-10 w-full"
                            src="/HomeContent.jpg"
                            alt="BB Kitchen Breda"
                        />
                    </div>
                    <div className="w-full sm:pt-[200px] sm:mt-[-250px]">
                        <div className="sm:max-w-[1100px] mx-auto sm:w-full px-6 py-6 sm:py-12 sm:pb-16">
                            <h2 className="mt-6 mb-6 text-2xl font-bold sm:text-left sm:mb-12 sm:text-3xl">
                                Wij onderscheiden ons, naar onze ondernemers,
                                door;
                            </h2>
                            <ul className="relative z-10 flex justify-between mb-6 sm:mb-12">
                                <li className="flex-col relative mb-2 rounded-full bg-primary sm:justify-center tracking-tighter sm:flex sm:text-sm lg:sm-text-lg w-[23%] pb-[23%] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <div className="absolute top-1/2 translate-y-[-57%] w-full left-0">
                                        <span className="block text-xl text-center sm:text-3xl lg:text-6xl sm:mt-[-10px] lg:mt-[-40px]">
                                            1
                                        </span>
                                        <span className="block leading-3 sm:leading-4">
                                            Uitgebreide financiële mogelijkheden
                                        </span>
                                    </div>
                                </li>
                                <li className="flex-col relative mb-2 rounded-full bg-primary sm:justify-center tracking-tighter sm:flex sm:text-sm lg:sm-text-lg w-[23%] pb-[23%] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <div className="absolute top-1/2 translate-y-[-57%] w-full left-0">
                                        <span className="block text-xl text-center sm:text-3xl lg:text-6xl sm:mt-[-10px] lg:mt-[-40px]">
                                            2
                                        </span>
                                        <span className="block leading-3 sm:leading-4">
                                            Operationele bedrijfsvoering
                                        </span>
                                    </div>
                                </li>
                                <li className="flex-col relative mb-2 rounded-full bg-primary sm:justify-center tracking-tighter sm:flex sm:text-sm lg:sm-text-lg w-[23%] pb-[23%] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <div className="absolute top-1/2 translate-y-[-57%] w-full left-0">
                                        <span className="block text-xl text-center sm:text-3xl lg:text-6xl sm:mt-[-10px] lg:mt-[-40px]">
                                            3
                                        </span>
                                        <span className="block leading-3 sm:leading-4">
                                            Marketing- technische ondersteuning
                                        </span>
                                    </div>
                                </li>
                                <li className="flex-col relative mb-2 rounded-full bg-primary sm:justify-center tracking-tighter sm:flex sm:text-sm lg:sm-text-lg w-[23%] pb-[23%] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <div className="absolute top-1/2 translate-y-[-57%] w-full left-0">
                                        <span className="block text-xl text-center sm:text-3xl lg:text-6xl sm:mt-[-10px] lg:mt-[-40px]">
                                            4
                                        </span>
                                        <span className="block leading-3 sm:leading-4">
                                            Uniek assortiment
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-secondary relative mt-[-95px] sm:mt-[-200px] xl:mt-[-250px] h-[126px] sm:h-[300px] py-16 flex justify-center">
                    <button className="px-8 sm:px-12 py-2 mt-4 text-s sm:text-2xl font-bold bg-[#FFF] rounded text-primary absolute bottom-[33px] sm:bottom-[100px] xl:bottom-[50px]">
                        <Link href="/about">Franchisenemer worden?</Link>
                    </button>
                </div>

                <div className="flex flex-col w-full px-6 py-6 sm:py-12">
                    <div className="sm:max-w-[1100px] sm:mx-auto sm:w-full">
                        <h2 className="mb-6 text-2xl font-bold text-center sm:text-3xl sm:text-left sm:mb-12">
                            Onze Statistieken
                        </h2>
                        <ul className="flex justify-between">
                            <li className="mb-6 text-[9px] sm:text-sm lg:text-xl font-bold flex-col text-center">
                                <span className="block mb-2 text-2xl font-semibold sm:text-xl lg:text-5xl">
                                    32
                                </span>
                                Vestigingen
                            </li>
                            <li className="mb-6 text-[9px] sm:text-sm lg:text-xl font-bold flex-col text-center">
                                <span className="block mb-2 text-2xl font-semibold sm:text-xl lg:text-5xl">
                                    29
                                </span>
                                Franchisenemers
                            </li>
                            <li className="mb-6 text-[9px] sm:text-sm lg:text-xl font-bold flex-col text-center">
                                <span className="block mb-2 text-2xl font-semibold sm:text-xl lg:text-5xl">
                                    {burgers}
                                </span>
                                Burgers gebakken
                            </li>
                            <li className="mb-6 text-[9px] sm:text-sm lg:text-xl font-bold flex-col text-center">
                                <span className="block mb-2 text-2xl font-semibold sm:text-xl lg:text-5xl">
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
