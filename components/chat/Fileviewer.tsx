import React from 'react';
import { Download, Search, X } from 'lucide-react';
import { useRecoilState } from 'recoil';
import { fileAtom } from '@/atoms/fileAtom';
import { Viewer, Worker } from '@react-pdf-viewer/core';

export default function Fileviewer({file}:{file:{name:string, url:string}}) {
  const [selectedFile, setSelectedFile] = useRecoilState(fileAtom);

  const handleClose = () => {
    setSelectedFile(null);
  };

  const handleDownload = () => {
    // Implement download functionality
    console.log('Downloading file...');
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching in file...');
  };

  if (!selectedFile) return null;

  return (
    <div className="w-[600px] h-full flex flex-col bg-surface border-2 border-black/10 rounded-md">
      <div className="flex items-center justify-between px-4 py-2 border-b border-black/10">
        <div className="flex items-center">
          <h2 className="text-sm font-medium text-gray-700 truncate max-w-[300px]">
            {file.name || 'Untitled Document'}
          </h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="p-1.5 text-gray-600 hover:text-gray-700 hover:bg-primary-light rounded-lg transition-colors"
            aria-label="Download file"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={handleSearch}
            className="p-1.5 text-gray-600 hover:text-gray-700 hover:bg-primary-light rounded-lg transition-colors"
            aria-label="Search in file"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={handleClose}
            className="p-1.5 text-gray-600 hover:text-gray-700 hover:bg-primary-light rounded-lg transition-colors"
            aria-label="Close viewer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {/* PDF viewer content will go here */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={file.url} />
      </Worker>
        </div>
      </div>
    </div>
  );
}