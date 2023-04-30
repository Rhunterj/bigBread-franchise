import Image from 'next/image'

interface HeroProps {
    image: string
}

export const Hero = ({ image }: HeroProps) => {
    return (
        <div className="relative w-full h-64 bg-gradient-to-t to-black">
            <Image
                src={image}
                alt="Hero image"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#575757]" />
            <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-1/2">
                <div className="flex flex-col items-center justify-center w-1/2 h-1/2">
                    <button className="px-8 py-2 mt-4 text-xs font-bold text-white rounded bg-primary">
                        Vraag de brochure aan{' '}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hero
