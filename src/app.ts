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
loadScript('https://code.jquery.com/jquery-3.7.0.min.js')
    .then(()=>{
        return loadScript('https://code.jquery.com/jquery-migrate-3.4.1.min.js')
    },err=>{
        console.log(err);
        
    })
    .then(()=>{
        return loadScript('https://code.jqueryom/jquery-3.7.0.min.js')
    },
    err=>{
        console.log(err);
    }
    )
    .then(()=>{
        console.log('скріпти загружені');
    },err=>{
        console.log(err);
        
    })