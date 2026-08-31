import homeBlack from "../assets/homeBlack.png";
import homeWhite from "../assets/homeWhite.png";
import aboutBlack from "../assets/id-card-black.png";
import aboutWhite from "../assets/id-card-white.png";

import projectBlack from "../assets/icons8-opened-folderBlack.png";
import projectWhite from "../assets/icons8-opened-folderWhite.png";
import processBlack from "../assets/icons8-servicesBlack.png";
import processWhite from "../assets/icons8-servicesWhite.png";
import servicesBlack from "../assets/rocketBlack.png";
import servicesWhite from "../assets/rocketWhite.png";
import contactBlack from "../assets/MailBlack.png";
import contactWhite from "../assets/MailWhite.png";


const navItem = [
  {
    label: "Home",
    icon: homeBlack,
    hoverIcon: homeWhite,
  },


{
    label: "About",
    icon: aboutBlack,
    hoverIcon: aboutWhite,
  },


  {
    label: "Projects",
    icon: projectBlack,
    hoverIcon: projectWhite,

  },

    {
    label: "Process",
    icon: processBlack,
    hoverIcon: processWhite,
  },

  {
    label: "Services",
    icon: servicesBlack,
    hoverIcon: servicesWhite,
  },
{
    label: "Contact",
    icon: contactBlack,
    hoverIcon: contactWhite,
  },






];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center rounded-full bg-[#F9F9F9] p-4 text-m text-black shadow-[0_3px_9px_-6px_#000000]">

      <div className="flex space-x-2">
        {navItem.map((item, index) => (
          <button
            key={index}
            className="
              group
              flex
              items-center
              gap-3
              font-jakarta
              font-extrabold
              transition-all
              duration-400
              hover:scale-105
              hover:text-white
              xl:h-10
              xl:w-35
              xl:rounded-4xl
              xl:hover:bg-black
            "
          >
            <div className="ml-5">
            {/* Icon hitam - normal */}
            <img
              src={item.icon}
              alt={item.label}
              className="h-6 w-6 group-hover:hidden"
            />

            {/* Icon putih - saat hover */}
            <img
              src={item.hoverIcon}
              alt={item.label}
              className="hidden h-6 w-6 group-hover:block"
            />
</div>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}