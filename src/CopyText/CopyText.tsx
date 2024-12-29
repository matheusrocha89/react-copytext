import React from "react";

type CopyTextProps = {
  className?: string;
  copied?: boolean;
  onClick?: () => void;
  text: string;
};

const CopyText = ({ text }: CopyTextProps) => {
  return <h1>{text}</h1>;
};

export { CopyText };
export type { CopyTextProps };
