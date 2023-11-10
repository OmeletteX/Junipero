import React from 'react';
import { FaLinkedin, FaGithub, FaUserTie, FaBlog} from 'react-icons/fa';


const background = "bg-black";
const FooterPrivacyText = '© 2023 Caden Chen. All Rights Reserved.';
const FooterDisclaimer = 'This webpage is intended for personal and educational purposes and does not support or endorse commercial usage of any copyrighted material.'
const FooterIcons = [
    <FaLinkedin />,
    <FaGithub />,
    <FaUserTie />,
    <FaBlog />,



];

function Footer(props) {
    return (
        <div className={background}>
            {/*container for the section*/}
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full py-10 px-10">
                <div className="lg:w-8/12 w-full">




                    <p className="block text-sm text-center text-textColorPrimary ">
                        {FooterPrivacyText}
                    </p>


                    {/* Footer icons */}
                    <div className="flex justify-center m-5 space-x-5 text-textColorPrimary">
                        {FooterIcons.map((Icon, index) => (
                            <div key={index}>
                                {Icon}
                            </div>
                        ))}
                    </div>

                    <p className="block text-xs text-center text-textColorTertiary">
                        {FooterDisclaimer}
                    </p>

                </div>

            </div>
        </div>
    );
}

export default Footer;
