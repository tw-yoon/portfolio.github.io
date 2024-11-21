function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const targetSvgs = document.querySelectorAll('svg[data-target="true"]');
const rotationContainer = document.querySelector('.rotation-container');

targetSvgs.forEach(svg => {
    svg.addEventListener('mouseenter', () => {
        rotationContainer.classList.add('paused');
    });

    svg.addEventListener('mouseleave', () => {
        rotationContainer.classList.remove('paused');
    });
});

function updateTime() {
    function updateTime() {
        const clockElement = document.getElementById('clock');
        const now = new Date();

        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

        clockElement.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    setInterval(updateTime, 10);

    updateTime();
}

updateTime();

function updateVisitCount() {
    const visitCountElement = document.getElementById('visit-count');
    let visitCount = localStorage.getItem('visitCount');

    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount, 10);
    }

    visitCount += 1;
    localStorage.setItem('visitCount', visitCount);
    visitCountElement.textContent = `You visited this website ${visitCount} times.`;
}

updateVisitCount();