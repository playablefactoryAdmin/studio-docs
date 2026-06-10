# ColorAdvanced

`ColorAdvanced` is a data type used to represent advanced color values, including gradient definitions and other complex color formats. It is similar to `Color` but uses the advanced color picker. Here are the attributes associated with `ColorAdvanced`:

- **type (string)**: "colorAdvanced"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (string)**: The default value (advanced color string, e.g. solid hex or gradient definition).

## Example

Here's an example of how to use `ColorAdvanced`:

```json
{
  "type": "colorAdvanced",
  "id": "uniqueIdentifier",
  "name": "Background Color",
  "desc": "Defines the advanced background color of an element.",
  "default": "#FFFFFF"
}
```

## Returns
Hex Color Code or gradient string: `#ffffff`
