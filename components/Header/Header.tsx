import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-full px-6 py-6 bg-black md:max-w-[1400px] mx-auto">
            <div className="flex items-center w-[150px] md:w-[200px] relative h-[40px] md:h-[60px]">
                <Link href="/">
                    <Image
                        src="/logo1.svg"
                        alt="Big bread logo"
                        fill
                        priority
                    />
                </Link>
            </div>
            <div className="flex flex-col text-right md:flex-row">
                <Link className="mb-2 text-xs md:mr-10" href="/about">Over BB Kitchen</Link>
                <Link className="text-xs" href="/contact">Franchisenemer worden?</Link>
            </div>
        </header>
    )
}

export default Header
