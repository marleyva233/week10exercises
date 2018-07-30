// the object of this exercise is to create objects using the object literal
//notation
//the objects must contain a method that returns the product of two numbers


//var myPets=[
// {
// 	name: "artemis",
// 	color: "orange",
// 	age: 8,
// 	image: "https://78.media.tumblr.com/avatar_f00d37596224_128.pnj",
// 	fullyVaccinated: "yes",
// 	multiply: function(a, b){
// 		return a*b;
// 	}
// },
// {
// 	name: "anabelle",
// 	color: "calico",
// 	age: 2,
// 	image: "https://78.media.tumblr.com/avatar_acbc0f4724bd_128.pnj",
// 	fullyVaccinated: "yes",
// 	multiply: function(a, b){
// 		return a*b;
// 	}
// },
// {
// 	name: "oreo",
// 	color: "black and white",
// 	age: 1,
// 	image: "https://78.media.tumblr.com/avatar_ee1989182100_128.pnj",
// 	fullyVaccinated: "no",
// 	multiply: function(a, b){
// 		return a*b;
// 	}
// },
// {
// 	name: "tuxedo",
// 	color: "black and white",
// 	age: 1,
// 	image: "https://i.pinimg.com/originals/8c/91/29/8c91296a8bfff8ea6d350035d0b5ce25.png",
// 	fullyVaccinated: "no",
// 	multiply: function(a, b){
// 		return a*b;
// 	}
// },
// ]



var pets=[];
//the object of this exercise is to recreate the objects using constructor
//notation
function Pet(name, color, age, vaccinated, image, array){
	this.name=name;
	this.color=color;
	this.age=age;
	this.fullyVaccinated=vaccinated;
 	this.image=image;
 	this.multiply=function(a, b){
 		return a*b;
 	}
 	//using the function created outside of this function to
 	//push items created by this function to a specified array
 	pushToArray(array, this)
}


//this function push items to an array
function pushToArray(array, item){
	array.push(item);
}

new Pet("artemis", "orange", 8, "yes", "https://78.media.tumblr.com/avatar_f00d37596224_128.pnj", pets);

new Pet("anabelle", "calico", 2, "yes", "https://78.media.tumblr.com/avatar_acbc0f4724bd_128.pnj", pets);

new Pet("oreo", "black and white", 1, "no", "https://78.media.tumblr.com/avatar_ee1989182100_128.pnj", pets);

new Pet("tuxedo", "black and white", 1, "no", "https://i.pinimg.com/originals/8c/91/29/8c91296a8bfff8ea6d350035d0b5ce25.png", pets);


for (var i=0; i<pets.length; i++){
	var petDiv=document.createElement("div");
		petDiv.className="catName bg-info col-3 mx-auto px-3 py-5";
		petDiv.innerHTML="<h4>"+pets[i].name+"</h1>";

	var petImage=document.createElement("img");
		petImage.src=pets[i].image;

	var petDetails=document.createElement("ul");
		petDetails.innerHTML="<li>color: "+pets[i].color+"</li>";
		petDetails.innerHTML+="<li>age: "+pets[i].age+ "</li>";
		petDetails.innerHTML+="<li>vaccinated: "+pets[i].fullyVaccinated+ "</li>";

	document.getElementById("pets").appendChild(petDiv);
	petDiv.appendChild(petDetails);
	petDiv.appendChild(petImage)


}