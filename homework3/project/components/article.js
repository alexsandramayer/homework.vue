const articles = {
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
    },
    template: `  
        <article class="article" v-for="(item, index) in articles.slice(0, 3)" :key="index">
            <img class="article__img" :src="item.img" alt="article img">
            <div class="article__tag">{{ item.tag }}</div>
            <div class="article__info">
                <h3 class="article_title">{{ item.title }}</h3>
                    
                <div class="article__info_bottom">
                    <div class="article__info_data">{{ item.data }}</div>
                    
                    <a href="blog_details.html" class="article__info_btn"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></a>
                </div>
            </div>
        </article>
    `
}
