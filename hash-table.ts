class HashTable<T> {
    table: { [key: string]: T };
  
    constructor() {
      this.table = {};
    }
  
    insert(key: string, value: T): void {
      this.table[key] = value;
    }
  
    search(key: string): T | undefined {
      return this.table[key];
    }
  }
  
  // Example:
  const stringHashTable = new HashTable<string>();
  stringHashTable.insert("name", "John");
  stringHashTable.insert("age", "25");
  
  console.log(stringHashTable.search("age")); // Output: "25"