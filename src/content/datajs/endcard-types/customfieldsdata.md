# CustomFields

`CustomFields` is a data type used to expose dynamic, user-defined fields scoped to a specific version. Each field has a name, key, type and value, and can be marked as required. Here are the attributes associated with `CustomFields`:

- **type (string)**: "customFields"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **versionId (string)**: ID of the version these custom fields belong to.
- **default (array)**: The default value. Array of field objects with the following shape:
  - `name` (string): Human-readable field name.
  - `key` (string): Field key used in code.
  - `type ("text" | "number" | "boolean" | "datetime", Optional)**: Field value type.
  - `value` (string | number | boolean): Default value.
  - `required` (boolean, Optional): Whether the field is required.

## Example

Here's an example of how to use `CustomFields`:

```json
{
  "type": "customFields",
  "id": "uniqueIdentifier",
  "name": "Custom Fields",
  "desc": "User-defined fields for this version.",
  "versionId": "v-123",
  "default": [
    {
      "name": "Campaign Code",
      "key": "campaignCode",
      "type": "text",
      "value": "SUMMER25",
      "required": true
    },
    {
      "name": "Score Multiplier",
      "key": "scoreMultiplier",
      "type": "number",
      "value": 2,
      "required": false
    }
  ]
}
```
