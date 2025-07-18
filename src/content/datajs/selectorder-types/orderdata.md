# Order

`Order` is a data type used to represent ordered lists or sequences of options. It's commonly used for defining the order of items or options within a specific context. Here are the attributes associated with `Order`:

- **type (string)**: "order"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number[])**: The default order, represented as an array of numbers.
- **min (number)**: The minimum number of options in the order.
- **max (number)**: The maximum number of options in the order.
- **options (string[])**: List of available options.

## Example

Here's an example of how to use `Order`:

```json
{
  "type": "order",
  "id": "uniqueIdentifier",
  "name": "Priority Order",
  "desc": "Defines the order of priority for tasks.",
  "default": [2, 1, 3],
  "min": 3,
  "max": 5,
  "options": ["High", "Medium", "Low", "Urgent", "Normal"],
}
