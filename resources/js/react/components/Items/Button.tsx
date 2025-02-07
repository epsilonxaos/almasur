import { twMerge } from 'tailwind-merge'

import { ReactNode } from 'react'

type THTMLButtonTypeAttribute = 'submit' | 'reset' | 'button'
type TButtonParams = {
	children: ReactNode
	type?: THTMLButtonTypeAttribute
	className?: string
	onClick?: () => void
}

const Button = (opt: TButtonParams) => {
	const { children, className, type = 'button', onClick } = opt

	return (
		<button
			className={twMerge('font-geo  min-h-[30px] min-w-[160px] border-none font-normal text-main_b', className)}
			{...{ type }}
			{...(onClick && { onClick })}>
			{children}
		</button>
	)
}

export default Button
