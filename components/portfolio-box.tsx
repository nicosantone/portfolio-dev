"use client"

import Image from "next/image"
import Link from "next/link"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/translations"

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo?: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { title, image, urlGithub, urlDemo } = data

    const { lang } = useLanguage()

  return (
    <div className="flex flex-col h-full p-4 border border-teal-50 rounded-xl">
        
        <div className="flex flex-col">
            <h3 className="mb-4 text-xl min-h-[56px] flex items-start">
                {translations[lang].portfolio.projects[title as keyof typeof translations["es"]["portfolio"]["projects"]] || title}
            </h3>

            <Image
                src={image}
                alt="Image product"
                width={200}
                height={200}
                className="w-full md:w-[200px] rounded-2xl h-auto"
            />
        </div>

        <div className="flex gap-5 mt-auto pt-5 justify-between">
            <Link
                href={urlGithub}
                target="_blank"
                className="flex-1 text-center p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
            >
                GitHub
            </Link>

            {urlDemo ? (
                <Link
                    href={urlDemo}
                    target="_blank"
                    className="flex-1 text-center p-2 transition duration-150 rounded-lg bg-[#F5741c] hover:bg-[#F5741c]/80"
                >
                    {translations[lang].portfolio.view}
                </Link>
            ) : (
                <div className="flex-1" />
            )}
        </div>

    </div>
  )
}

export default PortfolioBox