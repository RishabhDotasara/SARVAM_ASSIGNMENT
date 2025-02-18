import { cn } from "@/lib/utils";
import { File, PlusSquare, SendHorizontalIcon, X } from "lucide-react";
import React, { useRef, useState } from "react";

interface QueryBoxProps {
  onSubmit: (query: string) => void;
}

export default function QueryBox({ onSubmit }: QueryBoxProps) {
  const [query, setQuery] = useState("");
  const [uploadedDocuments, setUploadedDocuments] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).map(file => file.name);
      setUploadedDocuments(prev => [...prev, ...newFiles]);
    }
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeDocument = (documentName: string) => {
    setUploadedDocuments(prev => prev.filter(doc => doc !== documentName));
  };

  return (
    <div className="w-full max-w-3xl bg-background border-2 p-4 text-gray-400 rounded-xl ring-primary ring-1 sticky bottom-1 mx-auto">
      {/* UPLOADED DOCUMENTS */}
      {uploadedDocuments.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
          {uploadedDocuments.map((document: string) => {
            return (
              <div key={document} className="flex-shrink-0 w-52 bg-surface rounded-lg p-2.5 px-3">
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4 flex-shrink-0 text-gray-500"/>
                  <span className="truncate text-gray-600 text-sm font-medium flex-1">
                    {document}
                  </span>
                  <button 
                    className="flex-shrink-0 hover:bg-surface-light p-1 rounded-full transition-colors"
                    onClick={() => removeDocument(document)}
                  >
                    <X className="h-3.5 w-3.5 text-gray-500"/>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {/* INPUT */}
      <div>
        <input
          placeholder="Type your query here..."
          className="w-full py-1 bg-background outline-none font-medium text-lg text-gray-700 placeholder:text-gray-400"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query.length > 3) {
              onSubmit(query);
              setQuery("");
            }
          }}
        />
        <div className="flex justify-between items-center mt-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            multiple
            accept=".pdf,.doc,.docx,.txt,.png"
          />
          <button 
            className="hover:bg-surface rounded-lg transition-colors p-2"
            onClick={() => fileInputRef.current?.click()}
          >
            <PlusSquare className="h-5 w-5 text-gray-500" />
          </button>
          <button
            className={cn(
              "py-2 px-4 rounded-lg transition-colors flex items-center gap-2",
              query.length > 3 ? "bg-primary text-white" : "bg-surface text-gray-400"
            )}
            disabled={query.length < 3}
            onClick={() => {
              onSubmit(query);
              setQuery("");
            }}
          >
            <SendHorizontalIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}