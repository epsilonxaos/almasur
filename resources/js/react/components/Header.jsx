import bgHeroContentHome from '../../../img/hero/banner_inicial.png'
import logoBuenvin from '../../../img/icons/icon_buenvi.svg'
import logoLogotipo from '../../../img/icons/icon_logotipo.svg'
import Button from './Items/Button'
import { Image } from './Items/Image'
import { TextContent } from './Items/Text'

const Header = ({ isMobile }) => {
	return (
		<header
			// className='grid h-dvh w-full'
			className='grid h-dvh w-full bg-cover bg-center'
			style={{ backgroundImage: `url(${bgHeroContentHome})` }}>
			<Content isMobile={isMobile} />
		</header>
	)
}

const Content = ({ isMobile }) => {
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
					'absolute h-[40px] w-[190px] text-main_b ' +
					(isMobile ? 'bottom-[50px] left-1/2 -translate-x-1/2 transform bg-ventura' : 'right-0 bg-cima')
				}>
				<TextContent>¡Agendar Videollamada!</TextContent>
			</Button>
		</section>
	)
}

export default Header
