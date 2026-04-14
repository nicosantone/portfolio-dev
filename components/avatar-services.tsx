import Image from "next/image"
import MotionTransition from "./transition-component"

const AvatarServices = () => {
  return (
    <MotionTransition position="right"
        className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/services.png" width={300} height={300} alt="Avatar" className="w-[325px] h-full" />
        </MotionTransition>
  )
}

export default AvatarServices