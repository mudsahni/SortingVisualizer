export const typescript = `
    const mergeSort = (array: number[]) => {
        if (array.length <= 1) {
            return array
        } else {
            const mid: number = Math.floor(array/2)
            const left: number[] = mergeSort(array.slice(0, mid))
            const right: number[] = mergeSort(array.slice(mid, array.length))
            return merge(left, right)
        }
    }

    const merge = (left: number[], right: number[]) => {
        let merged: number[] = []
        let i: number = 0; let j: number = 0; let k: number = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                merged[k] = left[i]
                i += 1
            } else {
                merged[k] = right[j]
                j += 1
            }
            k += 1
        }

        while (i < left.length) {
            merged[k] = left[i]
            i += 1
            k += 1
        }

        while (j < right.length) {
            merged[k] = right[j]
            j += 1
            k += 1
        }

        return merged
    }
    `

export const python = `
    def merge_sort(array: list):
        n: int = len(array)
        if n <= 1:
            return array
        else:
            mid: int = n//2
            left: list = merge_sort(array[:mid])
            right: list = merge_sort(array[mid:])
            return merge(left, right)

    def merge(left: list, right: list):
        merged: list = []
        i, j = 0, 0
        ln, rn = len(left), len(right)

        while i < ln and j < rn:
            if left[i] < right[j]:
                merged.append(left[i])
                i += 1
            else:
                merged.append(right[j])
                j += 1
        
        while i < ln:
            merged.append(left[i])
            i += 1
        
        while j < rn:
            merged.append(right[j])
            j += 1

        return merged
    `

export const scala = `
    import scala.collection.mutable.ListBuffer

    object MergeSort {
        
        def mergeSort(array: ListBuffer[Integer]): ListBuffer[Integer] = {
            val n: Integer = array.length
            if (n <= 1) array
            else {
                val mid: Integer = (n / 2)
                val left: ListBuffer[Integer] = mergeSort(array.slice(0, mid))
                val right: ListBuffer[Integer] = mergeSort(array.slice(mid, n))
                merge(left, right)
            }
        }

        def merge(left: ListBuffer[Integer], right: ListBuffer[Integer]): 
            ListBuffer[Integer] = {

            var merged: ListBuffer[Integer] = ListBuffer[Integer]()
            var i: Integer = 0;
            var j: Integer = 0;

            while (i < left.length && j < right.length) {
                if (left(i) < right(j)) {
                    merged += left(i)
                    i += 1
                } else {
                    merged += right(j)
                    j += 1
                }
            }

            while (i < left.length) {
                merged += left(i)
                i += 1
            }

            while (j < right.length) {
                merged += right(j)
                j += 1
            }

            merged
        }

    }
`

export const java = `

    import java.util.ArrayList;
    import java.util.List;

    public class MergeSort {

        public static List<Integer> mergeSort(List<Integer> array) {
            int n = array.size();
            if (n <= 1) return array;
            else {
                int mid = n / 2;
                List<Integer> left = MergeSort.mergeSort(array.subList(0, mid));
                List<Integer> right = MergeSort.mergeSort(array.subList(mid, n));
                return MergeSort.merge(left, right);
            }
        }

        public static List<Integer> merge(List<Integer> left, List<Integer> right) {
            List<Integer> merged = new ArrayList<Integer>();
            int i = 0;
            int j = 0;
            int ln = left.size();
            int rn = right.size();

            while (i < ln && j < rn) {
                if (left.get(i) < right.get(j)) {
                    merged.add(left.get(i));
                    i++;
                } else {
                    merged.add(right.get(j));
                    j++;
                }
            }

            while (i < ln) {
                merged.add(left.get(i));
                i++;
            }

            while (j < rn) {
                merged.add(right.get(j));
                j++;
            }

            return merged;
        }

    }

`