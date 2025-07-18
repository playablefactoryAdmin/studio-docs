# Dropdown

`Dropdown` is a data type used to represent options in a dropdown menu where users can select one or more choices. It's similar to `SelectData`, but it may have a different appearance or behavior. Here are the attributes associated with `Dropdown`:

- **type (string)**: "dropdown"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number | number[])**: The default value(s).
- **multipleSelection (boolean)**: Allows multiple selections.
- **options (string[])**: List of available options.
- **max (number, Optional)**: Maximum number of selections.

## Example

Here's an example of how to use `Dropdown`:

```json
{
  "type": "dropdown",
  "id": "uniqueIdentifier",
  "name": "Country Selection",
  "desc": "Allows the user to select their country of residence.",
  "default": 2,
  "multipleSelection": false,
  "options": ["United States", "Canada", "United Kingdom", "Australia"],
}
