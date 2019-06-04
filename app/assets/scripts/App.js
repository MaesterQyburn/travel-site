import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';


var first  = new MobileMenu();

var features = {
	select : $('.feature-item'),
	percent : "85%"
}

var test = {
	select : $('.testimonial'),
	percent : "80%"
}


var features = new RevealOnScroll(features.select, features.percent);
var testimonial = new RevealOnScroll(test.select, test.percent);
var sticky = new StickyHeader();