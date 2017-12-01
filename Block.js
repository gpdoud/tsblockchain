"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block = /** @class */ (function () {
    function Block() {
        this.Trans = [];
        this.Hash = '*hash*';
        this.PHash = '*phash*';
        this.Index = -1;
        this.Date = new Date();
        this.Nonce = 0;
    }
    Block.prototype.toString = function () {
        var str = '';
        str += this.PHash
            + this.Index.toString()
            + this.Date.toString()
            + this.Nonce.toString();
        for (var _i = 0, _a = this.Trans; _i < _a.length; _i++) {
            var tran = _a[_i];
            str += tran.toString();
        }
        return str;
    };
    Block.prototype.toConsole = function () {
        var str = '';
        str += "Index: " + this.Index.toString() + "\n";
        str += "PHash: " + this.PHash + "\n";
        str += "Hash:  " + this.Hash + "\n";
        str += "Date:  " + this.Date.toDateString() + "\n";
        str += "Nonce: " + this.Nonce.toString() + "\n";
        str += "Trans: " + "\n";
        for (var _i = 0, _a = this.Trans; _i < _a.length; _i++) {
            var t = _a[_i];
            str += t.toConsole();
        }
        return str;
    };
    return Block;
}());
exports.Block = Block;
