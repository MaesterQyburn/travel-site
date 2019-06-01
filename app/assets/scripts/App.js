var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person' ; 

alert('This is a test for webpack automation.');

class Adult extends Person {
	payTaxes(){
		console.log(this.name + ' now owes 0$ in taxes.');
	}
}

var john = new Person("John Doe", "Green");
john.greet();

var jane = new Adult("Jane Smith", "Orange");
jane.greet();
jane.payTaxes();