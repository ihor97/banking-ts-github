var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// функція для підгрузки скриптів
function loadScript(src) {
    return new Promise(function (res, rej) {
        let script = document.createElement('script');
        script.src = src;
        // виконається в той момент коли скріпти загрузяться
        script.onload = () => res(script);
        script.onerror = () => rej(new Error(`скріпт по адресу ${src} не загружений`));
        document.head.append(script);
    });
}
// для того щоб зробити так треба обгонути виконання наших ф-й в IIFE
(() => __awaiter(this, void 0, void 0, function* () {
    yield loadScript('https://code.jquery.com/jquery-3.7.0.min.js');
    yield loadScript('https://code.jquery.com/jquery-3.7.0.min.js');
    yield loadScript('https://code.jquery.com/jquery-3.7.0.min.js');
}))();
