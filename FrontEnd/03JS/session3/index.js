const me = {
    name: '임예람',
    age: 24,
    militaryState: false,
};

const { militaryState, ...another } = me; 

console.log(another);
