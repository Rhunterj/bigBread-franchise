import Link from 'next/link'

export const Footer = () => {
    return (
        <>
            <div className="bg-secondary w-full h-[20px]"></div>

            <footer className="flex flex-col items-center justify-center w-full px-6 py-6 mb-8 bg-black border-t-4 border-white">
                <div className="flex justify-between w-full sm:max-w-[1100px] lg:flex-col sm:mt-12">
                    <div className="flex flex-col w-[45%]">
                        <a
                            className="text-[14px] sm:text-lg sm:leading-5 mb-2 sm:mb-10"
                            href="mailto:info@bigbread.nl"
                        >
                            info@bigbread.nl
                        </a>
                        <Link className="text-[14px] sm:text-lg sm:leading-5 mb-2 sm:mb-10" href="/faq">
                            Veelgestelde vragen
                        </Link>
                        <Link className="text-[14px] sm:text-lg sm:leading-5 mb-2 sm:mb-10" target="_blank" href="/disclaimer.pdf">
                            Disclaimer
                        </Link>
                        <Link className="text-[14px] sm:text-lg sm:leading-5" target="_blank" href="/privacy.pdf">
                            Privacy
                        </Link>
                    </div>
                    <div className="flex flex-col w-[53%] ml-2 sm:ml-0 lg:w-full lg:flex-row lg:justify-between lg:items-end">
                        <div className="flex flex-col mb-4 lg:mb-0 lg:order-2">
                            <h4 className="font-semibold sm:text-2xl">
                                Blijf op de hoogte <br />via onze nieuwsbrief
                            </h4>
                            <div className="flex">
                                <input
                                    className="w-full px-2 py-1 mt-2 text-xs text-[#000] bg-white rounded-l sm:py-4"
                                    type="text"
                                    placeholder="naam@email.nl"
                                />
                                <button className="w-4/5 mt-2 text-xs font-bold text-white rounded-r bg-primary sm:w-2/5 sm:text-sm">
                                    Verstuur
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between sm:order-1 sm:mt-24">
                            <p className="mr-4 sm:text-lg sm:font-semibold">Volg ons op</p>
                            <div className="flex grow-[2]">
                                <a
                                    href="https://www.facebook.com/bbknederland"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-[5px]"
                                >
                                    <img
                                        src="/facebook.svg"
                                        alt="Facebook logo"
                                        className=" w-[16px] h-[16px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] sm:mr-2"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/bigbreadkitchen/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-[5px]"
                                >
                                    <img
                                        src="/instagram.svg"
                                        alt="Instagram logo"
                                        className=" w-[16px] h-[16px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] sm:mr-2"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/big-bread-groep-21045b117/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-[5px]"
                                >
                                    <img
                                        src="/linkedin.svg"
                                        alt="linkedin logo"
                                        className=" w-[16px] h-[16px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] sm:mr-2"
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@bigbreadkitchen"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="/tiktok.svg"
                                        alt="tiktok logo"
                                        className="w-[16px] h-[16px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] sm:mr-2"
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
