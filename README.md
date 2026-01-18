# bbblog

A minimal web component for rendering blog posts.

## Installation

```bash
npm install @bbki.ng/bbblog
```

Or use via CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@bbki.ng/bbblog@0.0.3/dist/index.js"></script>
```

## Usage

```html
<bb-blog content="/posts.json">
  <!-- Fallback content shown if fetch fails -->
  <p>Loading...</p>
</bb-blog>
```

### JSON Format

The `content` attribute should point to a JSON file with an array of posts:

```json
[
  {
    "title": "Hello World",
    "content": "<p>This is my first post.</p>"
  },
  {
    "title": "Another Post",
    "content": "<p>More content here.</p>"
  }
]
```

## Components

### `<bb-blog>`

Main container component that fetches and displays posts.

| Attribute | Description |
|-----------|-------------|
| `content` | URL to JSON file containing posts |

### `<bb-post>`

Individual post component (used internally by `<bb-blog>`).

| Property | Description |
|----------|-------------|
| `title` | Post title |
| `content` | Post HTML content |
| `date` | Post date |

## License

MIT
