import React from "react";
import background from "@assets/undertale_background.jpg";
import { motion } from "framer-motion";

function Card({ imgSrc, spriteName, onClick }: CardProps): React.ReactElement {
  const [isCanClick, setIsCanClick] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsCanClick(true);
    }, 500);
  }, []);

  return (
    <motion.button
      initial={{
        rotateY: 180,
      }}
      animate={{
        rotateY: 0,
      }}
      exit={{
        rotateY: -180,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      type="button"
      className={`bg-black h-80 max-w-60 w-full relative backface-hidden transform-style-3d group ${isCanClick ? "pointer-events-auto" : "pointer-events-none"}`}
      onClick={() => {
        if (onClick && isCanClick) onClick();
      }}
    >
      <div className="flex absolute top-0 right-0 bottom-0 left-0 flex-col gap-4 justify-center items-center p-4 border-4 border-white backface-hidden group-hover:-translate-y-2 group-hover:border-utYellow">
        <img src={imgSrc} alt="" className="w-auto h-3/5" />
        <p className="text-2xl text-white font-determination group-hover:text-utYellow">
          {spriteName}
        </p>
      </div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full bg-top bg-no-repeat bg-cover border-4 border-white rotate-y-180 backface-hidden"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />
    </motion.button>
  );
}

interface CardProps {
  imgSrc: string;
  spriteName: string;
  onClick?: () => void;
}

export default Card;
