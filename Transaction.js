"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.Input = [];
        this.Output = [];
        this.Hash = "*hash*";
    }
    Transaction.prototype.toString = function () {
        var str = "";
        str += this.Hash;
        for (var _i = 0, _a = this.Input; _i < _a.length; _i++) {
            var td = _a[_i];
            str += td.toString();
        }
        for (var _b = 0, _c = this.Output; _b < _c.length; _b++) {
            var td = _c[_b];
            str += td.toString();
        }
        return str;
    };
    Transaction.prototype.toConsole = function () {
        var str = '>>>>';
        str += "Hash:  " + this.Hash + "\n";
        return str;
    };
    return Transaction;
}());
exports.Transaction = Transaction;
