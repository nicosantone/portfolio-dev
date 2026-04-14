"use client"

import AvatarPortfolio from "@/components/avatar-portfolio"
import CircleImage from "@/components/circle-image"
import ContainerPage from "@/components/container"
import PortfolioBox from "@/components/portfolio-box"
import TransitionPage from "@/components/transition-page"
import { dataPortfolio } from "@/data"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/translations"

const PortfolioPage = () => {
  const { lang } = useLanguage()

  return (
    <ContainerPage>
      <TransitionPage />

      <AvatarPortfolio />
      <CircleImage />

      <div className="flex flex-col justify-center h-full -mt-20 md:-mt-10">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          {translations[lang].portfolio.title}{" "}
          <span className="font-bold text-[#F5741c]">
            {translations[lang].portfolio.highlight}
          </span>
        </h1>

        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  )
}

export default PortfolioPage