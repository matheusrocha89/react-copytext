import React from "react";

type CopyTextProps = {
  className?: string;
  copied: boolean;
  onClick?: () => void;
  text: string;
};

const CopyText: React.FC<CopyTextProps> = ({
  className,
  text,
  copied = false,
  onClick = () => {},
}) => {
  return null;
};

export { CopyText };
export type { CopyTextProps };
