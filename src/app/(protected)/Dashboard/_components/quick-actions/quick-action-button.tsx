"use client";

interface QuickActionButtonsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  icon?: React.ReactNode;
}

const QuickActionButtons = ({
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
    </button>
  );
};

export default QuickActionButtons;
