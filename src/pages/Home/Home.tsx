import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { MdFileCopy } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

// dummy content
import { dummyUser, userDummyText } from '../../../data/index.ts';
import { useCallback, useEffect, useState, useRef } from "react";

interface User {
  userName: string;
  profileImage: string;
  lastMessage: string;
}

const Home = () => {
  const textRef = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState<boolean>(false);
  const [messgaes, setMessages] = useState<any>([]);

  const handleSearch = useCallback(() => {
    setSearch(!search);
  }, [search])

  const handleSubmit = useCallback((event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!textRef.current) return;

    const msgPayload = {
      userType: 'self',
      text: `${textRef.current?.value}`,
      time: new Date().toLocaleString(),
    }

    setMessages((prev: any) => [
      ...prev, msgPayload
    ]);

    if (textRef.current) {
      textRef.current.value = ""
    };
  }, [])

  useEffect(() => {
    setMessages(userDummyText);
  }, [userDummyText])

  // console.table(messgaes)

  return (
    // Chatting Section
    <main
      className="fixed top-0 left-0 z-20 md:left-[80px] right-0 h-screen 
      flex items-center"
    >
      {/* Chat Bar of Whatsapp */}
      <div
        className="w-[30%] shadow-lg md:min-w-[300px] h-full"
      >
        {/* Chat top Section/ Navbar of the Chat Section */}
        <div className="px-4">
          <div className="flex items-center h-[60px]">
            <h1 className="font-sans text-2xl font-bold">WhatsApp</h1>
          </div>
          <form action="">
            <div
              className="border border-black/20 
            rounded-full px-3 py-2 flex gap-2 items-center"
            >
              <button type="submit"><FaMagnifyingGlass /></button>
              <input
                type="text"
                name="search-contact"
                id="search-contact"
                className="inline-block flex-grow focus:outline-none"
                placeholder="Search or Start a new chat"
              />
            </div>
          </form>
          <div className="tooltips flex gap-1 mt-2">
            <button
              className="border border-black/20 py-1 px-2 
            text-[12px] hover: rounded-full 
            hover:border-black/5 hover:bg-gray-300"
            >All
            </button>
            <button
              className="border border-black/20 py-1 px-2 
            text-[12px] hover: rounded-full 
            hover:border-black/5 hover:bg-gray-300"
            >unread
            </button>
            <button
              className="border border-black/20 py-1 px-2 
            text-[12px] hover: rounded-full 
            hover:border-black/5 hover:bg-gray-300"
            >Favourites
            </button>
            <button
              className="border border-black/20 py-1 px-2 
            text-[12px] hover: rounded-full 
            hover:border-black/5 hover:bg-gray-300"
            >Group
            </button>
          </div>
        </div>
        {/* Chat List/ User List */}
        <div
          className="chat_list h-full 
        my-1 overflow-y-scroll scroll-m-0 
        will-change-scroll">
          {
            dummyUser.map((element: User, index: number) => {
              return (
                <div
                  key={index}
                  className="chat_profile flex items-center 
                py-2 px-2 hover:bg-gray-200 my-1 rounded-2xl m-2"
                >
                  <div
                    className="w-[50px] h-[50px] rounded-full 
                  overflow-hidden bg-gray-500"
                  >
                    <img className="w-full h-full object-contain" src={element?.profileImage} alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h2 className="profile_name text-green-700">{element?.userName}</h2>
                    <div className="latest_msg text-[12px]">
                      {element?.lastMessage}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* Actual Chat Section */}
      <div className="h-screen bg-gray-300 flex-grow w-full flex items-start">
        <div className={`main-chat-section ${search ? 'w-1/2' : 'w-full'} h-full`}>
          {/* Top Bar Of Chat Section */}
          <div className="top_bar bg-gray-900 flex w-full h-[80px] items-center px-3 py-2 flex-nowrap">
            <div className="profile-image w-[60px] h-[60px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={dummyUser[0].profileImage}
                alt={dummyUser[0].userName}
              />
            </div>
            <div className="profile_name flex-grow pl-2 font-bold text-white">
              {dummyUser[0].userName}
            </div>
            <div className="w-[15%] min-w-[120px] flex gap-4 items-center ">
              <div onClick={handleSearch}><FaMagnifyingGlass size={20} color="white" /></div>
              <CiMenuKebab size={20} color="white" />
            </div>
          </div>
          {/* Chat section using websoccket */}
          <div className="h-full bg-black/55 relative">
            <div
              className="msg_list h-full pb-[100px] px-3
              flex flex-col justify-end">
              <div className="h-fit overflow-y-scroll scroll-container">
                {
                  messgaes?.map((msg: any, index: number) => {
                    if (msg?.userType === 'self') {
                      return (
                        <div className="text-right" key={index}>
                          {msg.text}
                          {msg.time}
                        </div>
                      )
                    } else {
                      return (
                        <div key={index}>
                          {
                            msg.text
                          }
                          {
                            msg.time
                          }
                        </div>
                      )
                    }
                  })
                }
              </div>
            </div>

            {/* Typed Part of the Message box */}
            <div className="flex items-center p-2 
            msg_input_field absolute bottom-[90px] h-[50px] bg-white rounded-full right-4 left-4">
              <div className="plus_icon p-2 rounded-full hover:bg-black/20 mr-1 cursor-pointer"><FaPlus /></div>
              <div className="files_icon p-2 rounded-full hover:bg-black/20 mr-1 cursor-pointer"><MdFileCopy /></div>
              <form onSubmit={(event) => handleSubmit(event)} className="flex-grow flex item-center rounded-full">
                <input
                  className="w-full user_message_input_field focus:outline-none selection:bg-none"
                  type="text"
                  name="message"
                  id="user_message"
                  autoComplete="off"
                  ref={textRef}
                />
                <button
                  type="submit"
                  className="h-[32px] w-[32px] hover:bg-black/20 
                  rounded-full relative
                  "
                >
                  <IoMdSend className="absolute top-1/2 left-1/2 submit_icon_center" />
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Side Search Option */}
        <div className={`search-option w-[50%] bg-black/95 h-screen ${search ? '' : 'hidden'}`}>

        </div>
      </div>
    </main>
  )
}

export default Home