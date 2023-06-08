import { useState } from 'react'
type SubFooterProps = {
    spacing?: boolean
}

export const SubFooter = ({ spacing }: SubFooterProps) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [address, setAddress] = useState('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value)
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    return (
        <>
            <div className="px-6 py-6 xl:py-12 bg-[#fff]">
                <div className={`flex flex-col w-full xl:max-w-[1400px] mx-auto ${spacing ? 'xl:mt-[125px]' : ''}`}>
                    <h2 className="mb-6 text-3xl font-bold text-[#363636] xl:text-5xl xl:mb-16 xl:mt-20">
                        Open een BB Kitchen vestiging in 12 stappen!
                    </h2>
                    <div className="xl:hidden">
                        <img
                            src="/part1.png"
                            alt="graphic"
                            className="w-full mt-4 mb-6"
                        />
                        <div className="flex flex-row w-full py-2 text-black">
                            <p className="text-[#161615] text-xs w-1/2 mr-4 font-medium">
                                1. Franchise brochure aanvragen via het
                                contactformulier.
                            </p>
                            <p className="text-[#161615] text-xs w-1/2 font-medium">
                                2. Wij nemen jouw aanvraag in behandeling.
                            </p>
                        </div>
                        <div className="flex flex-row w-full py-2 text-black">
                            <p className="text-[#161615] text-xs w-1/2 mr-4 font-medium">
                                3. Iemand van het werving en selectie team neemt
                                telefonisch contact op om kennis te maken.
                            </p>
                            <p className="text-[#161615] text-xs w-1/2 font-medium">
                                4. Je ontvangt de franchisebrochure per e-mail.
                            </p>
                        </div>
                        <img
                            src="/part2.png"
                            alt="graphic"
                            className="w-full mt-4 mb-6"
                        />
                        <div className="flex flex-row w-full py-2 text-black">
                            <p className="text-[#161615] text-xs w-1/2 mr-4 font-medium">
                                5. Er is een tweede contact moment voor extra
                                vragen en het inplannen van een
                                kennismakingsgesprek.
                            </p>
                            <p className="text-[#161615] text-xs w-1/2 font-medium">
                                6. Op ons hoofdkantoor krijg je een uitgebreide
                                presentatie en daarna gaan we sfeer en gerechten
                                proeven in onze BB Kitchen vestiging.
                            </p>
                        </div>
                        <div className="flex flex-row w-full py-2 text-black">
                            <p className="text-[#161615] text-xs w-1/2 mr-4 font-medium">
                                7. Evaluatie en geheimhoudingsverklaring.
                            </p>
                            <p className="text-[#161615] text-xs w-1/2 font-medium">
                                8. Rondleiding en proeven van producten in een
                                BB Kitchen vestiging.
                            </p>
                        </div>
                        <img
                            src="/part3.png"
                            alt="graphic"
                            className="w-full mt-4 mb-6"
                        />
                        <div className="flex flex-row w-full py-2 text-black">
                            <p className="text-[#161615] text-xs w-1/2 mr-4 font-medium">
                                9. Afspraak met werving en selectie en
                                franchisegever.
                            </p>
                            <p className="text-[#161615] text-xs w-1/2 font-medium">
                                10. Tekenen voorovereenkomst, tevens
                                intentieverklaring.
                            </p>
                        </div>
                        <div className="flex flex-row w-full py-2 text-black">
                            <p className="text-[#161615] text-xs w-1/2 mr-4 font-medium">
                                11. Start ﬁnanciering, locatie zoeken en
                                verbouwing.
                            </p>
                            <p className="text-[#161615] text-xs w-1/2 font-medium">
                                12. Opening BB Kitchen vestiging
                            </p>
                        </div>
                    </div>
                    <div className="hidden xl:flex xl:flex-col">
                        <img src="/graphicdesktop.png" alt="graphic" />
                        <hr className="border-b-1 border-[#A3A3A3] opacity-10 my-2" />
                        <div className="flex flex-row justify-around">
                            <div className="w-[30%]">
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    1. Franchise brochure aanvragen via het
                                    contactformulier.
                                </p>
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    2. Je ontvangt direct de BB Kitchen
                                    franchise brochure per e-mail.
                                </p>
                            </div>
                            <div className="px-4 w-[30%]">
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    3. Iemand van het werving en selectie team
                                    neemt telefonisch contact op om kennis te
                                    maken.
                                </p>
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    4. Je ontvangt een vragenformulier per
                                    e-mail.
                                </p>
                            </div>
                            <div className="w-[30%]">
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    5. Naar aanleiding van de ingevulde
                                    vragenlijst kijken we of er een match is.
                                </p>
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    6. We sturen je een uitgebreide franchise
                                    brochure met details over de ﬁnanciën van
                                    een BB Kitchen vestiging.
                                </p>
                            </div>
                        </div>
                        <img
                            src="/graphicdesktop2.png"
                            alt="graphic"
                            className="mt-10"
                        />
                        <hr className="border-b-1 border-[#A3A3A3] opacity-10 my-2" />
                        <div className="flex flex-row justify-around">
                            <div className="w-[30%]">
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    7. Indien er interesse van beide kanten is
                                    wordt de intentieovereenkomst gekeken.
                                </p>
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    8. We gaan kijken of er een locatie
                                    beschikbaar is, zo net gaan we direct op
                                    zoek.
                                </p>
                            </div>
                            <div className="px-4 w-[30%]">
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    9. Tweede afspraak met werving en selectie
                                    en franchisegever, bij voorkeur op een
                                    eventuele locatie
                                </p>
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    10. De koop, huur en franchiseovereenkomst
                                    worden getekend waarna de financierings-
                                    aanvraag ingediend wordt.
                                </p>
                            </div>
                            <div className="w-[30%]">
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    11. De verbouwing gaat van start, in deze
                                    tijd ga jij inwerken bij een bestaande BB
                                    Kitchen vestiging.
                                </p>
                                <p className="text-[#161615] mb-4 text-lg font-medium">
                                    12. Opening van jouw BB Kitchen vestiging!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col w-full px-6 py-6 xl:py-12 overflow-hidden xl:max-w-[1400px] mx-auto">
                <h2 className="w-[80%] p-0 mb-6 text-xl font-bold xl:text-2xl">
                    Is jouw <span className="text-3xl font-bold xl:text-5xl">locatie</span>
                    <br />
                    de <span className="text-3xl font-bold xl:text-5xl">volgende?</span>
                </h2>
                <p className="w-[40%] sm:w-[45%] mb-6 leading-4 text-[10px] font-medium xl:text-xl">
                    BB Kitchen heeft momenteel al meer dan 30 vestigingen! We
                    groeien, hopelijk ook met jou erbij!Wij streven naar 100 BB
                    Kitchen vestigingen.
                </p>
                <p className="w-[40%] sm:w-[45%] mb-6 leading-4 text-[10px] font-medium xl:text-xl">
                    Vraag hieronder het informatiepakket aan en wij nemen zo
                    snel mogelijk contact met je op!
                </p>
                <img
                    className="absolute right-[-10px] top-[110px] sm:top-[50px] z-[-1] w-[250px] sm:w-[350px] md:right-0 md:w-[550px] xl:w-[770px]"
                    src="/map.svg"
                    alt="kaart van nederland met locaties"
                />
                <img
                    className="w-[50px] mt-[25px] ml-[25px] md:ml-[100px] md:mt-[250px] md:w-[150px]"
                    src="/arrow.svg" 
                    alt="arrow"
                />
                <h3 className="mt-12 sm:mt-20 mb-6 text-base font-medium md:mt-[50px]">Contactformulier</h3>
                <form onSubmit={handleFormSubmit} id="contactForm">
                    <div className="flex flex-col mb-6 xl:w-max-[900px] xl:w-[900px]">
                        <input
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            type="text"
                            name="name"
                            placeholder="Naam + achternaam"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="flex flex-col mb-6 xl:w-max-[900px] xl:w-[900px]">
                        <input
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            type="text"
                            name="adres"
                            placeholder="Adres (straat + huisnummer)"
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </div>
                    <div className="flex flex-col mb-6 xl:w-max-[900px] xl:w-[900px]">
                        <input
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            type="tel"
                            name="phone"
                            placeholder="Telefoonnummer"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div className="flex flex-col mb-6 xl:w-max-[900px] xl:w-[900px]">
                        <input
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            type="email"
                            name="email"
                            placeholder="E-mailadres"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="flex flex-col mb-6 xl:w-max-[900px] xl:w-[900px]">
                        <textarea
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            name="message"
                            placeholder="Belangrijk om te weten"
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </div>
                    <button className="px-8 py-2 xl:px-16 xl:py-4 text-xs font-bold bg-secondary rounded text-[#fff]">
                        Verstuur
                    </button>
                </form>
            </div>
        </>
    )
}

export default SubFooter
