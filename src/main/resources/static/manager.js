let {createApp} = Vue
createApp({

    data(){
    return{
           
            clients: [],
            jSon: [],
            clientData: {
            firstName: "",
            lastName: "",
            email: ""
    },

    }
     
    },
    created(){
        this.loadData();

    },
    
    methods: {
        loadData(){
            axios.get('http://localhost:8080/clients')
            .then(response => {
                this.clients = response.data._embedded.clients
                console.log(this.clients)
                this.jSon = response.data
            }).catch(err => console.log(err))
        },
        addClient(){
          this.postClient();
        },
        postClient(){
            axios.post('http://localhost:8080/clients', this.clientData)
            .then(() => {
                this.loadData();
            } ).catch(err => console.log(err))
        },
        deleteClient(id){
            axios.delete(id)
            .then(res => {
                this.loadData();
            })
        }

    }


}).mount("#app")