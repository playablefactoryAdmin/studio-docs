```js
export default class Temp2d extends Script2D /* - or Script3d*/ {

    awake() {}

    init() {}
    
    update(delta) {}
    
    resize(w, h) {}
    
    onRemove() {}

	onAdd() {}
}
```

`awake`   : Script ilk oluştuğu zaman burası çağrılır
`init`     : Tüm scriptlerin awake'leri bittikten sonra init kısımları çağrılır
``update`` : Her frame çağrılır
`resize` : ekran boyutu değiştiğinde çağrılır
`onRemove`: script yok edildiğinde çağrılır
`onAdd`: script oyun içinde dinamik olarak eklendiğinde çağırılır, --experimental

``this.node`` : scriptin atandığı objeyi verir

