// Define the component with props for the start point, points array, and end point

type Point = { x?: number, y?: number, type?: string  }
type DynamicSvgPathProps = {
	start: Point,
	end: Point,
	points: Point[]
	color: string
}
const DynamicSvgPath = ({ start, points, end, color = "currentColor" }: DynamicSvgPathProps) => {
	// Initial commands
	const moveCommand = `M${start.x} ${start.y}`;
	
	// Generate commands from points
	const pointsCommands = points.map(point => {
		switch (point?.type?.toUpperCase()) {
			case 'V': // Vertical line
				return `V${point.y}`;
			case 'H': // Horizontal line
				return `H${point.x}`;
			case 'L': // Line to
				return `L${point.x} ${point.y}`;
			default:
				console.warn(`Unsupported command type: ${point.type}`);
				return '';
		}
	}).join(' ');
	
	// Closing command
	const lineToClose = `L${end.x} ${end.y} Z`;
	
	// Combine all commands
	const pathD = `${moveCommand} ${pointsCommands} ${lineToClose}`;
	
	// Calculating dynamic viewBoxWidth and viewBoxHeight
	const xValues = points.filter(p => p.x !== undefined).map(p => p.x);
	xValues.push(start.x, end.x);
	const yValues = points.filter(p => p.y !== undefined).map(p => p.y);
	yValues.push(start.y, end.y);
	
	const viewBoxWidth = Math.max(...xValues as number[]);
	const viewBoxHeight = Math.max(...yValues as number[]);
	
	return (
		<svg width="100%" height="auto" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
			<path d={pathD} fill={color} />
		</svg>
	);
};

export default DynamicSvgPath;
