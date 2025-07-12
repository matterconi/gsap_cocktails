import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const app = () => {
  return (
	<div className="text-3xl text-amber-300 font-extrabold flex-center h-[100vh]">Matteo's Dev</div>
  )
}

export default app