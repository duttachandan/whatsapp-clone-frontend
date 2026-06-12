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
      <div className='fixed top-0 bottom-0 left-0 h-screen min-w-[80px]
        fit-content bg-white shadow-lg'>
        <div className="flex flex-col gap-4 items-center pt-5">
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
      {/* Chat Bar of Whatsapp */}
      <div
        className="fixed top-0 left-[80px] min-w-[400px] h-screen 
      shadow-lg">
        <div className="flex items-center px-4 h-[60px]">
          <h1 className="font-sans text-2xl font-bold">WhatsApp</h1>
        </div>
        <form action="">
          <div className="border border-1 border-white/20 rounded-full p-2">
            <button type="submit">Submit</button>
            <input
              type="text"
              name="search-contact"
              id="search-contact"
              placeholder="Search or Start a new chat"
            />
          </div>
        </form>
        <div className="tooltips">
          <button className="tooltips"></button>
          <button className="tooltips"></button>
          <button className="tooltips"></button>
          <button className="tooltips"></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar