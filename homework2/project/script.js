const app = {
    data() {
        return {
            articles: [
                { 
                    img: 'images/article1__img.png',
                    tag: 'Kitchan Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    data: '26 December,2022',
                    btn: ''
                },
                { 
                    img: 'images/article2__img.png',
                    tag: 'Living Design',
                    title: 'Low Cost Latest Invented Interior DesigningIdeas',
                    data: '22 December,2022',
                    btn: ''
                },
                { 
                    img: 'images/article3__img.png',
                    tag: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    data: '25 December,2022',
                    btn: ''
                },
                { 
                    img: 'images/article4__img.png',
                    tag: 'Kitchan Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    data: '26 December,2022',
                    btn: ''
                },
                { 
                    img: 'images/article5__img.png',
                    tag: 'Living Design',
                    title: 'Low Cost Latest Invented Interior DesigningIdeas',
                    data: '22 December,2022',
                    btn: ''
                },
                { 
                    img: 'images/article6__img.png',
                    tag: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    data: '25 December,2022',
                    btn: ''
                },
            ]
        }
    }
}
Vue.createApp(app).mount("#articles");