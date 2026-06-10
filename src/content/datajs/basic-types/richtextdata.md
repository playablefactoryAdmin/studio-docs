# RichText

`RichText` is a data type used to represent formatted text content with rich editing capabilities. It is built on top of a Quill-like editor and supports themes, modules and custom formats. Here are the attributes associated with `RichText`:

- **type (string)**: "richText"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (string)**: The default rich text content (HTML or delta string).
- **placeholder (string, Optional)**: Placeholder text shown when the editor is empty.
- **readOnly (boolean, Optional)**: When true, disables editing.
- **theme ("snow" | "bubble", Optional)**: Editor theme.
- **modules (object, Optional)**: Editor modules configuration (e.g. toolbar definition).
- **formats (string[], Optional)**: Whitelist of formats allowed in the editor.

## Example

Here's an example of how to use `RichText`:

```json
{
  "type": "richText",
  "id": "uniqueIdentifier",
  "name": "Description",
  "desc": "Rich formatted description text.",
  "default": "<p>Hello <strong>world</strong></p>",
  "placeholder": "Type something...",
  "readOnly": false,
  "theme": "snow",
  "formats": ["bold", "italic", "underline", "link"]
}
```
