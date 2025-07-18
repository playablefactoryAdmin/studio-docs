# SlotImageData

`SlotImageData` is a data type used to represent an image selection where the first x amount of items need to be selected an ordered from a pool of images, but the amount x isnt flexible.

- **type (string)**: "slotImage"
- **count (number)**: The number of slots available for images.
- **options (string[])**: List of available image options.
- **size (string)**: Specifies the image size ("sm," "md", "lg").
- **display ("cover" | "contain" | "responsive")**: How the images are displayed within the slots (default is "cover").
- **overflow (boolean)**: If the options can be scrolled. Usefull if you have many options and want larger images.


## Example

Here's an example of how to use `SlotImageData`:

```json
{
  "type": "slotImage",
  "count": 5,
  "options": ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"],
  "size": "md",
  "display": "cover"
}
