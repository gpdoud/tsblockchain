export class TransDetail {
	Index: number;
	Address: string;
	Amount: number;

	toString(): string {
		return this.Index.toString()
			+ this.Address.toString()
			+ this.Amount.toString();
	}

	constructor(index: number, address: string, amount: number) {
		this.Index = index;
		this.Address = address;
		this.Amount = amount;
	}
}