"use client"

import Image from 'next/image'
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation'

import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";


const introduction = () => {
    const { lang } = useLanguage();

  return (
    <div className='z-20 w-full bg-[#131424]/60'>
        <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 -mt-10 md:mt-0'>
            <Image src="/mario.png" priority width="600" height="600" alt="Profile pic" />

            <div className='flex flex-col justify-center max-w-md -mt-15 md:mt-0'>
                <h1 className='mb-5 text-2xl leaden-tight text-center md:text-left md:text-4xl md:mb-10'>
                    {translations[lang].home.title}
                    
                    <TypeAnimation
                        sequence={[
                        "Full Stack",
                        1000,
                        "Frontend",
                        1000,
                        "Backend",
                        1000,
                        ]}
                        wrapper='span' 
                        speed={50}
                        repeat={Infinity}
                        className='block font-bold text-[#F5741c]'
                    />
                </h1>

                <p className='mx-auto mb-2 text-base md:text-xl md:mx-0 md:mb-8 leading-relaxed max-w-md'>
                    {lang === "es" ? (
                        <>
                            Soy estudiante de Análisis de Sistemas y desarrollador web full stack. Construyo aplicaciones desde cero, buscando que el diseño y la lógica funcionen como un todo.
                            <br />
                            Priorizo entender cada problema antes de resolverlo, con un enfoque en soluciones simples, claras y bien estructuradas.
                        </>
                    ) : (
                        <>
                            I am a Systems Analysis student and a full stack web developer. I build web applications from scratch, focusing on both design and logic working together.
                            <br />
                            I prioritize understanding each problem before solving it, aiming for simple, clear and well-structured solutions.
                        </>
                    )}
                </p>

                <div className='flex item-center justify-center gap-4 md:justify-start md:gap-10'>
                    <Link href="/portfolio" className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                        {translations[lang].home.projects}
                    </Link>
                    <Link href="/contact" className='px-3 py-2 transition-all border-2 cursor-pointer text-[#F5741c] border-[#F5741c] text-md w-fit rounded-xl hover:shadow-xl hover:shadow-[#F5741c]/50'>
                        {translations[lang].home.contact}
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default introduction