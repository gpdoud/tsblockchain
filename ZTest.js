"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockChain_1 = require("./BlockChain");
var Block_1 = require("./Block");
var Transaction_1 = require("./Transaction");
var TransDetail_1 = require("./TransDetail");
var Log_1 = require("./Log");
var ZTest = /** @class */ (function () {
    function ZTest() {
        this.bc = new BlockChain_1.BlockChain();
        this.log = new Log_1.Log();
    }
    ZTest.prototype.run = function () {
        var tdi = new TransDetail_1.TransDetail(0, 'Greg', 1.0);
        var tdo = new TransDetail_1.TransDetail(0, 'Cindy', 0.9);
        var tdo2 = new TransDetail_1.TransDetail(1, 'Greg', 0.1);
        var tran = new Transaction_1.Transaction();
        tran.Input.push(tdi);
        tran.Output.push(tdo);
        tran.Output.push(tdo2);
        var blk = new Block_1.Block();
        blk.Index = this.bc.nxtBlkIdx++;
        blk.Trans.push(tran);
        this.bc.Blocks.push(blk);
        this.log.Info("Loaded...");
    };
    ZTest.prototype.display = function () {
        for (var _i = 0, _a = this.bc.Blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            this.log.Info(block.toConsole());
        }
    };
    return ZTest;
}());
exports.ZTest = ZTest;
var test = new ZTest();
test.run();
test.display();
