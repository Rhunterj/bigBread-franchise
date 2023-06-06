import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'

export const AboutPage = () => {
    return (
        <>
            <Header />
            <Hero image="/About.png" />
            <main>
                <div className="flex flex-col w-full px-6 py-6 xl:py-12">
                    <div className="xl:max-w-[1400px] mx-auto">
                         <h1 className="mb-6 text-2xl font-bold xl:text-5xl">Onze start</h1>
                        <p className="mb-6 xl:font-semibold xl:text-xl">
                            BB Kitchen is opgericht in 2008 door Sheng Chen.
                            Vanuit zijn horeca-ervaring is hij in 2003 gestart
                            met een cafetaria in Tiel. Een tweede vestiging
                            volgde snel. Zijn ideeën over producten, marketing
                            en gastvrijheid vielen op. BB Kitchen werd een feit.
                        </p>
                        <p className="mb-6 xl:font-semibold xl:text-xl">
                            Vanuit het hoofdkantoor in Tiel ondersteunt en
                            monitort hij samen met zijn team de aangesloten
                            franchisenemers dagelijks. Proactief handelen zorgt
                            ervoor dat ook zij succesvol kunnen zijn. Kennis
                            delen maakt je samen sterk. En dat is waar onze
                            formule om draait.
                        </p>
                        <img
                            src="/AboutContent.png"
                            alt="BB Kitchen"
                            className="w-full mb-6"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full px-6 py-6 xl:py-12 bg-[#FFF] mt-[-130px]">
                    <div className="xl:max-w-[1400px] mx-auto">
                        <h2 className="mb-6 text-2xl font-bold text-[#000] pt-[100px]">
                            Over BB Kitchen
                        </h2>
                        <p className="mb-6 text-[#000] xl:font-semibold xl:text-xl">
                            Bij BB Kitchen kunnen onze gasten afhalen, laten
                            bezorgen en plaatsnemen in het restaurant. Wij
                            bieden een ruim, gezond, smaakvol en kwalitatief
                            aanbod aan gerechten en dranken. Wij staan bekend om
                            de warmte die BB Kitchen uitstraalt en waarbij jij
                            je welkom voelt bij binnenkomst. Het interieur is
                            dusdanig uitnodigend dat men liever binnen blijft
                            eten in plaats van gaat afhalen. Ons assortiment is
                            luxer dan een doorsnee cafetaria, daarnaast
                            onderscheiden wij ons met onze beroemde
                            Kitchenburgerlijn.
                        </p>
                        <p className="mb-6 text-[#000] xl:font-semibold xl:text-xl">
                            Daarnaast zijn wij technologisch vooruitstrevend
                            maar als één van de weinige restaurants wordt je bij
                            BB Kitchen nog steeds persoonlijk bediend. Dat
                            vinden onze klanten fijn.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row">
                    <div className="flex flex-col w-full px-6 py-6 xl:py-12 bg-primary">
                        <div className="xl:max-w-[700px] mx-auto">
                            <h2 className="mb-4 text-2xl font-bold">
                                Onze missie
                            </h2>
                            <p className="mb-6 xl:text-xl">
                                Wij zijn BB Kitchen, een fastservice formule met
                                een warme en sfeervolle uitstraling, waar wij
                                inspelen op de veranderende markt door
                                technologische innovatie te verbinden met
                                persoonlijke bediening waar iedereen zich welkom
                                voelt.
                            </p>
                            <p className="mb-6 xl:text-xl">
                                Wij willen onze klanten voorzien van een ruim,
                                gezond, smaakvol en kwalitatief aanbod aan
                                gerechten en dranken.
                            </p>
                            <h2 className="mb-4 text-2xl font-bold">
                                Onze visie
                            </h2>
                            <p className="mb-6 xl:text-xl">
                                In 2023 willen wij groeien en meer bekendheid
                                genereren door 8 vestigingen erbij te openen en
                                streven naar een landelijke dekking met als
                                focus de Randstad. Om de continuïteit van onze
                                succesformule te waarborgen staan wij voor
                                gepassioneerd ondernemerschap, samenwerking,
                                vernieuwing en vrijheid.
                            </p>
                            <p className="mb-6 xl:text-xl">
                                Door optimale ondersteuning, begeleiding en open
                                te staan voor persoonlijke inbreng willen wij
                                samen met onze vestigingen groeien en
                                gezamenlijk succes creëren. Zodoende kunnen wij
                                onze klanten van nog betere service voorzien.
                            </p>
                        </div>
                    </div>
                    <img src="/AboutFooter.png" alt="Icetea" className="w-full xl:max-w-[700px]" />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage
