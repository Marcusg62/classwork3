const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            loading: false,
            error: ''
        }
    },

    methods: {
        async searchBooks() {
            if (this.keyword) {
                url = 'https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + '&Results=20';
                this.error = ''
            } else {
                this.error = 'Please provide a search phrase. '

                return;

            }
            console.log('url', url)
            this.loading = true
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
            });
            this.result = await response.json()
            this.loading = false;
        }
    }
})