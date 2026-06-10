# IEC (Legacy End Card)

`IEC` is a data type used to configure the legacy Interactive End Card (IEC) — the post-play screen template with background, logo, CTA, retry button and text styling. Its `default` is a partial value that merges options (interaction config) and body (visual config).

> Newer playables should prefer [`IEC2`](iec2data.md), which supports multiple body variants (standard / random / timed / sequence / legacy).

## Attributes

- **type (string)**: "iec"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (object)**: Partial IEC value — combines the option fields and body fields described below.

### Options fields
- `ctaClick` (number)
- `time` (number)
- `click` (number)
- `fullScreenClick` (boolean)
- `clickBehaviour` (string)
- `clickUp` (number)
- `enabled` (boolean)

### Body fields
- `template` (number): End card template ID.
- `animation` (number): Animation type.
- `animationDuration` (number)
- `bg` (number): Background mode.
- `bgSrc` (string): Background image source.
- `bgAlpha` (number)
- `bgSColor` (string): Solid background color.
- `bgGColor1` (string): Gradient color 1.
- `bgGColor2` (string): Gradient color 2.
- `bgBlur` (number)
- `text` (string): Main text.
- `textColor` (string)
- `textStrokeColor` (string)
- `textStroke` (number)
- `textDuration` (number)
- `logoSrc` (string), `logoDuration` (number), `logoScale` (number)
- `logo1Src` (string), `logo1Duration` (number), `logo1Scale` (number)
- `ctaEnabled` (boolean)
- `ctaSrc` (string), `ctaDuration` (number), `ctaScale` (number)
- `ctaTextColor` (string), `ctaText` (string)
- `ctaTextStrokeColor` (string), `ctaTextStroke` (number)
- `ctaTextScale` (number), `ctaTextOffsetX` (number), `ctaTextOffsetY` (number)
- `retryEnabled` (boolean)
- `retrySrc` (string), `retryDuration` (number), `retryScale` (number)
- `retryTextColor` (string), `retryText` (string)
- `retryTextStrokeColor` (string), `retryTextStroke` (number)
- `retryTextScale` (number), `retryTextOffsetX` (number), `retryTextOffsetY` (number)
- `fontSrc` (string)

## Related types

- **iecOptions**: Only the options portion (`ctaClick`, `time`, `click`, `fullScreenClick`, `clickBehaviour`, `clickUp`, `enabled`).
- **iecBody**: Only the body/visual portion (all fields listed under Body above).

## Example

```json
{
  "type": "iec",
  "id": "endCard",
  "name": "End Card",
  "desc": "Legacy interactive end card.",
  "default": {
    "enabled": true,
    "template": 1,
    "ctaEnabled": true,
    "ctaText": "Download Now",
    "bgSColor": "#000000",
    "textColor": "#FFFFFF"
  }
}
```
