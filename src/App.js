import { firstClass, secondClass } from "./Test"

console.log("New instantiation each time:")

const first = firstClass()
console.log(`first: ${first.getCount()}`)
first.increment()
console.log(`first: ${first.getCount()}`)

const second = firstClass()
console.log(`second: ${second.getCount()}`)
second.increment()
second.increment()
second.increment()
console.log(`second: ${second.getCount()}`)

console.log(`first: ${first.getCount()}`)

console.log("")
console.log("Singleton (default behavior):")

const third = secondClass
console.log(`first: ${third.getCount()}`)
third.increment()
console.log(`first: ${third.getCount()}`)

const fourth = secondClass
console.log(`second: ${fourth.getCount()}`)
fourth.increment()
fourth.increment()
fourth.increment()
console.log(`second: ${fourth.getCount()}`)

console.log(`first: ${third.getCount()}`)

export default () => <>App</>;
