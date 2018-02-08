

"use strict";


function renderCoffee(coffee) {

    var html = "";
    html += '<div class="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-0">' + '<span style="margin-right: 5px" class="coffeeName">' + coffee.name + '</span>' + ' ' + '<span class="coffeeRoast">' + coffee.roast + '</span>' + '</div>'
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var coffeeType = coffeeValues.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if ((coffee.roast === selectedRoast) && (coffee.name.toLowerCase().includes(coffeeType.toLowerCase()))) {
            filteredCoffees.push(coffee);
        }
        if ((selectedRoast === 'all') && (coffee.name.toLowerCase().includes(coffeeType.toLowerCase()))) {
            filteredCoffees.push(coffee);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addCoffee() {
    var selectedRoast = addRoastType.value;
    var coffeeType = addCoffeeName.value;

    if (coffeeType === "") {

    } else {
        coffees.splice(coffees.length, 0, {id: coffees.length + 1, name: coffeeType, roast: selectedRoast});

    }

    tbody.innerHTML = renderCoffees(coffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];

var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var coffeeValues = document.getElementById("coffee-input");
var searchSubmit = document.getElementById("search-result");
var addRoastType = document.getElementById("add-roast-selection");
var addCoffeeName = document.getElementById("add-coffee-input");
var addSubmitButton = document.getElementById("add-search-result");


tbody.innerHTML = renderCoffees(coffees);

searchSubmit.addEventListener('click', updateCoffees);
roastSelection.addEventListener('input', updateCoffees);
addSubmitButton.addEventListener('click', addCoffee);
