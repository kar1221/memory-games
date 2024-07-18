import React from "react";
import { twMerge } from "tailwind-merge";
import Soul from "../Soul";
import Text from "../Text";

function Button({ onClick, text, className }: ButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      aria-label="Hard"
      className="flex gap-4 justify-center items-center bg-transparent border-none group"
      onClick={onClick}
    >
      <Soul className="hidden h-3 sm:h-5 group-hover:block" />
      <Text
        text={text}
        className={twMerge("group-hover:text-utYellow", className)}
      />
    </button>
  );
}

interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

export default Button;
