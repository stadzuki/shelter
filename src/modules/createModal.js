const modalContent = document.querySelector('.modal__content');
const modalBtns = document.querySelectorAll('a.modal-btn');

class Modal {
    constructor(title, description, textareaPlaceholder) {
        this.title = title;
        this.description = description;
        this.textareaPlaceholder = textareaPlaceholder || [];
    }

    createModalElem(elemName, className, content) {
        const elem = document.createElement(elemName);
        elem.classList.add(className);
        elem.innerHTML = content;
        return elem
    }

    drawModal() {
        const modalHeader = this.createModalElem(
            `div`,

            `modal__header`,

            `<div class="modal__title">
                <div class="modal__title__text">${this.title}</div>
                <div class="modal__close"></div>
            </div>
            <div class="modal__descriptions">${this.description}</div>`
        )

        const modalFields = this.createModalElem(
            `div`,

            `modal__fields`,
            
            `<form method="GET">
                <p class="input input-name">
                    <label class="input-name__title">Фамилия и имя</label>
                    <input type="text" name="login" placeholder="Введите Ваше имя и фамилию">
                </p>
                <p class="input input-phone">
                    <label class="input-name__title">Номер телефона</label>
                    <input type="text" name="phone" placeholder="Номер телефона">
                    <span class="input-name__description">Обязательное поле для заполнения</span>    
                </p>
                <p class="input input-comments">
                    <label for="area-comments">Замечания</label>
                    <textarea name="comments" id="area-comments" cols="30" rows="10" placeholder="${this.textareaPlaceholder}"></textarea>
                </p>
            </form>`
        )

        const modalContacts = this.createModalElem(
            `div`,

            `modal__contacts`,
            
            'Если у вас есть вопросы, можете позвонить нам:<br>+375 (33) 6237879  Лена<br>+375 (29) 7877791  Ольга<br>+375 (29) 5837015  Рита'
        )

        
        const modalDescriptions = this.createModalElem(
            `div`,

            `modal__descriptions`,
            
            `Наши волонтеры будут активно искать будущий дом хвостику, пока вы помогаете нам с передержкой. Спасибо за помощь!`
        )    

        const modalBtns = this.createModalElem(
            `div`,

            `modal__btns`,
            
            `<a href="#" id="modal-send">Отправить</a>
            <a href="#" id="modal-cancel">Отмена</a>`
        )

        if(this.title === 'Забрать на передержку') return modalContent.append(modalHeader, modalFields, modalContacts, modalDescriptions, modalBtns);
        if(this.title === 'Кому и куда передать?') return modalContent.append(modalHeader, modalContacts);
        if(this.title === 'Автопомощь') return modalContent.append(modalHeader, modalFields, modalBtns);
        modalContent.append(modalHeader, modalFields, modalContacts, modalBtns);
    }
}

const modalWindow = () => {
    modalBtns.forEach(item => item.addEventListener('click', e => {
        e.preventDefault();
        const {
            target
        } = e;
        console.log(target.id);
        document.querySelector('.modal__container').classList.remove('disable');
        switch (target.id) {
            case 'take-to-home-btn':
                new Modal('Забрать домой',
                        'Оставьте информацию о себе. Мы позвоним Вам и договоримся, когда вы сможете забрать себе питомца.',
                        'Введите информацию, которая будет полезна нам')
                    .drawModal()
                break;
            case 'take-on-time-btn':
                new Modal(
                    'Забрать на передержку',
                    'Оставьте информацию о себе. Мы позвоним Вам и договоримся, когда вы сможете забрать себе питомца.',
                    'Опишите, на какой срок вы смогли бы взять питомца на передержку')
                    .drawModal()
                break;
            case 'where-send':
                new Modal(
                    'Кому и куда передать?',
                    'Чтобы передать купленные вещи, свяжитесь с нашими волонтерами. Вы сможете договориться о времени и месте встречи.\
                    Если доставить сами не сможете - волонтеры вам помогут в доставке.')
                    .drawModal()
                break;
            case 'autohelp-btn':
                new Modal(
                    'Автопомощь',
                    'Отправьте нам заявку о том, что готовы помочь. Когда нам будет необходима помощь в транспортировке, мы позвоним вам.',
                    'Опишите, как вы сможете нам помочь и удобное время для вас')
                    .drawModal()
                break;
        }
    }))


}


export default modalWindow;