# SelectImage

`SelectImage` is a data type used to represent options in a selection menu where users can choose one or more images. It's similar to `SelectData`, but it's specifically designed for image selections. Here are the attributes associated with `SelectImage`:

- **type (string)**: "selectImage"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number | number[])**: The default value(s).
- **multipleSelection (boolean)**: Allows multiple image selections.
- **options (string[])**: List of available image options.
- **min (number, Optional)**: Minimum number of selections.
- **max (number, Optional)**: Maximum number of selections.
- **size (string)**: Specifies the image size ("sm," "md," "lg").
- **display ("cover" | "contain" | "responsive")**: how to display the image in the editor (default cover).

## Example

Here's an example of how to use `SelectImage`:

```json
{
  "type": "selectImage",
  "id": "uniqueIdentifier",
  "name": "Profile Picture",
  "desc": "Allows the user to select their profile picture.",
  "default": 1,
  "multipleSelection": false,
  "options": ["image1.jpg", "image2.jpg", "image3.jpg"],
  "min": 1,
  "max": 1,
  "size": "md",
  "display": "responsive"
}
