import BG_contact from '../../../../../img/Contacto/img_footer.png'
import Logotipo_fraccionamiento from '../../../../../img/icons/icon_logotipo_fraccionamiento.svg'
import { colorVariants } from '../../../utils/tailwindColors'
import FormAlmasur from '../../Form/FormAlmasur'
import Button from '../../Items/Button'
import { Image } from '../../Items/Image'
import { TextContent } from '../../Items/Text'
import Section from '../Section'

const MD09_ContactUs = ({ isMobile }) => {
	return (
		<Section
			classBackground='bg-pacifico_tenue'
			classContainer='lg:mt-32'
			className='flex flex-col items-center justify-around gap-y-8 pt-8 sm:flex-wrap sm:px-[14px] sm:pb-0 md:flex-row'>
			<div className='flex max-w-[300px] flex-col items-center gap-4 md:max-w-[210px]'>
				<Image
					// className='w-[165px] md:w-[215px]'
					alt='Logotipo de Almasur'
					src={Logotipo_fraccionamiento}
				/>
				<TextContent
					color='ventura'
					className='font-aller grid gap-2 md:text-left'>
					{isMobile ? (
						<p>Calle 50A x 61 y 61 - A Fraccionamiento del sur.</p>
					) : (
						<>
							<p>Calle 50A x 61 y 61 - A </p>
							<p>Fraccionamiento del sur.</p>
						</>
					)}
					<p>999 739 4889</p>
					<p>Términos y condiciones</p>
					<p>Políticas de privacidad</p>
				</TextContent>
			</div>
			<FormAlmasur className="w-full max-w-[300px]"/>
			<Image
				className='relative w-full max-w-[466px] xl:max-w-[616px] lg:-top-32 lg:right-0'
				src={BG_contact}
			/>
		</Section>
	)
}

export default MD09_ContactUs
