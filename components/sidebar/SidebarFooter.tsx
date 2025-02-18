import React from "react";
import { Bell, User } from "lucide-react";
import Avatar from "./Avatar";

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
          <Avatar imageURL="https://plus.unsplash.com/premium_photo-1737659254845-d52fe134d589?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" onClick={()=>{}}/>
          <p className="font-medium text-md">My Account</p>
        </div>
      </div>
    </div>
  );
}
