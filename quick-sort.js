function swap(items, leftIndex, rightIndex) {
	var temp = items[leftIndex];
	items[leftIndex] = items[rightIndex];
	items[rightIndex] = temp;
}

//	1. Find a pivot in an array
//	2. Start a left pointer at the first item in the array
//	3. Start a right pointer as the last item in the array
//	4. While the left pointer is less than the pivot value, move the left pointer to the right.
//	   Continue until the value of the left pointer is greater than or equal to the pivot value
//	5. While the right pointer is greater than the pivot value, move the right pointer to the left
//	   Continue until the value of the right pointer is less than or equal to the pivot value.
//	6. If the left pointer is less than or equal to the right pointer swap the values at these locations
//	   in the array.
//	7.
function partition(items, left, right) {
	var pivot = items[Math.floor((left+right)/2)],
		i = left,
		j = right;
	while (i <= j) {
		while(pivot > items[i]) {
			i++;
		}
		while(pivot < items[j]) {
			j--;
		}
		if (i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}
	return i;
}