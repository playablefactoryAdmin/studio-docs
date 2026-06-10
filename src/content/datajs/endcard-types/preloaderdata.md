# Preloader

`Preloader` is a data type used to configure the playable's loading screen — logo, background pattern, progress bar and loading text. Here are the attributes associated with `Preloader`:

- **type (string)**: "preloader"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (object)**: Partial preloader configuration. The following fields are supported:
  - `preloaderLogo` (string | null): Logo image (asset reference or base64).
  - `preloaderLogoBgColor` (string): Background color behind the logo.
  - `preloaderLogoImgScale` (number): Scale multiplier for the logo image.
  - `preloaderColor` (string): Main preloader background color.
  - `preloaderPattern` (string | null): Background pattern image.
  - `preloaderBgSize` (number): Background pattern size.
  - `preloaderEnableBar` (boolean): Whether the progress bar is shown.
  - `preloaderBarFillColor` (string): Progress bar fill color.
  - `preloaderBarBgColor` (string): Progress bar background color.
  - `preloaderBarScale` (number): Progress bar scale.
  - `preloaderText` (string): Loading label text.
  - `preloaderTextColor` (string): Loading label color.
  - `preloaderTextSize` (number): Loading label font size.

## Example

Here's an example of how to use `Preloader`:

```json
{
  "type": "preloader",
  "id": "uniqueIdentifier",
  "name": "Preloader",
  "desc": "Configures the loading screen.",
  "default": {
    "preloaderLogo": null,
    "preloaderLogoBgColor": "#000000",
    "preloaderLogoImgScale": 1,
    "preloaderColor": "#ffffff",
    "preloaderPattern": null,
    "preloaderBgSize": 1,
    "preloaderEnableBar": true,
    "preloaderBarFillColor": "#00aaff",
    "preloaderBarBgColor": "#dddddd",
    "preloaderBarScale": 1,
    "preloaderText": "Loading...",
    "preloaderTextColor": "#000000",
    "preloaderTextSize": 16
  }
}
```
