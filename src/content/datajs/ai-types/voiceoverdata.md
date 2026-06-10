# Voiceover

`Voiceover` is a data type used to configure an AI-generated or uploaded voiceover audio track for the playable. Here are the attributes associated with `Voiceover`:

- **type (string)**: "voiceover"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (any)**: The default value.
- **speaker (string, Optional)**: Speaker / voice identifier to use for AI generation.
- **text (string, Optional)**: The script text to be synthesized.
- **volume (number, Optional)**: Playback volume (0..1 typically).
- **src (string, Optional)**: Source asset reference for the rendered audio.
- **enable (boolean, Optional)**: Whether the voiceover is enabled.

## Example

Here's an example of how to use `Voiceover`:

```json
{
  "type": "voiceover",
  "id": "uniqueIdentifier",
  "name": "Intro Voiceover",
  "desc": "AI-generated intro voice line.",
  "default": null,
  "speaker": "en-US-Male-1",
  "text": "Welcome to the game!",
  "volume": 0.8,
  "src": null,
  "enable": true
}
```
