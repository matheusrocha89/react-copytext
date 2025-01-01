import React from "react";
import { FaRegClipboard, FaCheck } from "react-icons/fa6";
import cx from "classnames";

import styles from "./CopyText.module.css";

type CopyTextProps = {
  buttonClassName?: string;
  className?: string;
  showIcon?: boolean;
  copied?: boolean;
  onClick?: () => void;
  text: string;
};

const CopyText = ({
  buttonClassName,
  className,
  text,
  onClick = () => {},
  copied = false,
  showIcon = true,
}: CopyTextProps) => {
  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    onClick();
  };

  return (
    <span className={cx(styles.wrapper, className)}>
      {text}
      <button className={cx(styles.button, buttonClassName)} onClick={copyText}>
        {copied ? (
          <>
            {showIcon && <FaCheck data-testid="copied-icon" />}
            Copied
          </>
        ) : (
          <>
            {showIcon && <FaRegClipboard data-testid="copy-icon" />}
            Copy
          </>
        )}
      </button>
    </span>
  );
};

export { CopyText };
export type { CopyTextProps };
