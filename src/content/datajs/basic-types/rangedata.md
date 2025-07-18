# Range

`Range` is a data type used to represent numerical values within a specified range. It is particularly useful when you need to define data with continuous numeric characteristics. Here are the attributes associated with `Range`:

- **type (string)**: "range"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number)**: The default value.
- **min (number)**: The minimum value.
- **max (number)**: The maximum value.
- **step (number)**: The step value.

## Example

Here's an example of how to use `Range`:

```json
{
  "type": "range",
  "id": "uniqueIdentifier",
  "name": "Temperature",
  "desc": "Represents the temperature in degrees Celsius.",
  "default": 25,
  "min": 0,
  "max": 100,
  "step": 1,
}
```

## Returns
Javascript Number: `0` or `1` or `2` ...
