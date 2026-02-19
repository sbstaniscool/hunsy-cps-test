let clicks = 0;
let timeLeft = 0;
let timerInterval = null;
let testRunning = false;

function startTest(duration) {
    if (testRunning) return;
    testRunning = true;
    clicks = 0;
    timeLeft = duration;
    document.getElementById('status').innerText = 'Click here as fast as you can!';
    document.getElementById('timer').innerText = `Time: ${timeLeft}s`;
    document.getElementById('clicks').innerText = `Clicks: ${clicks}`;
    document.getElementById('result').classList.add('hidden');
    document.getElementById('clickArea').style.display = 'block';

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            endTest(duration);
        }
    }, 1000);
}

function handleClick() {
    if (!testRunning) return;
    clicks++;
    document.getElementById('clicks').innerText = `Clicks: ${clicks}`;
}

function endTest(duration) {
    clearInterval(timerInterval);
    testRunning = false;
    const cps = (clicks / duration).toFixed(2);
    const rating = getRating(cps);
    document.getElementById('cps').innerText = `Your CPS: ${cps}`;
    document.getElementById('rating').innerText = `Rating: ${rating}`;
    document.getElementById('clickArea').style.display = 'none';
    document.getElementById('result').classList.remove('hidden');
}

function getRating(cps) {
    if (cps < 4) return 'Slow - Practice more!';
    if (cps < 7) return 'Average - Not bad!';
    if (cps < 10) return 'Good - Gamer level!';
    if (cps < 15) return 'Pro - Impressive!';
    return 'God Tier - You're a clicking legend!';
}

function resetTest() {
    document.getElementById('status').innerText = 'Select a mode to start';
    document.getElementById('clickArea').style.display = 'block';
}

document.getElementById('clickArea').addEventListener('contextmenu', (e) => e.preventDefault()); // Prevent right-click cheating
