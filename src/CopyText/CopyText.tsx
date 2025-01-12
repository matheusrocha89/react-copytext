import { FaRegClipboard, FaCheck } from "react-icons/fa6";
import cx from "classnames";

import styles from "./CopyText.module.css";

type CopyTextProps = {
  buttonClassName?: string;
  className?: string;
  showIcon?: boolean;
  copyButtonLabel?: string;
  copiedButtonLabel?: string;
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
  copiedButtonLabel = "Copied",
  copyButtonLabel = "Copy",
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
            {copiedButtonLabel}
          </>
        ) : (
          <>
            {showIcon && <FaRegClipboard data-testid="copy-icon" />}
            {copyButtonLabel}
          </>
        )}
      </button>
    </span>
  );
};

export { CopyText };
export type { CopyTextProps };
