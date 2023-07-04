import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'

export const FaqPage = () => {
    return (
        <>
            <Header />
            <Hero image="/Faq.jpg" position="top" />
            <main>
                <div className="flex flex-col w-full px-6 py-6 sm:py-12">
                    <div className="sm:max-w-[1100px] mx-auto w-full">
                        <h1 className="mb-6 text-2xl font-bold sm:text-4xl">
                            Veel gestelde vragen
                        </h1>
                        <img
                            src="/FaqContent.jpg"
                            alt="mensen"
                            className="w-full mb-6"
                        />
                        <div className="mx-auto bg-white min-h-sceen">
                            <div className="grid mx-auto mt-8 divide-y divide-neutral-200">
                                <div className="">
                                    <details className="group">
                                        <summary className="flex items-center justify-between font-medium list-none cursor-pointer group-open:bg-secondary">
                                            <span className="p-2 sm:text-lg">
                                                Hoeveel eigen geld moet ik
                                                inbrengen?
                                            </span>
                                            <span className="transition group-open:rotate-180">
                                                <svg
                                                    fill="none"
                                                    height="24"
                                                    shapeRendering="geometricPrecision"
                                                    stroke="#ACC90B"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    className="group-open:stroke-[#fff]"
                                                >
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-3 mb-3 text-sm sm:text-sm text-neutral-600 group-open:animate-fadeIn">
                                            Je dient ongeveer 30% eigen geld in
                                            te brengen van de totale
                                            investering. Deze ligt tussen de €
                                            80.000,- en € 250.000,-. Wij bieden
                                            uitstekende
                                            financieringsmogelijkheden en denken
                                            graag met je mee. Daarnaast betaal
                                            je eenmalig € 10.000,- entreefee.
                                        </p>
                                    </details>
                                </div>
                                <div className="">
                                    <details className="group">
                                        <summary className="flex items-center justify-between font-medium list-none cursor-pointer group-open:bg-secondary">
                                            <span className="p-2 sm:text-lg">
                                                Ik heb al een eigen locatie, kan
                                                ik dan ook bij BB Kitchen
                                                terecht?
                                            </span>
                                            <span className="transition group-open:rotate-180">
                                                <svg
                                                    fill="none"
                                                    height="24"
                                                    shapeRendering="geometricPrecision"
                                                    stroke="#ACC90B"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    className="group-open:stroke-[#fff]"
                                                >
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-3 mb-3 text-sm sm:text-sm text-neutral-600 group-open:animate-fadeIn">
                                            Als je een eigen locatie hebt zullen
                                            wij een marktonderzoek uitvoeren.
                                            Als de bevindingen positief zijn
                                            kunnen we jouw locatie omtoveren tot
                                            een prachtige BB Kitchen. De
                                            investeringen zullen dan een stuk
                                            lager zijn.
                                        </p>
                                    </details>
                                </div>
                                <div className="">
                                    <details className="group">
                                        <summary className="flex items-center justify-between font-medium list-none cursor-pointer group-open:bg-secondary">
                                            <span className="p-2 sm:text-lg">
                                                Hoe en waarom wordt de marketing
                                                voor mij geregeld?
                                            </span>
                                            <span className="transition group-open:rotate-180">
                                                <svg
                                                    fill="none"
                                                    height="24"
                                                    shapeRendering="geometricPrecision"
                                                    stroke="#ACC90B"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    className="group-open:stroke-[#fff]"
                                                >
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-3 mb-3 text-sm sm:text-sm text-neutral-600 group-open:animate-fadeIn">
                                            Om onze huisstijl te waarborgen is
                                            het noodzakelijk om alle uitingen op
                                            dezelfde en juiste manier naar
                                            buiten te brengen. Samen met ons
                                            marketingbureau blijven we op de
                                            hoogte van alle trends en spelen
                                            hier op in via diverse kanalen zodat
                                            we een brede doelgroep bereiken.
                                            Maar mocht je eigen ideeën hebben
                                            voor jouw zaak, dan staan wij
                                            daarvoor open.
                                        </p>
                                    </details>
                                </div>
                                <div className="">
                                    <details className="group">
                                        <summary className="flex items-center justify-between font-medium list-none cursor-pointer group-open:bg-secondary">
                                            <span className="p-2 sm:text-lg">
                                                Hoe is de inkoop geregeld?
                                                Regelt BB Kitchen dat of ikzelf?
                                            </span>
                                            <span className="transition group-open:rotate-180">
                                                <svg
                                                    fill="none"
                                                    height="24"
                                                    shapeRendering="geometricPrecision"
                                                    stroke="#ACC90B"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    className="group-open:stroke-[#fff]"
                                                >
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-3 mb-3 text-sm sm:text-sm text-neutral-600 group-open:animate-fadeIn">
                                            Ook met betrekking tot de inkoop
                                            hebben wij goede prijsafspraken.
                                            Hierdoor zijn wij in staat jou een
                                            goede prijsgarantie te bieden. Wij
                                            helpen jou met de eerste paar
                                            bestelling totdat je genoeg
                                            zelfvertrouwen hebt om dit zelf te
                                            doen. Daarnaast stellen wij jou
                                            voortdurend op de hoogte van alle
                                            lopende acties.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default FaqPage
