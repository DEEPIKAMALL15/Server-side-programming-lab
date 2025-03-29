
function calculateBMI() {
    
    let weight = Math.floor(Math.random() * 100) + 40;  
    let height = Math.floor(Math.random() * 2) + 1.5;  
    
    let bmi = weight / (height * height);
    document.getElementById('bmiResult').innerText = `Example BMI Calculation: Weight = ${weight}kg, Height = ${height.toFixed(2)}m. Your BMI is: ${bmi.toFixed(2)}`;
}


function convertTemperature() {
    let temp = Math.floor(Math.random() * 40);  
    let fahrenheit = (temp * 9/5) + 32;
    document.getElementById('tempResult').innerText = `Example Temperature Conversion: ${temp}°C = ${fahrenheit.toFixed(2)}°F`;
}


function showAlert() {
    alert("Form submitted successfully!");
}

function confirmDelete() {
    if (confirm("Are you sure you want to delete this task?")) {
        alert("Task deleted");
    } else {
        alert("Deletion canceled");
    }
}

function promptUserInput() {
    let userInput = prompt("Enter your name:");
    alert("Hello, " + userInput);
}


function addTask() {
    let taskInput = document.getElementById('todoInput').value;
    if (taskInput) {
        let todoList = document.getElementById('todoList');
        let li = document.createElement('li');
        li.textContent = taskInput;
        li.onclick = () => li.classList.toggle('task-completed');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            if (confirm("Are you sure you want to delete this task?")) {
                todoList.removeChild(li);
            }
        };
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        document.getElementById('todoInput').value = '';
    } else {
        alert("Please enter a task.");
    }
}


function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let phoneRegex = /^[0-9]{10}$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let messages = [];

    if (!emailRegex.test(email)) {
        messages.push("Please enter a valid email address.");
    }
    if (!phoneRegex.test(phone)) {
        messages.push("Please enter a valid 10-digit phone number.");
    }
    if (!passwordRegex.test(password)) {
        messages.push("Password must contain at least 8 characters, one letter, one number, and one special character.");
    }

    if (messages.length > 0) {
        document.getElementById('formMessages').innerHTML = messages.join('<br>');
    } else {
        alert("Registration successful!");
    }
}




function showDateTime() {
    let now = new Date();
    document.getElementById('dateTime').innerText = `Example Date & Time: ${now.toLocaleString()}`;
}
showDateTime(); 
async function fetchWeather() {
    let city = document.getElementById('city').value;
    
    
    
    if (city === '') {
        document.getElementById('weatherInfo').innerText = 'Please enter a city name.';
        return;
    }
    
    try {
        let apiKey = '56a6a1c008a5f450c7681e756fa35e87';  
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // 'metric' for Celsius temperature

        
        let response = await fetch(url);
        let data = await response.json();
        
        if (response.ok) {
            
            let weatherDescription = data.weather[0].description;
            let temperature = data.main.temp;
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;

            
            document.getElementById('weatherInfo').innerHTML = `
                <strong>Weather in ${city}</strong><br>
                Description: ${weatherDescription}<br>
                Temperature: ${temperature}°C<br>
                Humidity: ${humidity}%<br>
                Wind Speed: ${windSpeed} m/s
            `;
        } else {
            
            document.getElementById('weatherInfo').innerText = `Error: ${data.message}. Please enter a valid city name.`;
        }
    } catch (error) {
        document.getElementById('weatherInfo').innerText = 'Error fetching weather data. Please try again later.';
    }
}


function chatbotResponse() {
    let userInput = document.getElementById('chatbotInput').value.toLowerCase();
    let response = '';

    if (userInput.includes('hello') || userInput.includes('hi')) {
        response = "Hello! How can I assist you today?";
    } else if (userInput.includes('weather')) {
        response = "I can tell you the weather. Just ask about the current weather!";
    } else {
        response = "Sorry, I didn't understand that.";
    }

    document.getElementById('chatbotResponse').innerText = response;
}
