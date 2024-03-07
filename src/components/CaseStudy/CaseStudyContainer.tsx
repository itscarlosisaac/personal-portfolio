import CaseStudyList from "./CaseStudyList.tsx";
import {Box} from "@chakra-ui/react";

function CaseStudyContainer() {
	return (
		<Box id={"case-studies"} w={"100%"}>
			<CaseStudyList />
		</Box>
	)
}

export default CaseStudyContainer
