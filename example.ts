import textChart from "./index";

const tc = new textChart.Bar();
tc.setData({
    data: [
        ["apples", 1],
        ["oranges", 3],
        ["strawberries", 6],
    ],
});
console.log(tc.render());
