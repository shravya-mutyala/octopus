// DOM Elements
const attendeesInput = document.getElementById('attendees');
const avgSalaryInput = document.getElementById('avgSalary');
const durationInput = document.getElementById('duration');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const totalCostSpan = document.getElementById('totalCost');
const perMinuteSpan = document.getElementById('perMinute');
const annualCostSpan = document.getElementById('annualCost');

// Timer Elements
const startTimerBtn = document.getElementById('startTimer');
const stopTimerBtn = document.getElementById('stopTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const timerCostSpan = document.getElementById('timerCost');
const timerTimeSpan = document.getElementById('timerTime');

let timerInterval = null;
let timerSeconds = 0;

// Load saved values
chrome.storage.local.get(['attendees', 'avgSalary', 'duration'], (data) => {
    if (data.attendees) attendeesInput.value = data.attendees;
    if (data.avgSalary) avgSalaryInput.value = data.avgSalary;
    if (data.duration) durationInput.value = data.duration;
});

// Calculate meeting cost
calculateBtn.addEventListener('click', () => {
    const attendees = parseInt(attendeesInput.value);
    const avgSalary = parseFloat(avgSalaryInput.value);
    const duration = parseInt(durationInput.value);

    // Save values
    chrome.storage.local.set({ attendees, avgSalary, duration });

    // Calculate costs
    const totalCost = (attendees * avgSalary * duration) / 60;
    const perMinute = totalCost / duration;
    const annualCost = totalCost * 52; // Weekly meetings for a year

    // Display results
    totalCostSpan.textContent = totalCost.toFixed(2);
    perMinuteSpan.textContent = perMinute.toFixed(2);
    annualCostSpan.textContent = annualCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    resultDiv.classList.remove('hidden');
});

// Timer functionality
startTimerBtn.addEventListener('click', () => {
    const attendees = parseInt(attendeesInput.value);
    const avgSalary = parseFloat(avgSalaryInput.value);

    if (!attendees || !avgSalary) {
        alert('Please set attendees and hourly rate first!');
        return;
    }

    startTimerBtn.disabled = true;
    stopTimerBtn.disabled = false;

    timerInterval = setInterval(() => {
        timerSeconds++;

        // Calculate cost per second
        const costPerSecond = (attendees * avgSalary) / 3600;
        const currentCost = costPerSecond * timerSeconds;

        timerCostSpan.textContent = `$${currentCost.toFixed(2)}`;

        // Format time
        const hours = Math.floor(timerSeconds / 3600);
        const minutes = Math.floor((timerSeconds % 3600) / 60);
        const seconds = timerSeconds % 60;

        timerTimeSpan.textContent =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
});

stopTimerBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    startTimerBtn.disabled = false;
    stopTimerBtn.disabled = true;
});

resetTimerBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerSeconds = 0;
    timerCostSpan.textContent = '$0.00';
    timerTimeSpan.textContent = '00:00:00';
    startTimerBtn.disabled = false;
    stopTimerBtn.disabled = true;
});
