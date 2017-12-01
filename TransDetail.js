"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransDetail = /** @class */ (function () {
    function TransDetail(index, address, amount) {
        this.Index = index;
        this.Address = address;
        this.Amount = amount;
    }
    TransDetail.prototype.toString = function () {
        return this.Index.toString()
            + this.Address.toString()
            + this.Amount.toString();
    };
    return TransDetail;
}());
exports.TransDetail = TransDetail;
