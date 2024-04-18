function HMR3_getURL(){
    var HMR3_formID = document.getElementById("HMR3_dropdown");
    var HMR3_optionValue = HMR3_formID.value;
    var HMR3_optionText = HMR3_formID.options[HMR3_formID.selectedIndex].text;
    HMR3_runGame(HMR3_optionValue,HMR3_optionText);
}

function HMR3_runGame(HMR3_optionValue,HMR3_optionText){
    EJS_player = "#game";
    EJS_core = "gba";
    EJS_startOnLoaded = true;
    EJS_gameUrl = HMR3_optionValue;
    EJS_pathtodata = "https://cdn.jsdelivr.net/gh/ethanaobrien/emulatorjs@main/data/";
    
    (async function() {
        const folderPath = (path) => path.substring(0, path.length - path.split('/').pop().length);
        let scriptPath = (typeof window.EJS_pathtodata === "string") ? window.EJS_pathtodata : folderPath((new URL(document.currentScript.src)).pathname);
        if (!scriptPath.endsWith('/')) scriptPath+='/';
        //console.log(scriptPath);
        function loadScript(file) {
            return new Promise(function (resolve, reject) {
                let script = document.createElement('script');
                script.src = function() {
                    if ('undefined' != typeof EJS_paths && typeof EJS_paths[file] === 'string') {
                        return EJS_paths[file];
                    } else {
                        return scriptPath+file;
                    }
                }();
                script.onload = resolve;
                document.head.appendChild(script);
            })
        }
        function loadStyle(file) {
            return new Promise(function(resolve, reject) {
                let css = document.createElement('link');
                css.rel = 'stylesheet';
                css.href = function() {
                    if ('undefined' != typeof EJS_paths && typeof EJS_paths[file] === 'string') {
                        return EJS_paths[file];
                    } else {
                        return scriptPath+file;
                    }
                }();
                css.onload = resolve;
                document.head.appendChild(css);
            })
        }
        
        if (('undefined' != typeof EJS_DEBUG_XX && true === EJS_DEBUG_XX)) {
            await loadScript('emulator.js');
            await loadScript('nipplejs.js');
            await loadScript('shaders.js');
            await loadScript('storage.js');
            await loadScript('gamepad.js');
            await loadScript('GameManager.js');
            await loadScript('socket.io.min.js');
            await loadStyle('emulator.css');
        } else {
            await loadScript('emulator.min.js');
            await loadStyle('emulator.min.css');
            
        }
        const config = {};
        config.gameUrl = window.EJS_gameUrl;
        config.dataPath = scriptPath;
        config.system = window.EJS_core;
        config.biosUrl = window.EJS_biosUrl;
        config.gameName = window.EJS_gameName;
        config.color = window.EJS_color;
        config.adUrl = window.EJS_AdUrl;
        config.adMode = window.EJS_AdMode;
        config.adTimer = window.EJS_AdTimer;
        config.adSize = window.EJS_AdSize;
        config.alignStartButton = window.EJS_alignStartButton;
        config.VirtualGamepadSettings = window.EJS_VirtualGamepadSettings;
        config.buttonOpts = window.EJS_Buttons;
        config.volume = window.EJS_volume;
        config.defaultControllers = window.EJS_defaultControls;
        config.startOnLoad = window.EJS_startOnLoaded;
        config.fullscreenOnLoad = window.EJS_fullscreenOnLoaded;
        config.filePaths = window.EJS_paths;
        config.loadState = window.EJS_loadStateURL;
        config.cacheLimit = window.EJS_CacheLimit;
        config.cheats = window.EJS_cheats;
        config.defaultOptions = window.EJS_defaultOptions;
        config.gamePatchUrl = window.EJS_gamePatchUrl;
        config.gameParentUrl = window.EJS_gameParentUrl;
        config.netplayUrl = window.EJS_netplayServer;
        config.gameId = window.EJS_gameID;
        config.backgroundImg = window.EJS_backgroundImage;
        config.backgroundBlur = window.EJS_backgroundBlur;
        config.backgroundColor = window.EJS_backgroundColor;
        config.controlScheme = window.EJS_controlScheme;
        config.threads = window.EJS_threads;
        config.disableCue = window.EJS_disableCue;
        
        if (typeof window.EJS_language === "string" && window.EJS_language !== "en-US") {
            try {
                let path;
                if ('undefined' != typeof EJS_paths && typeof EJS_paths[window.EJS_language] === 'string') {
                    path = EJS_paths[window.EJS_language];
                } else {
                    path = scriptPath+"localization/"+window.EJS_language+".json";
                }
                config.language = window.EJS_language;
                config.langJson = JSON.parse(await (await fetch(path)).text());
            } catch(e) {
                config.langJson = {};
            }
        }
        
        window.EJS_emulator = new EmulatorJS(EJS_player, config);
        window.EJS_adBlocked = (url, del) => window.EJS_emulator.adBlocked(url, del);
        if (typeof window.EJS_ready === "function") {
            window.EJS_emulator.on("ready", window.EJS_ready);
        }
        if (typeof window.EJS_onGameStart === "function") {
            window.EJS_emulator.on("start", window.EJS_onGameStart);
        }
        if (typeof window.EJS_onLoadState === "function") {
            window.EJS_emulator.on("load", window.EJS_onLoadState);
        }
        if (typeof window.EJS_onSaveState === "function") {
            window.EJS_emulator.on("save", window.EJS_onSaveState);
        }
    })();

    
}

function HMR3_addoptions(romdropdown){
    var test1 = document.createElement('option');
    test1.innerText = "Pokemon Dark Worship";
    test1.setAttribute('https://raw.githack.com/TrapjawwS/funnyemulatorjs/main/romhacks/Dark%20Worship%20ENGLISH%20COMPLETE.Gba', 'https://raw.githack.com/TrapjawwS/funnyemulatorjs/main/romhacks/Dark%20Worship%20ENGLISH%20COMPLETE.Gba/');
    
    var test2 = document.createElement('option');
    test2.innerText = "New valuee";
    test2.setAttribute('valueee', 'valueeee');
    
    romdropdown.appendChild(test1);
    
    romdropdown.appendChild(test2);
}