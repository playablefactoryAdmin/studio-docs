# Version

`Version` is a data type used to let the user pick a version from a numeric range. It is functionally similar to `Range`, but is specifically intended for version selection (e.g. variant or build version). Here are the attributes associated with `Version`:

- **type (string)**: "version"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (number)**: The default value.
- **min (number)**: The minimum value.
- **max (number)**: The maximum value.
- **step (number, Optional)**: The step value.

## Example

Here's an example of how to use `Version`:

```json
{
  "type": "version",
  "id": "uniqueIdentifier",
  "name": "Choose Version",
  "desc": "Pick a variant of this playable.",
  "default": 1,
  "min": 1,
  "max": 5,
  "step": 1
}
```

## Returns
JavaScript Number: `0`, `1`, `2` ...
