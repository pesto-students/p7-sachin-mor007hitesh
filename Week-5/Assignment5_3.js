function hasDuplicate(arr) {
    // Create an object to store the elements of the array
    let elementMap = {};
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is already in the object
        if (elementMap[arr[i]]) {
            return true;
        } else {
            elementMap[arr[i]] = true;
        }
    }
    return false;
}

console.log(hasDuplicate([1, 2, 3, 4, 5])); // false
console.log(hasDuplicate([1, 2, 3, 4, 5, 2])); // true
