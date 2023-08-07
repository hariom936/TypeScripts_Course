// import { Numbers } from "./Numbers";

// interface SortingProps {
//     length: number;
//     compare(indexLeft: number, indexRight: number): boolean;
//     swap(indexLeft: number, indexRight: number): void;
// }

export abstract class SortData {
    // constructor(public data: SortingProps) { }
    abstract compare(indexLeft: number, indexRight: number): boolean;
    abstract swap(indexLeft: number, indexRight: number): void;
    abstract length: number;

    sort(): void {
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

