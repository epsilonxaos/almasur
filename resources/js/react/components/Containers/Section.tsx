import { twMerge } from 'tailwind-merge'

import { ReactNode } from 'react'

import BackForSection from './back4Section'

type TContentReact = {
	children: ReactNode
	className?: string
}
type TSection = TContentReact & { notFullWidth?: boolean; classContainer?: string; classBackground?: string }

const Section = (opt: TSection) => {
	const { children, className, notFullWidth, classContainer, classBackground } = opt
	return (
		// Background
		<BackForSection className={`${classBackground}`}>
			{/* CONTENEDOR */}
			<div
				className={`${notFullWidth ? 'px-8' : ''} ${classContainer} mx-auto flex max-w-section flex-col items-center justify-center text-center`}>
				{/* CONTENIDO */}
				<div
					className={twMerge(
						`text-main flex w-full max-w-section-content flex-col items-center justify-center p-4 sm:p-8`,
						className
					)}>
					{children}
				</div>
			</div>
		</BackForSection>
	)
}

export default Section
