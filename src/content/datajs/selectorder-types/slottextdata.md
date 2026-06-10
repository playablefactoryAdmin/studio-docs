# SlotText

`SlotText` is a data type used to represent a text selection where the first x amount of items need to be selected and ordered from a pool of texts, but the amount x is fixed (not flexible). Here are the attributes associated with `SlotText`:

- **type (string)**: "slotText"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number[])**: The default selected indexes, represented as an array of numbers.
- **count (number)**: The number of slots available for texts.
- **options (string[])**: List of available text options.
- **overflow (boolean, Optional)**: If the options can be scrolled. Useful if you have many options.

## Example

Here's an example of how to use `SlotText`:

```json
{
  "type": "slotText",
  "id": "uniqueIdentifier",
  "name": "Text Slots",
  "desc": "Defines the ordered text slots.",
  "default": [0, 1],
  "count": 2,
  "options": ["aaa", "bbb", "ccc", "ddd", "eee"]
}
```
