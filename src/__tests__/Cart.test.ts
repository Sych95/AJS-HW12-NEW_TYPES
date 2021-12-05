import Cart from '../ts/Cart';
import Movie from '../ts/Movie'

test('new cart should be empty', () => {
    const cart = new Cart();
    const expected = {
        items: []
    }
    expect(cart).toEqual(expected);
});

test('Add & getting items to new cart movie', ()=> {
    const avengers = new Movie(123, '///23123', 359, 'Мстители', 'Avengers', true, 2012, 'США', 'Avengers assemble!', ['action', 'superheroes'], '137')
    const cart = new Cart();
    cart.add(avengers);
    const result = cart.getAll()

    const expected = [
        {
            id: 123,
            name: "///23123",
            price: 359,
            movieNameEng: "Мстители",
            imgURL: "Avengers",
            isIMAX: true,
            date: 2012,
            country: "США",
            tagline: "Avengers assemble!",
            category: [
                "action",
                "superheroes"
            ],
            duration: "137"
        }
    ]

    expect(result).toEqual(expected)
})