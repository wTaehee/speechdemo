const textDisplay = document.getElementById('overlay');

// Initialize SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US'; // English (United States)


recognition.interimResults = true;
recognition.continuous = true;

// Display recognized text
recognition.onresult = function(event) {
    const transcript = event.results[event.results.length - 1][0].transcript;
    textDisplay.textContent = transcript;
};

// Error handling
recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

// Start speech recognition
recognition.start();
