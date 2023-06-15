// поліморфізм якийсь обєкт в різних умовах може мати різні властивості при тому маючи один інтерфейс
// може бути один метод і в залежності від того в якому класі ми його викликаємо з одною й тою самою сигнатурою виконує різні ф-ї
class PrintMessageToConsole {
    constructor() {
        this._prefix = 'вывод многострочный';
    }
    saveMessage(message) {
        if (!message) {
            return false;
        }
        this._message = message;
        return true;
    }
    print() {
        if (!this._message) {
            throw new Error('пусто!');
        }
        let text = `
        ${this._prefix}.
        Сообщение: '${this._message}'`;
        console.log(text);
    }
}
class PrintMessagToDocument {
    constructor() { }
    saveMessage(message) {
        if (!message) {
            return false;
        }
        this._message = 'Вывод в дом в одну строку.';
        return true;
    }
    print() {
        document.write(this._message);
    }
}
const printMessageToConsole = new PrintMessageToConsole();
if (printMessageToConsole.saveMessage('сообщение для класа printMessageToConsole')) {
    printMessageToConsole.print();
}
const printMessageToDocument = new PrintMessagToDocument();
if (printMessageToDocument.saveMessage('сообщение для класа printMessageToDocument')) {
    printMessageToDocument.print();
}
// маємо ф-ю яка приймає обєкт типу IExample  в залежності від того який обєкт передамо буде інший вивід
// маємо ф-ю яка буде приймати два типи наших обєктів по типу інтерфейса
function showObj(obj) {
    obj.print();
}
// showObj(printMessageToDocument)
// showObj(printMessageToConsole)
//# sourceMappingURL=app.js.map