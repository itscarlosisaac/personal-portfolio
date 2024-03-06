import CaseStudyListItem from "./CaseStudyListItem/CaseStudyListItem.tsx";
import case_studies_list from "../../data/CaseStudy.tsx";

function CaseStudyList() {
	return (
		<>
			{
				case_studies_list.map((caseStudy) => <CaseStudyListItem key={caseStudy.id} caseStudy={caseStudy} />)
			}
		</>
	)
}

export default CaseStudyList
