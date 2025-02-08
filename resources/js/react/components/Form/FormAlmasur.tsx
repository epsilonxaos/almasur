import { twMerge } from 'tailwind-merge'

import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { colorVariants } from '../../utils/tailwindColors'
import Button from '../Items/Button'
import { TextContent, TextTitle } from '../Items/Text'

type TFormAlmasur = {
	nombre: string
	apellido: string
	correo: string
	ciudad: string
	telefono: string
}

const FormAlmasur = ({ className = '', classForm = '' }) => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'espera' | 'enviado' | 'error'>('espera')
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TFormAlmasur>()

	const onSubmit: SubmitHandler<TFormAlmasur> = async data => {
		setIsSubmitting(true)
		setSubmitStatus('espera')
		console.log(data)

		try {
			const response = await fetch('https://PENDIENTE.com', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			if (!response.ok) {
				throw new Error('Error al enviar el formulario')
			}

			setSubmitStatus('enviado')
		} catch (error) {
			console.error('[ERROR FORM]:', error)
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
			setTimeout(() => {
				setSubmitStatus('espera')
				if (submitStatus === 'enviado') {
					window.location.href = '/thanks'
				}
			}, 3000)
		}
	}

	return (
		<form
			className={className}
			onSubmit={handleSubmit(onSubmit)}>
			<TextContent
				color='pacifico'
				className={twMerge('font-geo grid gap-4', classForm)}>
				<InputForm
					name={'nombre'}
					refRegister={{ ...register('nombre', { required: 'Nombre requerido' }) }}
					error={errors.nombre?.message}>
					Nombre:
				</InputForm>
				<InputForm
					name={'apellido'}
					refRegister={{ ...register('apellido', { required: 'Apellido requerido' }) }}
					error={errors.apellido?.message}>
					Apellido:
				</InputForm>

				<InputForm
					name='correo'
					refRegister={{
						...register('correo', {
							required: 'Correo requerido',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Correo electrónico inválido',
							},
						}),
					}}
					error={errors.correo?.message}>
					Correo electrónico:
				</InputForm>

				<InputForm
					name='ciudad'
					refRegister={{ ...register('ciudad', { required: 'Ciudad requerida' }) }}
					error={errors.ciudad?.message}>
					Ciudad:
				</InputForm>
				<InputForm
					name='telefono'
					type='tel'
					refRegister={{ ...register('telefono', { required: 'Telefono requerido' }) }}
					error={errors.telefono?.message}>
					Teléfono:
				</InputForm>
				<Button
					disabled={isSubmitting}
					className={`${colorVariants['ventura'].background} max-w-[183px]`}
					type='submit'>
					{isSubmitting ? 'Enviando...' : 'Agendar Videollamada'}
				</Button>
			</TextContent>

			<TextTitle className='font-geo text-left sm:text-sm'>
				{submitStatus === 'enviado' && <p className='text-lime-600'>Formulario enviado con éxito! Redirigiendo...</p>}
				{submitStatus === 'error' && (
					<p className='text-red-500'>
						<u>Ha ocurrido un error, intente de nuevo.</u>
					</p>
				)}
			</TextTitle>
		</form>
	)
}

const InputForm = ({ name, required = false, children, type = 'text', className = '', error, refRegister }) => {
	const isErrorStyle = error && 'border-magna'

	return (
		<>
			<div className='relative'>
				<input
					id={name}
					// aria-invalid={error ? 'true' : 'false'}
					name={name}
					className={twMerge(
						'w-full border-2 border-pacifico bg-transparent text-xs placeholder:text-pacifico',
						className,
						isErrorStyle
					)}
					placeholder={children}
					type={`${type}`}
					required={required}
					{...refRegister}
				/>
				{error && (
					<span
						role='alert'
						className='absolute -bottom-4 left-0 text-magna'>
						{error}
					</span>
				)}
			</div>
		</>
	)
}

export default FormAlmasur
