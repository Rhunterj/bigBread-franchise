import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-full px-6 py-6 bg-black border-b-4 border-white">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Big bread logo"
                        width={180}
                        height={37}
                        priority
                    />
                </Link>
            </div>
            <div className="flex flex-col text-right">
                <Link className="mb-2 text-xs" href="/about">Over BB Kitchen</Link>
                <Link className="text-xs" href="/contact">Franchisenemer worden?</Link>
            </div>
        </header>
    )
}

export default Header
