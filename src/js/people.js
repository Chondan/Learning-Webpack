function getHello() {
    return "Hello There";
}
const peoples = [
    { name: "John Doe" },
    { name: "Steve Smith" },
    { name: "Carol Williams" },
]

module.exports = {
    getHello: getHello,
    peoples
};