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
    const burgers = 38100 + diffDays * 50

    return (
        <>
            <Header />
            <Hero image="/Home.jpg" />
            <main className="flex flex-col content-center">
                <div className="flex flex-col w-full">
                    <div className="xl:max-w-[80%] mx-auto px-6 py-6 xl:py-12">
                        <h1 className="mb-6 text-2xl font-bold xl:text-[94px] xl:leading-[115px]">
                            Bij BB Kitchen staat{' '}
                            <span className="block">jouw succes op nr 1!</span>
                        </h1>
                        <p className="mb-6 xl:text-xl">
                            Wil jij onderdeel zijn van ons bewezen
                            succesformule? Word dan de nieuwe franchisenemer van
                            BB Kitchen!
                        </p>
                        <p className="mb-6 xl:text-xl">
                            Wij denken out of the box en maken een combinatie
                            van soft en hard franchising. Anders dan bij de
                            meeste ketens heb je bij ons veel vrijheden. Zo is
                            er een mogelijkheid tot eigen inbreng om het lokale
                            ondernemerschap te versterken.
                        </p>
                        <p className="mb-6 xl:text-xl">
                            Geniet van de vele voordelen en onderneem zorgeloos.
                        </p>
                        <img
                            className="relative z-10 w-full"
                            src="/HomeContent.jpg"
                            alt="BB Kitchen Breda"
                        />
                    </div>
                    <div className="w-full xl:pt-[200px] xl:mt-[-250px]">
                        <div className="xl:max-w-[80%] mx-auto xl:w-full px-6 py-6 xl:py-12 xl:pb-16">
                            <h2 className="mt-6 mb-6 text-2xl font-bold xl:text-left xl:mb-12 xl:text-[92px] xl:leading-[101px]">
                                Wij onderscheiden ons, naar onze ondernemers,
                                door;
                            </h2>
                            <ul className="relative z-10 flex justify-between mb-6 xl:mb-12">
                                <li className="flex-col relative mb-2 rounded-full bg-primary w-[75px] xl:justify-center xl:p-2 tracking-tighter h-[75px] xl:flex xl:text-2xl font-bold xl:w-[23%] xl:pb-[23%] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <div className="absolute top-1/2 translate-y-[-57%] w-full left-0">
                                        <span className="block text-xl text-center xl:text-[90px] xl:leading-[90px]">
                                            1
                                        </span>
                                        <span className="xl:h-[96px] block">Uitgebreide financiële ondersteuning</span>
                                    </div>
                                </li>
                                <li className="flex-col relative mb-2 rounded-full bg-primary w-[75px] xl:justify-center xl:p-2 tracking-tighter h-[75px] xl:flex xl:text-2xl font-bold xl:w-[23%] xl:pb-[23%] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <div className="absolute top-1/2 translate-y-[-57%] w-full left-0">
                                        <span className="block text-xl text-center xl:text-[90px] xl:leading-[90px]">
                                            2
                                        </span>
                                        <span className="xl:h-[96px] block">Ondersteuning in bedrijfsvoering</span>
                                    </div>
                                </li>
                                <li className="flex-col relative mb-2 rounded-full bg-primary w-[75px] xl:justify-center xl:p-2 tracking-tighter h-[75px] xl:flex xl:text-2xl font-bold xl:w-[23%] xl:pb-[23%] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <div className="absolute top-1/2 translate-y-[-57%] w-full left-0">
                                        <span className="block text-xl text-center xl:text-[90px] xl:leading-[90px]">
                                            3
                                        </span>
                                        <span className="xl:h-[96px] block">Marketing- technische ondersteuning</span>
                                    </div>
                                </li>
                                <li className="flex-col relative mb-2 rounded-full bg-primary w-[75px] xl:justify-center xl:p-2 tracking-tighter h-[75px] xl:flex xl:text-2xl font-bold xl:w-[23%] xl:pb-[23%] text-center text-[8px] shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.16)]">
                                    <div className="absolute top-1/2 translate-y-[-57%] w-full left-0">
                                        <span className="block text-xl text-center xl:text-[90px] xl:leading-[90px]">
                                            4
                                        </span>
                                        <span className="xl:h-[96px] block">Mogelijkheid tot eigen inbreng</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-secondary relative mt-[-95px] xl:mt-[-300px] h-[126px] xl:h-[500px] py-16 flex justify-center">
                    <button className="px-8 xl:px-12 py-2 mt-4 text-s xl:text-[70px] font-bold bg-[#FFF] rounded text-primary absolute bottom-[33px] xl:bottom-[100px]">
                        <Link href="/about">Franchisenemer worden?</Link>
                    </button>
                </div>

                <div className="flex flex-col w-full px-6 py-6 xl:py-12">
                    <div className="xl:max-w-[80%] xl:mx-auto xl:w-full">
                        <h2 className="mb-6 text-2xl font-bold text-center xl:text-[59px] xl:leading-[61px] xl:text-left xl:mb-12">
                            Onze Statistieken
                        </h2>
                        <ul className="flex justify-between">
                            <li className="mb-6 text-[9px] xl:text-2xl font-bold flex-col text-center">
                                <span className="block mb-2 text-2xl xl:text-[80px] leading-[90px] font-semibold">
                                    30
                                </span>
                                Vestigingen
                            </li>
                            <li className="mb-6 text-[9px] xl:text-2xl font-bold flex-col text-center">
                                <span className="block mb-2 text-2xl xl:text-[80px] leading-[90px] font-semibold">
                                    29
                                </span>
                                Franchisenemers
                            </li>
                            <li className="mb-6 text-[9px] xl:text-2xl font-bold flex-col text-center">
                                <span className="block mb-2 text-2xl xl:text-[80px] leading-[90px] font-semibold">
                                    {burgers}
                                </span>
                                Burgers gebakken
                            </li>
                            <li className="mb-6 text-[9px] xl:text-2xl font-bold flex-col text-center">
                                <span className="block mb-2 text-2xl xl:text-[80px] leading-[90px] font-semibold">
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
