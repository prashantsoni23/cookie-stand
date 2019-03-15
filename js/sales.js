'use-strict';

var workingHours = ['6AM: ', '7AM: ', '8AM: ', '9AM: ', '10AM: ', '11AM: ', '12PM: ', '1PM: ', '2PM: ', '3PM: ', '4PM: ', '5PM: ', '6PM: ', '7PM: ', '8PM: '];

var pikePlaceLocation = {
    name: '1st and Pike',
    minCustomers: 23,
    maxCustomers: 63,
    averageCookiesPerCustomer: 6.3,
    averageCustomerHourlyArray: [],
    cookiesHourlyArray: [],
    totalCookiesLocation: 0,

    generateRandomCustomersHourly: function (minCustomers, maxCustomers) {
        for (var i = 0; i < workingHours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (maxCustomers - minCustomers)) + minCustomers;
            this.averageCustomerHourlyArray.push(randomCustomer);
        }
    },

    generateCookiesHourly: function () {
        pikePlaceLocation.generateRandomCustomersHourly(this.minCustomers, this.maxCustomers);
        for (var i = 0; i < workingHours.length; i++) {
            var CookiesPerHour = Math.ceil(this.averageCustomerHourlyArray[i] * this.averageCookiesPerCustomer);
            this.cookiesHourlyArray.push(CookiesPerHour);
            this.totalCookiesLocation += CookiesPerHour;
            console.log(workingHours[i] + ' ' + this.cookiesHourlyArray[i]);
        }
        console.log(this.totalCookiesLocation);
    },


    render: function () {
        var pikePlaceLocation = document.getElementById('pikePlace');
        this.generateCookiesHourly();
        for (var i = 0; i < this.cookiesHourlyArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = workingHours[i] + this.cookiesHourlyArray[i] + ' cookies';
            pikePlaceLocation.appendChild(listElement);
        }
        var listElementTotal = document.createElement('li');
        listElementTotal.textContent = 'Total: ' + this.totalCookiesLocation + ' cookies';
        pikePlaceLocation.appendChild(listElementTotal);
    }
};

var seatacAirportLocation = {
    name: 'Seatac Airport',
    minCustomers: 3,
    maxCustomers: 24,
    averageCookiesPerCustomer: 1.2,
    averageCustomerHourlyArray: [],
    cookiesHourlyArray: [],
    totalCookiesLocation: 0,

    generateRandomCustomersHourly: function (minCustomers, maxCustomers) {
        for (var i = 0; i < workingHours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (maxCustomers - minCustomers)) + minCustomers;
            this.averageCustomerHourlyArray.push(randomCustomer);
        }
    },

    generateCookiesHourly: function () {
        seatacAirportLocation.generateRandomCustomersHourly(this.minCustomers, this.maxCustomers);
        for (var i = 0; i < workingHours.length; i++) {
            var CookiesPerHour = Math.ceil(this.averageCustomerHourlyArray[i] * this.averageCookiesPerCustomer);
            this.cookiesHourlyArray.push(CookiesPerHour);
            this.totalCookiesLocation += CookiesPerHour;
            console.log(workingHours[i] + ' ' + this.cookiesHourlyArray[i]);
        }
        console.log(this.totalCookiesLocation);
    },

    render: function () {
        var seatacAirportLocation = document.getElementById('seatacAirport');
        this.generateCookiesHourly();
        for (var i = 0; i < this.cookiesHourlyArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = workingHours[i] + this.cookiesHourlyArray[i] + ' cookies';
            seatacAirportLocation.appendChild(listElement);
        }
        var listElementTotal = document.createElement('li');
        listElementTotal.textContent = 'Total: ' + this.totalCookiesLocation + ' cookies';
        seatacAirportLocation.appendChild(listElementTotal);
    }
};

var seattleCenterLocation = {
    name: 'Seattle Center',
    minCustomers: 11,
    maxCustomers: 38,
    averageCookiesPerCustomer: 3.7,
    averageCustomerHourlyArray: [],
    cookiesHourlyArray: [],
    totalCookiesLocation: 0,

    generateRandomCustomersHourly: function (minCustomers, maxCustomers) {
        for (var i = 0; i < workingHours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (maxCustomers - minCustomers)) + minCustomers;
            this.averageCustomerHourlyArray.push(randomCustomer);
        }
    },

    generateCookiesHourly: function () {
        seattleCenterLocation.generateRandomCustomersHourly(this.minCustomers, this.maxCustomers);
        for (var i = 0; i < workingHours.length; i++) {
            var CookiesPerHour = Math.ceil(this.averageCustomerHourlyArray[i] * this.averageCookiesPerCustomer);
            this.cookiesHourlyArray.push(CookiesPerHour);
            this.totalCookiesLocation += CookiesPerHour;
            console.log(workingHours[i] + ' ' + this.cookiesHourlyArray[i]);
        }
        console.log(this.totalCookiesLocation);
    },

    render: function () {
        var seattleCenterLocation = document.getElementById('seattleCenter');
        this.generateCookiesHourly();
        for (var i = 0; i < this.cookiesHourlyArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = workingHours[i] + this.cookiesHourlyArray[i] + ' cookies';
            seattleCenterLocation.appendChild(listElement);
        }
        var listElementTotal = document.createElement('li');
        listElementTotal.textContent = 'Total: ' + this.totalCookiesLocation + ' cookies';
        seattleCenterLocation.appendChild(listElementTotal);
    }
};

var capitolHillLocation = {
    name: 'Capitol Hill',
    minCustomers: 20,
    maxCustomers: 38,
    averageCookiesPerCustomer: 2.3,
    averageCustomerHourlyArray: [],
    cookiesHourlyArray: [],
    totalCookiesLocation: 0,

    generateRandomCustomersHourly: function (minCustomers, maxCustomers) {
        for (var i = 0; i < workingHours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (maxCustomers - minCustomers)) + minCustomers;
            this.averageCustomerHourlyArray.push(randomCustomer);
        }
    },

    generateCookiesHourly: function () {
        capitolHillLocation.generateRandomCustomersHourly(this.minCustomers, this.maxCustomers);
        for (var i = 0; i < workingHours.length; i++) {
            var CookiesPerHour = Math.ceil(this.averageCustomerHourlyArray[i] * this.averageCookiesPerCustomer);
            this.cookiesHourlyArray.push(CookiesPerHour);
            this.totalCookiesLocation += CookiesPerHour;
            console.log(workingHours[i] + ' ' + this.cookiesHourlyArray[i]);
        }
        console.log(this.totalCookiesLocation);
    },

    render: function () {
        var capitolHillLocation = document.getElementById('capitolHill');
        this.generateCookiesHourly();
        for (var i = 0; i < this.cookiesHourlyArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = workingHours[i] + this.cookiesHourlyArray[i] + ' cookies';
            capitolHillLocation.appendChild(listElement);
        }
        var listElementTotal = document.createElement('li');
        listElementTotal.textContent = 'Total: ' + this.totalCookiesLocation + ' cookies';
        capitolHillLocation.appendChild(listElementTotal);
    }
};

var alkiLocation = {
    name: 'Seattle Center',
    minCustomers: 20,
    maxCustomers: 38,
    averageCookiesPerCustomer: 2.3,
    averageCustomerHourlyArray: [],
    cookiesHourlyArray: [],
    totalCookiesLocation: 0,

    generateRandomCustomersHourly: function (minCustomers, maxCustomers) {
        for (var i = 0; i < workingHours.length; i++) {
            var randomCustomer = Math.floor(Math.random() * (maxCustomers - minCustomers)) + minCustomers;
            this.averageCustomerHourlyArray.push(randomCustomer);
        }
    },

    generateCookiesHourly: function () {
        alkiLocation.generateRandomCustomersHourly(this.minCustomers, this.maxCustomers);
        for (var i = 0; i < workingHours.length; i++) {
            var CookiesPerHour = Math.ceil(this.averageCustomerHourlyArray[i] * this.averageCookiesPerCustomer);
            this.cookiesHourlyArray.push(CookiesPerHour);
            this.totalCookiesLocation += CookiesPerHour;
            console.log(workingHours[i] + ' ' + this.cookiesHourlyArray[i]);
        }
        console.log(this.totalCookiesLocation);
    },

    render: function () {
        var alkiLocation = document.getElementById('alki');
        this.generateCookiesHourly();
        for (var i = 0; i < this.cookiesHourlyArray.length; i++) {
            var listElement = document.createElement('li');
            listElement.textContent = workingHours[i] + this.cookiesHourlyArray[i] + ' cookies';
            alkiLocation.appendChild(listElement);
        }
        var listElementTotal = document.createElement('li');
        listElementTotal.textContent = 'Total: ' + this.totalCookiesLocation + ' cookies';
        alkiLocation.appendChild(listElementTotal);
    }
};

pikePlaceLocation.render();
seatacAirportLocation.render();
seattleCenterLocation.render();
capitolHillLocation.render();
alkiLocation.render();