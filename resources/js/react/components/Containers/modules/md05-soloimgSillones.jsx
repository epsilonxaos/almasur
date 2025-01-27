import imgBackground1_2 from '../../../../../img/imgs/banner1-2.png'
import imgBackground2_2 from '../../../../../img/imgs/banner2-2.png'
import imgBackground from '../../../../../img/imgs/banner.png'

const MD05_SoloImagenSillones = ({ isMobile }) => {
	return (
		<>
			{isMobile ? (
				<div>
					<div
						className='h-[178px] bg-cover bg-center sm:hidden'
						style={{ backgroundImage: `url(${imgBackground1_2})` }}></div>
					<div
						className='h-[178px] bg-cover bg-center sm:hidden'
						style={{ backgroundImage: `url(${imgBackground2_2})` }}></div>
				</div>
			) : (
				<div
					className='h-[330px] w-full bg-cover bg-center'
					style={{ backgroundImage: `url(${imgBackground})` }}></div>
			)}
		</>
	)
}

export default MD05_SoloImagenSillones
