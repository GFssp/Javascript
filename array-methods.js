const items = [
    {name: "Bike",       price: 100},
    {name: "TV",         price: 200},
    {name: "Album",      price: 10},
    {name: "Book",       price: 5},
    {name: "Phone",      price: 500},
    {name: "Computer",   price: 1000},
    {name: "Keyboard",   price: 500}    
]

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

const itemNames = items.map((item) =>{
    return item.name
})

const foundItem = items.find((item) => {
    return item.name == 'Album'
})

items.forEach((item) => {
    console.log(item.price)
})

const hasInexpensiveItems = items.some((item) =>{
    return item.price <= 100
    // return true or false
})

const hasInexpensiveItems2 = items.every((items) => {
    return item.price <= 1000
})

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

// use includes

