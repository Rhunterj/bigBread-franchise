import Link from 'next/link'

export const Footer = () => {
    return (
        <>
            <div className="bg-secondary w-full h-[20px]"></div>

            <footer className="flex flex-col items-center justify-center w-full px-6 py-6 mb-8 bg-black border-t-4 border-white">
                <div className="flex justify-between w-full md:max-w-[1400px] md:flex-col">
                    <div className="flex flex-col w-[45%]">
                        <a
                            className="text-[14px] mb-2"
                            href="mailto:info@bbkitchen.nl"
                        >
                            info@bbkitchen.nl
                        </a>
                        <Link className="text-[14px] mb-2" href="/faq">
                            Veelgestelde vragen
                        </Link>
                        <Link className="text-[14px] mb-2" href="/disclaimer">
                            Disclaimer
                        </Link>
                        <Link className="text-[14px]" href="/privacy">
                            Privacy
                        </Link>
                    </div>
                    <div className="flex flex-col w-[53%] ml-2 md:ml-0 md:w-full md:flex-row md:justify-between md:items-end">
                        <div className="flex flex-col mb-4 md:mb-0 md:order-2">
                            <h4 className="font-semibold">
                                Blijf op de hoogte via onze nieuwsbrief
                            </h4>
                            <div className="flex">
                                <input
                                    className="w-full px-2 py-1 mt-2 text-xs text-black bg-white rounded-l md:py-2"
                                    type="text"
                                    placeholder="naam@email.nl"
                                />
                                <button className="w-4/5 mt-2 text-xs font-bold text-white rounded-r bg-primary">
                                    Verstuur
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between md:order-1">
                            <p className="mr-4 md:text-sm">Volg ons op</p>
                            <div className="flex grow-[2]">
                                <a
                                    href="https://www.facebook.com/BBKitchenNL/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-[5px]"
                                >
                                    <img
                                        src="/facebook.png"
                                        alt="Facebook logo"
                                        className=" md:w-[20px] md:h-[20px]"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/bbkitchen.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-[5px]"
                                >
                                    <img
                                        src="/instagram.png"
                                        alt="Instagram logo"
                                        className=" md:w-[20px] md:h-[20px]"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/bbkitchen.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-[5px]"
                                >
                                    <img
                                        src="/linkedin.png"
                                        alt="linkedin logo"
                                        className=" md:w-[20px] md:h-[20px]"
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/bbkitchen.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="/tiktok.png"
                                        alt="tiktok logo"
                                        className="md:w-[20px] md:h-[20px]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
