import Link from 'next/link'

export const Footer = () => {
    return (
        <>
            <div className="bg-secondary w-full h-[20px]"></div>

            <footer className="flex flex-col items-center justify-center w-full px-6 py-6 mb-8 bg-black border-t-4 border-white">
                <div className="flex justify-between w-full xl:max-w-[80%] xl:flex-col xl:mt-12">
                    <div className="flex flex-col w-[45%]">
                        <a
                            className="text-[14px] xl:text-[28px] xl:leading-7 mb-2 xl:mb-10"
                            href="mailto:info@bbkitchen.nl"
                        >
                            info@bbkitchen.nl
                        </a>
                        <Link className="text-[14px] xl:text-[28px] xl:leading-7 mb-2 xl:mb-10" href="/faq">
                            Veelgestelde vragen
                        </Link>
                        <Link className="text-[14px] xl:text-[28px] xl:leading-7 mb-2 xl:mb-10" href="/disclaimer">
                            Disclaimer
                        </Link>
                        <Link className="text-[14px] xl:text-[28px] xl:leading-7" href="/privacy">
                            Privacy
                        </Link>
                    </div>
                    <div className="flex flex-col w-[53%] ml-2 xl:ml-0 xl:w-full xl:flex-row xl:justify-between xl:items-end">
                        <div className="flex flex-col mb-4 xl:mb-0 xl:order-2">
                            <h4 className="font-semibold xl:text-[42px] xl:leading-[57px]">
                                Blijf op de hoogte <br />via onze nieuwsbrief
                            </h4>
                            <div className="flex">
                                <input
                                    className="w-full px-2 py-1 mt-2 text-xs text-black bg-white rounded-l xl:py-4"
                                    type="text"
                                    placeholder="naam@email.nl"
                                />
                                <button className="w-4/5 mt-2 text-xs font-bold text-white rounded-r bg-primary xl:w-2/5 xl:text-xl">
                                    Verstuur
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between xl:order-1 xl:mt-24">
                            <p className="mr-4 xl:text-[28px] xl:font-semibold">Volg ons op</p>
                            <div className="flex grow-[2]">
                                <a
                                    href="https://www.facebook.com/BBKitchenNL/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-[5px]"
                                >
                                    <img
                                        src="/facebook.svg"
                                        alt="Facebook logo"
                                        className=" w-[16px] h-[16px] xl:w-[50px] xl:h-[50px] xl:mr-2"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/bbkitchen.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-[5px]"
                                >
                                    <img
                                        src="/instagram.svg"
                                        alt="Instagram logo"
                                        className=" w-[16px] h-[16px] xl:w-[50px] xl:h-[50px] xl:mr-2"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/bbkitchen.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mr-[5px]"
                                >
                                    <img
                                        src="/linkedin.svg"
                                        alt="linkedin logo"
                                        className=" w-[16px] h-[16px] xl:w-[50px] xl:h-[50px] xl:mr-2"
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/bbkitchen.nl/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="/tiktok.svg"
                                        alt="tiktok logo"
                                        className="w-[16px] h-[16px] xl:w-[50px] xl:h-[50px] xl:mr-2"
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
