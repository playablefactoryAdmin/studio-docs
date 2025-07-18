# SlotTextData

`SlotTextData` is a data type used to represent an text selection where the first x amount of items need to be selected an ordered from a pool of texts, but the amount x isn't flexible.

- **type (string)**: "slotText"
- **count (number)**: The number of slots available for texts.
- **options (string[])**: List of available text options.
- **overflow (boolean)**: If the options can be scrolled.


## Example

Here's an example of how to use `SlotTextData`:

```json
{
  "type": "slotText",
  "count": 2,
  "options": ["aaa", "bbb", "ccc", "ddd", "eee"],
}
