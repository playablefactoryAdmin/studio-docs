# Font

`Font` is a data type used to represent data that involves font file uploads. This enables applications to utilize custom fonts by allowing users to upload their font files. Here are the attributes associated with `Font`:

- **type (string)**: "font"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description of the font or its intended usage.
- **default (string | null)**: The default value, which can be a bas64 value to a font or `null`.

## Example

Here's an example of how to use `Font`:

```json
{
  "type": "font",
  "id": "fontIdentifier",
  "name": "Custom Font Upload",
  "desc": "Allows the user to upload a custom font file.",
  "default": null,
}

