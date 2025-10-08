const employees = [
    { name: "Rafi", salary: 25000 },
    { name: "Sami", salary: 30000 },
    { name: "Jami", salary: 35000 },
    { name: "Nami", salary: 38000 },
];

//Total Salary
const totalSalary = employees.reduce((acc, emp) => {
    return acc + emp.salary;
}, 0)

console.log(totalSalary);

//Average Salary
const avgSalary = totalSalary / employees.length;

console.log(avgSalary);

//Highest Salary 
const highest = employees.reduce((max, emp) => {
    return emp.salary > max.salary ? emp : max;
})

console.log("Highest Salary:", highest.name, "-", highest.salary)