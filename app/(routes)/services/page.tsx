"use client"

import AvatarServices from "@/components/avatar-services"
import CircleImage from "@/components/circle-image"
import SliderServices from "@/components/slider-services"
import TransitionPage from "@/components/transition-page"
import Link from "next/link"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/translations"

const ServicesPage = () => {
  const { lang } = useLanguage()

  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />

      <div className="grid items-center justify-center min-h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 px-6 md:px-20">
        
        <div className="max-w-[450px] mt-20 md:mt-0">

          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            {translations[lang].servicesPage.title}{" "}
            <span className="font-bold text-[#F5741c]">
              {translations[lang].servicesPage.highlight}
            </span>
          </h1>

          <p className="mb-3 text-xl text-gray-300">
            {translations[lang].servicesPage.description}
          </p>

          <Link
            href="/contact"
            className="px-3 py-2 transition-all border-2 cursor-pointer text-[#F5741c] border-[#F5741c] text-md w-fit rounded-xl hover:shadow-xl hover:shadow-[#F5741c]/50"
          >
            {translations[lang].servicesPage.contact}
          </Link>

        </div>

        {/* Slider */}
        <div className="-mt-50 md:mt-0">
          <SliderServices />
        </div>

      </div>
    </>
  )
}

export default ServicesPage