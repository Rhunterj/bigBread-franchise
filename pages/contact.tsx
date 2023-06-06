import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import SubFooter from '@/components/SubFooter/SubFooter'

export const AboutPage = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <Header />
            <Hero image="/Start.png" />
            <main>
                <div className="flex flex-col w-full px-6 py-6 xl:py-12">
                    <div className="xl:max-w-[1400px] mx-auto">
                        <h1 className="mb-6 text-2xl font-bold xl:text-5xl">
                            Jouw start
                        </h1>
                        <p className="mb-6 xl:text-xl xl:font-semibold">
                            Ons voornaamste doel is jouw een succesvolle
                            ondernemer te laten worden. Om die reden bieden wij
                            volledige begeleiding. Dat start bij BB Kitchen al
                            vanaf het moment dat wij jou alle informatie
                            toesturen. Gedurende jouw verkenningsproces staan
                            wij voor jou klaar om alle vragen te beantwoorden.
                            Hier nemen wij de tijd voor.
                        </p>
                        <p className="mb-6 xl:text-xl xl:font-semibold">
                            Samen met jou zoeken wij naar de ideale locatie of
                            toveren jouw locatie om tot een BB Kitchen. De
                            volledige ondersteuning gaat verder bij de opening
                            van jouw BB Kitchen vestiging en gedurende de
                            verdere bedrijfsvoering.
                        </p>
                        <p className="mb-6 xl:text-xl xl:font-semibold">
                            Wil je streekgerecht toevoegen aan het menu, ook dat
                            kan. Vrijheid is een van onze kernwaardes en wij
                            willen jou daar de ruimte voor geven. Wij steunen
                            onze initiatiefrijke ondernemers als dat jouw succes
                            ten goede komt.
                        </p>
                        <img
                            src="/StartContent.png"
                            alt="mensen"
                            className="w-full mb-6"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full px-6 py-6 xl:py-12 bg-primary mt-[-130px] xl:mt-[-200px]">
                    <div className="xl:max-w-[1400px] xl:w-full mx-auto">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <h2 className="mb-2 text-2xl font-bold pt-[100px]">
                                    Wij bieden
                                </h2>
                                <ul className="mb-6">
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Bewezen succesformule
                                    </li>
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Ondersteuning bij franchisenemerschap
                                    </li>
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Financieringsmogelijkheden
                                    </li>
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Sterke Professionele uitstraling en
                                        marketing
                                    </li>
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Inkoopvoordelen op producten en diensten
                                    </li>
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Ontzorging en ondersteuning
                                    </li>
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Ruimte voor eigen inbreng
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-2 text-2xl font-bold md:pt-[100px]">
                                    Wij vragen
                                </h2>
                                <ul className="mb-6">
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Initiatiefrijke doorpakkers
                                    </li>
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Flexibiliteit en creativiteit
                                    </li>
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Analytisch plannend vermogen
                                    </li>
                                    <li className="flex text-[12px] xl:font-semibold xl:text-xl leading-6">
                                        <img
                                            src="/checkmark.svg"
                                            className="object-contain pr-2 w-[21px]"
                                        />{' '}
                                        Sterke leidinggevende capaciteiten
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full px-6 py-6 xl:py-12">
                    <div className="xl:max-w-[1400px] mx-auto">
                        <h2 className="mb-2 text-2xl font-bold">
                            Franchisenemer worden?
                        </h2>
                        <div>
                            <p className="flex text-[12px] xl:font-semibold xl:text-xl">
                                <span className="w-1/2 mr-4 xl:w-[350px]">
                                    Entreegeld
                                </span>
                                <span> €10.000 (eenmalig)</span>
                            </p>
                            <p className="flex text-[12px] xl:font-semibold xl:text-xl">
                                <span className="w-1/2 mr-4 xl:w-[350px]">
                                    {' '}
                                    Formulebeheer
                                </span>
                                <span> 2,5% van de omzet p/m</span>
                            </p>
                            <p className="flex text-[12px] xl:font-semibold xl:text-xl">
                                <span className="w-1/2 mr-4 xl:w-[350px]">
                                    Marketingfee
                                </span>
                                <span> v.a. € 549 p/m</span>
                            </p>
                            <p className="flex text-[12px] xl:font-semibold xl:text-xl">
                                <span className="w-1/2 mr-4 xl:w-[350px]">
                                    {' '}
                                    Totale investering
                                </span>
                                <span> € 80.000 - € 250.000*</span>
                            </p>
                            <p className="flex text-[12px] xl:font-semibold xl:text-xl">
                                <span className="w-1/2 mr-4 xl:w-[350px]">
                                    Benodigd eigen vermogen
                                </span>
                                <span> 30% van de investering</span>
                            </p>
                            <p className="flex text-[12px] xl:font-semibold xl:text-xl">
                                <span className="w-1/2 mr-4 xl:w-[350px]">
                                    Gemiddelde omzet
                                </span>
                                <span> € 550.000*</span>
                            </p>
                        </div>
                        <p className="mb-6 mt-6 text-[12px] xl:text-xl xl:font-semibold">
                            *Deze gegevens zijn indicatief en zijn afhankelijk
                            van de vestiging. De entreefee, marketingfee en
                            formulebeheer zijn onderhevig aan prijswijzigingen.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full px-6 py-6 xl:py-12 bg-secondary xl:z-10 xl:relative xl:mb-[-150px] xl:mx-auto xl:w-[1400px]">
                    <div className="flex flex-col xl:max-w-[1400px]">
                        <h2 className="mb-2 text-2xl font-bold">Hoe verder?</h2>
                        <p className="mb-6 xl:text-xl xl:font-semibold">
                            Ben je gepassioneerd en heb je de drive die wij
                            zoeken, en wil jij erachter komen of wij bieden wat
                            jij nodig hebt, vraag dan snel de brochure aan via
                            het contactformulier.
                        </p>
                        <button
                            onClick={() => scrollTo('contactForm')}
                            className="w-3/4 xl:w-auto px-8 py-2 xl:py-6 mt-4 text-xs xl:text-2xl font-bold text-primary rounded bg-[#FFF] ml-auto mr-auto xl:text-[#fff] xl:bg-primary xl:rounded-full"
                        >
                            Contactforumlier
                        </button>
                    </div>
                </div>
            </main>
            <SubFooter spacing={true} />
            <Footer />
        </>
    )
}

export default AboutPage
