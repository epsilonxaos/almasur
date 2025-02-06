import { twMerge } from 'tailwind-merge'

import { colorVariants } from '../../utils/tailwindColors'
import Button from '../Items/Button'
import { TextContent } from '../Items/Text'

const FormAlmasur = ({ className = '', classForm = '' }) => {
	return (
		<form
			className={className}
			action='/thanks' //PENDIENTE!
			method='get' // PENDIENTE! post
		>
			<TextContent
				color='ventura'
				className={twMerge('grid gap-4', classForm)}>
				<InputForm name='nombre'>Nombre:</InputForm>
				<InputForm name='apellido'>Apellido:</InputForm>
				<InputForm
					type='email'
					name='correo'>
					Correo electrónico:
				</InputForm>
				<InputForm name='ciudad'>Ciudad:</InputForm>
				<InputForm
					type='tel'
					name='telefono'>
					Teléfono:
				</InputForm>
				<Button
					className={`${colorVariants['ventura'].background} font-geo-400 max-w-[183px]`}
					type='submit'>
					Agendar Videollamada
				</Button>
			</TextContent>
		</form>
	)
}

const InputForm = ({ name, children, type }) => (
	<input
		className='font-geo-400 border-2 border-ventura bg-transparent text-xs font-medium placeholder:text-ventura'
		placeholder={children}
		type={`${type || 'text'}`}
		name={name}
		id={name}
		required
	/>
)

export default FormAlmasur
