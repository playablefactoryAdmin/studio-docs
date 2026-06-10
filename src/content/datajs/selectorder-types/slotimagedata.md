# SlotImage

`SlotImage` is a data type used to represent an image selection where the first x amount of items need to be selected and ordered from a pool of images, but the amount x is fixed (not flexible). Here are the attributes associated with `SlotImage`:

- **type (string)**: "slotImage"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number[])**: The default selected indexes, represented as an array of numbers.
- **count (number)**: The number of slots available for images.
- **options (string[])**: List of available image options.
- **size ("sm" | "md" | "lg")**: Specifies the image size.
- **display ("cover" | "contain" | "responsive", Optional)**: How the images are displayed within the slots (default `cover`).
- **overflow (boolean, Optional)**: If the options can be scrolled. Useful if you have many options and want larger images.

## Example

Here's an example of how to use `SlotImage`:

```json
{
  "type": "slotImage",
  "id": "uniqueIdentifier",
  "name": "Image Slots",
  "desc": "Defines the ordered image slots.",
  "default": [0, 1, 2, 3, 4],
  "count": 5,
  "options": ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"],
  "size": "md",
  "display": "cover"
}
```
