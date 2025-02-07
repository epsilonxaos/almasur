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
				color='pacifico'
				className={twMerge('font-geo grid gap-4', classForm)}>
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
					className={`${colorVariants['ventura'].background} max-w-[183px]`}
					type='submit'>
					Agendar Videollamada
				</Button>
			</TextContent>
		</form>
	)
}

const InputForm = ({ name, children, type }) => (
	<input
		className='border-2 border-pacifico bg-transparent text-xs placeholder:text-pacifico'
		placeholder={children}
		type={`${type || 'text'}`}
		name={name}
		id={name}
		required
	/>
)

export default FormAlmasur
