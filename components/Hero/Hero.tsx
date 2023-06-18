import Image from 'next/image'

interface HeroProps {
    image: string
}

export const Hero = ({ image }: HeroProps) => {
    return (
        <div className="relative w-full h-64 border-t-4 border-white bg-gradient-to-t to-black xl:h-[700px]">
            <Image
                src={image}
                alt="Hero image"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1c1c1c]" />
            <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-1/2">
                <div className="flex flex-col items-center justify-center min-w-[50%] h-1/2">
                    <a
                        className="px-8 py-2 mt-4 text-xs font-bold text-white rounded-[10px] xl:text-3xl bg-primary xl:py-6"
                        href="/#contactForm"
                    >
                        Vraag de brochure aan{' '}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
