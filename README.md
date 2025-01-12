# @nobrainers/react-copytext

## Table of Contents

- [Overview](#overview)
- [Examples](#examples)
  - [Basic Usage](#basic-usage)
  - [With Custom Labels](#with-custom-labels)
  - [Without Icons](#without-icons)
  - [With Custom Styling](#with-custom-styling)
  - [With Copy Feedback](#with-copy-feedback)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Features](#features)
- [License](#license)

## Overview

React CopyText is a React component that allows users to easily copy text to their clipboard. The component shows the text and a button that, when clicked, copies the text and provides visual feedback.

## Examples

### Basic Usage

```jsx
<CopyText text="Copy this text" />
```

### With Custom Labels

```jsx
<CopyText
  text="Copy this text"
  copyButtonLabel="Click to copy"
  copiedButtonLabel="Text copied!"
/>
```

### Without Icons

```jsx
<CopyText text="Copy this text" showIcon={false} />
```

### With Custom Styling

```jsx
<CopyText
  text="Copy this text"
  className="custom-wrapper"
  buttonClassName="custom-button"
/>
```

### With Copy Feedback

```jsx
const [copied, setCopied] = useState(false);

<CopyText
  text="Copy this text"
  copied={copied}
  onClick={() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }}
/>;
```

A simple and customizable React component for copying text to the clipboard.

## Installation

```bash
npm install react-copytext
```

## Usage

```jsx
import { CopyText } from "react-copytext";
// Don't forget to import the styles
import "react-copytext/dist/style.css";

function App() {
  const [copied, setCopied] = useState(false);

  return (
    <CopyText
      text="Text to be copied"
      copied={copied}
      onClick={() => setCopied(true)}
    />
  );
}
```

> ⚠️ **Important**: Make sure to import the CSS file to get the default styling:
>
> ```jsx
> import "react-copytext/dist/style.css";
> ```

## Props

| Prop                | Type     | Default    | Description                                   |
| ------------------- | -------- | ---------- | --------------------------------------------- |
| `text`              | string   | (required) | The text to be copied                         |
| `copied`            | boolean  | `false`    | Indicates if the text has been copied         |
| `onClick`           | function | `() => {}` | Callback function called after text is copied |
| `buttonClassName`   | string   | -          | Additional CSS class for the button           |
| `className`         | string   | -          | Additional CSS class for the wrapper          |
| `showIcon`          | boolean  | `true`     | Whether to show copy/copied icons             |
| `copyButtonLabel`   | string   | "Copy"     | Label for the copy button                     |
| `copiedButtonLabel` | string   | "Copied"   | Label for the copied state                    |

## Features

- 🎨 Customizable styling
- 📱 Responsive design
- ✨ Copy feedback states
- 🎯 TypeScript support
- 📦 Lightweight

## License

[MIT](LICENSE)
