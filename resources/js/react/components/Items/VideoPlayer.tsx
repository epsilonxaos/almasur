import { twMerge } from 'tailwind-merge'

import { useEffect, useRef, useState } from 'react'

import { Image } from './Image'

interface AutoVideoPlayerProps {
	videoSrc: string
	fallbackImageSrc: string
	width?: number
	height?: number
	className?: string
	classContainer?: string
}
const VideoPlayer = ({
	className,
	classContainer,
	videoSrc,
	fallbackImageSrc,
	width,
	height,
}: AutoVideoPlayerProps) => {
	const [canPlayVideo, setCanPlayVideo] = useState(true)
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const handleCanPlay = () => setCanPlayVideo(true)
		const handleError = () => setCanPlayVideo(false)

		video.addEventListener('canplay', handleCanPlay)
		video.addEventListener('error', handleError)

		return () => {
			video.removeEventListener('canplay', handleCanPlay)
			video.removeEventListener('error', handleError)
		}
	}, [])

	return (
		<div
			className={twMerge('relative bg-white', classContainer)}
			style={{ width, height }}>
			{canPlayVideo ? (
				<video
					ref={videoRef}
					src={videoSrc}
					autoPlay
					muted
					loop
					playsInline 
					// controls
					className={twMerge('object-cover object-center', className)}>
					Tu navegador no soporta el elemento de video.
				</video>
			) : (
				<Image
					objectFit='cover'
					className='min-h-[250px] w-full'
					src={fallbackImageSrc}
					alt='Sala comedor de casa Almasur'
				/>
			)}
		</div>
	)
}

export default VideoPlayer
