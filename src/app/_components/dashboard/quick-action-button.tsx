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
      className="flex aspect-square w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-900 p-8 text-nowrap transition-all duration-150 hover:scale-103"
      style={{ backgroundColor: color }}
      {...props}
    >
      <h1 className="text-2xl">{icon}</h1>
      <h1 className="bold mt-[8px] hidden xl:block">{title}</h1>
      <h2 className="hidden text-xs text-white/70 xl:block">{desc}</h2>
    </button>
  );
};

export default QuickActionButtons;
