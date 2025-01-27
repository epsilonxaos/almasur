import { ReactNode } from 'react';


type TContentReact = {
	children: ReactNode
	className?: string
}
type TSection = TContentReact & { notFullWidth?: boolean; classContainer?: string }

const Section = (opt: TSection) => {
	const { children, className, notFullWidth, classContainer } = opt
	return (
		// CONTENEDOR
		<div
			className={`${notFullWidth ? 'px-8' : ''} ${classContainer} mx-auto flex max-w-section flex-col items-center justify-center border-2 border-red-700 text-center`}>
			{/* CONTENIDO */}
			<div
				className={`text-main flex w-full max-w-section-content flex-col items-center justify-center border-2 border-blue-700 p-4 sm:p-8 ${className}`}>
				{children}
			</div>
		</div>
	)
}

export default Section