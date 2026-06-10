# Common Fields

Every data item shares a common set of base fields in addition to its type-specific properties. Both the base set and the additional "options-based" set are documented here.

## BaseData fields

Available on every data type (Boolean, Range, Color, Text, Image, Audio, Video, Upload, Font, Tab, Group, Custom, Repeater, IEC, etc.).

- **type (string)**: Type discriminator (e.g. `"boolean"`, `"text"`).
- **id (string)**: A unique identifier within the file.
- **name (string)**: A human-readable name shown in the editor.
- **desc (string, Optional)**: A description shown in the editor.
- **default**: Default value — shape depends on `type`.
- **stored (boolean, Optional)**: Whether the field's value is persisted across sessions/versions.
- **tab (string, Optional)**: The tab where this item belongs (for grouping inside the editor).
- **simple (boolean, Optional)**: When true, the field is shown in "simple" mode views.
- **debug (boolean, Optional)**: When true, the field is only visible in debug mode.
- **postProcess (string, Optional)**: Name of a post-processing function applied to the value before it is exposed to the playable code.

## BaseDataWithOptions fields

Used by `Select`, `Dropdown`, `SelectImage` (anything where the user chooses from a fixed list of options).

In addition to the `BaseData` fields above:

- **default (number | number[])**: Index (or indexes) of the selected option(s).
- **options (any[])**: List of available options (commonly `string[]`).
- **multipleSelection (boolean, Optional)**: Allows multiple selections.

## Notes

- `default` is required for most types, but `Group`/`Tab` use special values (`undefined` / numeric tab index).
- `stored`, `tab`, `simple`, `debug` and `postProcess` are intentionally listed in each type's doc only when they are commonly used there — but they are accepted on every data item.
