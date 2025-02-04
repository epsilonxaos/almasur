import BG_contact from '../../../../../img/Contacto/img_footer.png'
import Logotipo_fraccionamiento from '../../../../../img/icons/icon_logotipo_fraccionamiento.svg'
import { colorVariants } from '../../../utils/tailwindColors'
import Button from '../../Items/Button'
import { Image } from '../../Items/Image'
import { TextContent } from '../../Items/Text'
import Section from '../Section'

const MD09_ContactUs = ({ isMobile }) => {
	return (
		<Section
			classBackground='bg-rosa_tenue2'
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
					className='font-aller-400 grid gap-2 md:text-left'>
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
			<form
				className='w-full max-w-[300px]'
				action=''
				method='post'>
				<TextContent
					color='ventura'
					className='grid gap-4'>
					<InputForm name='nombre'>Nombre:</InputForm>
					<InputForm name='apellido'>Apellido:</InputForm>
					<InputForm name='correo'>Correo electrónico:</InputForm>
					<InputForm name='ciudad'>Ciudad:</InputForm>
					<InputForm name='telefono'>Teléfono:</InputForm>
					<Button
						className={`${colorVariants['ventura'].background} max-w-[183px] font-geo-400`}
						type='submit'>
						Agendar Videollamada
					</Button>
				</TextContent>
			</form>
			<Image
				// className='w-full min-w-[466px] max-w-[616px]'
				// className='w-full min-w-[466px] max-w-[470px] lg:max-w-[616px]'
				className='relative w-full min-w-[466px] max-w-[466px] lg:-top-32 lg:right-0'
				src={BG_contact}
			/>
		</Section>
	)
}

const InputForm = ({ name, children }) => (
	<input
		className='font-geo-400 border-2 border-ventura bg-transparent text-xs font-medium placeholder:text-ventura'
		placeholder={children}
		type='text'
		name={name}
		id={name}
	/>
)
export default MD09_ContactUs
