"use strict";

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function testRenderCoffeeSearch (coffee) {
    var results = coffee[0].name + " " + coffee[0].roast + '.';
    console.log(results);
    return results;

}



function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
        console.log(selectedRoast);
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function searches() {
    var coffeeType = coffeeValues.value;
    var searchedCoffees = [];
    coffees.forEach(function(coffee)
    {
        if (coffee.name === coffeeType) {
            searchedCoffees.push(coffee);

        } if (searchedCoffees.length === 0) {
        testBody.innerHTML = "That is not a coffee we have";
    }
    });
    testBody.innerHTML = testRenderCoffeeSearch(searchedCoffees);

    console.log(searchedCoffees);
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
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeValues = document.getElementById("coffee-input");
var searchSubmit = document.getElementById("search-result");
var testBody = document.getElementById('test-box');
var light = document.getElementById('light');

tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
searchSubmit.addEventListener('click', searches);
roastSelection.addEventListener('input', updateCoffees);
// light.addEventListener('click', updateCoffees);


