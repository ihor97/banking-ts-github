"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// dependency injection дозволяє розграничити функціонал аплікухи
require("reflect-metadata");
class PrintService {
}
class PrintDocumentService extends PrintService {
    writeMessage(message) {
        document.write(message);
    }
}
class PrintConsoleService extends PrintService {
    writeMessage(message) {
        console.log(message);
    }
}
class PrintLocaleStorageService extends PrintService {
    writeMessage(message) {
        localStorage.setItem('message', message);
    }
}
class ServiceLocator {
    // interfaceType тип реєструючої залежності
    // instance екземпляр класа який їй відповідає
    static registerService(interfaceType, instance) {
        let record = this._sevices.find(x => x.interfaceType === interfaceType);
        if (!record) {
            record = { interfaceType: interfaceType, instance: instance };
            this._sevices.push(record);
        }
        else {
            record.instance = instance;
        }
    }
    static getService(interfaceType) {
        // When you use this approach, you basically tell TypeScript that this value will never be null or undefined. використовуємо !
        //  тут помилка!!!!!!!!!!!!
        return this._sevices.find(x => x.interfaceType == interfaceType).instance;
    }
}
ServiceLocator._sevices = [];
ServiceLocator.registerService(PrintService, new PrintDocumentService());
// ServiceLocator.registerService(PrintService,new PrintConsoleService())
// ServiceLocator.registerService(PrintService,new PrintLocaleStorageService())
function inject(target, propKey) {
    let propType = Reflect.getMetadata("design:type", target, propKey);
    let printService = ServiceLocator.getService(propType);
    // треба скачати reflect-metadata
    // рефлексія -зміна структури обєкта в ході виконання програми
    var descriptor = {
        get: function () {
            return printService;
        }
    };
    Object.defineProperty(target, propKey, descriptor);
    return descriptor;
}
class Example {
    constructor() { }
    print(message) {
        this._printService.writeMessage(message);
    }
}
__decorate([
    inject
], Example.prototype, "_printService", void 0);
let e = new Example();
e.print('first message');
