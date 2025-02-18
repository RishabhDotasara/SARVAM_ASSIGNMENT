export interface Thread {
    id: string;
    title: string;
    onClick: () => void;
  }
  
  export interface ThreadSectionProps {
    title: string;
    threads: Thread[];
  }
  
  export interface SidebarProps {
    todayThreads: Thread[];
    yesterdayThreads: Thread[];
  }