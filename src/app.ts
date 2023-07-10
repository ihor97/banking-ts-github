// функція для підгрузки скриптів
function loadScript(src):Promise<HTMLScriptElement> {
    return new Promise<HTMLScriptElement>(function (res,rej) {
        let script=document.createElement('script');
        script.src=src
        // виконається в той момент коли скріпти загрузяться
        script.onload=()=>res(script)
        script.onerror=()=>rej(new Error(`скріпт по адресу ${src} не загружений`))
        document.head.append(script)
    })
}

// для того щоб зробити так треба обгонути виконання наших ф-й в IIFE
(async ()=>{
await loadScript('https://code.jquery.com/jquery-3.7.0.min.js')
await loadScript('https://code.jquery.com/jquery-3.7.0.min.js')
await loadScript('https://code.jquery.com/jquery-3.7.0.min.js')
})()