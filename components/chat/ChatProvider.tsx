import React, { createContext, useState } from "react";
import { RecoilRoot } from "recoil";

type ChatContextType = {
  // define the shape of your context here
  selectedFile: string | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<string | null>>;
};

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

export default function ChatProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}
