# Audio

`Audio` is a data type used to represent audio file references, typically for sound or music files. It allows you to define and store audio-related data. Here are the attributes associated with `Audio`:

- **type (string)**: "audio"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (string | null)**: The default value, which can be a base64 or `null`.
- **tab (string, Optional)**: The tab where the data belongs.

## Example

Here's an example of how to use `Audio`:

```json
{
  "type": "audio",
  "id": "uniqueIdentifier",
  "name": "Background Music",
  "desc": "Specifies the background music for the application.",
  "default": "base64...",
  "tab": "Settings"
}
