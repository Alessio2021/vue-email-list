// generare 10 indirizzi email e stamparli in pagina all’interno di una lista

var app = new Vue({
    el: '#app',
    data: {
        emails: [],
    },
    methods: {
        getEmail: function () {
            for (let i = 0; i < 10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        email = response.data.response;
                        this.emails.push(email);
                        
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }

    },
    created() {
        this.getEmail()
    },

})