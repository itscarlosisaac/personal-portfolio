import {CaseStudy} from "../types/case.study.types.ts";
import DynamicSvgPath from "../components/Background/DynamicSvgPath.tsx";

const case_studies_list: CaseStudy[] = [
	{
		id: 1,
		slug: 'cargo-application',
		title: "Cargo Application",
		description: "Description for case study 1",
		date: "2021-01-01",
		image: "/image.png",
		imageDescription: "Image description for case study 1",
		url: "https://kitbash3d.com/pages/cargo",
		tags: ["react", "node", "electron", "redux", "typescript", "graphql", "C#", ".NET", "SQL", ],
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
		slug: "eccomerce-website",
		title: "Ecommerce Website",
		description: "Description for case study 1",
		date: "2021-01-01",
		image: "/image.png",
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