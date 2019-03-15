var app = new Vue({
    el: '#app',
    data: {
        todos: [{
                text: 'Learn JavaScript',
                completed: true,
                edit: false,
            },
            {
                text: 'Learn Vue',
                completed: false,
                edit: false,
            },
            {
                text: 'Build something awesome',
                completed: false,
                edit: false,
            },
            {
                text: 'Play GTA Online',
                completed: true,
                edit: false,
            }
        ]
    },
    methods: {
        addTodo: function (e) { // Ajoute dynamiquement à l'array donc à la liste
            this.todos.push({
                text: e, completed: false, edit: false
            });
            this.element = ''; // Clear form après envoi
        },
        removeTodo: function (e) { // Fonction pour enlever un item
            this.todos.splice(this.todos.indexOf(e), 1);
        },
    },
    computed: {
        count() { // Renvoie un compteur de tâches non complétées
            return this.todos.filter(todo => !todo.completed).length;
        }
    },
});