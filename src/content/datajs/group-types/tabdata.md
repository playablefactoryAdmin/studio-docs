# Tab

`Tab` is a data type used to organize data into tabs or sections. It's commonly used to group related data items and is often used in user interfaces to create tabbed views. Here are the attributes associated with `Tab`:

- **type (string)**: "tab"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number)**: The default value.
- **list (array)**: An array of objects with `name` (string) and `items` (DataItem[]). Optional properties include:
  - `icon` (string): Asset key of an icon for the tab.
  - `hideName` (boolean): Hide the name of the tab so only the icon shows.


## Example

Here's an example of how to use `Tab`:

```json
{
  "type": "tab",
  "id": "uniqueIdentifier",
  "name": "Product Details",
  "desc": "Organizes product information into tabs.",
  "default": 1,
  "list": [
    {
      "name": "Overview",
      "items": [/* DataItem objects for product overview */]
    },
    {
      "name": "Specifications",
      "items": [/* DataItem objects for product specifications */]
    }
  ],
}
