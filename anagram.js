console.log("Anagram");

function anagram(a, b) {
  if (a.length === b.length) {
    let map = new Map();
    for (let i = 0; i < b.length; i++) {
      let char = b.charAt(i);
      map.set(char, (map.get(char) || 0) + 1);
    }
    for (let i = 0; i < a.length; i++) {
      let char = a.charAt(i);
      if (!map.has(char)) {
        return false;
      }
      map.set(char, map.get(char) - 1);
      map.get(char) === 0 && map.delete(char);
    }
  } else {
    return false;
  }
  return true;
}

let a = "swalrl";
let b = "lsrasw";

console.log("is anagram ", anagram(a, b));
