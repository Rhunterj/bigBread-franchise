import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-full px-6 py-6 bg-black xl:max-w-[80%] mx-auto xl:h-[220px]">
            <div className="flex items-center w-[135px] xl:w-[600px] relative h-[35px] xl:h-[120px]">
                <Link href="/">
                    <Image
                        src="/logoDesktop.svg"
                        alt="Big bread logo"
                        fill
                        priority
                    />
                </Link>
            </div>
            <div className="flex flex-col text-right xl:flex-row">
                <Link className="mb-2 text-xs xl:mr-10 xl:text-2xl" href="/about">Over BB Kitchen</Link>
                <Link className="text-xs xl:text-2xl" href="/contact">Franchisenemer worden?</Link>
            </div>
        </header>
    )
}

export default Header
