
document.getElementById("button").addEventListener("click", () => {
    let firstname = document.getElementById("firstname")
    console.log(firstname)
    let lastname = document.getElementById("lastname")
    let course = document.getElementById("course")
    let section = document.getElementById("sectionnumber")
})

const person = 
`{
    "firstname": "",
    "lastname": "Ceradini",
    "course": "Web-115",
    "section": "2816",
    "role": "student"
}`

const parseperson = JSON.parse(person)
console.log("Person object:")
console.log(parseperson)

console.log("JSON format:")
console.log(person)

