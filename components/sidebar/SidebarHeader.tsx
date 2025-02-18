import React from 'react';
import { Columns as ChartColumnStacked, SidebarCloseIcon } from 'lucide-react';

interface SidebarHeaderProps {
  onClose: () => void;
}

export default function SidebarHeader({ onClose }: SidebarHeaderProps) {
  return (
    <div className="flex-none border-b border-gray-200">
      <div className="flex items-center justify-between p-4">
        <span className="text-xl font-bold flex items-center gap-2 text-gray-600">
          <ChartColumnStacked className="h-6 w-6" />
          ChatGST
        </span>
        <button
          className="p-2 hover:bg-primary-light rounded-lg transition-colors duration-200"
          onClick={onClose}
        >
          <SidebarCloseIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
}