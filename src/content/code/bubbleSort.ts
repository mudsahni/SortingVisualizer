export const python = `
    def bubble_sort(array: list):
        n = len(array)

        for i in range(n):
            for j in range(n-1-i):
                if array[j] > array[j + 1]:
                    array[j+1], array[j] = array[j], array[j+1]

        return array
`

export const typescript = `
    const bubbleSort = (array: number[]) => {
        const n: number = array.length

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - 1 -i; j++) {
                if (array[j] > array[j+1]) {
                    [array[j+1], array[j]] = [array[j], array[j+1]]
                }
            }
        }
        return array
    }

`

export const scala = `

    import scala.collection.mutable.ListBuffer

    object BubbleSort {
        def bubbleSort(array: ListBuffer[Integer]): ListBuffer[Integer] = {
            val n: Integer = array.length
            var i: Integer = 0;
            var j: Integer = 0;

            for (i <- 0 until n) {
                for (j <- 0 until n - 1 - i) {
                    if (array(j) > array(j + 1)) {
                        val temp = array(j)
                        array(j) = array(j + 1)
                        array(j + 1) = temp
                    }
                }
            }

            array
        }
    
    }
`

export const java = `

    import java.util.List;

    public class BubbleSort {

        public static List<Integer> bubbleSort(List<Integer> array) {
            int n = array.size();

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n - 1 - i; j++) {
                    if (array.get(j) > array.get(j + 1)) {
                        int temp = array.get(j);
                        array.set(j, array.get(j + 1));
                        array.set(j + 1, temp);
                    }
                }
            }
            return array;
        }

    }

`