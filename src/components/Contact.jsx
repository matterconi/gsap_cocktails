import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Contact = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create("#contact h2", {
			type: "words",
		});

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#contact",
				start: "top center",
			},
			ease: "power1.inOut",
		});

		timeline
			.from(titleSplit.words, {
				opacity: 0,
				yPercent: 100,
				stagger: 0.02,
			})
			.from("#contact h3, #contact p", {
				opacity: 0,
				yPercent: 100,
				stagger: 0.02,
			})
			.to("#f-left-leaf, #f-right-leaf", {
				y: -50, // Rimossa virgoletta e virgola extra
				duration: 1,
				ease: "power1.inOut",
			}, '<'); // Rimossa virgola extra
	});

	return (
		<footer id="contact" aria-labelledby="contact-heading">
			<img src="/images/footer-right-leaf.png" alt="leaft-right" id="f-right-leaf" />
			<img src="/images/footer-left-leaf.png" alt="leaft-left" id="f-left-leaf" />

			<div className='content'>
				<h2>Dove trovarmi</h2>

				<div>
					<h3>Visita il mio bar</h3>
					<p>337, via Zamboni, Bologna</p>
				</div>

				<div>
					<h3>Contattami</h3>
					<p>39200938019</p>
					<p>swag@swag.com</p>
				</div>

				<div>
					<h3>Aperto tutti i giorni</h3>
					{openingHours.map((day, index) => (
						<p key={index}>{day.day} : {day.time}</p>
					))}
				</div>

				<div>
					<h3>Social</h3>
					<div className='flex-center gap-5'>
						{socials.map((social, index) => (
							<a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
								<img src={social.icon} alt={social.name} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Contact