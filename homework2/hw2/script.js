/* 
Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).
*/

const app = {
    data() {
        return {
            products: [
                { product: 'Хлеб', price: 27 },
                { product: 'Молоко', price: 42 },
                { product: 'Соль', price: 33 },
                { product: 'Сахар', price: 36 },
            ]
        }
    },
    methods: {
        upPrice() {
            return this.products.sort((a, b) => a.price - b.price);
        },
        downPrice() {
            return this.products.sort((a, b) => b.price - a.price);
        }
    },
};
Vue.createApp(app).mount("#app");