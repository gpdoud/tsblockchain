import { Transaction } from './Transaction';

export class Block {
	 Hash: string;
	 PHash: string;
	 Index: number;
	 Date: Date;
	 Trans: Transaction[] = [];
	 Nonce: number;

	 toString(): string {
	 	let str: string = '';
	 	str += this.PHash
	 		+ this.Index.toString()
	 		+ this.Date.toString()
	 		+ this.Nonce.toString();
	 	for(let tran of this.Trans) {
	 		str += tran.toString();
	 	}
	 	return str;
	 }

	 toConsole(): string {
	 	let str: string = '';
	 	str += "Index: " + this.Index.toString() + "\n";
	 	str += "PHash: " + this.PHash + "\n";
	 	str += "Hash:  " + this.Hash + "\n";
	 	str += "Date:  " + this.Date.toDateString() + "\n";
	 	str += "Nonce: " + this.Nonce.toString() + "\n";
	 	str += "Trans: " + "\n";
	 	for(let t of this.Trans) {
	 		str += t.toConsole();
	 	}
	 	return str;
	 }

	 constructor() {
	 	this.Hash = '*hash*';
	 	this.PHash = '*phash*';
	 	this.Index = -1;
	 	this.Date = new Date();
	 	this.Nonce = 0;
	 }
}