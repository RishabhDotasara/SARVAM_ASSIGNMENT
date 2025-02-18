"use client";
import ChatBox from "@/components/chat/chatBox";
import Sidebar from "@/components/sidebar/Sidebar";
import SidebarProvider from "@/components/sidebar/SidebarProvider";
import React from "react";
import { RecoilRoot } from "recoil";

const todayThreads = [
  {
    id: '1',
    title: 'Web Accessibility',
    onClick: () => console.log('Clicked Web Accessibility'),
  },
  {
    id: '2',
    title: 'Design Trends',
    onClick: () => console.log('Clicked Design Trends'),
  },
  {
    id: '3',
    title: 'What is machine learning',
    onClick: () => console.log('Clicked Machine Learning'),
  },
  {
    id: '4',
    title: 'Frontend Development',
    onClick: () => console.log('Clicked Frontend Development'),
  },
];

const yesterdayThreads = [
  {
    id: '5',
    title: 'UI Components',
    onClick: () => console.log('Clicked UI Components'),
  },
  {
    id: '6',
    title: 'Performance Tips',
    onClick: () => console.log('Clicked Performance Tips'),
  },
  {
    id: '7',
    title: 'React Best Practices',
    onClick: () => console.log('Clicked React Best Practices'),
  },
];


export default function Home() {
  return (
    <RecoilRoot>
      <SidebarProvider>
        <div className="flex">
          <Sidebar todayThreads={todayThreads} yesterdayThreads={yesterdayThreads} />
          <ChatBox />
        </div>
      </SidebarProvider>
    </RecoilRoot>
  );
}
