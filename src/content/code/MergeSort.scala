
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

  def merge(left: ListBuffer[Integer], right: ListBuffer[Integer]): ListBuffer[Integer] = {
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