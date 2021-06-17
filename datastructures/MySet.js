class MySet {
  constructor() {
    this.storage = [];
  }

  add(elem) {
    if (!this.has(elem)) {
      this.storage.push(elem);
    }
    return this.storage;
  }
  has(elem) {
    if (this.storage.includes(elem)) {
      return true;
    }
    return false;
  }
  clear() {
    this.storage = [];
  }
  delete(elem) {
    if (this.has(elem)) {
      const index = this.storage.indexOf(elem);
      this.storage.splice(index, 1);
      return true;
    }
    return false;
  }
  values() {
    return this.storage;
  }
  union(newSet) {
    const result = new MySet();

    this.storage.forEach((element) => {
      result.add(element);
    });
    newSet.values().forEach((element) => {
      if (!result.has(element)) {
        result.add(element);
      }
    });
    return result;
  }
  intersection(newSet) {
    const result = new MySet();

    this.storage.forEach((element) => {
      if (newSet.has(element)) {
        result.add(element);
      }
    });
    return result;
  }
}
/**
 * Test MySet
 */
let set1 = new MySet();
set1.add(1);
set1.add(2);
set1.add(2);
set1.add(3);
console.log(set1.values());
set1.delete(3);
let set2 = new MySet();
set2.add(3);
set2.add(4);
set2.add(1);

console.log(set1.union(set2));
console.log(set1.intersection(set2));
