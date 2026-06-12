import { useCallback, useEffect, useState } from "react";
import { MdOutlineMessage } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";
import { IoHeartCircleSharp } from "react-icons/io5";
import { useThemeStore } from '../../store/store'



type Active = "Message" | "Channels" | "Group" | "Status";



const Navbar = () => {
  // const { theme, setTheme } = useThemeStore();

  const theme = useThemeStore(state => state.theme);

  const [active, setActive] = useState<Active>("Message");

  useEffect(() => {
    console.log(theme)
  }, [])


  const handleClick = useCallback((activeData: Active) => {
    setActive(activeData);
  }, [active]);



  return (
    <header>
      {/* Side Bar of Whatsapp */}
      <div className='fixed bottom-0 left-0 h-[60px] z-30 w-screen
        fit-content bg-white shadow-lg md:top-0 md:h-screen md:min-w-[80px] md:w-fit'>
        <div className="flex md:flex-col gap-4 items-center p-3 md:pt-5">
          <div onClick={() => handleClick("Message")}>
            <MdOutlineMessage
              size={30}
              color={active === 'Message' ? "black" : "gray"}
              className={` transition-all ease-linear ${active === 'Message' ? 'bg-gray-200 rounded-full p-2    w-[50px] h-[50px]' : ''}`}
            />
          </div>
          <div onClick={() => handleClick("Status")}>
            <HiStatusOnline
              size={30}
              color={active === "Status" ? "black" : "gray"}
              className={` transition-all ease-linear ${active === 'Status' ? 'bg-gray-200 rounded-full p-2    w-[50px] h-[50px]' : ''} `}
            />
          </div>
          <div onClick={() => handleClick("Group")}>
            <FaUserGroup
              size={30}
              color={active === "Group" ? "black" : "gray"}
              className={` transition-all ease-linear ${active === 'Group' ? 'bg-gray-200 rounded-full p-2    w-[50px] h-[50px]' : ''}`}
            />
          </div>
          <div onClick={() => handleClick("Channels")}>
            <IoHeartCircleSharp
              size={30}
              color={active === "Channels" ? "black" : "gray"}
              className={`transition-all ease-linear ${active === 'Channels' ? 'bg-gray-200 rounded-full p-2    w-[50px] h-[50px]' : ''}`}
            />
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Navbar