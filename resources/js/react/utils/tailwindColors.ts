export function getColorClass(prefix: string, color: string) {
	return ` ${prefix}-${color} `
}

export function getTextColorClass(prefix: string, color: string) {
	return ` ${prefix}-text-${color} `
}

export const colorVariants = {
	white: {
		background: 'bg-white',
		fill: 'fill-white',
		hover: 'hover:bg-white',
		text: 'text-white',
		border: 'border-white',
	},
	ventura: {
		background: 'bg-ventura',
		fill: 'fill-ventura',
		hover: 'hover:bg-ventura',
		text: 'text-ventura',
		border: 'border-ventura',
	},
	cima: { background: 'bg-cima', fill: 'fill-cima', hover: 'hover:bg-cima', text: 'text-cima', border: 'border-cima' },
	bonanza: {
		background: 'bg-bonanza',
		fill: 'fill-bonanza',
		hover: 'hover:bg-bonanza',
		text: 'text-bonanza',
		border: 'border-bonanza',
	},
	magna: {
		background: 'bg-magna',
		fill: 'fill-magna',
		hover: 'hover:bg-magna',
		text: 'text-magna',
		border: 'border-magna',
	},
	pacifico: {
		background: 'bg-pacifico',
		fill: 'fill-pacifico',
		hover: 'hover:bg-pacifico',
		text: 'text-pacifico',
		border: 'border-pacifico',
	},
}
const colorVariantsOnFill = {
	ventura: 'fill-ventura',
	cima: 'fill-cima',
	bonanza: 'fill-bonanza',
	magna: 'fill-magna',
	pacifico: 'fill-pacifico',
}
const colorVariantsOnHover = {
	ventura: 'hover:bg-ventura',
	cima: 'hover:bg-cima',
	bonanza: 'hover:bg-bonanza',
	magna: 'hover:bg-magna',
	pacifico: 'hover:bg-pacifico',
}
