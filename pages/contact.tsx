import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Link from 'next/link'

export const AboutPage = () => {
    return (
        <>
            <Header />
            <Hero image="/Start.jpg" position="center" />
            <main className="sm:mb-[125px]">
                <div className="flex flex-col w-full px-6 py-6 sm:py-12">
                    <div className="sm:max-w-[1100px] mx-auto">
                         <h1 className="mb-6 text-2xl font-bold sm:text-4xl">
                            Jouw start
                        </h1>
                        <p className="mb-6 sm:text-lg">
                            Ons voornaamste doel is jouw een succesvolle
                            ondernemer te laten worden. Om die reden bieden wij
                            volledige begeleiding. Dat start bij BB Kitchen al
                            vanaf het moment dat wij jou alle informatie
                            toesturen. Gedurende jouw verkenningsproces staan
                            wij voor jou klaar om alle vragen te beantwoorden.
                            Hier nemen wij de tijd voor.
                        </p>
                        <p className="mb-6 sm:text-lg">
                            Samen met jou zoeken wij naar de ideale locatie of
                            toveren jouw locatie om tot een BB Kitchen. De
                            volledige ondersteuning gaat verder bij de opening
                            van jouw BB Kitchen vestiging en gedurende de
                            verdere bedrijfsvoering.
                        </p>
                        <p className="mb-6 sm:text-lg">
                            Wil je streekgerecht toevoegen aan het menu, ook dat
                            kan. Vrijheid is een van onze kernwaardes en wij
                            willen jou daar de ruimte voor geven. Wij steunen
                            onze initiatiefrijke ondernemers als dat jouw succes
                            ten goede komt.
                        </p>
                        <img
                            src="/StartContent.jpg"
                            alt="mensen"
                            className="w-full mb-6"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full px-6 py-6 sm:py-12 bg-primary mt-[-130px] sm:mt-[-200px]">
                    <div className="sm:max-w-[1100px] sm:w-full sm:mx-auto">
                        <div className='hidden sm:block w-full h-1 border-t-2 sm:mt-[150px]'></div>
                        <div className="flex flex-col sm:flex-row">
                            <div className="lg:w-1/2">
                                <h2 className="mb-2 text-2xl font-bold sm:text-3xl pt-[75px] sm:pt-[50px] sm:pl-5">
                                    Wij bieden
                                </h2>
                                <ul className="mb-6">
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Bewezen succesformule
                                    </li>
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Ondersteuning bij franchisenemerschap
                                    </li>
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Financieringsmogelijkheden
                                    </li>
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Sterke Professionele uitstraling en
                                        marketing
                                    </li>
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Inkoopvoordelen op producten en diensten
                                    </li>
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Ontzorging en ondersteuning
                                    </li>
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Ruimte voor eigen inbreng
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-2 text-2xl font-bold sm:text-3xl sm:pt-[50px] sm:pl-5">
                                    Wij vragen
                                </h2>
                                <ul className="mb-6">
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Initiatiefrijke doorpakkers
                                    </li>
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Flexibiliteit en creativiteit
                                    </li>
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Analytisch plannend vermogen
                                    </li>
                                    <li className="flex text-[12px] sm:mb-2 sm:text-sm lg:text-lg leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px] sm:w-[35px]"
                                        />{' '}
                                        Sterke leidinggevende capaciteiten
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full px-6 py-6 sm:py-12">
                    <div className="sm:max-w-[1100px] mx-auto">
                        <h2 className="mb-2 text-2xl font-bold sm:text-3xl sm:mb-8">
                            Franchisenemer worden?
                        </h2>
                        <div>
                            <p className="flex text-[12px] sm:text-lg sm:mb-4">
                                <span className="w-1/2 mr-4 sm:w-[350px]">
                                    Entreegeld
                                </span>
                                <span> € 10.000 (eenmalig)</span>
                            </p>
                            <p className="flex text-[12px] sm:text-lg sm:mb-4">
                                <span className="w-1/2 mr-4 sm:w-[350px]">
                                    {' '}
                                    Formulebeheer
                                </span>
                                <span> 2,5% van de omzet p/m</span>
                            </p>
                            <p className="flex text-[12px] sm:text-lg sm:mb-4">
                                <span className="w-1/2 mr-4 sm:w-[350px]">
                                    Marketingfee
                                </span>
                                <span> v.a. € 549 p/m</span>
                            </p>
                            <p className="flex text-[12px] sm:text-lg sm:mb-4">
                                <span className="w-1/2 mr-4 sm:w-[350px]">
                                    {' '}
                                    Totale investering
                                </span>
                                <span> € 80.000 - € 250.000*</span>
                            </p>
                            <p className="flex text-[12px] sm:text-lg sm:mb-4">
                                <span className="w-1/2 mr-4 sm:w-[350px]">
                                    Benodigd eigen vermogen
                                </span>
                                <span> 30% van de investering</span>
                            </p>
                            <p className="flex text-[12px] sm:text-lg sm:mb-4">
                                <span className="w-1/2 mr-4 sm:w-[350px]">
                                    Gemiddelde omzet
                                </span>
                                <span> € 550.000*</span>
                            </p>
                        </div>
                        <p className="mb-6 mt-6 text-[12px] sm:text-sm sm:font-semibold sm:mt-12">
                            *Deze gegevens zijn indicatief en zijn afhankelijk
                            van de vestiging. De entreefee, marketingfee en
                            formulebeheer zijn onderhevig aan prijswijzigingen.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full px-6 py-6 sm:py-12 bg-secondary sm:z-10 sm:relative sm:mb-[-150px] sm:mx-auto">
                    <div className="flex flex-col sm:max-w-[1100px] sm:mx-auto">
                        <h2 className="mb-2 text-2xl font-bold sm:text-3xl sm:mb-8">Hoe verder?</h2>
                        <p className="mb-6 sm:text-lg sm:font-semibold">
                            Ben je gepassioneerd en heb je de drive die wij
                            zoeken, en wil jij erachter komen of wij bieden wat
                            jij nodig hebt, vraag dan snel de brochure aan via
                            het contactformulier.
                        </p>
                        <Link
                            href="/#contactForm"
                            className="w-3/4 sm:w-1/2 px-8 py-2 sm:py-6 mt-4 sm:mt-12 text-xs sm:text-2xl font-bold text-primary rounded bg-[#FFF] ml-auto mr-auto text-center"
                        >
                            Contactformulier
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage
