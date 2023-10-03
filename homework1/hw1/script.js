/* 
1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки должен перевернуться и отобразиться в обратном порядке.
2. Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
3. *Дополнительное задание: При клике на элемент списка он должен быть удален. (по желанию) 
*/

const app = {
    data() {
        return {
            btnText: 'Перевернуть',
            listEl: ['el1', 'el2', 'el3', 'el4', 'el5', 'el6'],
            newElOfList: `el7`,
        };
    },
    methods: {
        reverseBtnText() {
            this.btnText = this.btnText.split('').reverse().join('');
        },
        addListNewEl() {
            this.listEl.push(this.newElOfList);
        },
        delElOfList(event) {
            event.target.remove();
        },
    },
}
Vue.createApp(app).mount('#app');