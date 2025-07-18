# Custom

`Custom` is a flexible data type used for custom or specialized data requirements that don't fit into predefined data types. It allows you to define data with custom attributes and values. Here are the attributes associated with `Custom`:

- **type (string)**: "custom"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (never)**: The default value (never used).
- **execute (string)**: Execution command.

## Example

Here's an example of how to use `Custom`:

```json
{
  "type": "custom",
  "id": "uniqueIdentifier",
  "name": "Custom Action",
  "desc": "Allows the execution of a custom action.",
  "execute": "customCommand",
}
