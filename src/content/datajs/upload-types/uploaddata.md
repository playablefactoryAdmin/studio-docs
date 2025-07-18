# Upload

`Upload` is a data type used to represent data that involves file uploads, such as uploading files or documents. Here are the attributes associated with `Upload`:

- **type (string)**: "upload"
- **id (string)**: A unique identifier.
- **name (string)**: A human-readable name.
- **desc (string)**: A description.
- **default (string | null)**: The default value, which can be a base64 or `null`.
- **acceptableTypes (string)**: Acceptable file types.

## Example

Here's an example of how to use `Upload`:

```json
{
  "type": "upload",
  "id": "uniqueIdentifier",
  "name": "Resume Upload",
  "desc": "Allows the user to upload their resume.",
  "default": null,
  "acceptableTypes": "application/pdf, application/msword",
}
