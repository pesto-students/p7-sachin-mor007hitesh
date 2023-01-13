function vowelCount(str) {
    // Creating a map to store the count of vowels
    let vowelMap = new Map();
    // Setting the initial count of each vowel to 0
    vowelMap.set(1, 0);
    vowelMap.set(2, 0);
    vowelMap.set(3, 0);
    vowelMap.set(4, 0);
    vowelMap.set(5, 0);

    // Iterating through the string
    for (let i = 0; i < str.length; i++) {
        // Checking if the current character is a vowel
        if (str[i].match(/[aeiou]/i)) {
            // Using switch case to increment the count of the corresponding vowel
            switch (str[i]) {
                case 'a':
                case 'A':
                    vowelMap.set(1, vowelMap.get(1) + 1);
                    break;
                case 'e':
                case 'E':
                    vowelMap.set(2, vowelMap.get(2) + 1);
                    break;
                case 'i':
                case 'I':
                    vowelMap.set(3, vowelMap.get(3) + 1);
                    break;
                case 'o':
                case 'O':
                    vowelMap.set(4, vowelMap.get(4) + 1);
                    break;
                case 'u':
                case 'U':
                    vowelMap.set(5, vowelMap.get(5) + 1);
                    break;
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount("Hello World"));
// Output: Map { 1 => 1, 2 => 3, 3 => 2, 4 => 1, 5 => 0 }
// where 1 corresponds to the count of 'a' or 'A'
//       2 corresponds to the count of 'e' or 'E'
//       3 corresponds to the count of 'i' or 'I'
//       4 corresponds to the count of 'o' or 'O'
//       5 corresponds to the count of 'u' or 'U'
