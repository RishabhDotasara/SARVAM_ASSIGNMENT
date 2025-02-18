import React from 'react';
import { File } from 'lucide-react';

interface FileCardProps {
  filename: string;
}

const documentImages = [
  'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800',  // papers on desk
  'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?auto=format&fit=crop&q=80&w=800',  // stacked papers
  'https://images.unsplash.com/photo-1586952518485-11b180e92764?auto=format&fit=crop&q=80&w=800',  // documents and laptop
  'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800',  // notebook and coffee
];

export function FileCard({ filename }: FileCardProps) {
  // Get a random image URL
  const randomImage = documentImages[Math.floor(Math.random() * documentImages.length)];

  return (
    <div className="relative group h-64 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${randomImage})`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20">
        {/* File Icon and Name */}
        <div className="absolute bottom-0 w-full p-4 flex items-center gap-2">
          <File className="w-5 h-5 text-white" />
          <h3 className="text-white font-medium truncate">{filename}</h3>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}