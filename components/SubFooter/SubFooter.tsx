import { useState } from 'react'

export const SubFooter = () => {
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
            <div className="flex flex-col w-full px-6 py-6 bg-[#fff]">
                <h2 className="mb-6 text-3xl font-bold text-[#000]">
                    Open een BB Kitchen vestiging in 12 stappen!
                </h2>
            </div>
            <div className="relative flex flex-col w-full px-6 py-6 overflow-hidden">
                <h2 className="w-[55%] p-0 mb-6 text-xl font-bold">
                    Is jouw <span className="text-3xl font-bold">locatie</span>{' '}
                    de <span className="text-3xl font-bold">volgende</span>?
                </h2>
                <p className="w-1/2 mb-6 leading-4">
                    BB Kitchen heeft momenteel al meer dan 30 vestigingen! We
                    groeien, hopelijk ook met jou erbij!Wij streven naar 100 BB
                    Kitchen vestigingen.
                </p>
                <p className="w-1/2 mb-6 leading-4">
                    Vraag hieronder het informatiepakket aan en wij nemen zo
                    snel mogelijk contact met je op!
                </p>
                <img
                    className="absolute right-[0] top-[200px]"
                    src="/map.png"
                    alt="kaart van nederland met locaties"
                />
                <h3 className="mt-48 mb-6 text-base">Contactformulier</h3>
                <form onSubmit={handleFormSubmit} id="contactForm">
                    <div className="flex flex-col mb-6">
                        <input
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            type="text"
                            name="name"
                            placeholder="Naam + achternaam"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <input
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            type="text"
                            name="adres"
                            placeholder="Adres (straat + huisnummer)"
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <input
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            type="tel"
                            name="phone"
                            placeholder="Telefoonnummer"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <input
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            type="email"
                            name="email"
                            placeholder="E-mailadres"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <textarea
                            className="px-4 py-2 border border-gray-300 rounded text-[#000]"
                            name="message"
                            placeholder="Belangrijk om te weten"
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </div>
                    <button className="px-8 py-2 text-xs font-bold bg-secondary rounded text-[#fff]">
                        Verstuur
                    </button>
                </form>
            </div>
        </>
    )
}

export default SubFooter