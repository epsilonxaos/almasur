import { twMerge } from 'tailwind-merge'

import { ReactNode } from 'react'

import { colorVariants, getColorClass } from '../../utils/tailwindColors'

export type TTexts = {
	children: ReactNode
	className?: string
	color?: string
}

const Text = (opt: TTexts) => {
	const { children, className } = opt

	return <p className={twMerge('text-sm', className)}>{children}</p>
}

// Base:14 => 18
export const TextTitle = (opt: TTexts) => {
	const { children, className, color } = opt
	const textColor = color ? `${colorVariants[color].text}` : ''
	// const textColor = color ? `${getColorClass('text', color)}` : ''
	return <article className={twMerge('text-sm font-bold sm:text-lg', className, textColor)}>{children}</article>
}
// Base: 10 => 12 (casi no hay este cambio, se mantiene en 12)
export const TextContent = (opt: TTexts) => {
	const { children, className, color } = opt
	const textColor = color ? `${colorVariants[color].text}` : ''

	return <article className={twMerge('text-xs font-normal sm:text-xs', className, textColor)}>{children}</article>
}

// Se mantiene 10 a 8
export const TextSmallContent = (opt: TTexts) => {
	const { children, className } = opt

	return <article className={twMerge('text-[10px] font-normal', className)}>{children}</article>
}
