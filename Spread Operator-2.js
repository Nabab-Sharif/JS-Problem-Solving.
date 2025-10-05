//Object Merge
const user={
    name:"nabab",
    age:31
};

const job={
    title:"developer",
}

const fullProfile={...user,...job};
console.log(fullProfile);
