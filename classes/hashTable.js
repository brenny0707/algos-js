const hash = require('string-hash');

function arraySizeInt(int) {
  if (int < 2) return 1;
  let twoPower = 0;
  while ((int / 2) > 1) {
    twoPower++;
    int /= 2;
  }
  twoPower++;
  return Math.pow(2, twoPower);
}

function createEmptyBuckets(int) {
  const newBuckets = new Array(int);
  for (let i = 0; i < int; i++) {
    newBuckets[i] = [];
  }
  return newBuckets;
}

class HashTable {
  constructor(obj) {
    this.size = Object.keys(obj).length;
    this.buckets = createEmptyBuckets(arraySizeInt(this.size));
    Object.keys(obj).forEach((key => {
      const hashedKeyIdx = hash(key) % this.buckets.length;
      this.buckets[hashedKeyIdx].push([key, obj[key]]);
    }))
  }
  
  search(key) {
    const hashedKeyIdx = hash(key) % this.buckets.length;
    const bucket = this.buckets[hashedKeyIdx];
    for (let i = 0; i < bucket.length; i++) {
      const bucketPair = bucket[i];
      if (bucketPair[0] === key) return bucketPair[1];
    }
    return null;
  }

  delete(key) {
    let size = this.size;
    const hashedKeyIdx = hash(key) % this.buckets.length;
    const bucket = this.buckets[hashedKeyIdx];
    for (let i = 0; i < bucket.length; i++) {
      const bucketPair = bucket[i];
      if (bucketPair[0] === key) {
        this.size--;
        return bucketPair.splice(i, 1)[0];
      }
    }
    return null;
  }

  insert(key, val) {
    let hashedKeyIdx = hash(key) % this.buckets.length;
    let bucket = this.buckets[hashedKeyIdx];
    for (let i = 0; i < bucket.length; i++) {
      const bucketPair = bucket[i];
      // if key already exists => replace old val with new val
      if (bucketPair[0] === key) {
        bucketPair[1] = val;
        return this.buckets; //will return automatically
      }
    }
    if (this.size + 1 > this.buckets.length) {
      //recreate array O(n)
      const newBuckets = createEmptyBuckets(arraySizeInt(this.size + 1));
      this.buckets.forEach((bucket) => {
        bucket.forEach((bucketEl) => {
          const bucketElKey = bucketEl[0];
          const bucketElVal = bucketEl[1];
          const hashedKeyIdx = hash(bucketElKey) % newBuckets.length;
          newBuckets[hashedKeyIdx].push([bucketElKey, bucketElVal]);
        })
      })
      this.buckets = newBuckets;
    }
    hashedKeyIdx = hash(key) % this.buckets.length;
    bucket = this.buckets[hashedKeyIdx];
    bucket.push([key, val]);
    this.size++;
    return this.buckets;
  }
}

const testHash = new HashTable({"A": "Adam", "B": "Beth", "C": "Cassidy", "D": "Dan" });
console.log(`testHash has ${testHash.size} elements.`)
console.log(`testHash has ${testHash.buckets.length} buckets.`)
console.log(testHash.search("A"));
testHash.insert("E", "Emily");
console.log(`After inserting a fifth element, testHash now has ${testHash.size} elements.`)
console.log(`After inserting a fifth element, testHash now has ${testHash.buckets.length} buckets.`)
console.log(testHash.search("E"));
console.log(testHash.search("A"));