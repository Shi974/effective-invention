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
    mounted() {
        if (localStorage.getItem('todos')) { // Initie la sauvegarde
            try {
                this.todos = JSON.parse(localStorage.getItem('todos'));
            } catch (g) {
                localStorage.removeItem('todos');
            }
        }
    },
    methods: {
        addTodo: function (e) { // Ajoute dynamiquement à l'array donc à la liste
            this.todos.push({
                text: e,
                completed: false,
                edit: false
            });
            this.element = ''; // Clear form après envoi
        },
        removeTodo: function (e) { // Fonction pour enlever un item
            this.todos.splice(this.todos.indexOf(e), 1);
        },
        saveTodos() { // Sauvegarde dans le JSON - local storage
            const parsed = JSON.stringify(this.todos);
            localStorage.setItem('todos', parsed);
        }
    },
    computed: {
        count() { // Renvoie un compteur de tâches non complétées
            return this.todos.filter(todo => !todo.completed).length;
        }
    },
});