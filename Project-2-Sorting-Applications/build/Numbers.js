"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
const SortData_1 = require("./SortData");
class Numbers extends SortData_1.SortData {
    // number: number[];
    constructor(number) {
        super();
        this.number = number;
    }
    compare(indexLeft, indexRight) {
        return this.number[indexLeft] > this.number[indexRight];
    }
    ;
    swap(indexLeft, indexRight) {
        const lefArg = this.number[indexLeft];
        this.number[indexLeft] = this.number[indexRight];
        this.number[indexRight] = lefArg;
    }
    get length() {
        return this.number.length;
    }
}
exports.Numbers = Numbers;
