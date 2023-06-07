import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-full px-6 py-6 bg-black xl:max-w-[1400px] mx-auto">
            <div className="flex items-center w-[135px] xl:w-[270px] relative h-[35px] xl:h-[70px]">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Big bread logo"
                        fill
                        priority
                    />
                </Link>
            </div>
            <div className="flex flex-col text-right xl:flex-row">
                <Link className="mb-2 text-xs xl:mr-10" href="/about">Over BB Kitchen</Link>
                <Link className="text-xs" href="/contact">Franchisenemer worden?</Link>
            </div>
        </header>
    )
}

export default Header
