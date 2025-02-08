import { useState } from 'react'

import bgHeroContentHome from '../../../img/hero/banner_inicial.png'
import logoBuenvin from '../../../img/icons/icon_buenvi.svg'
import logoLogotipo from '../../../img/icons/icon_logotipo.svg'
import Logotipo_fraccionamiento from '../../../img/icons/icon_logotipo_fraccionamiento.svg'
import FormAlmasur from './Form/FormAlmasur'
import Button from './Items/Button'
import { Image } from './Items/Image'
import { TextContent } from './Items/Text'
import Modal from './Items/modal'

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
	const [isOpenModal, setIsOpenModal] = useState(false)
	const openModal = () => {
		setIsOpenModal(true)
	}
	const closeModal = () => {
		setIsOpenModal(false)
	}

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
				}
				onClick={openModal}>
				<TextContent className='font-geo font-bold'>¡Agendar Videollamada!</TextContent>
			</Button>

			{/* MODAL FORMULARIO */}
			<Modal
				isOpen={isOpenModal}
				onClose={closeModal}
				backImage={bgHeroContentHome}>
				<div className='grid h-full w-full gap-6 bg-pacifico_tenue p-4 sm:p-6 sm:pb-10'>
					<Image
						className='m-auto max-w-[165px] md:max-w-[215px]'
						alt='Logotipo de Almasur'
						src={Logotipo_fraccionamiento}
					/>
					<FormAlmasur
						className='m-auto w-full max-w-[335px]'
					/>
				</div>
			</Modal>
		</section>
	)
}

export default Header
