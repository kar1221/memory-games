import React from "react";

function Soul({ className }: SoulProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill="#fe0000"
        d="M2 0h2v1h2v1h1v2h2v-2h1v-1h2v-1h2v1h1v1h1v8h-2v2h-2v2h-2v2h-4v-2h-2v-2h-2v-2h-2v-8h1v-1h1v-1z"
      />
    </svg>
  );
}

interface SoulProps {
  className?: string;
}

export default Soul;
