
export type CaseStudy = {
	id: number
	slug: string
	title: string
	description: string
	date: string
	image: string
	imageDescription: string
	url: string
	tags: string[]
	color: string
	render: () => JSX.Element
}