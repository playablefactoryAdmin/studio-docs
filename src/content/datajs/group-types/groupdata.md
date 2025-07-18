# Group

`Group` is a data type used to organize data into groups or sections. It's commonly used to group related data items within a specific context, and it may function as an accordion, allowing users to expand or collapse groups of data. Here are the attributes associated with `Group`:

- **type (string)**: "group"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (undefined)**: The default value (undefined, as it's not a selectable value).
- **accordion (boolean)**: Whether the group functions as an accordion, allowing expansion and collapse.
- **items (DataItem[])**: A list of DataItems.

## Example

Here's an example of how to use `Group`:

```json
{
  "type": "group",
  "id": "uniqueIdentifier",
  "name": "Product Details",
  "desc": "Organizes product information into groups.",
  "default": undefined,
  "accordion": true,
  "items": [
    /* List of DataItems representing product details */
  ],
}
