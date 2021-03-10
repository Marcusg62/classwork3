


app.component('book', {
    props: {
        book: {

        }
    },
    template:
        /*html*/
        `
    <div class="card col-12 col-md-6 col-lg-3">
    <img v-if="this.book.volumeInfo.imageLinks?.thumbnail" :src="this.book.volumeInfo.imageLinks.thumbnail" class= "card-img-top" alt="book pic" >

    <div class="card-body">
        <h5 class="card-title">{{this.book.volumeInfo.title ? this.book.volumeInfo.title : '(No title provided)'}}</h5>
        <p class="card-text">{{this.book.volumeInfo.description ? this.book.volumeInfo.description : '(No description provided)'}}</p>
        <p class="card-text text-secondary">Author: {{this.book.volumeInfo.authors ? this.book.volumeInfo.authors : '(No authors provided)'}}</p>
        <a :href="this.book.volumeInfo.infoLink" target="_blank" class="btn btn-primary">View Book</a>
    </div>
</div>
    
    `,

    computed: {
        bookObj() {
            if (this.book) {

            } else {

            }
        }
    }
})