import { useState } from 'react'

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
			className='grid h-dvh w-full bg-hero-content-home'
			style={{ backgroundImage: `url(${bgHeroContentHome})` }}>
			{/* <header className='absolute flex w-full justify-center'> */}
			<section className='dev-cnt'>
				{/* <section className='dev-cnt justify-beetwen flex w-full flex-wrap'> */}
				<Content />
				<div className='dev-cnt'>a</div>
			</section>
		</header>
	)
}

const Content = () => {
	return (
		<div className='dev-cnt mt-8 flex w-full items-start justify-between'>
			<Image
				className='w-[130px]'
				src={logoBuenvin}
				alt='logo Buenvin'
			/>
			<Image
				className='dev-cnt w-[213px] sm:w-[255px]'
				src={logoLogotipo}
				alt='logo Buenvin'
			/>
			<Button className='geo-700 bg-ventura text-main_b sm:bg-cima'>
				<TextContent>¡Agendar Videollamada!</TextContent>
			</Button>
		</div>
	)
}

export default Header
