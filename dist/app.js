define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Process = exports.Priority = void 0;
    var Priority;
    (function (Priority) {
        Priority[Priority["High"] = 1] = "High";
        Priority[Priority["Low"] = 2] = "Low";
    })(Priority || (exports.Priority = Priority = {}));
    let index = 0;
    class Process {
        constructor(n) {
            this.name = n;
            this.index = index;
            this.prority = Priority.Low;
        }
    }
    exports.Process = Process;
    console.log(3);
});
