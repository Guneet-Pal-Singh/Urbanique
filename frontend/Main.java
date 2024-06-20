public class Main {

    public static int kthSmallestElement(int[] arr1, int[] arr2, int[] arr3, int k) {
        int n = arr1.length;
        

        
        int low = 0;
        int high = n-1;

        while (low < high) {
            int mid = low + (high - low) / 2;

            int count1 = binarySearch(arr1, 0, n, mid);
            int count2 = binarySearch(arr2, 0, n, mid);
            int count3 = binarySearch(arr3, 0, n, mid);
            int count = count1 + count2 + count3;

            if (count < k) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }

    public static int binarySearch(int[] arr, int low, int high, int target) {
        if (low >= high) {
            return low;
        }

        int mid = low + (high - low) / 2;

        if (arr[mid] < target) {
            return binarySearch(arr, mid + 1, high, target);
        } else {
            return binarySearch(arr, low, mid, target);
        }
    }

    public static void main(String[] args) {
        // Example usage:
        int[] arr1 = {1, 1, 2, 4, 5};
        int[] arr2 = {2, 2, 4, 5, 6};
        int[] arr3 = {3, 5, 7, 9, 10};

        int k = 4;
        int result = kthSmallestElement(arr1, arr2, arr3, k);

        System.out.println("The " + k + "th smallest element is: " + result);
    }
}
