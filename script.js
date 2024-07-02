document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleDateString('en-EN', { weekday: 'long' });
        
        currentTimeUTC.textContent = `Current Time (UTC): ${utcTime}`;
        currentDay.textContent = `Current Day: ${dayOfWeek}`;
    }
    
    updateTime();
    setInterval(updateTime, 1000); // Update time every second
});
