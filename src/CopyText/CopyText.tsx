import React from "react";
import { FaRegClipboard, FaCheck } from "react-icons/fa6";
import cx from "classnames";

import styles from "./CopyText.module.css";

type CopyTextProps = {
  className?: string;
  copied?: boolean;
  onClick?: () => void;
  text: string;
};

const CopyText = ({
  className,
  text,
  onClick = () => {},
  copied = false,
}: CopyTextProps) => {
  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    onClick();
  };

  return (
    <span className={cx(styles.wrapper, className)}>
      {text}
      <button className={styles.button} onClick={copyText}>
        {copied ? (
          <>
            <FaCheck />
            Copied
          </>
        ) : (
          <>
            <FaRegClipboard />
            Copy
          </>
        )}
      </button>
    </span>
  );
};

export { CopyText };
export type { CopyTextProps };
