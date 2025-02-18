import React from 'react';
import { MoreVertical } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MenuOption {
  name: string;
  onClick: () => void;
  icon: LucideIcon;
}

interface DialogMenuProps {
  options: MenuOption[];
  trigger?: React.ReactNode;
}

export function DialogMenu({ options, trigger }: DialogMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-surface-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light"
        aria-label="Menu"
      >
        {trigger || <MoreVertical className="w-5 h-5 text-gray-600" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-surface border border-gray-50 py-1 z-50">
          <div className="max-h-[280px] overflow-y-auto">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  option.onClick();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-primary-light transition-colors duration-150 focus:outline-none focus:bg-primary-light flex items-center gap-3"
              >
                <option.icon className="w-4 h-4" />
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}