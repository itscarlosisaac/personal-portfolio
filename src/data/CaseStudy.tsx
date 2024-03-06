import {CaseStudy} from "../types/case.study.types.ts";
import DynamicSvgPath from "../components/Background/DynamicSvgPath.tsx";

const case_studies_list: CaseStudy[] = [
	{
		id: 1,
		title: "Case Study 1",
		description: "Description for case study 1",
		date: "2021-01-01",
		image: "https://placekitten.com/500/500/",
		imageDescription: "Image description for case study 1",
		url: "https://placekitten.com/500/500/",
		tags: ["react", "node", "electron"],
		render: () => <>
			<DynamicSvgPath
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
		title: "Case Study 2",
		description: "Description for case study 1",
		date: "2021-01-01",
		image: "https://placekitten.com/500/500/",
		imageDescription: "Image description for case study 2",
		url: "https://placekitten.com/500/500/",
		tags: ["html5", "CSS3", "SASS", "javascript", "liquid api", "shopify", "grapql", "responsive design", "rest api"],
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