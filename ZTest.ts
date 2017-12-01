import { BlockChain } from './BlockChain';
import { Block } from './Block';
import { Transaction } from './Transaction';
import { TransDetail } from './TransDetail';
import { Log } from './Log';
import * as crypto from 'crypto-js';

export class ZTest {
	bc: BlockChain = new BlockChain();
	log: Log = new Log();

	run(): void {
		let tdi: TransDetail = new TransDetail(0, 'Greg', 1.0);
		let tdo: TransDetail = new TransDetail(0, 'Cindy', 0.9);
		let tdo2: TransDetail = new TransDetail(1, 'Greg', 0.1);
		let tran: Transaction = new Transaction();
		tran.Input.push(tdi);
		tran.Output.push(tdo);
		tran.Output.push(tdo2);
		let blk: Block = new Block();
		blk.Index = this.bc.nxtBlkIdx++;
		blk.Trans.push(tran);
		this.bc.Blocks.push(blk);
		this.log.Info("Loaded...");
	}

	display(): void {
		for(let block of this.bc.Blocks) {
			this.log.Info(block.toConsole());
		}
	}

	constructor() {
	}
}

let test: ZTest = new ZTest();
test.run();
test.display();