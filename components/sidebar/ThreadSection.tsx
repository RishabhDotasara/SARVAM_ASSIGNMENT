import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ThreadSectionProps } from './types';

export default function ThreadSection({ title, threads }: ThreadSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleThreads = showAll ? threads : threads.slice(0, 3);

  return (
    <div className="space-y-3">
      <h2 className="font-semibold text-lg text-gray-500 px-2">
        {title}
      </h2>
      <div className="flex flex-col gap-1">
        {visibleThreads.map((thread) => (
          <button
            key={thread.id}
            onClick={thread.onClick}
            className="text-left px-3 py-2 font-medium rounded-lg hover:bg-primary-light/10 transition-colors duration-200 text-gray-700"
          >
            {thread.title}
          </button>
        ))}
        {threads.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-primary font-medium px-3 py-2 hover:bg-primary-light/10 rounded-lg transition-colors duration-200"
          >
            {showAll ? 'Show Less' : `Show ${threads.length - 3} More`}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </div>
  );
}