// Nodes

const accordionItems = document.querySelectorAll('.accordion_item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion_item_header_box');
    const body = item.querySelector('.accordion_item_body');
    const btn = item.querySelector('.accordion_item_open_button')

    header.addEventListener('click', () => {
        body.classList.toggle('open');

        if (body.classList.contains('open')) {
            btn.src = "./assets/images/icon-minus.svg";
        } else {
            btn.src = "./assets/images/icon-plus.svg";
        }
    })
})