const fbtns = document.querySelectorAll('.alltech-catalog-btns__toggle'),
    all = document.getElementById('all'),
    r = document.getElementById('road'),
    t = document.getElementById('transfer'),
    b = document.getElementById('build'),
    f = document.getElementById('forest'),
    tech = document.querySelectorAll('.alltech-cards__card');

for (let i = 0; i < fbtns.length; i++) {
    fbtns[i].addEventListener('click', (e) => {
        e.preventDefault();
        for (let x = 0; x < fbtns.length; x++) {
            fbtns[x].classList.remove('_active-btn')
        }
        fbtns[i].classList.add('_active-btn');
        for (let j = 0; j < tech.length; j++) {
            if(all.classList.contains('_active-btn')){
                tech[j].classList.remove('hide')
            }
            if (r.classList.contains('_active-btn')) {
                if (tech[j].getAttribute('data-type') !== 'road') {
                    tech[j].classList.add('hide')

                } else {
                    tech[j].classList.remove('hide')
                }
            }
            if (t.classList.contains('_active-btn')) {
                if (tech[j].getAttribute('data-type') !== 'transfer') {
                    tech[j].classList.add('hide')
                } else {
                    tech[j].classList.remove('hide')
                }
            }
            if (b.classList.contains('_active-btn')) {
                if (tech[j].getAttribute('data-type') !== 'build') {
                    tech[j].classList.add('hide')
                } else {
                    tech[j].classList.remove('hide')
                }
            }
            if (f.classList.contains('_active-btn')) {
                if (tech[j].getAttribute('data-type') !== 'forest') {
                    tech[j].classList.add('hide')
                } else {
                    tech[j].classList.remove('hide')
                }
            }


        }

    })
}