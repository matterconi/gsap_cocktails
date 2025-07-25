import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import Cocktail from "./components/Cocktail"

gsap.registerPlugin(ScrollTrigger)

const app = () => {
  return (
	<main>
		<Navbar />
		<Hero />
		<Cocktail />
	</main>
  )
}

export default app