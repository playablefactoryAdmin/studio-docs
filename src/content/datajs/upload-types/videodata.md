# Video

`Video` is a data type used to represent video file references. It allows you to define and store video-related data, typically for embedding or playing videos. Here are the attributes associated with `Video`:

- **type (string)**: "video"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (string | null)**: The default value, which can be a base64 or `null`.

## Example

Here's an example of how to use `Video`:

```json
{
  "type": "video",
  "id": "uniqueIdentifier",
  "name": "Introduction Video",
  "desc": "Embeds an introductory video on the website.",
  "default": null,
}
