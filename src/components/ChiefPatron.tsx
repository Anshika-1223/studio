import Image from 'next/image'
import React from 'react'

const ChiefPatron = () => {
    return (
        <>
            <section id="prizes" className="py-16 mx-auto overflow-hidden flex flex-col justify-center items-center">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
                        Chief Patron
                    </h2>
                </div>

                <div className="flex justify-center">
                    <div className="bg-card border glow-hover items-center p-16 rounded-xl transition-all duration-500 overflow-hidden">
                        <h1 className="text-5xl font-bold flex flex-col justify-center items-center gap-4">Dr. Mayank Aggarwal
                            <span className='text-2xl'>Managing Director</span></h1>
                    </div>
                </div>
            </section>

            {/* //Patrons */}
            <section id="prizes" className="py-16 mx-auto overflow-hidden flex flex-col justify-center items-center">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
                        Patrons
                    </h2>
                </div>

                <div className="flex justify-center gap-5">
                    <div className="bg-card border glow-hover items-center p-16 rounded-xl transition-all duration-500 overflow-hidden">
                        <h1 className="text-4xl font-bold flex flex-col justify-center items-center gap-4">Dr. Mayank Aggarwal
                            <span className='text-2xl'>Managing Director</span></h1>
                    </div>
                    <div className="bg-card border glow-hover items-center p-16 rounded-xl transition-all duration-500 overflow-hidden">
                        <h1 className="text-4xl font-bold flex flex-col justify-center items-center gap-4">Dr. Mayank Aggarwal
                            <span className='text-2xl'>Managing Director</span></h1>
                    </div>
                </div>
            </section>

            <section id="prizes" className="py-16 mx-auto overflow-hidden flex flex-col justify-center items-center">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
                        Convenor
                    </h2>
                </div>

                <div className="flex justify-center gap-5">
                    <div className="bg-card border glow-hover items-center p-16 rounded-xl transition-all duration-500 overflow-hidden">
                        <h1 className="text-4xl font-bold flex flex-col justify-center items-center gap-2">Prof. (Dr) Seema Nayak
                            <span className='text-2xl'>Dean IQAC</span>
                            <span className='text-2xl'>IIMT College of Engineering</span></h1>
                    </div>
                </div>
            </section>

            <section id="prizes" className="py-16 mx-auto overflow-hidden flex flex-col justify-center items-center">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
                        Co-ordinator
                    </h2>
                </div>

                <div className="flex justify-center gap-5">
                    <div className="bg-card border glow-hover items-center p-16 rounded-xl transition-all duration-500 overflow-hidden">
                        <h1 className="text-4xl font-bold flex flex-col justify-center items-center gap-2">Prof. (Dr) Seema Nayak
                            <span className='text-2xl'>Dean IQAC</span>
                            <span className='text-2xl'>IIMT College of Engineering</span></h1>
                    </div>
                    <div className="bg-card border glow-hover items-center p-16 rounded-xl transition-all duration-500 overflow-hidden">
                        <h1 className="text-4xl font-bold flex flex-col justify-center items-center gap-2">Prof. (Dr) Seema Nayak
                            <span className='text-2xl'>Dean IQAC</span>
                            <span className='text-2xl'>IIMT College of Engineering</span></h1>
                    </div>
                </div>
            </section>

            <section id="prizes" className="py-16 mx-auto overflow-hidden flex flex-col justify-center items-center">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase font-headline section-underline">
                        Supported By
                    </h2>
                </div>

                <div className="flex justify-center gap-5">
                    <div className="bg-card border glow-hover items-center p-16 rounded-xl transition-all duration-500 overflow-hidden flex gap-16">
                        <Image
                            src={'/Csi_logo_india.webp'}
                            height={150}
                            width={150}
                            alt='logo'
                        />
                        <Image
                            src={'/ashare.webp'}
                            height={150}
                            width={150}
                            alt='logo'
                        />
                        <Image
                            src={'/iste.webp'}
                            height={150}
                            width={150}
                            alt='logo'
                        />
                        <Image
                            src={'/ishare.webp'}
                            height={150}
                            width={150}
                            alt='logo'
                        />
                        <Image
                            src={'/ieee.webp'}
                            height={150}
                            width={150}
                            alt='logo'
                        />
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChiefPatron