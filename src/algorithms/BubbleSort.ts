
const BubbleSort = (array: number[]) => {
    const n: number = array.length
    const trace: { [key: string]: any }[] = []
    const sortedArray = [...array]

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            trace.push({
                arrayState: [...sortedArray], currentIndex: j,
                comparisonIndex: j + 1, unsortedIndex: n - i - 1,
                isSorted: false
            })
            if (sortedArray[j] > sortedArray[j + 1]) {
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]]
                trace.push({
                    arrayState: [...sortedArray], currentIndex: j + 1,
                    comparisonIndex: j + 2, unsortedIndex: n - i - 1,
                    isSorted: false
                })

            }
        }
    }
    trace.push({
        arrayState: [...sortedArray], currentIndex: -1,
        comparisonIndex: -1, unsortedIndex: -1,
        isSorted: true
    })
    return trace

}

export default BubbleSort

// const sortStep = () => {
//     let sortStepArray: number[] = [...arrayState]
//     if (sortStepArray.length === unsortedIndex) {
//         setUnsortedIndex(-1)
//         setCurrentIndex(-1)
//         setIsSorted(true)
//     } else if (currentIndex >= sortStepArray.length - unsortedIndex) {
//         setCurrentIndex(1)
//         setUnsortedIndex(unsortedIndex + 1)
//     } else {
//         if (sortStepArray[currentIndex - 1] > sortStepArray[currentIndex]) {
//             [sortStepArray[currentIndex - 1], sortStepArray[currentIndex]] =
//                 [sortStepArray[currentIndex], sortStepArray[currentIndex - 1]];
//             setArrayState([...sortStepArray])
//         }
//         setCurrentIndex(currentIndex + 1)

//     }


// }
