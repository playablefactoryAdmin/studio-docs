# Text

`Text` is a data type used to represent text or textual content with various formatting options. It allows you to define and store text-based data, including text alignment, color, stroke, and shadow. Here are the attributes associated with `Text`:

- **type (string)**: "text"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (any)**: The default text content.
- **multiline (object, Optional)**: An object with `enabled` (boolean) and `lineHeight` (number).
- **align (string, Optional)**: Text alignment ("left," "center," "right").
- **color (string, Optional)**: Text color.
- **stroke (object, Optional)**: An object with `color` (string) and `thickness` (number).
- **shadow (object, Optional)**: An object with `color` (string), `alpha` (number), `x` (number), `y` (number), and `blur` (number).
- **hideInput (bool, Optional)**: To hide the text input part of the component in case you only need the style information.
- **tts (object, Optional)**: An object with `data` (string | null) (base64 mp3), `gender` (number), `pitch` (number), and `language` (string).
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
  "multiline": {
    "enabled": true,
    "lineHeight": 1.5
  },
  "align": "center",
  "color": "#0074E4",
  "stroke": {
    "color": "#FFFFFF",
    "thickness": 2
  },
  "shadow": {
    "color": "#000000",
    "alpha": 0.5,
    "angle": 0.4,
    "distance": 5,
    "blur": 2
  },
  "tts": {
    "data": null,
    "gender": 1,
    "pitch": 0,
    "language": "tr-TR"
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
