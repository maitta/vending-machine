import * as categories from "./snack-category"

interface Snack{
    name: string
    price: number
    category?: categories.SnackCategory
    stock: number
    selected: boolean
    dropIt: boolean
}

class Initial implements Snack{
    name = "Please select a product"
    price = 0
    stock = 0
    selected = false
    dropIt = false
}

class CocaCola implements Snack{
    name = "Coca-Cola"
    price = 2.30
    category = new categories.SodaCategory()
    stock = 10
    selected = false
    dropIt = false
}

class Fanta implements Snack {
    name: string = "Fanta"
    price = 2
    category = new categories.SodaCategory()
    stock = 10
    selected = false
    dropIt = false
}

class Sprite implements Snack {
    name: string = "Sprite"
    price = 1.80
    category = new categories.SodaCategory()
    stock = 10
    selected = false
    dropIt = false
}

class Peanuts implements Snack {
    name: string = "Peanuts"
    price = 1.50
    category = new categories.NutsCategory()
    stock = 15
    selected = false
    dropIt = false
}

class Cashews implements Snack {
    name: string = "Cashews"
    price = 2.80
    category = new categories.NutsCategory()
    stock = 15
    selected = false
    dropIt = false
}

class Plain implements Snack {
    name: string = "Plain"
    price = 2
    category = new categories.PotatoChipsCategory()
    stock = 20
    selected = false
    dropIt = false
}

class Cheddar implements Snack {
    name: string = "Cheddar"
    price = 2
    category = new categories.PotatoChipsCategory()
    stock = 18
    selected = false
    dropIt = false
}

class Mints implements Snack {
    name: string = "Mints"
    price = 1.30
    category = new categories.CandyCategory()
    stock = 25
    selected = false
    dropIt = false
}

class Gummies implements Snack {
    name: string = "Gummies"
    price = 1.90
    category = new categories.CandyCategory()
    stock = 30
    selected = false
    dropIt = false
}

class Hersey implements Snack {
    name: string = "Hersey's"
    price = 1.30
    category = new categories.CandyBarCategory()
    stock = 18
    selected = false
    dropIt = false
}

class MilkyWay implements Snack {
    name: string = "Milky Way"
    price = 1.80
    category = new categories.CandyBarCategory()
    stock = 20
    selected = false
    dropIt = false
}

export { Snack, Initial, CocaCola, Fanta, Sprite, Peanuts, Cashews, Plain, Cheddar, Mints, Gummies, Hersey, MilkyWay }