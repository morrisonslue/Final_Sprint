// script.js

// Fetch API from JSON data
fetch('cars.json')
    .then(response => response.json())
    .then(cars => {
        const carList = document.getElementById('carList');
        const carDetails = document.getElementById('carDetails');

        // forEach loop to display JSON content in list
        cars.forEach((car, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${car.make} ${car.model}`;
            listItem.addEventListener('click', () => displayCarDetails(car));
            carList.appendChild(listItem);
        });

        // Function that displays vehicle details
        function displayCarDetails(car) {
            carDetails.innerHTML = `
                <h3>${car.make} ${car.model} (${car.year})</h3>
                <p><strong>Trim:</strong> ${car.trim}</p>
                <p><strong>4WD:</strong> ${car['4wd']}</p>
                <p><strong>Hybrid:</strong> ${car.hybrid}</p>
                <p><strong>Electric:</strong> ${car.electric}</p>
                <p><strong>Horsepower:</strong> ${car.horsepower} HP</p>
                <p><strong>Torque:</strong> ${car.torque} lb-ft</p>
                <p><strong>0-60 mph:</strong> ${car['0-60']} seconds</p>
                <p><strong>Top Speed:</strong> ${car.top_speed} km/h</p>
                <p><strong>Number of Seats:</strong> ${car.number_of_seats}</p>
            `;
        }

        // Function which retrieves total number of vehicles
        function getTotalVehicles() {
            return `Total number of vehicles: ${cars.length}`;
        }

        // Function to retrieve electric vehicles
        function getAllElectricVehicles() {
            const electricCars = cars.filter(car => car.electric === "Yes");
            return `Electric Vehicles: ${electricCars.length} (${electricCars.map(car => `${car.make} ${car.model}`).join(', ')})`;
        }

        // Function to retrieve top five vehicles with highest horsepower
        function getTopFiveHorsepowerVehicles() {
            const topHorsepowerCars = cars.sort((a, b) => b.horsepower - a.horsepower).slice(0, 5);
            return `Top 5 Highest Horsepower Vehicles: ${topHorsepowerCars.map(car => `${car.make} ${car.model} (${car.horsepower} HP)`).join(', ')}`;
        }

        // Function to retrieve vehicles with top three fastest 0-60 times
        function getTopThreeFastestVehicles() {
            const fastestCars = cars.sort((a, b) => a['0-60'] - b['0-60']).slice(0, 3);
            return `Top 3 Fastest 0-60 mph Times: ${fastestCars.map(car => `${car.make} ${car.model} (${car['0-60']} seconds)`).join(', ')}`;
        }

        // Display and log function results to console
        document.getElementById('totalVehicles').textContent = getTotalVehicles();
        document.getElementById('electricVehicles').textContent = getAllElectricVehicles();
        document.getElementById('topHorsepower').textContent = getTopFiveHorsepowerVehicles();
        document.getElementById('fastestVehicles').textContent = getTopThreeFastestVehicles();

        console.log(getTotalVehicles());
        console.log(getAllElectricVehicles());
        console.log(getTopFiveHorsepowerVehicles());
        console.log(getTopThreeFastestVehicles());
    })

