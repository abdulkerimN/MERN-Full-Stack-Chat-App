import React from "react";
import assets from "../assets/assets";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return (
    <div className="flex-1 h-full relative backdrop-blur-lg">
      {selectedUser ? (
        <div className="h-full overflow-y-scroll">
          {/* Chat Header */}
          <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
            <img
              src={assets.profile_martin}
              alt=""
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

          {/* Messages will go here */}
        </div>
      ) : (
        /* Empty State */
        <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-500 bg-white/10">
          <img src={assets.logo_icon} className="w-16" alt="" />
          <p className="text-lg font-medium text-white">
            Chat anytime, Anywhere
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatContainer;
