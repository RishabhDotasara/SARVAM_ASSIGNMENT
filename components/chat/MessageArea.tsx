import React, { useState, useEffect, useRef } from "react";
import AIResponse, { AIResponseType } from "./AIResponse";
import Fileviewer from "./Fileviewer";
import { useRecoilState } from "recoil";
import { fileAtom } from "@/atoms/fileAtom";
import QueryBox from "./QueryBox";
import { cn } from "@/lib/utils";

export default function MessageArea() {
  const [messages, setMessages] = useState<any>([
    { text: "Hello!", isUser: true },
    { text: "Hi there!", isUser: false },
    { text: "How are you?", isUser: true },
  ]);
  const [selectedFile, setSelectedFile] = useRecoilState(fileAtom);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const response: AIResponseType = {
    textResponse: `# Building Modern Web Applications: A Comprehensive Guide
  
  ## Introduction
  
  In today's rapidly evolving tech landscape, building modern web applications requires a deep understanding of various tools and best practices. Let's explore the key components and strategies for creating robust, scalable applications.
  
  ## 🚀 Getting Started with Modern Frontend Development
  
  ### The Foundation: React and TypeScript
  
  React has revolutionized how we build user interfaces. When combined with TypeScript, it provides a powerful foundation for scalable applications.
  
  \`\`\`typescript
  // Example of a modern React component
  interface UserProfileProps {
    name: string;
    role: 'admin' | 'user';
    achievements: string[];
  }
  
  const UserProfile: React.FC<UserProfileProps> = ({
    name,
    role,
    achievements
  }) => {
    return (
      <div className="p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{name}</h2>
        <span className="badge">{role}</span>
        <ul>
          {achievements.map(achievement => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
    );
  };
  \`\`\`
  `,
    sources: [
      {
        id: Math.random().toString(36),
        name: "Modern Web Development Guide 2024",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: Math.random().toString(36),
        name: "Frontend Architecture Patterns",
        img: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: Math.random().toString(36),
        name: "React Best Practices 2024",
        img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: Math.random().toString(36),
        name: "TypeScript Deep Dive",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      },
    ],
  };

  const addMessage = (msg: string, isUser: boolean) => {
    setMessages([...messages, { text: msg, isUser: isUser }, { text: "Message by AI", isUser: false }]);
  };

  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="flex h-full w-full">
      <div className="flex h-full flex-grow flex-col min-w-0">
        <div
          className={cn(
            "mx-auto h-full w-full max-w-3xl px-2 sm:px-4 flex flex-col",
            selectedFile ? "lg:max-w-2xl" : "lg:max-w-3xl"
          )}
        >
          {/* Messages Container */}
          <div className="flex-grow overflow-y-auto scrollbar-hide">
            <div className="flex flex-col space-y-6 py-6">
              {messages.map((message: any, index: number) => (
                <div
                  key={index}
                  className={cn(
                    "flex w-full",
                    message.isUser ? "justify-end" : "justify-start"
                  )}
                >
                  {message.isUser ? (
                    <div className="max-w-[85%] sm:max-w-[75%]">
                      <div className="bg-surface text-gray-700 font-medium px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-sm">
                        {message.text}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <AIResponse response={response} />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Query Box Container */}
          <QueryBox onSubmit={(query: string) => { addMessage(query, true); }} />
        </div>
      </div>

      {/* File Viewer */}
      {selectedFile && (
        <div className="hidden lg:flex flex-shrink-0 w-[600px] border-l border-gray-50/10 overflow-y-auto scrollbar-hide">
          <Fileviewer file={{name:"Sebi rules and guidelines", url:"https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf"}}/>
        </div>
      )}
    </div>
  );
}