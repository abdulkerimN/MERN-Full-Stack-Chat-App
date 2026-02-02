import React from "react";
import assets from "../assets/assets";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return (
    <div className="flex-1 h-full relative backdrop-blur-lg bg-white/5">
      {selectedUser ? (
        <div className="h-full overflow-y-scroll">
          {/* Header */}
          <div className="flex items-center gap-3 py-3 px-4 border-b border-stone-500">
            <img
              src={assets.profile_martin}
              alt="profile"
              className="w-8 rounded-full"
            />

            <p className="flex-1 text-lg text-white flex items-center gap-2">
              Alex mark
              <span className="w-2 h-2 rounded-full bg-green-500" />
            </p>

            <img
              onClick={() => setSelectedUser(null)}
              src={assets.arrow_icon}
              alt="back"
              className="md:hidden w-7 cursor-pointer"
            />

            <img
              src={assets.help_icon}
              alt="help"
              className="max-md:hidden w-5 cursor-pointer"
            />
          </div>

          {/* Messages go here */}
        </div>
      ) : (
        /* EMPTY STATE */
        <div className="h-full w-full flex flex-col items-center justify-center gap-3">
          <img src={assets.logo_icon} alt="logo" className="w-20 opacity-90" />
          <p className="text-xl font-medium text-white">
            Chat Anywhere
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
