# AIAvatar

`AIAvatar` is a data type used to configure an AI-generated avatar for the playable, including the actor, position and its source asset. Here are the attributes associated with `AIAvatar`:

- **type (string)**: "aiAvatar"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (any)**: The default value.
- **src (string, Optional)**: Source asset reference for the avatar (URL, base64 or asset key).
- **enable (boolean, Optional)**: Whether the avatar is enabled.
- **position (string, Optional)**: Position of the avatar within the playable (e.g. `"top-left"`, `"bottom-right"`).
- **actor (string, Optional)**: Selected actor identifier (which AI persona/voice to use).

## Example

Here's an example of how to use `AIAvatar`:

```json
{
  "type": "aiAvatar",
  "id": "uniqueIdentifier",
  "name": "Game Host",
  "desc": "AI avatar that narrates the playable.",
  "default": null,
  "enable": true,
  "src": null,
  "position": "bottom-left",
  "actor": "host_01"
}
```
