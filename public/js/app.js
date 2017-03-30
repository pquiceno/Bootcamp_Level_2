(function (){

	var STORAGE_KEY = 'usuarios'

	Vue.component('modal', {
	  template: '#modal-template'
	});

	var app = new Vue({
	  el: '#app',
	  data: {
	    showModal: false,
	    items: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
	  }
	});

	var usersStorage = {
	  fetch: function () {
	    var usuarios = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	    return usuarios;
	  },
	  save: function (usuarios) {
	    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
	  }
	}

	var actions = { 
		addUser : function () {
			var nameInput = document.getElementById("name").value;
			var lastnameInput = document.getElementById("lastname").value;
			if(nameInput && lastnameInput){
				var users = usersStorage.fetch();
				users.push({
					name: nameInput,
					lastname: lastnameInput
				});
				usersStorage.save(users);
				app.items = usersStorage.fetch();
			}
	    },
	    deleteUsers : function () {
	    	localStorage.clear();
	    	app.items = [];
	    }
	}

    var btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", actions.addUser);

    var btnClear = document.getElementById("btnClear");
    btnClear.addEventListener("click", actions.deleteUsers);


	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);

	ctx.beginPath();
    ctx.moveTo(150,50);
    ctx.lineTo(175,75);
    ctx.lineTo(175,25);
    ctx.fillStyle="#0B6121";
    ctx.fill();

	ctx.beginPath();
    ctx.arc(250,70,50,0,(Math.PI/180)*360,true);
	ctx.fillStyle="#013ADF";
	ctx.fill();
})();

