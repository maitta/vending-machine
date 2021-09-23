abstract class SnackCategory{
    protected imgPath = "assets/img"

    name!: string
    abstract getImageUrl(): string
}

class SodaCategory extends SnackCategory{
    name = "Soda"

    getImageUrl(): string{
        return this.imgPath + "/SodaCan.png"
    }
}

class ChipsCategory extends SnackCategory{
    name = "Potato Chips"

    getImageUrl(): string{
        return this.imgPath + "/Chips.png"
    }
}

class CandyCategory extends SnackCategory{
    name = "Candy"

    getImageUrl(): string{
        return this.imgPath + "/Candy.png"
    }
}

class CandyBarCategory extends SnackCategory{
    name = "Candy Bar"

    getImageUrl(): string{
        return this.imgPath + "/CandyBar.png"
    }
}

class NutsCategory extends SnackCategory{
    name = "Dry Nuts"

    getImageUrl(): string{
        return this.imgPath + "/Nuts.png"
    }
}

export {SnackCategory, SodaCategory, NutsCategory, ChipsCategory as PotatoChipsCategory, CandyCategory, CandyBarCategory }