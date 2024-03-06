import {Badge, Flex} from "@chakra-ui/react";

function CaseStudyTags({tags}: {tags: string[]}) {
	return (
		<>
			<Flex gap={2} flexWrap={"wrap"}>
			{
				tags.map((tag) => <Badge>{tag}</Badge>)
			}
			</Flex>
		</>
	)
}

export default CaseStudyTags
