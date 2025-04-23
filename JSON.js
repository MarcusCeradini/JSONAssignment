const person = 
`{
    "firstname": "Marcus",
    "lastname": "Ceradini",
    "course": "Web-115",
    "section": "2816",
    "role": "student"
}`
console.log("JSON format:")
console.log(person)

const parseperson = JSON.parse(person)
console.log("Person object:")
console.log(parseperson)
