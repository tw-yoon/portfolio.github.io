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

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.changeContentBtn').forEach(button => {
        button.addEventListener('click', function () {
            var bioContent = document.getElementById('bioContent');
            if (this.textContent === 'ENG') {
                bioContent.innerHTML = `<p>
                <strong>Hello!</strong> I'm Taewon Yoon, a junior studying Manufacturing and Design
                Engineering
                at Northwestern University, with a passion for product and UI/UX design.
            </p>
            <p> I thrive on the entire
                creative process, from ideation to prototyping, and love bringing innovative solutions to life. 
                I believe that having functionality in design is just as equally important as being aestheticly appeal. 
                Besides my academic pursuits, I enjoy playing soccer and drawing, hobbies that fuel my
                creativity and drive for design.
            </p>`
            } else if (this.textContent === 'KOR') {
                bioContent.innerHTML = `<p><strong>안녕하세요!</strong> 제 이름은 윤태원이고, 현재 노스웨스턴 대학교에서 제조와 디자인 공학을 전공하고 있습니다. 저는 제품 및 UI/UX 디자인에 관심을 가지고 있고, 앞으로도 이 분야에서 일을 하고 싶습니다.</p><p>저는 아이디어 구상부터 프로토타이핑까지, 디자인을 할 때 항상 혁신적인 해결책을 찾는 과정을 좋아합니다.  저는 디자인의 효용성이 사람들에게 보여지는 외적인 미관만큼 중요하다고 생각합니다. 취미 생활로는 친구들과 축구를 하는 것을 좋아하며 시간이 날 때마다 그림을 그리고 있습니다.</p>`;
            } else if (this.textContent === 'JPN') {
                bioContent.innerHTML = `<p><strong>初めまして！</strong> 私はノースウェスタン大学で製造とデザイン工学を専攻する3年生のユン・テウォンです。 私は製品及びUI/UXデザインに関心を持っています。</p><p>私はアイデア構想からプロトタイピングまで、デザインをする時、常に革新的な解決策を探す過程が好きです。私はデザインの効用性が人々に見られる外的な美観ほど重要だと思います。趣味生活としては友達とサッカーをするのが好きで時間があるたびに絵を描いています。</p>`;
            }
        });
    });
});