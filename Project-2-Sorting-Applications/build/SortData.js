"use strict";
// import { Numbers } from "./Numbers";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortData = void 0;
// interface SortingProps {
//     length: number;
//     compare(indexLeft: number, indexRight: number): boolean;
//     swap(indexLeft: number, indexRight: number): void;
// }
class SortData {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //Array of numbers....
                // if (this.data instanceof Array) {
                //     if (this.data[j] > this.data[j + 1]) {
                //         const left = this.data[j];
                //         this.data[j] = this.data[j + 1];
                //         this.data[j + 1] = left;
                //     }
                // }
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.SortData = SortData;
