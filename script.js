var app = new Vue({
    el: "#app",
    data: {

        tarefas: ['Olá'],
        tarefa: ''

    },

    mounted() {

    },

    methods: {
        adicionarTarefa: function() {
            this.tarefas.push(this.tarefa);
        },
        actualizar: function() {
            this.tarefa.push(this.tarefa)

        }
    },

})