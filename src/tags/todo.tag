<todo>

	<div>
		<input type="text" name="todoinput" onkeydown={addIfEnter}>
		<ul>
			<li each={todo, i in todoStore.items} onclick={showInInput} data-index={i}>
				<span if={!editMode}>{todo}</span>
				<input if={editMode} value={todo}/>
				<a onclick={remove} data-index={i}>x</a>
			</li>
		</ul>

		<input type="text" ng-model="fuck">{fuck -10 }

	</div>

	<script>

	this.todoStore = new TodoStore()

	addIfEnter(e) {
	    var isEnter = e.keyCode == 13
	    if (isEnter) {
	        this.todoStore.add(this.todoinput.value)
	        this.todoinput.value = ''
	    }

	    return true
	}

	remove(e) {
	    this.todoStore.remove(e.target.dataset.index)
	}

	showInInput(e) {
	    // this.editMode=true;
	    // console.log(e.item.editMode=true)
	    console.log(this.todoStore.items[e.item.i].editMode);
	    // this.todoStore.items[e.item.i].editMode=true
	    // this.update()
	}

	edit(e) {
	    // this.todoStore.edit(e.target.value,e.target.dataset.index)
	}

	</script>
</todo>