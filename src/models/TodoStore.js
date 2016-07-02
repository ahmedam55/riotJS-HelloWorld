function TodoStore() {
    this.items = localStorage['todoItems'] ? JSON.parse(localStorage['todoItems']) : [];

    this.add = function(value) {
        //if unique
        this.items.push(value)
        this.updateLocalStorage()
    }

    this.remove = function(index) {
        this.items.splice(index, 1);
        this.updateLocalStorage()
    }

    this.edit = function(value, index) {
        this.items[index] = value
        this.updateLocalStorage()
    }

    this.updateLocalStorage = function() {
        localStorage["todoItems"] = JSON.stringify(this.items);
    }


    // riot.observable(this)
}
