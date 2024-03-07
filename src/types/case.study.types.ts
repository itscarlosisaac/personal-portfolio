import {ReactNode} from "react";

export type CaseStudy = {
	id: number
	slug: string
	title: string
	company: string
	description: ReactNode
	date: string
	image: string
	imageDescription: string
	url: string
	tags: string[]
	color: string
	render: () => JSX.Element
}