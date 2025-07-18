# Boolean

`Boolean` is a data type that represents boolean values. It is commonly used to store binary information, such as true/false or on/off states. Here are the attributes associated with `Boolean`:

- **type (string)**: "boolean"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (boolean)**: The default value.
- **items (DataItem[])**: A list of DataItems.

## Example

Here's an example of how to use `Boolean`:

```json
{
  "type": "boolean",
  "id": "uniqueIdentifier",
  "name": "Is Active",
  "desc": "Indicates whether the item is active or not.",
  "default": true,
  "items": [],
}
```

## Returns
Javascript Boolean: `true` or `false`
