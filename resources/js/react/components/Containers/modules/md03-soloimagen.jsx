import FotoFamiliy from '../../../../../img/imgs/foto_familia.png'
import { Image } from '../../Items/Image'
import Section from '../Section'

const MD03_SoloImagen = () => {
	return (
		<div
			className='h-[201px] w-full bg-cover bg-center sm:h-[302px] md:h-[402px] lg:h-[502px] lg:border-t-[6px] lg:border-ventura'
			style={{ backgroundImage: `url(${FotoFamiliy})` }}>
			{/* <Image
					src={FotoFamiliy}
					alt='Foto familia en sala'
					className='h-[291px] lg:h-[502px]'
					objectFit='contain'
				/> */}
		</div>
	)
}

export default MD03_SoloImagen
