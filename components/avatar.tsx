"use client"

import Image from "next/image"
import MotionTransition from "./transition-component"

const Avatar = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
        <Image src="/avatar-1.png" width={450} height={450} alt="avatar" />
    </MotionTransition>
  )
}

export default Avatar