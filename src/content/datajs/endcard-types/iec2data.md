# IEC2 (Interactive End Card v2)

`IEC2` is the next-generation Interactive End Card data type. Unlike legacy [`IEC`](iecdata.md), `IEC2` supports an item-based body with multiple body variants — standard, random (weighted), timed (date-ranged), sequence (weighted) and legacy. Use this for any new playable.

A second variant, `IEC2AI`, has the same shape and is reserved for AI-generated end cards.

## Attributes

- **type (string)**: "iec2"  (or "iec2ai" for AI variant)
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (object)**: Partial IEC2 value — contains `options`, `enabled`, `selectedCardType`, optional `selectedIndex` and a `body` record keyed by body identifier.

### Value shape

- **options (object)**: Interaction settings (same as IEC options).
  - `ctaClick` (number), `time` (number), `click` (number), `fullScreenClick` (boolean), `clickBehaviour` (string), `clickUp` (number), `enabled` (boolean).
- **enabled (boolean)**: Whether the end card is enabled.
- **selectedCardType (string | null)**: Currently selected card type key.
- **selectedIndex (number, Optional)**: Currently selected card index within the body.
- **body (`Record<string, BodyVariant>`)**: Map of body variants. Each value is one of:
  - `{ type: "standard", value: IEC2BodyValue }`
  - `{ type: "random", value: Array<{ weight: number, body: IEC2BodyValue }> }`
  - `{ type: "timed", value: Array<{ startTime: string, endTime: string, isDefault: boolean, body: IEC2BodyValue }> }`
  - `{ type: "sequence", value: Array<{ weight: number, body: IEC2BodyValue }> }`
  - Or a raw `IEC2BodyValue` for legacy entries.

### IEC2BodyValue

- `items` (IECBodyItem[]): Visual items rendered on the end card (see below).
- `templateId` (string, Optional)
- `animation` (number)
- `animationDuration` (number)
- `background` (BackgroundIEC)
- `font` (string | null)
- `fontFileName` (string | null)
- `codeToastLabel` (`{ label: string }`)

### BackgroundIEC

- `backgroundType` ("none" | "solid" | "gradient" | "image" | "video")
- `src` (string | null, Optional)
- `color` (string, Optional)
- `gradientTop` (string, Optional), `gradientBottom` (string, Optional)
- `transparency` (number, Optional)
- `bgImageMaintainAspectRatio` (boolean, Optional)
- `backgroundCropArea` (object, Optional): `{ x, y, w, h, imageWidth, imageHeight, originalImageWidth, originalImageHeight }`

### IECBodyItem variants

All items share `id`, `type`, `name`.

- **Image** (`type: "image"`): `src`, `scale`, `pulse`.
- **Button** (`type: "button"`): `src` (nullable), `scale`, `pulse?`, `animationDuration?`, `text`, `url?`, `animation?`.
- **Text** (`type: "text"`): `text`, `color`, `lineHeight`, `pulse`, `stroke`, `textStroke`.
- **Timer** (`type: "text"` with timer fields): same as Text plus `src`, `timerTime`.
- **Code** (`type: "code"`): same as Text plus `url`, `token`, `fileName`, `hasCampaign`, `isGlobal`.
- **Leaderboard** (`type: "leaderboard"`): `transform?`, `leaderboardEntries?` (array of `{ rank, playerName?, points?, avatarUrl?, isCurrentUser?, name?, score? }`), `leaderboardStyle?`.

### Body types enum

```typescript
enum IEC2BodyTypes {
	STANDARD = "standard",
	RANDOM = "random",
	TIMED = "timed",
	LEGACY = "legacy",
	SEQUENCE = "sequence",
}
```

## Example

```json
{
  "type": "iec2",
  "id": "endCard",
  "name": "End Card",
  "desc": "Interactive end card.",
  "default": {
    "enabled": true,
    "selectedCardType": "default",
    "options": {
      "ctaClick": 1,
      "time": 0,
      "click": 0,
      "fullScreenClick": true,
      "clickBehaviour": "store",
      "clickUp": 0,
      "enabled": true
    },
    "body": {
      "default": {
        "type": "standard",
        "value": {
          "items": [],
          "animation": 0,
          "animationDuration": 1,
          "background": { "backgroundType": "solid", "color": "#000000" },
          "font": null,
          "fontFileName": null,
          "codeToastLabel": { "label": "Copied!" }
        }
      }
    }
  }
}
```
