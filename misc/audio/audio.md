## Audio

Click the audio icon in the assets section to access audio tab.

<div style="position:relative">
    <img src="./img/audio.png" alt="Gitlab Access Token"/>
    <div class="hover-box" style="left:35%; top:60%">
        <div class="title">1</div>
        <div class="body">
            Drag background music and uploadable sounds to this column.
        </div>
    </div>
    <div class="hover-box" style="left:57%; top:60%">
        <div class="title">2</div>
        <div class="body">
            Drag audios to this column to use as audiosprite.
        </div>
    </div>
    <div class="hover-box" style="left:66.5%; top:60%">
        <div class="title">3</div>
        <div class="body">
            Click to edit audiosprite bitrate and hz.
        </div>
    </div>
    <div class="hover-box" style="left:71.5%; top:60%">
        <div class="title">4</div>
        <div class="body">
            Clear and regenerate audiosprite files. Useful when you face a problem with audios and studio can't fix it automatically.
        </div>
    </div>
    <div class="hover-box" style="left:76.5%; top:27%">
        <div class="title">5</div>
        <div class="body">
            Change bitrate, higher bitrate means more quality and more size in kbs. This will generate a new version of the audio. Hit play button to listen the encoded version.
        </div>
    </div>
    <div class="hover-box" style="left:76.5%; top:35%">
        <div class="title">6</div>
        <div class="body">
            Change hz, higher hz means more quality and more size in kbs. This will generate a new version of the audio. Hit play button to listen the encoded version.
        </div>
    </div>
    <div class="hover-box" style="left:76.5%; top:53%">
        <div class="title">7</div>
        <div class="body">
            Id used in the data.js, you can name it anything you like as long as it doesn't conflict with another id in your data.js
        </div>
    </div>
    <div class="hover-box" style="left:76.5%; top:60%">
        <div class="title">8</div>
        <div class="body">
            Visible name in the data.js.
        </div>
    </div>
    <div class="hover-box" style="left:76.5%; top:66%">
        <div class="title">9</div>
        <div class="body">
            This button will generate an item in data.js with the submitted ID and name. If an item with the same ID already exists, it will be overridden.
        </div>
    </div>
</div>

<div class="important-message">
    <span class="danger-badge">Important</span>
    <p>Studio automatically imports all of the audio assets in the project. Delete all the unused audios to prevent unnecessary file size!<p>
</div>


<div class="warning-message">
    <span class="warning-badge">Background Music</span>
    <p>To use a music as background music name it one of the followings: bgMusic, music, bgm, backgroundMusic. Studio will automatically treat this audio as the background music.<p>
</div>



## Usage

In vars.js file set <b>enableAudio: true</b> (in future versions this will be set as true in default).

To play an imported sound use:

```js
    // enter the name of the sound without the extension
	AudioManager.playSound("soundName");
```
This will play the audio whether it is an audiosprite or normal sound. It will find the audio with the name, if there is multiple audios with the same name it can lead to unwanted results.