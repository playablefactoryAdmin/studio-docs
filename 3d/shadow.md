Click on the `Directional Light` from the hierarcy.
<div class="left-image">
  <img src="./img/shadow-a.png" alt="Export Image as Code">
</div>

The `shadow panel` will appear at the `bottom right` of the studio. 

<div class="left-image">
  <img src="./img/shadow-b.png" alt="Export Image as Code">
</div>

## 1. Enable shadow casting for objects:
You need to check the `Enable` option.

Objects in your scene won’t automatically cast or receive shadows. You have to tell them to do that.

 * `castShadow:` If set to true, the object will block the light and cast a shadow.

 * `receiveShadow:` If set to true, the object will receive shadows cast by other objects.
<div class="warning-message">
  <span class="warning-badge">Warning</span>
 <p>You should not assign the castShadow or receiveShadow property directly to the model. Since the model is composed of multiple meshes, you need to assign these properties to each mesh individually.<p>
</div>


Enable shadow casting for objects: 

```js
	model.traverse((child) => {
			if (child instanceof THREE.Mesh) {
          child.castShadow = true;
      }
  })
```

 Enable shadow receiving for objects: 

```js
	model.traverse((child) => {
			if (child instanceof THREE.Mesh) {
          child.receiveShadow = true;
      }
  })
```

 An object can both cast shadows and receive them.

```js
	model.traverse((child) => {
			if (child instanceof THREE.Mesh) {
          child.receiveShadow = true;
          child.castShadow = true;
      }
  })
```

## 2. Bias:
Depth precision in shadow rendering can cause artifacts like shadow acne, where surfaces incorrectly receive shadows due to z-fighting. 

Adjusting the shadow bias can help with this issue.

>Do not change it unless shadow artifacts occur.
## 3. MapSize:
Higher values provide better quality shadows but increase computation time.

Values must be powers of 2  (e.g., 512, 1024, 2048).
<div class="important-message">
  <span class="danger-badge">Important</span>
 <p>Increasing the shadow map size to larger values (e.g., 2048 or above) can significantly improve shadow quality but may also lead to higher memory usage and decreased performance.<p>
</div>

## 4. Area:
This setting allows you to control the size of the shadow area, helping you decide how big or small the shadows are and where they will show up in the scene.


> NOTE
>
> Not all lights in Three.js can cast shadows. The ones that do are:
>
>* DirectionalLight 
>* SpotLight 
>* PointLight 




