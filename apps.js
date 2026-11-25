function updateSensors() {
    const temperature = (20 + Math.random() * 15).toFixed(1);
    const humidity = Math.floor(40 + Math.random() * 50);
    const vibration = (1 + Math.random() * 4).toFixed(2);

    document.getElementById("temperature").textContent =
        temperature + " °C";

    document.getElementById("humidity").textContent =
        humidity + " %";

    document.getElementById("vibration").textContent =
        vibration + " mm/s";
}