import CaseStudyListItem from "./CaseStudyListItem/CaseStudyListItem.tsx";

function CaseStudyList() {
	const list = [1,2,3,4,5]
	return (
		<>
			{
				list.map((v) => <CaseStudyListItem id={v} />)
			}
		</>
	)
}

export default CaseStudyList
