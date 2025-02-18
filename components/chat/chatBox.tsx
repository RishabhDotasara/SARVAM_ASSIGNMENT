import React from "react";
import QueryBox from "./QueryBox";
import MessageArea from "./MessageArea";
import Fileviewer from "./Fileviewer";

export default function ChatBox() {
  return (
    <div className="w-full flex flex-col py-3 items-center min-h-screen max-h-screen justify-end ">
      <MessageArea />
    </div>
  );
}
