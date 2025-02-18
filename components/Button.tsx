import { cn } from "@/lib/utils";
import React from "react";

export default function Button({
  children,
  className,
  onClick,
  variant
}: {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
  variant: "primary" | "secondary"
}) {
  return (
    <button onClick={onClick} className={cn(
        variant == "primary" && "border-2 border-orange-300 bg-orange-200 text-orange-300"
    )}>
      {children}
    </button>
  );
}
