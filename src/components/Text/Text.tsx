import React from "react";
import { twMerge } from "tailwind-merge";

function Text({ text, className }: TextProps): React.ReactElement {
  const baseClasses = "font-determination text-white";

  return <p className={twMerge(baseClasses, className)}>{text}</p>;
}

interface TextProps {
  text: string;
  className?: string;
}

export default Text;
