// const MergeSort = (array: number[]) => {
//     // let sortedArray: number[];
//     // let trace: { [key: string]: any };

import { removeEmitHelper } from "typescript";

//     const mergeSort = (array: number[], left: number, right: number) => {
//         console.log(array.length)
//         if (array.length === 1) {
//             return array
//         } else {
//             let mid: number = Math.floor(array.length / 2)
//             const Left = array.slice(left, mid)
//             const Right = array.slice(mid, right)
//             mergeSort(Left, left, mid)
//             mergeSort(Right, mid, right)
//             merge(array, left, mid, right)

//         }
//     }

//     const merge = (array: number[], start: number, mid: number, end: number) => {
//         let sorted: number[] = [];
//         let L: number[] = array.slice(start, mid)
//         let R: number[] = array.slice(mid, end)
//         let i = 0; let j = 0; let k = 0
//         while (i < mid && j < (end - mid)) {
//             if (L[i] > R[j]) {
//                 sorted[k] = R[j]
//                 j += 1
//             } else {
//                 sorted[k] = L[i]
//                 i += 1
//             }
//             k += 1
//         }

//         while (i < mid) {
//             sorted[k] = L[i]
//             i += 1
//             k += 1
//         }

//         while (j < (end - mid)) {
//             sorted[k] = R[j]
//             j += 1
//             k += 1
//         }

//         return sorted

//     }

//     return mergeSort(array, 0, array.length)
// }

// console.log(MergeSort([4, 6, 2]))

const MergeSort = () => {
    return 1;
}

export default MergeSort