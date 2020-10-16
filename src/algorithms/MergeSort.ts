
const MergeSort = (array: number[]) => {
    const trace: { [key: string]: any }[] = []
    const original: number[] = [...array]
    const currentStartIndex: number = 0

    // const merge = (left: number[], right: number[]): number[] => {
    //     let merged: number[] = []
    //     let i: number = 0; let j: number = 0; let k: number = 0;
    //     const ln: number = left.length; const rn: number = right.length;

    //     while (i < ln && j < rn) {
    //         if (left[i] < right[j]) {
    //             merged[k] = left[i]
    //             i += 1
    //         } else {
    //             merged[k] = right[j]
    //             j += 1
    //         }
    //         k += 1
    //     }

    //     while (i < ln) {
    //         merged[k] = left[i]
    //         i += 1
    //         k += 1
    //     }

    //     while (j < rn) {
    //         merged[k] = right[j]
    //         j += 1
    //         k += 1
    //     }

    //     return merged
    // }

    // const mergeSort = (sortingArray: number[]) => {

    //     if (sortingArray.length <= 1) {
    //         return sortingArray
    //     } else {
    //         const n: number = sortingArray.length
    //         const mid: number = Math.round(n / 2)
    //         const left: number[] = mergeSort(sortingArray.slice(0, mid))
    //         const right: number[] = mergeSort(sortingArray.slice(mid, n))
    //         return merge(left, right)
    //     }
    // }

    const merge = (sortingArray: number[], left: number, mid: number, right: number) => {
        // console.log(`${left}...${mid}...${right}`)
        // console.log(sortingArray.slice(left, mid))
        // console.log('---')
        // console.log(sortingArray.slice(mid, right))
        const merged: number[] = []
        let i: number = left; let j: number = mid; let k: number = 0;

        while (i < mid && j < right) {
            if (sortingArray[i] < sortingArray[j]) {
                trace.push({ arrayState: [...sortingArray], currentIndex: i, comparisonIndex: j, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })
                merged[k] = sortingArray[i]
                trace.push({ arrayState: [...sortingArray], currentIndex: i, comparisonIndex: j, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })
                i += 1
            } else {
                trace.push({ arrayState: [...sortingArray], currentIndex: j, comparisonIndex: i, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })
                merged[k] = sortingArray[j]
                trace.push({ arrayState: [...sortingArray], currentIndex: j, comparisonIndex: i, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })

                j += 1
            }
            k += 1
        }

        while (i < mid) {
            trace.push({ arrayState: [...sortingArray], currentIndex: i, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })
            merged[k] = sortingArray[i]
            trace.push({ arrayState: [...sortingArray], currentIndex: i, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })
            i += 1
            k += 1
        }

        while (j < right) {
            trace.push({ arrayState: [...sortingArray], currentIndex: j, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })
            merged[k] = sortingArray[j]
            trace.push({ arrayState: [...sortingArray], currentIndex: j, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })
            j += 1
            k += 1
        }
        // console.log(merged)
        // console.log('...')
        trace.push({ arrayState: [...sortingArray], currentIndex: -1, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: left, min: right }, isSorted: false })

        sortingArray.splice(left, merged.length, ...merged)
        trace.push({ arrayState: [...sortingArray], currentIndex: -1, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })

        // console.log(sortingArray)
        // console.log('...')
    }
    const mergeSort = (sortingArray: number[], left: number, right: number) => {
        if ((right - left) <= 1) {
        } else {

            const tArray = sortingArray.slice(left, right)
            const mid: number = Math.round(tArray.length / 2) + left
            trace.push({ arrayState: [...sortingArray], currentIndex: mid, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: false })
            trace.push({ arrayState: [...sortingArray], currentIndex: mid, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: left, min: mid }, isSorted: false })

            // console.log(mid)
            mergeSort(sortingArray, left, mid)
            trace.push({ arrayState: [...sortingArray], currentIndex: mid, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: mid, min: right }, isSorted: false })

            mergeSort(sortingArray, mid, right)
            trace.push({ arrayState: [...sortingArray], currentIndex: mid, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: left, min: right }, isSorted: false })

            merge(sortingArray, left, mid, right)

        }

    }

    mergeSort(array, 0, array.length);
    // console.log(array)
    trace.push({ arrayState: [...array], currentIndex: -1, comparisonIndex: -1, unsortedIndex: -1, groupIndices: { max: -1, min: -1 }, isSorted: true })
    return trace
}

// MergeSort([5, 2, 9, 8, 1, 7, 10, 9])
export default MergeSort