import {CaseStudy} from "../types/case.study.types.ts";
import DynamicSvgPath from "../components/Background/DynamicSvgPath.tsx";
import { Text } from '@chakra-ui/react';

const styles = {
	fontSize: "1em",
	mb: 1
}

const case_studies_list: CaseStudy[] = [
	{
		id: 1,
		slug: 'cargo-application',
		company: "Kitbash3D",
		title: "Cargo Application",
		description: <>
			<Text {...styles}>
				Cargo, an Eletron Desktop Application that allows the user to connect to a 3d software, download and import assets. The application was built using Typescript and React in their ui core. As a front end developer, my focus was on building a fast and intuitive Ui that would allow the user to quickly navigate through the application, connect and download the assets they need.
			</Text>
		</>,
		date: "2021-01-01",
		image: "/Cargo-Thumbnail.png",
		imageDescription: "Image description for case study 1",
		url: "https://kitbash3d.com/pages/cargo",
		tags: ["react", "node", "electron", "redux", "typescript", "C#", ".NET", "SQL", ],
		color: "#86EDC3",
		render: () => <>
			<DynamicSvgPath
				color={"#86EDC3"}
				start={{ x: 0, y: 450 }}
				points={[
					{ type: 'V', y: 552 },
					{ type: 'H', x: 1444 },
					{ type: 'V', y: 240 }
				]}
				end={{ x: 0, y: 450 }}
			/>
		</>
	},
	{
		id: 2,
		slug: "ecommerce-website",
		company: "Kitbash3D",
		title: "Ecommerce Website",
		description: <>
			<Text {...styles}>
				As a front-end developer, my role focused on a comprehensive redesign of an e-commerce website to enhance user experience. I implemented responsive design principles using web technologies for optimal viewing on various devices. My work included improving site navigation and streamlining the checkout process to boost conversion rates.
			</Text>
			<Text {...styles}>
				Utilizing Shopify's Liquid language, I customized themes for dynamic content updates, offering the marketing team flexibility without technical hurdles. This project aimed at creating a seamless, intuitive shopping experience, improving both usability and accessibility.
			</Text>
		</>,
		date: "2021-01-01",
		image: "/Ecommerce-Thumbnail.png",
		imageDescription: "Image description for case study 2",
		url: "https://kitbash3d.com/",
		tags: ["html5", "CSS3", "SASS", "javascript", "liquid api", "shopify", "grapql", "responsive design", "rest api"],
		color: "#EA937A",
		render: () => <>
			<DynamicSvgPath
				color={"#EA937A"}
				start={{ x: 0, y: 150 }}
				points={
					[
						{ type: 'V', y: 200},
						{ type: 'H', x: 1440 },
						{ type: 'V', y: 200 }
					]
				}
				end={{ x: 0, y: 150 }}
			/>
		</>
	}
]

export default case_studies_list