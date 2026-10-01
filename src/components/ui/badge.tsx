import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "success";
  className?: string;
}

export function Badge({ children, variant = "primary", className = "", ...props }: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#1E88E5]/15 text-[#42A5F5] border-[#1E88E5]/30",
    secondary: "bg-white/10 text-white border-white/10",
    outline: "bg-transparent text-[#8C8C8C] border-white/20",
    success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1
        rounded-full text-xs font-medium tracking-wide uppercase
        border ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}
