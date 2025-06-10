"use client";

interface QuickActionButtonsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  desc: string;
  color?: string;
  icon?: React.ReactNode;
  hasDialog?: boolean;
}

const QuickActionButtons = ({
  title,
  desc,
  icon,
  color,
  ...props
}: QuickActionButtonsProps) => {
  return (
    <button
      className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-900 p-6 text-nowrap transition-all duration-150 hover:scale-103"
      style={{ backgroundColor: color }}
      {...props}
    >
      {icon}
      <h1 className="bold mt-[8px]">{title}</h1>
      <h2 className="text-xs text-white/70">{desc}</h2>
    </button>
  );
};

export default QuickActionButtons;
