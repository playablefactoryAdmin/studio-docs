# Text

`Text` is a data type used to represent text or textual content with various formatting options. It allows you to define and store text-based data, including text alignment, color, stroke, shadow, font and TTS (Text-to-Speech) properties. Here are the attributes associated with `Text`:

- **type (string)**: "text"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (any)**: The default text content.
- **advancedColor (boolean, Optional)**: Enables the advanced color picker (gradient, etc.) instead of the basic one.
- **multiline (object, Optional)**: An object with `enabled` (boolean) and `lineHeight` (number, Optional).
- **font (string | null, Optional)**: Default font selection (asset key or null).
- **fontStored (boolean, Optional)**: Whether the font selection should be stored.
- **align ("left" | "center" | "right", Optional)**: Text alignment.
- **color (string, Optional)**: Text color.
- **stroke (object, Optional)**: An object with `color` (string) and `thickness` (number).
- **shadow (object, Optional)**: An object with `color` (string), `distance` (number), `angle` (number), and `blur` (number).
- **hideInput (boolean, Optional)**: Hide the text input part of the component when you only need the style information.
- **tts (object, Optional)**: Text-to-Speech configuration. An object with:
  - `enabled` (boolean): Whether TTS is enabled.
  - `data` (string | null): Base64 encoded mp3 data.
  - `language` (string): Language code (see list below).
  - `gender` (number): SSML voice gender (see enum below).

```typescript
enum Gender {
	SSML_VOICE_GENDER_UNSPECIFIED,
	MALE,
	FEMALE,
	NEUTRAL,
}

const Languages = [
	"en-US",
	"en-GB",
	"fr-FR",
	"tr-TR",
	"ar-XA",
	"es-ES",
	"de-DE"
]
```

## Example

Here's an example of how to use `Text`:

```json
{
  "type": "text",
  "id": "uniqueIdentifier",
  "name": "Header Text",
  "desc": "Defines the header text with special formatting.",
  "default": "Welcome to our website!",
  "advancedColor": false,
  "multiline": {
    "enabled": true,
    "lineHeight": 1.5
  },
  "font": null,
  "align": "center",
  "color": "#0074E4",
  "stroke": {
    "color": "#FFFFFF",
    "thickness": 2
  },
  "shadow": {
    "color": "#000000",
    "distance": 5,
    "angle": 0.4,
    "blur": 2
  },
  "tts": {
    "enabled": true,
    "data": null,
    "language": "tr-TR",
    "gender": 1
  }
}
```

## Returns
Without multiline, JavaScript String: `Download Now`

With multiline (or other options), Javascript Object:
```js
{
  "text": "Tired of big payments? Use your\nfinger to slash and save.",
  "multiline": {
      "enabled": true,
      "lineHeight": 1.5
  }
}
```
