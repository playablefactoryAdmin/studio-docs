# GlobalProps

`GlobalProps` are top-level configuration flags for the playable file, set alongside `properties`. They control editor and runtime-level features such as default orientation, the asset library, localization, and the end card type.

## Attributes

- **defaultLandscape (boolean, Optional)**: If true, the playable defaults to landscape orientation in the editor preview.
- **defaultPhoneIndex (number, Optional)**: Default phone mockup index used in the editor preview.
- **enableLibrary (boolean, Optional)**: Enables the asset library for this playable.
- **initialStore (object, Optional)**: Initial values seeded into the shared store.
- **enableLocalization (boolean, Optional)**: Enables localization support.
- **endCardType (string[], Optional)**: Allowed end card type keys for this playable.
- **endCardVersion (number, Optional)**: End card data schema version (e.g. 1 for legacy IEC, 2 for IEC2).
- **endCardDefault (object, Optional)**: Default end card values applied when a new end card is created.

## Example

```json
{
  "properties": [
    {
      "name": "General",
      "subList": [/* DataItem objects */]
    }
  ],
  "globalProps": {
    "defaultLandscape": false,
    "defaultPhoneIndex": 0,
    "enableLibrary": true,
    "enableLocalization": true,
    "endCardType": ["default"],
    "endCardVersion": 2,
    "endCardDefault": {}
  }
}
```
