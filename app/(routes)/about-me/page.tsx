"use client"

import Avatar from '@/components/avatar'
import ContainerPage from '@/components/container'
import CounterServices from '@/components/counter-services'
import TimeLine from '@/components/time-line'
import TransitionPage from '@/components/transition-page'

import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

const PageAboutMe = () => {
  const { lang } = useLanguage();

  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        
        <h1 className="text-4xl leaden-tight text-center md:text-left md:text-5xl md:mt-10">
          {translations[lang].about.title}{' '}
          <span className="font-bold text-[#F5741c]">
            {translations[lang].about.highlight}
          </span>
        </h1>

        <CounterServices />

        <TimeLine />

      </ContainerPage>
    </>
  )
}

export default PageAboutMe