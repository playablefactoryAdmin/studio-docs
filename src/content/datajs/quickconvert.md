# Quick Convert

If you developed your game for old Gearbox edit page and trying to switch to new one, you can use this guide.

Open your data.js:

* Find and replace all `visibleName` to `name`.
* If you have `multiline:true` in your params, you should change it to;
```json
multiline: {
	enabled: true,
	lineHeight: 1.5
},
```
* In your game multiline texts returns an Object instead of String. So if your param id `titleText` you should get String like: `titleText.text`.
* Find and replace all `color2` to `color`.
  * If your color params has default and using number color like: "0x04031B" you should change it to hex color like: "#04031B".
  * If you use number color in your code, you can add helper function, and convert hex colors to number color; 
```js
convertHextoNumber(hex) {
    return +'0x'.concat(hex.split('#')[1]);
}
```
* Find and replace all `slide` to `range`.
* Find and replace all `radio` to `select`.
  * Change options to String Array, and default to number like this:
```json
default:0,
options:["Option 1", "Option 2", "Option 3"]
```
* It will return selected option as number (0, 1 or 2 in this example) so edit your game accordingly.