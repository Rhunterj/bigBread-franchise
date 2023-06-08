import Image from 'next/image'
import { useRouter } from 'next/router'

interface HeroProps {
    image: string
}

export const Hero = ({ image }: HeroProps) => {
    const { asPath } = useRouter()
    console.log(asPath)

    return (
        <div className="relative w-full h-64 border-t-4 border-white bg-gradient-to-t to-black xl:h-[700px]">
            <Image
                src={image}
                alt="Hero image"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#000]" />
            <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-1/2">
                <div className="flex flex-col items-center justify-center min-w-[50%] h-1/2">
                    <button className="px-8 py-2 mt-4 text-xs font-bold text-white rounded xl:text-lg bg-primary">
                        <a
                            href={
                                asPath === '/' || asPath === '/contact'
                                    ? '#contactForm'
                                    : '/#contactForm'
                            }
                        >
                            Vraag de brochure aan{' '}
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
