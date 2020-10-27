
export const typescript = `
    const insertionSort = (array: number[]) => {
        const n: number = array.length

        for (let i = 1; i < n; i++) {
            let key: number = array[i]
            let j: number = i - 1
            while (j >= 0 && key < array[j]) {
                array[j + 1] = array[i]
                j -= 1
            }
            array[j + 1] = key
        }
        return array
    }

`

export const python = `

    def insertion_sort(array: list):
        n: int = len(array)

        for i in range(1,n):
            key: int = array[i]
            j: int = i - 1
            while (j >= 0 and key < array[j]):
                array[j+1] = array[i]
                j -= 1
            
            array[j+1] = key

        return array
`

export const scala = `

    object InsertionSort {

        def insertionSort(array: ListBuffer[Integer]): ListBuffer[Integer] = {
            val n: Integer = array.length
            var i: Integer = 0

            for (i <- 1 until n) {
                val key: Integer = array(i)
                var j: Integer = i - 1

                while (j >= 0 and key < array(j)) {
                    array(j+1) = array(i)
                    j -= 1
                }
                array(j+1) = key
            }
            array
        }
    }
`

export const java = `

    public class InsertionSort {

        public static List<Integer> insertionSort(List<Integer> array) {
            int n = array.size();
            int i = 0;

            for (int i = 1, i < n; i++) {
                int key = array.get(i);
                int j = i - 1;

                while (j >= 0 && key < array.get(j)) {
                    array.set(j+1, array.get(i));
                    j -= 1;
                }
                array.set(j+1) = key
            }
            return array
        }
    }
`