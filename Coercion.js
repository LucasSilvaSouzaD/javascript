String(123) // explicit
123 + ''    // implicit

Boolean(2)          // explicit
if (2) {}      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator

const item = {
    name: "Lucas",
    age: 25,
    toString() {
        return `Name: ${this.name}, Age: ${this.age}`
    },
    valueOf() {
        return 007
    }
}

console.log("toSring", String(item))
console.log("valueOf", Number(item))