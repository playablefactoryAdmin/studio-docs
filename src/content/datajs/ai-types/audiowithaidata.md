# AudioWithAI

`AudioWithAI` is a data type used to combine multiple AI-generated and uploaded audio channels into a single parameter — typically a background song, AI-generated sound design, a custom track and SFX. Here are the attributes associated with `AudioWithAI`:

- **type (string)**: "audioWithAI"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (object, Optional)**: Default values for the four channels (`song`, `sound`, `custom`, `sfx`), each shaped like its top-level counterpart.

- **song (object, Optional)**: Background song channel.
  - `src` (string, Optional): Source asset reference.
  - `enable` (boolean, Optional): Whether this channel is enabled.
- **sound (object, Optional)**: AI-generated sound design channel.
  - `src` (string, Optional): Source asset reference.
  - `enable` (boolean, Optional): Whether this channel is enabled.
  - `mood` (string, Optional): Sound mood / generation prompt hint.
- **custom (object, Optional)**: Custom uploaded audio channel.
  - `src` (string, Optional): Source asset reference.
  - `enable` (boolean, Optional): Whether this channel is enabled.
- **sfx (object, Optional)**: SFX channel.
  - `src` (string, Optional): Source asset reference.
  - `enable` (boolean, Optional): Whether this channel is enabled.

## Example

Here's an example of how to use `AudioWithAI`:

```json
{
  "type": "audioWithAI",
  "id": "uniqueIdentifier",
  "name": "Game Audio",
  "desc": "Background audio with AI-generated layers.",
  "default": {
    "song": { "enable": true, "src": null },
    "sound": { "enable": true, "mood": "epic", "src": null },
    "custom": { "enable": false, "src": null },
    "sfx": { "enable": true, "src": null }
  }
}
```
