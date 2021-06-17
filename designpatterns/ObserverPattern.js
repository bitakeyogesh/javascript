/**
 * Category Dropdown
 */
class CategoryDropdown {
  categories = ["applinaces", "door", "electronics"];
  subscribers = [];
  subscribe(observer) {
    this.subscribers.push(observer);
  }
  onChange(selectedCategory) {
    this.subscribers.forEach((observer) => observer.update(selectedCategory));
  }
}

/**
 * Filter Dropdown
 */
class FilterDropdown {
  constructor(filtertype) {
    this.filtertype = filtertype;
    this.items = [];
  }

  update(category) {
    //fetch('https://example.com')
    //.then(res => this.items(res));
    console.log(`update ${this.filtertype} for ${category} category`);
  }
}

//---------------------------------------------------------
// Test the design pattern
let categoryDropdown = new CategoryDropdown();

let colorsDropdown = new FilterDropdown("colors");
let priceDropdown = new FilterDropdown("price");
let brandDropdown = new FilterDropdown("brand");

categoryDropdown.subscribe(colorsDropdown);
categoryDropdown.subscribe(priceDropdown);
categoryDropdown.subscribe(brandDropdown);

categoryDropdown.onChange("electronics");
categoryDropdown.onChange("door");
