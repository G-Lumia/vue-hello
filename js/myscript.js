const {createApp} = Vue;

createApp({
    data(){
        return {
            titolo : 'Hello! :D', 
            bgColor : 'bg-primary',
            box : 'container text-center',
            imgClass : 'img-fluid',
            image : 'https://www.goaustralia.it/wp-content/uploads/sites/54/2018/02/quokka.jpg'
        };
    },
    methods: {
        changeColor() {
            this.miaclasse = 'bg-success';
        }
    },
    mounted(){

    }
}).mount('#app');