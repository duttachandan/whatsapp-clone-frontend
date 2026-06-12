import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";

// dummy content
import { dummyUser } from '../../../data';

interface User {
  userName: string;
  profileImage: string;
  lastMessage: string;
}

const Home = () => {
  return (
    // Chatting Section
    <main
      className="fixed top-0 left-0 z-20 md:left-[80px] w-full right-0 h-screen 
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
      <div className="w-[50%] h-screen bg-gray-300 flex-grow flex items-start">
        <div className="main-chat-section w-full h-full">
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
              <FaMagnifyingGlass size={20} color="white" />
              <CiMenuKebab size={20} color="white" />
            </div>
          </div>
          {/* Chat section using websoccket */}
          <div className="h-full bg-blue-700">
            <div className="msg_list"></div>
            <div className="msg_input_field">
                
            </div>
          </div>
        </div>
        {/* <div className="search-option w-[50%] bg-black/95 h-screen hidden">
          
        </div> */}
      </div>
    </main>
  )
}

export default Home