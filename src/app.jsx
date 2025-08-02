import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import Cocktail from "./components/Cocktail"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import Contact from "./components/Contact"

gsap.registerPlugin(ScrollTrigger)

const app = () => {
  return (
	<main>
		<Navbar />
		<Hero />
		<Cocktail />
		<About />
		<Art />
		<Menu />
		<Contact />
	</main>
  )
}

export default app