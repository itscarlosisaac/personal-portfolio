
export type CaseStudy = {
	id: number
	title: string
	description: string
	date: string
	image: string
	imageDescription: string
	url: string
	tags: string[]
	render: () => JSX.Element
}