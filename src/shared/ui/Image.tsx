export interface IImageProps {
	src: string
	loading?: string
	alt: string
	width?: number
	height?: number
	classname?: string
}
const Image = ({ src, alt, width, height, classname }: IImageProps) => {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={classname}
		/>
	)
}

export default Image
