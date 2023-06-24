# Magic Cursor
A simple, lightweight, and customizable cursor for your website or web app.

[![GitHub Stars](https://img.shields.io/github/stars/wh0sumit/magic-cursor.svg)](https://github.com/wh0sumit/magic-cursor/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/wh0sumit/magic-cursor.svg)](https://github.com/wh0sumit/magic-cursor/network/members)
[![GitHub Contributors](https://img.shields.io/github/contributors/wh0sumit/magic-cursor.svg)](https://github.com/wh0sumit/magic-cursor/graphs/contributors)



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Parameters](#parameters)
- [Contributing](#contributing)

## Installation

To install Magic Cursor, you can use npm or yarn.

```shell
npm install magic-cursor
```

## Usage

To use Magic Cursor, you can import it in your JavaScript file.

```javascript
import MagicCursor from 'magic-cursor';
```

Then, you can initialize it by passing the parameters.

```javascript
<MagicCursor image="/path/to/cursor-image.png" text="Custom Cursor">
  {/* Your content or component */}
</MagicCursor>
```

## Parameters

| Parameter           | Type     | Default Value | Description                                         |
|---------------------|----------|---------------|-----------------------------------------------------|
| `image`             | string   | `undefined`   | Path to the cursor image file.                      |
| `text`              | string   | `undefined`   | Custom text to display alongside the cursor.         |
| `color`             | string   | `"black"`     | Color of the cursor text.                           |
| `imageWidth`        | string   | `"200px"`     | Width of the cursor image.                          |
| `imageHeight`       | string   | `"200px"`     | Height of the cursor image.                         |
| `transitionDuration`| string   | `"0.3s"`      | Duration of the cursor transition animation.         |
| `showDefaultCursor` | boolean  | `true`        | Whether to show the default system cursor alongside the custom cursor. |

Note: The children prop is required and should include the content or components on which you want to apply the custom cursor.

## Contributing

Contributions are welcome! Here's how you can contribute to the Magic Cursor project:

- Fork the repository on GitHub.
- Clone your forked repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive messages.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.

Feel free to contribute, report issues, or suggest improvements for Magic Cursor. Let's make the cursor on your website or web app more magical! 🎉