import {SortData}  from "./SortData";

export class Numbers extends SortData{
    // number: number[];
    constructor(public number: number[]) {
        super();
     }

    compare(indexLeft: number, indexRight: number): boolean {
        return this.number[indexLeft] > this.number[indexRight];
    };
    
    swap(indexLeft: number, indexRight: number): void {
        const lefArg = this.number[indexLeft];
        this.number[indexLeft] = this.number[indexRight];
        this.number[indexRight] = lefArg;
    }

   get length(): number {
    return this.number.length;
   }
}