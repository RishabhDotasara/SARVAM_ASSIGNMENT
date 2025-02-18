import React, { useContext, useState } from "react";
import { SidebarContext } from "./SidebarProvider";
import { Bell, Menu, Plus, SidebarOpen, Square, User } from "lucide-react";
import Separator from "../Separator";
import type { SidebarProps } from "./types";
import ThreadSection from "./ThreadSection";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import { DialogMenu } from "../DialogMenu";

export default function Sidebar({ todayThreads, yesterdayThreads }: SidebarProps) {
  const Context = useContext(SidebarContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClose = () => {
    Context?.setOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible on small screens */}
      <button
        className="fixed top-4 left-4 p-2 rounded-lg bg-surface shadow-md lg:hidden z-30"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </button>

      {/* Desktop Sidebar (Non-expanded) - Only visible on md and up */}
      <div className="hidden lg:flex z-20 bg-background h-screen w-[6rem] items-center fixed">
        <div className="flex flex-col gap-8 bg-surface items-center p-4 px-4 mx-auto rounded-xl shadow-sm">
          <div className="flex flex-col gap-4">
            <button
              className="p-2.5 rounded-md hover:bg-primary-light transition-colors duration-200 group"
              onClick={() => Context?.setOpen(!Context?.open)}
            >
              <SidebarOpen className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
            </button>
            <button className="bg-primary-light text-primary p-2.5 rounded-xl hover:bg-primary-medium transition-colors duration-200">
              <Plus className="h-6 w-6" />
            </button>
          </div>

          <Separator />

          <div className="flex flex-col gap-4">
            <button className="p-2.5 relative rounded-md hover:bg-primary-light transition-colors duration-200 group">
              <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full h-5 w-5 text-xs flex items-center justify-center font-medium">
                5
              </span>
              <Bell className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
            </button>
            <button className="p-2.5 rounded-md hover:bg-primary-light transition-colors duration-200 group">
                <Square className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
              </button>
            
          </div>
        </div>
      </div>

      {/* Mobile Menu (Full Width) and Desktop Expanded Menu */}
      <div 
        className={`fixed md:absolute h-screen bg-background text-gray-700 w-full md:w-[280px] flex flex-col shadow-lg z-40
          ${isMobileMenuOpen || Context?.open ? 'translate-x-0' : '-translate-x-full'} 
          transition-transform duration-300 ease-in-out`}
      >
        <SidebarHeader onClose={handleClose} />

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="p-4 space-y-6">
            {/* ADD THREAD BUTTON */}
            <button className="flex items-center gap-2 bg-background text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-background/80 transition-colors duration-200 outline-2 justify-between w-full">
              Add New Thread
              <Plus className="h-5 w-5" />
            </button>

            <ThreadSection title="Today" threads={todayThreads} />
            <ThreadSection title="Yesterday" threads={yesterdayThreads} />
          </div>
        </div>

        <SidebarFooter />
      </div>

      {/* Overlay for mobile */}
      {(isMobileMenuOpen || Context?.open) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleClose}
        />
      )}
    </>
  );
}