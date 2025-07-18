# OrderImage

`OrderImage` is a data type used to represent ordered lists of images. It allows you to define the order of images or thumbnails within a specific context. Here are the attributes associated with `OrderImage`:

- **type (string)**: "orderImage"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number[])**: The default order, represented as an array of numbers.
- **min (number)**: The minimum number of options in the order.
- **max (number)**: The maximum number of options in the order.
- **options (string[])**: List of available image options.
- **size (string)**: Specifies the image size ("sm," "md," "lg").
- **display ("cover" | "contain" | "responsive") (optional)**: how to display the image in the editor (default cover).
- **overflow (boolean)**: If the options can be scrolled. Usefull if you have many options and want larger images.


## Example

Here's an example of how to use `OrderImage`:

```json
{
  "type": "orderImage",
  "id": "uniqueIdentifier",
  "name": "Image Order",
  "desc": "Defines the order of images for a slideshow.",
  "default": [3, 1, 2],
  "min": 3,
  "max": 5,
  "options": ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"],
  "size": "md",
  "display": "cover"
}
