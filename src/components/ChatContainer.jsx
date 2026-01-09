import React from "react";
import assets from "../assets/assets";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return selectedUser ? (
    <div className="h-full overflow-y-scroll relative backdrop-blur-lg">
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img src={assets.profile_martin} alt="" className="w-8 rounded-full" />

        <p className="flex-1 text-lg text-white flex items-center gap-2">
          Alex mark
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>

        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt=""
          className="md:hidden w-7 cursor-pointer"
        />

        <img
          onClick={() => setSelectedUser(null)}
          src={assets.help_icon}
          alt=""
          className="max-md:hidden w-5 cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} className="w-16" alt="" />
      <p className="text-lg font-medium text-white">Chat anytime, Anywhere</p>
    </div>
  );
};

export default ChatContainer;
