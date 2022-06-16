/**
 * https://leetcode.com/problems/time-based-key-value-store/
 * 
    Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

    Implement the TimeMap class:

    TimeMap() Initializes the object of the data structure.
    void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
    String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
 */

class Data {
    constructor(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
}
class TimeMap {
    constructor() {
        this.map = new Map();
    }
    findClosestValue(data, timestamp) {
        let l = 0, r = data.length - 1;
        while (l < r) {
            let mid = Math.floor((l + r + 1) / 2);
            if (data[mid].timestamp <= timestamp) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        let closestData = data[l];
        return closestData.timestamp > timestamp ? '' : closestData.value;
    }
    get(key, timestamp) {
        if (!this.map.has(key)) return '';
        let data = this.map.get(key);
        return this.findClosestValue(data, timestamp);
    }
    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        this.map.get(key).push(new Data(value, timestamp));
    }
}

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
console.log(timeMap.get("foo", 1));         // return "bar"
console.log(timeMap.get("foo", 3));         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
console.log(timeMap.get("foo", 4));         // return "bar2"
console.log(timeMap.get("foo", 5));         // return "bar2"
