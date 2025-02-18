import React from 'react';
import { X, Download, Printer, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface DocumentViewerProps {
  document: {
    name: string;
    size: string;
    type: string;
  };
  onClose: () => void;
}

export default function DocumentViewer({ document, onClose }: DocumentViewerProps) {
  return (
    <div>
      
    </div>
  );
}