let date = new Date("2006-10-05T10:00:00")

let day = (date.getDay() + 1).toString().padStart("2", 0)
console.log(day)

let month = (date.getMonth() + 1).toString().padStart("2", 0)
console.log(month)

let year = date.getFullYear().toString()
console.log(year)