let timerCount = 0,
    ttech = 0,
    timec = 0,
    timey = 0,
    perc = document.getElementById('perc'),
    tech = document.getElementById('tech'),
    clients = document.getElementById('clients'),
    year = document.getElementById('year');
const animItems = document.querySelectorAll('._anim-items');
export function scrolling() {
    try {
        if (animItems.length > 0) {
            window.addEventListener('scroll', animOnScroll);

            function animOnScroll() {
                for (let index = 0; index < animItems.length; index++) {
                    const animItem = animItems[index];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffSet = offset(animItem).top;
                    const animStart = 4;

                    let animItemPoint = window.innerHeight - animItemHeight / animStart;

                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;

                    }

                    if ((scrollY > animItemOffSet - animItemPoint) && scrollY < (animItemOffSet + animItemHeight)) {
                        animItem.classList.add('_active');


                    } else {

                        if (!animItem.classList.contains('_anim-no-hide')) {

                            animItem.classList.remove('_active');
                        }
                    }


                }


                function offset(el) {
                    const rect = el.getBoundingClientRect(),
                        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                        scrollTop = window.scrollY || document.documentElement.scrollTop;
                    return {
                        top: rect.top + scrollTop,
                        left: rect.left + scrollLeft
                    }

                }

            }

        }

    } catch (e) {
        console.log('2');
    }
    try {
        loaded()
    } catch (e) {
        console.log('1');
    }


}





function loaded() {
    loading()
    loadingt()
    loadingc()
    loadingy()


}

function loading() {
    timerCount++;
    perc.innerHTML = timerCount;
    let interval = setTimeout(loading, timerCount);
    if (timerCount == 100) {
        clearTimeout(interval);
    }
}

function loadingt() {
    ttech++;
    tech.innerHTML = ttech;
    let interval = setTimeout(loadingt, ttech / 10);
    if (ttech == 300) {
        clearTimeout(interval);
    }
}

function loadingc() {
    timec++;
    clients.innerHTML = timec;
    let interval = setTimeout(loadingc, timec / 40);
    if (timec == 600) {
        clearTimeout(interval);
    }
}

function loadingy() {
    timey++;
    year.innerHTML = timey;
    let interval = setTimeout(loadingy, timey * 20);
    if (timey == 20) {
        clearTimeout(interval);
    }
}