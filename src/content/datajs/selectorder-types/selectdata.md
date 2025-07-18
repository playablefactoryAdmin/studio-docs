# Select

`Select` is a data type used for representing options from which users can select one or more choices. It's commonly used for dropdown menus and multiple-choice selections. Here are the attributes associated with `Select`:

- **type (string)**: "select"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number | number[])**: The default value(s).
- **multipleSelection (boolean)**: Allows multiple selections.
- **options (string[])**: List of available options.
- **min (number, Optional)**: Minimum number of selections.
- **max (number, Optional)**: Maximum number of selections.
- **layout ("auto" "flex", Optional default "auto")**: Automatically align vertical or horizontal, or put options in a "flex" layout with wrap at the end of line.

## Example

Here's an example of how to use `Select`:

```json
{
  "type": "select",
  "id": "uniqueIdentifier",
  "name": "Fruit Selection",
  "desc": "Allows the user to select their favorite fruits.",
  "default": [2],
  "multipleSelection": true,
  "options": ["Apple", "Banana", "Cherry", "Orange"],
  "min": 1,
  "max": 3,
}
