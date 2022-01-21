import * as snacks from "./snack"

// function outside of a class needs to declare the function keyword
export default function getSnack(): snacks.Snack{
    let random = Math.floor(Math.random() * 11)
    switch(random) {
        case 0: return new snacks.CocaCola()
        case 1: return new snacks.Fanta()
        case 2: return new snacks.Sprite()
        case 3: return new snacks.Peanuts()
        case 4: return new snacks.Cashews()
        case 5: return new snacks.Plain()
        case 6: return new snacks.Cheddar()
        case 7: return new snacks.Mints()
        case 8: return new snacks.Gummies()
        case 9: return new snacks.Hersey()
        case 10: return new snacks.MilkyWay()            
    }
    throw new Error('Snack is not in stock')
}
