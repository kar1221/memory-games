import React from "react";

function Title({ titleText, className }: TitleProps): React.ReactElement {
  return (
    <div className="relative">
      <h1 className={`text-white opacity-50 ${className} font-titleBack`}>
        {titleText}
      </h1>
      <h1 className={`absolute top-0 font-titleCenter text-utRed ${className}`}>
        {titleText}
      </h1>
      <h1 className={`absolute top-0 text-white ${className} font-titleFore`}>
        {titleText}
      </h1>
    </div>
  );
}

interface TitleProps {
  titleText: string;
  className?: string;
}

export default Title;
