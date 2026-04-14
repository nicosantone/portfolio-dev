"use client"

import { dataCounter } from "@/data";
import CountUp from "react-countup";

import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

const CounterServices = () => {
    const { lang } = useLanguage();

    return (
        <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:flex md:grid-cols-4 md:gap-6">
            {dataCounter.map(({ id, endCounter, lineRight, lineRightMobile }, index) => (
                <div key={id} className={`${lineRight && 'ltr'}`}>
                    <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'}`} >
                        
                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-[#F5741c]">
                            + <CountUp end={endCounter} start={0} duration={5} />
                        </p>

                        <p className="text-xs uppercase max-w-[100px]">
                            {index === 0 && translations[lang].counter.experience}
                            {index === 1 && translations[lang].counter.projects}
                            {index === 2 && translations[lang].counter.technologies}
                        </p>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default CounterServices;