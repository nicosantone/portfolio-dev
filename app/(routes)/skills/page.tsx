import { skillsData } from "@/data";
import CircleImage from "@/components/circle-image"
import TransitionPage from "@/components/transition-page"

const SkillsPage = () => {
  return (
    <>
        <TransitionPage />
        <div className="flex flex-col justify-start md:justify-center min-h-screen pt-40 md:pt-0">
        <CircleImage />

          <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
            SKI<span className="font-bold text-[#F5741c]">LLS</span>
          </h1>

          <div className="grid grid-cols-3 gap-x-10 gap-y-10 mt-10 md:grid-cols-5 place-items-center">
            {skillsData.map(({ id, icon, name }) => (
              <div key={id} className="flex flex-col items-center">
                <div className="text-4xl transition-all duration-300 hover:scale-125 
                  hover:-translate-y-2 
                  hover:drop-shadow-[0_0_15px_rgba(245,116,28,0.8)] 
                  cursor-pointer">
                  {icon}
                </div>
                <p className="mt-2 text-sm">{name}</p>
              </div>
            ))}
          </div>

        </div>
    </>
  )
}

export default SkillsPage