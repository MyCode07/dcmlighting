import dhx from 'dhx-suite'

const formatter = new Intl.NumberFormat("ru");
const clearFilter = document.querySelector('.clear-filter');

const ranges = document.querySelectorAll('.range');
if (ranges) {
    ranges.forEach(range => {
        const minInput = range.closest('.filter-item').querySelector('input.min')
        const maxInput = range.closest('.filter-item').querySelector('input.max')

        const minOutElem = range.querySelector('.range-min');
        const maxOutElem = range.querySelector('.range-max');
        const min = +range.dataset.min ?? 0;
        const max = +range.dataset.max ?? 0;
        const step = +range.dataset.step ?? 1;

        const valueMin = +minOutElem.dataset.value ?? 0
        const valueMax = +maxOutElem.dataset.value ?? 0

        const sliderRange = new dhx.Slider(range.querySelector('.range-slider'), {
            min: min,
            max: max,
            step: step,
            range: true,
            value: [valueMin, valueMax]
        });

        sliderRange.events.on('change', () => {
            minOutElem.dataset.value = sliderRange.getValue()[0]
            minOutElem.textContent = formatter.format(sliderRange.getValue()[0])

            maxOutElem.dataset.value = sliderRange.getValue()[1]
            maxOutElem.textContent = formatter.format(sliderRange.getValue()[1])

            minInput.value = sliderRange.getValue()[0];
            maxInput.value = sliderRange.getValue()[1];
        });

        if (clearFilter) {
            clearFilter.addEventListener('click', () => {
                sliderRange.setValue([min, max]);
            })
        }

    })
}

const filter = document.querySelector('.filter');
const openFilterBtn = document.querySelector('.filter-top button');
if (openFilterBtn) {
    openFilterBtn.addEventListener('click', () => {
        filter.classList.toggle('_open')
    })
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('opcl-filter')) {
        targetEl.closest('.filter-item').classList.toggle('_hide')
    }
})


const gridContainer = document.querySelector('.change-grid');
const btn3 = document.querySelector('.change-grid-btn._active-3');
const btn2 = document.querySelector('.change-grid-btn._active-2');
if (gridContainer && window.innerWidth >= 1024) {
    btn3.addEventListener('click', () => {
        gridContainer.classList.remove('grid-2');
        gridContainer.classList.add('grid-3');

        btn3.classList.add('_active');
        btn2.classList.remove('_active');


        document.querySelector('.change-grid__btns label').textContent = 2;
    });

    btn2.addEventListener('click', () => {
        gridContainer.classList.remove('grid-3');
        gridContainer.classList.add('grid-2');

        btn2.classList.add('_active');
        btn3.classList.remove('_active');

        document.querySelector('.change-grid__btns label').textContent = 3;
    });
}