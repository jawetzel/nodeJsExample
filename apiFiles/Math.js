const Add = (num1, num2) => {
    return (num1 + num2);
};
const Average = (numArray) => {
    let total = 0;
    numArray.map(num => {
        total += num;
    });
    return (total / numArray.length);
};


export default {
    Add: Add,
    Average: Average
}