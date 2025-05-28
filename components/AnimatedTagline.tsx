"use client";

import { useState } from "react";
import { Search, CornerDownLeft } from "lucide-react";

export default function AnimatedTagline() {
  const fullText = "Spotlight is trash, so we decided to fix it.";
  const [text] = useState(fullText);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-black/80 backdrop-blur-md rounded-xl p-4 flex items-center shadow-lg border border-gray-700">
        <div className="text-gray-500 mr-3">
          <Search className="w-5 h-5" />
        </div>
        <div className="text-gray-300 flex-1 font-medium">
          <div className="flex">
            <span>{text}</span>
          </div>
        </div>
        <div className="text-gray-500 ml-3 flex items-center opacity-70">
          <CornerDownLeft className="w-4 h-4 stroke-[1.5]" />
        </div>
      </div>
    </div>
  );
} 