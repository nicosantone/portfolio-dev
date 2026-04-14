"use client"

import { serviceData } from "@/data"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/translations"

const SliderServices = () => {
  const { lang } = useLanguage()

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="w-full md:w-[550px] max-w-[270px] md:max-w-none mx-auto pb-10"
    >
      {serviceData.map((item, index) => {
        const service = translations[lang].services[item.key as keyof typeof translations["es"]["services"]]

        return (
          <SwiperSlide key={index} className="flex h-auto">
            <div className="flex flex-col justify-between w-full h-[225px] md:h-[360px] px-4 md:px-6 py-6 md:py-8 rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] gap-3 md:gap-4 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-[#F5741c] border-2">

              <div>
                <div className="mb-2 text-4xl text-[#F5741c]">
                  {item.icon}
                </div>

                <h3 className="mb-2 text-lg">
                  {service?.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/80">
                  {service?.description}
                </p>
              </div>

            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SliderServices