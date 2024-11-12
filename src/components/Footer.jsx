const Footer = () => {

    
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#101e35] text-white py-6 px-3">
            <div className="w-full mx-auto flex justify-center items-center">
                <p className="text-gray-300 text-center tracking-wider font-serif italic">
                    &copy; {currentYear} Mudassar Nazir Personal Portfolio. All Rights Reserved💘

                </p>
            </div>
        </footer>
    );
};

export default Footer;
