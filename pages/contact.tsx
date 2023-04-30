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
            <Hero image="/contact.png" />
            <main>
                <div className="flex flex-col w-full px-6 py-6">
                    <h1 className="mb-6 text-2xl font-bold">Jouw start</h1>
                    <p className="mb-6">
                        Ons voornaamste doel is jouw een succesvolle ondernemer
                        te laten worden. Om die reden bieden wij volledige
                        begeleiding. Dat start bij BB Kitchen al vanaf het
                        moment dat wij jou alle informatie toesturen. Gedurende
                        jouw verkenningsproces staan wij voor jou klaar om alle
                        vragen te beantwoorden. Hier nemen wij de tijd voor.
                    </p>
                    <p className="mb-6">
                        Samen met jou zoeken wij naar de ideale locatie of
                        toveren jouw locatie om tot een BB Kitchen. De volledige
                        ondersteuning gaat verder bij de opening van jouw BB
                        Kitchen vestiging en gedurende de verdere
                        bedrijfsvoering.
                    </p>
                    <p className="mb-6">
                        Wil je streekgerecht toevoegen aan het menu, ook dat
                        kan. Vrijheid is een van onze kernwaardes en wij willen
                        jou daar de ruimte voor geven. Wij steunen onze
                        initiatiefrijke ondernemers als dat jouw succes ten
                        goede komt.
                    </p>
                    <img
                        src="/mensen.png"
                        alt="mensen"
                        className="w-full mb-6"
                    />
                </div>
                <div className="flex flex-col w-full px-6 py-6 bg-primary mt-[-130px]">
                    <h2 className="mb-2 text-2xl font-bold pt-[100px]">
                        Wij bieden
                    </h2>
                    <ul className="mb-6">
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Bewezen succesformule
                        </li>
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Ondersteuning bij franchisenemerschap
                        </li>
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Financieringsmogelijkheden
                        </li>
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Sterke Professionele uitstraling en marketing
                        </li>
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Inkoopvoordelen op producten en diensten
                        </li>
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Ontzorging en ondersteuning
                        </li>
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Ruimte voor eigen inbreng
                        </li>
                    </ul>
                    <h2 className="mb-2 text-2xl font-bold">Wij vragen</h2>
                    <ul className="mb-6">
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Initiatiefrijke doorpakkers
                        </li>
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Flexibiliteit en creativiteit
                        </li>
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Analytisch plannend vermogen
                        </li>
                        <li className="flex">
                            <img
                                src="/checkmark.png"
                                className="object-contain pr-2"
                            />{' '}
                            Sterke leidinggevende capaciteiten
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col w-full px-6 py-6">
                    <h2 className="mb-2 text-2xl font-bold">
                        Franchisenemer worden?
                    </h2>
                    <div>
                        <p className="flex justify-between text-[12px]">
                            Entreegeld<span> €10.000 (eenmalig)</span>
                        </p>
                        <p className="flex justify-between text-[12px]">
                            Formulebeheer
                            <span> 2,5% van de omzet p/m</span>
                        </p>
                        <p className="flex justify-between text-[12px]">
                            Marketingfee<span> v.a. € 549 p/m</span>
                        </p>
                        <p className="flex justify-between text-[12px]">
                            Totale investering
                            <span> € 80.000 - € 250.000*</span>
                        </p>
                        <p className="flex justify-between text-[12px]">
                            Benodigd eigen vermogen
                            <span> 30% van de investering</span>
                        </p>
                        <p className="flex justify-between text-[12px]">
                            Gemiddelde omzet<span> € 550.000*</span>
                        </p>
                    </div>
                    <p className="mb-6 mt-6 text-[8px]">
                        *Deze gegevens zijn indicatief en zijn afhankelijk van
                        de vestiging. De entreefee, marketingfee en
                        formulebeheer zijn onderhevig aan prijswijzigingen.
                    </p>
                </div>
                <div className="flex flex-col w-full px-6 py-6 bg-secondary">
                    <h2 className="mb-2 text-2xl font-bold">Hoe verder?</h2>
                    <p className="mb-6">
                        Ben je gepassioneerd en heb je de drive die wij zoeken,
                        en wil jij erachter komen of wij bieden wat jij nodig
                        hebt, vraag dan snel de brochure aan via het
                        contactformulier.
                    </p>
                    <button
                        onClick={() => scrollTo('contactForm')}
                        className="px-8 py-2 mt-4 text-xs font-bold text-primary rounded bg-[#FFF]"
                    >
                        Contactforumlier
                    </button>
                </div>
            </main>
            <SubFooter />
            <Footer />
        </>
    )
}

export default AboutPage
