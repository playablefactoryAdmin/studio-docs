# Image

`Image` is a data type used to represent image file references. It's commonly used for storing references to image files, such as icons, images, or pictures. Here are the attributes associated with `Image`:

- **type (string)**: "image"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (string | null)**: The default value, which can be a base64 or `null`.
- **librarySize ("xs"-"xl" optional)**: The size that the selected image from the library will be resized to.

## Example

Here's an example of how to use `Image`:

```json
{
  "type": "image",
  "id": "uniqueIdentifier",
  "name": "Profile Picture",
  "desc": "Stores the user's profile picture.",
  "default": "base64...",
}
