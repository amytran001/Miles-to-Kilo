// Function to convert miles to kilometers
function convertMilesToKm(miles) {
    const kilometers = miles * 1.60934;
    return kilometers.toFixed(2);
}

document.getElementById('convertButton').addEventListener('click', function() {
    const miles = document.getElementById('mileInput').value.trim();

    if (miles === '' || isNaN(miles)) {
        alert('Please enter a valid number for miles.');
        return;
    }

    // Perform conversion
    const kilometers = convertMilesToKm(miles);

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${miles} miles is equal to ${kilometers} kilometers.`;
});
