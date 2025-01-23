import { useEffect, useState } from 'react'

import bgHeroContentHome from '../../../img/hero/banner_inicial.png'
import logoBuenvin from '../../../img/icons/icon_buenvi.svg'
import logoLogotipo from '../../../img/icons/icon_logotipo.svg'
import Button from './Items/Button'
import { Image } from './Items/Image'
import { TextContent } from './Items/Text'

const Header = () => {
	const [open, setOpen] = useState(false)
	return (
		<header
			// className='grid h-dvh w-full bg-hero-content-home'
			className='grid h-dvh w-full bg-hero-content-home bg-cover bg-center'
			style={{ backgroundImage: `url(${bgHeroContentHome})` }}>
			<Content />
		</header>
	)
}

const Content = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<section className='mt-8 flex w-full flex-wrap items-start justify-center'>
			<Image
				className='w-[213px] sm:w-[255px]'
				src={logoLogotipo}
				alt='logo Buenvin'
				objectFit='cover'
			/>

			<Image
				className={'absolute left-0 h-[55px] w-[130px] ' + (isMobile ? 'bottom-[150px]' : '')}
				src={logoBuenvin}
				alt='logo Buenvin'
			/>

			<Button
				className={
					'font-geo-700 absolute h-[40px] w-[190px] text-main_b ' +
					(isMobile ? 'bottom-[50px] left-1/2 -translate-x-1/2 transform bg-ventura' : 'right-0 bg-cima')
				}>
				<TextContent>¡Agendar Videollamada!</TextContent>
			</Button>
		</section>
	)
}

export default Header
