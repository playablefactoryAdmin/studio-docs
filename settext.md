## `obj.text` or `obj.setText`

If a `text` object has a `responsive2d component`, the `setText` method should be used.

Because the `setText` method recalculates the bounds of the changing `text` and ensures that the `responsive2d component` works correctly. If the `text` object does not have a `responsive2d component`, you can directly use:

```js
obj.text = "Some Text";
// or
obj.setText("Some Text");
```

However, as a convention, we recommend using `setText`. Another advantage of the `setText` method is that it can take an object as a parameter. This means you can directly provide the text object from `data.js` to easily change the `text` object's properties such as text, color, stroke, shadow, and multiline. For example;

```js
{
    type: "text",
    id: "ctaText",
    name: "In game button text:",
    desc: "",
    default: "PLAY",
    multiline: {
        enabled: false,
        lineHeight: 1.5
    },
    align: "center",
    color: "#0074E4",
    stroke: {
        color: "#FFFFFF",
        thickness: 2
    },
    shadow: {
        color: "#000000",
        alpha: 0.5,
        angle: 90,
        distance: 5,
        blur: 2
    }
}
```

``` js
obj.setText(globals.data.ctaText);
```
