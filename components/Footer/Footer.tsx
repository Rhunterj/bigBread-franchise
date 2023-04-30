import Link from 'next/link'

export const Footer = () => {
    return (
        <>
            <div className="bg-secondary w-full h-[20px]"></div>

            <footer className="flex flex-col items-center justify-center w-full px-6 py-6 mb-8 bg-black border-t-4 border-white">
                <div className="flex justify-between w-full">
                    <div className="flex flex-col w-1/2 mt-6">
                        <a
                            className="text-[9px] mb-2"
                            href="mailto:info@bbkitchen.nl"
                        >
                            info@bbkitchen.nl
                        </a>
                        <Link className="text-[9px] mb-2" href="/faq">
                            Veelgestelde vragen
                        </Link>
                        <Link className="text-[9px] mb-2" href="/disclaimer">
                            Disclaimer
                        </Link>
                        <Link className="text-[9px] mb-2" href="/privacy">
                            Privacy
                        </Link>
                    </div>
                    <div className="w-1/2">
                        <h4 className="font-bold">
                            Blijf op de hoogte via onze nieuwsbrief
                        </h4>
                        <div className="flex mb-4">
                            <input
                                className="w-full px-2 py-1 mt-2 text-xs text-black bg-white rounded-l"
                                type="text"
                                placeholder="naam@email.nl"
                            />
                            <button className="w-4/5 mt-2 text-xs font-bold text-white rounded-r bg-primary">
                                Verstuur
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="mr-4">Volg ons op</p>
                            <div className="flex justify-between grow-[2]">
                                <a
                                    href="https://www.facebook.com/BBKitchenNL/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="/facebook.png"
                                        alt="Facebook logo"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/bbkitchen.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="/instagram.png"
                                        alt="Instagram logo"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/bbkitchen.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="/linkedin.png"
                                        alt="linkedin logo"
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/bbkitchen.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src="/tiktok.png" alt="tiktok logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
