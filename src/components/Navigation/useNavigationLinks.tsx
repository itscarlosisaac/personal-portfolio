function useNavigationLinks() {
	const navigationLinks =   [
		{
			url: 'hero-banner',
			label: "Home",
		},
		{
			url: "about",
			label: "About",
		},
		{
			url: "case-studies",
			label: "Projects",
		},
		{
			url: "contact",
			label: "Contact",
		},
	]
	
	const handleScroll = (to: string) => {
		document.querySelector(to)?.scrollIntoView({ behavior: 'smooth' });
	}
	
	return {
		handleScroll,
		navigationLinks
	}
	
	
}

export default useNavigationLinks
