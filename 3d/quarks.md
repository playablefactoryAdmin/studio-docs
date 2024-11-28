3d'de partikül kullanmak için quarks adlı kütüphaneyi kullanıyoruz. Quarks json formatında içinde texture ve özellikleriyle birlikte geliyor. 
Bunu oyunda kullanmak için partikülün json dosyasını `assets/quarkEffects` içine atıyoruz. Ardından template içindeki `Particlepool.js` içine, en tepedeki list objesine örnek olarak şu şekil ekliyoruz;
```js
carFire: {
 index: 0,
 pool: [],
 maxLen: 1,
 keyName: "car_fire",
}
```
- `carFire` kendinizin tanımlayacağı bir obje ismi
- `keyname`: json dosyasının adı
- `maxLen`: oluşan pooldaki maksimum obje sayısı, index bu sayıya ulaşınca başa döner
- `index`: 0 da bırakın, pool için gerekli

`maxLen`'i çok abartmamak, gerektiği kadar partikül oluşturmak performans açısından önemli. Kullanmasanız bile arkada yarattığı için bu sayıyı minimumda tutun.

Oyun içinde bu partikülü kullanmak için herhangi bir yerde static fonksiyon olan
`ParticlePool.spawnAt` kullanıyoruz, örneğin;
```js
ParticlePool.spawnAt("carFire", new Vector3(0,0,0), 3);
					  obje adı, pos,          scale
```

`spawnAt` return'ü bir object3d'den extend edilmiş bir `QuarksParticleLocal` sınıfı, gene spawn sonrası pos rot ayarlamaları yapabilirsiniz,  rotation ayarları çok garanti değil, umduğunuz gibi çalışmayabilir.

Değişkene attığınız partikülün temel fonksiyonları `QuarksParticleLocal`'den geliyor:
- `stop(true)` : partikülü durdurur sonsuz dönen bir partikül ise yavaştan durdurur, parametreye true yazarsanız anında durdurur
- `restart`: tekrar başlatır

##### Notlar

- **Partikülüm istediğim yerde çıkmıyor**
Muhtemelen partikülün worldSpace kısmı true kalmıştır, worldSpace'in bazı egzos gibi, partikülün salındıktan sonra konumunu koruması gereken durumlarda işe yaradığı oluyor, ama sadece kendi localinde dönecek efektlerde bunun kapatılması etkili sonuç verir. Kapatmak için .json dosyasını açıp worldSpace:true olanları false yapın.


- **Partikülüm 4 kere düzgün 5. de çıkmıyor/başka yerde çıkıyor**
bu kesin worldSpace ile alakalı, 5. de yamuk çıkması da pool'daki maxLen'in bitip başa sarmasından dolayı ama worldSpace'i true tutup gene pozisyonu düzeltmek için spawnAt sırasında partikülü bir değişkene atın, sırasıyla;

```js
efk.stop(true)
gsap.delayedCall(0.01, ()=>{
//özetle bir sonraki framede çağırılmalı, 0.01 farazi
	efk.restart();
})
```