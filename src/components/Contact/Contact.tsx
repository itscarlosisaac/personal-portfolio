import ParallaxSection from "../Parallax/ParallaxSection.tsx";
import ContactFormContainer from "./ContactForm/ContactFormContainer.tsx";

function Contact() {
	return (
		<>
			<ParallaxSection containerProps={
				{
					w: "100%",
					px: 20,
				}
			}>
				<ContactFormContainer/>
			</ParallaxSection>
		</>
	)
}

export default Contact
