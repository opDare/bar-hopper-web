const BARS = [
    {
        id: 1,
        name: "Bar 1",
        desc: "This is Bar 1",
        category: "Cocktail",
        district: "Central",
        address: "12 ABC Street, Central",
        phone: "2332 2896",
        rating: 2,
        price: 50,
        reviews: 123,
        tags: ["nice", "good", "aaa"],
        imgUrl: "medias/placeholder.webp",
        isFavorite: false
    }
]

//for vscode type checking
const barType = {
    id: 1,
    name: "Bar 1",
    desc: "This is Bar 1",
    category: "Cocktail",
    district: "Central",
    address: "12 ABC Street, Central",
    phone: "2332 2896",
    rating: 2,
    price: 50,
    reviews: 123,
    tags: ["nice", "good", "aaa"],
    imgUrl: "medias/placeholder.webp",
    isFavorite: false
}

const Elements = {
    searchInput: document.getElementById("searchInput"),
    cards: document.getElementById("restaurantCards"),
    emptyState: document.getElementById("emptyState")
}

function priceStr(i) {
    return {
        price: `HKD$${i}`,
        label: `$$` // tmp
    }
}

/**
 * 
 * @param {typeof barType} r 
 */
function cardHTML(b) {
    const html = /**html */`
        
    `

    return html
}