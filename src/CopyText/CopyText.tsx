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
  textClassName?: string;
  copyIcon?: React.ElementType;
  copiedIcon?: React.ElementType;
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
  textClassName,
  copyIcon,
  copiedIcon,
}: CopyTextProps) => {
  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    onClick();
  };
  const CopyIcon = copyIcon || FaRegClipboard;
  const CopiedIcon = copiedIcon || FaCheck;

  return (
    <span className={cx(styles.wrapper, className)}>
      <span className={textClassName}>{text}</span>
      <button className={cx(styles.button, buttonClassName)} onClick={copyText}>
        {copied ? (
          <>
            {showIcon && <CopiedIcon data-testid="copied-icon" />}
            {copiedButtonLabel}
          </>
        ) : (
          <>
            {showIcon && <CopyIcon data-testid="copy-icon" />}
            {copyButtonLabel}
          </>
        )}
      </button>
    </span>
  );
};

export { CopyText };
export type { CopyTextProps };
