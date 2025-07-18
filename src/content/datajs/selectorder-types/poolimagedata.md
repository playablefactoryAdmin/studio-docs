# PoolImageData

The `PoolImage` is used to let customers select and order multiple items from a pool of items. Below are the attributes associated with `PoolImageData`.

- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number[])**: The default order, represented as an array of numbers.
- **type (string)**: "poolImage"
  - Identifies the type of data structure as a pool of images.

- **min (number)**: 
  - Specifies the minimum number of selections required.

- **max (number)**: 
  - Defines the maximum number of selections allowed.

- **options (string[])**: 
  - An array of strings, where each string represents an image file (e.g., "image1.jpg"). This array contains all the available image options that can be selected.

- **multiple (boolean, optional)**: 
  - A boolean value indicating whether multiple items of same type are allowed. If set to `true`, users can select an option more than once.

- **size (string)**: 
  - Determines the size of the images. Can be "sm" (small), "md" (medium), or "lg" (large).

## Example Usage

Here's an example of how `PoolImageData` might be defined:

```json
{
  "type": "poolImage",
  "min": 2,
  "max": 4,
  "options": ["image1.jpg", "image2.jpg", "image3.jpg"],
  "multiple": true,
  "size": "md"
}
