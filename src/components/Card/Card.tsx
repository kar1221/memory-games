import React from "react";
import background from "@assets/undertale_background.jpg";

function Card({ imgSrc, spriteName }: CardProps): React.ReactElement {
  const [isRotate, setRotate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setRotate(true);
    }, 500);
  }, []);

  return (
    <button
      type="button"
      className={`bg-black h-80 w-60 relative transition-transform duration-500 ease-in-out transform-style-3d ${isRotate ? "rotate-y-0" : "rotate-y-180"} group will-change-transform`}
    >
      <div className="flex flex-col items-center justify-center gap-4 p-4 absolute top-0 bottom-0 left-0 right-0 backface-hidden group-hover:-translate-y-2 border-white border-4 group-hover:border-utYellow">
        <img src={imgSrc} alt="" className="w-auto h-3/5" />
        <p className="font-determination text-white text-2xl group-hover:text-utYellow">
          {spriteName}
        </p>
      </div>
      <div
        className="h-full bg-cover bg-no-repeat bg-top absolute top-0 left-0 right-0 bottom-0 rotate-y-180 backface-hidden border-white border-4"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
    </button>
  );
}

interface CardProps {
  imgSrc: string;
  spriteName: string;
}

export default Card;
