import { twMerge } from 'tailwind-merge'

import { useEffect, useRef, useState } from 'react'

import bgForVideo from '../../../../img/hero/banner_inicial.png'
import Button from './Button'
import { Image } from './Image'
import { FlechaPlay } from './icons'
import Modal from './modal'

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
	const [canPlayVideo, setCanPlayVideo] = useState(false)
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
			className={twMerge('relative grid place-content-center place-items-center', classContainer)}
			style={{ width, height }}>
			{canPlayVideo ? (
				<>
					{/* <Image
						objectFit='cover'
						className='min-h-[250px] w-full'
						src={fallbackImageSrc}
						alt='Sala comedor de casa Almasur'
					/> */}
					<Modal
						isOpen={canPlayVideo}
						onClose={() => setCanPlayVideo(false)}
						// PREGUNTAR CUAL MEJOR OPCION
						// backImage={bgForVideo}
						// backImage={fallbackImageSrc}
						// classContenedor='shadow-none'
						classContenedor='bg-cima bg-opacity-10'>
						<video
							ref={videoRef}
							src={videoSrc}
							autoPlay
							// muted
							loop
							playsInline
							controls
							className={twMerge('object-cover object-center', className)}>
							Tu navegador no soporta el elemento de video.
						</video>
					</Modal>
				</>
			) : (
				<>
					<Image
						objectFit='cover'
						className='min-h-[250px] w-full'
						src={fallbackImageSrc}
						alt='Sala comedor de casa Almasur'
					/>
					<Button
						className='absolute min-h-fit w-[5%] min-w-[25px]'
						onClick={() => setCanPlayVideo(true)}>
						<FlechaPlay />
					</Button>
				</>
			)}
		</div>
	)
}

export default VideoPlayer
