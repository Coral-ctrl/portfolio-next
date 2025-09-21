import {BiLogoLinkedin, BiLogoGithub} from 'react-icons/bi';

const socials = [
    {
        icon: <BiLogoLinkedin />,
        path: "https://www.linkedin.com/in/yongshan-liang-053b96207/",
    },
    {
        icon: <BiLogoGithub />,
        path: "https://github.com/Coral-ctrl",
    },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <a 
                key={index} 
                href={item.path}
                target="_blank"
                className={iconStyles}>
                    {item.icon}
                </a>
            );
        })}
    </div>
  );
};

export default Socials;