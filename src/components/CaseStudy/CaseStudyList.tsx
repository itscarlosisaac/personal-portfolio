import CaseStudyListItem from "./CaseStudyListItem/CaseStudyListItem.tsx";
import case_studies_list from "../../data/CaseStudy.ts";

function CaseStudyList() {
	return (
		<>
			{
				case_studies_list.map((caseStudy) => <CaseStudyListItem caseStudy={caseStudy} />)
			}
		</>
	)
}

export default CaseStudyList
