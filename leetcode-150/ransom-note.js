/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed 
by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.


Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

const canConstruct = (ransomNote, magazine) => {
  if (ransomNote.length > magazine.length) return false;

  const allLetters = {};
  for (const letter of magazine) {
    allLetters[letter] = allLetters[letter] || 0;
    allLetters[letter] += 1;
  }

  for (const letter of ransomNote) {
    if (letter in allLetters) {
      allLetters[letter] -= 1;
    } else {
      return false;
    }

    if (allLetters[letter] < 0) return false;
  }

  return true;
};
