import React, { createContext, useState } from "react";

interface SidebarContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width:string;

}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
const width = "10rem"

export default function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen, width}}>
      {children}
    </SidebarContext.Provider>
  );
}
