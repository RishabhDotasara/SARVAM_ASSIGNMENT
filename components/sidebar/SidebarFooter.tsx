import React from "react";
import { Bell, User } from "lucide-react";
import { DialogMenu } from "../DialogMenu";

const userOptions = [
  {
    name: "Profile",
    onClick: () => {
      console.log("Clicked!");
    },
    icon: User,
  },
];

export default function SidebarFooter() {
  return (
    <div className="flex-none border-t border-gray-200">
      <div className="p-4 space-y-4 font-medium">
        <div className="flex gap-2 items-center justify-start px-2 py-2">
          <Bell className="h-5 w-5" />
          <span>Notifications</span>
        </div>
        <div className="flex items-center gap-3 px-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
            JD
          </div>
          <p className="font-medium text-md">My Account</p>
        </div>
      </div>
    </div>
  );
}
