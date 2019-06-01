class Person {

	constructor(fullName, favColor){
		this.name=fullName;
		this.favouriteColor = favColor;
	}
	
	greet(){
		console.log('Hi, there! My name is ' + this.name + " and my favourite color is " + this.favouriteColor);
	}
}

export default Person