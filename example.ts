import textChart from "./index";
import { BarCharacters } from "./interfaces";

const tc = new textChart.Bar();
tc.setProperties({
    scale: 10,
    barCharacter: BarCharacters.Dark,
})
tc.setData({
    data: [
        ["apples", 1],
        ["oranges", 3],
        ["strawberries", 6],
    ],
});
console.log(tc.render());
