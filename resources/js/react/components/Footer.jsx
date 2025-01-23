const Footer = () => {
    return (
        <footer className="w-full px-4 py-5">
            <ul className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between md:flex-row">
                <li>Project name</li>
                <li>
                    Diseño y desarrollo x{" "}
                    <span className="font-bold">MadebyPartners®</span>
                </li>
                <li>Políticas de privacidad</li>
            </ul>
        </footer>
    );
};

// return (
//     <footer className='bg-verde py-3 text-center text-gris md:px-[55px]'>
//         <div className='mx-auto flex max-w-[1550px] flex-col md:flex-row md:items-center md:justify-between'>
//             <p>Project</p>
//             <p>
//                 Diseño y desarrollo x{' '}
//                 <a
//                     href='https://www.madeby.partners/'
//                     target='_blank'
//                     rel='noopener noreferrer'>
//                     <span className='font-bold'>MadebyPartners®</span>
//                 </a>
//             </p>
//             <Link to='politicas-privacidad'>Políticas de privacidad</Link>
//         </div>
//     </footer>
// )

export default Footer;
