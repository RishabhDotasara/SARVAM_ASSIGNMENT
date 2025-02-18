import { Book, Chrome, Eye, Download, MessageSquare, ThumbsDown, ThumbsUp, HelpCircle, Copy, X, ArrowRight, File, DivideIcon as LucideIcon } from "lucide-react";
import React from "react";
import { useRecoilState } from "recoil";
import { fileAtom } from "@/atoms/fileAtom";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

export type AIResponseType = {
  sources: Array<{
    id: string;
    name: string;
    img: string;
  }>;
  textResponse: string;
};

interface ActionOption {
  name: string;
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
  showLabel?: boolean;
}

const sourceActions: ActionOption[] = [
  {
    name: "Ask Sources",
    icon: MessageSquare,
    onClick: () => console.log("Ask Sources clicked"),
    showLabel: true,
  },
  {
    name: "Visualise",
    icon: Eye,
    onClick: () => console.log("Visualise clicked"),
    showLabel: true,
  },
];

const responseActions: ActionOption[] = [
  {
    name: "Thumbs Up",
    icon: ThumbsUp,
    onClick: () => console.log("Thumbs up clicked"),
  },
  {
    name: "Thumbs Down",
    icon: ThumbsDown,
    onClick: () => console.log("Thumbs down clicked"),
  },
];

const utilityActions: ActionOption[] = [
  {
    name: "Help",
    icon: HelpCircle,
    onClick: () => console.log("Help clicked"),
  },
  {
    name: "Copy",
    icon: Copy,
    onClick: () => console.log("Copy clicked"),
  },
  {
    name: "Download",
    icon: Download,
    onClick: () => console.log("Download clicked"),
  },
];


const ActionButton: React.FC<ActionOption> = ({
  name,
  icon: Icon,
  onClick,
  showLabel,
  className,
}) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-gray-800 transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-surface",
      className
    )}
  >
    <Icon className="h-4 sm:h-5 w-4 sm:w-5" />
    {showLabel && (
      <span className="text-xs sm:text-sm font-medium hidden sm:inline">
        {name}
      </span>
    )}
  </button>
);

export default function AIResponse({response}:{response:AIResponseType}) {
  const [selectedFile, setSelectedFile] = useRecoilState(fileAtom);

  return (
    <div className="flex flex-col sm:space-y-6 text-gray-500">
      {/* Sources Section */}
      <div className="bg-background rounded-lg">
        <div className="flex items-center justify-between p-2 sm:p-3 scrollbar-hide">
          <h2 className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Book className="h-4 w-4" /> Sources
          </h2>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
            <button className="text-xs flex gap-1 sm:gap-2 items-center text-blue-500 hover:text-blue-600 font-medium transition-colors">
              View All
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="px-2 sm:px-3 pb-2 sm:pb-3">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar p-2">
            {response.sources.map((source, index) => (
              <button
                key={index}
                onClick={() => setSelectedFile(source.id)}
                className={cn(
                  "flex-none group relative w-[90px] sm:w-[120px] rounded-lg overflow-hidden transition-all duration-200",
                  "hover:ring-2 hover:ring-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary",
                  selectedFile === source.id && "ring-2 ring-primary"
                )}
              >
                <div className="aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden">
                  <div className="relative h-full">
                    <img
                      src={source.img}
                      alt={source.name}
                      className="h-full w-full object-cover brightness-[0.85] group-hover:brightness-75 transition-all duration-200"
                    />
                    <div className="absolute inset-0 flex items-end p-2">
                      <p className="text-[10px] sm:text-xs font-medium text-white line-clamp-2 text-shadow">
                        {source.name}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result Section */}
      <div className="rounded-xl p-3 sm:p-6 bg-inherit">
        <h2 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-6">
          <Chrome className="h-5 w-5" /> Result
        </h2>
        <div className="prose prose-sm sm:prose text-gray-500 max-w-full overflow-x-auto">
          <ReactMarkdown>{response.textResponse}</ReactMarkdown>
        </div>
      </div>
      <div className="bg-surface w-fit p-1 text-xs rounded-xl px-3 font-semibold">
        Confidence 5/5
      </div>

      {/* Sources Again! */}
      <div>
        <div className="flex items-center justify-between p-2 sm:p-3 scrollbar-hide">
          <h2 className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Book className="h-4 w-4" /> Sources
          </h2>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-xs flex gap-1 sm:gap-2 items-center text-blue-500 hover:text-blue-600 font-medium transition-colors">
              View All
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="px-2 sm:px-3 pb-2 sm:pb-3">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar p-2 pb-3 scrollbar-hide">
            {response.sources.map((source, index) => (
              <button
                key={index}
                onClick={() => setSelectedFile(source.id)}
                className={cn(
                  "text-xs bg-surface p-2 px-4 rounded-md flex gap-2 w-fit text-nowrap font-semibold"
                )}
              >
                <File className="h-4 w-4"/>
                {source.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Response Options */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="md:flex items-center gap-2 sm:gap-4 order-2 sm:order-1 hidden bg-surface rounded-lg">
          {sourceActions.map((action) => (
            <ActionButton key={action.name} {...action} />
          ))}
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-1 sm:gap-2 order-1 sm:order-2 border-b sm:border-0 border-gray-100 pb-3 sm:pb-0">
          <div className="flex items-center gap-1">
            {responseActions.map((action) => (
              <ActionButton key={action.name} {...action} />
            ))}
          </div>
          <div className="flex items-center gap-1">
            {utilityActions.map((action) => (
              <ActionButton key={action.name} {...action} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}