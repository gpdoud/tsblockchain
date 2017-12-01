import { TransDetail } from './TransDetail';

export class Transaction {
	Hash: string;
	Input: TransDetail[] = [];
	Output: TransDetail[] = [];

	toString(): string {
		let str: string = "";
		str += this.Hash;
		for(let td of this.Input) {
			str += td.toString();
		}
		for(let td of this.Output) {
			str += td.toString();
		}
		return str;
	}

	toConsole(): string {
		let str: string = '>>>>';
		str += "Hash:  " + this.Hash + "\n";
		return str;
	}

	constructor() {
		this.Hash = "*hash*";
	}
}