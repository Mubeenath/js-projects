const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.wishlists');
const inputContent = document.querySelector('.form__input--content');
const btnAdd = document.querySelector('.btn--add');
const btnDelete = document.querySelector('.btn--delete');


class Wishlist {
    constructor(content)
    this.content = content;
}

class App{
    #wishlists = [];

    constructor(){
        btnAdd.addEventListener();
        btnDelete.addEventListener();

    }
    _clearForm(){
        inputContent.value = '';
    }
    _newWishlist(e){
        e.preventDefault();
        // get the value from i/p feild
        const content = inputContent.value;
        let wishlist;
        // check the i/p is entered

        // add the i/p to the array

        this.#wishlists.push(wishlist);

        // render the i/p to the list 
         
        this._renderWishlist(wishlist);

        // clear the i/p field

        this._clearForm();
        
    }
    _renderWishlist(wishlist){

        let html = `<h3 class="wislist__content">${wishlist.content}
        <button class="btn btn--delete">Delete</button></h3>`;

        form.insertAdjacentHTML('afterend', html);

    }
}

const app = new App();

