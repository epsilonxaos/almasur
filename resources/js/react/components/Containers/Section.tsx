import { ReactNode } from 'react'

type TContentReact = {
	children: ReactNode
	className?: string
}

const Section = (opt: TContentReact) => {
	const { children, className } = opt
	return (
		// CONTENEDOR
		<div className='mx-auto flex max-w-section flex-col items-center justify-center border-2 border-red-700 text-center'>
			{/* CONTENIDO */}
			<div
				className={`text-main max-w-section-content flex w-full flex-col items-center justify-center border-2 border-blue-700 p-4 sm:p-8 ${className}`}>
				{children}
			</div>
		</div>
	)
}

export default Section
