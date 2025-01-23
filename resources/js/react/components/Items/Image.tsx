type TImage = {
	src: string
	alt: string
	width?: number
	height?: number
	objectFit: React.CSSProperties['objectFit']
	className?: string
}

export const Image = ({ src, alt, width, height, objectFit, className }: TImage) => {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			style={{ objectFit }}
			className={className}
		/>
	)
}
