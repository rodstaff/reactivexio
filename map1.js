var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];

function getFullName(item,index) {
var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
};
var personsName = persons.map(getFullName);

console.log(personsName);

