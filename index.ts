const person1 = { first_name: 'anass', last_name: 'azeroual' }; // Object 1
const person2 = { first_name: 'anass', last_name: 'azeroual' }; // Object 2

function sortObjectByKeys(o) {
  // Function sort by Keys
  return Object.keys(o)
    .sort()
    .reduce((r, k) => ((r[k] = o[k]), r), {});
}

let isEqual =
  JSON.stringify(sortObjectByKeys(person1)) ===
  JSON.stringify(sortObjectByKeys(person2));

console.log(isEqual); // Open the console!
