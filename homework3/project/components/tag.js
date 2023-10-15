const news = {
    data() {
        const articles = [
            { 
                id: 1,  tag: 'Kitchen',
                title: 'Let’s Get Solution for Building Construction Work',
                imgMain: 'images/blog__details_img11.png',
                data: '26 December,2022',
                breadcrumbs: 'Interior / Home / Decore',
                textFirst: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                articleDescr: 'The details are not the details. They make the design.',
                subtitle: 'Design sprints are great',
                textSecond: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                listItem: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                img: 'images/blog__details_img12.png',
                textThird: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            { 
                id: 2, tag: 'Bedroom',
                title: 'Let’s Get Solution for Building Construction Work',
                imgMain: 'https://i.pinimg.com/originals/46/38/76/4638769a530e7c844e6671cd8af80936.jpg',
                data: '30 December,2022',
                breadcrumbs: 'Interior / Home / Decore',
                textFirst: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. <br><br> Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                articleDescr: 'The details are not the details. They make the design.',
                subtitle: 'Design sprints are great',
                textSecond: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                listItem: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                img: 'images/blog__details_img12.png',
                textThird: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            { 
                id: 3, tag: 'Building',
                title: 'Let’s Get Solution for Building Construction Work',
                imgMain: 'https://avatars.mds.yandex.net/i?id=ab513bbbe3123058188308e65b0503b33c2900f5-5008890-images-thumbs&n=13.jpg',
                data: '30 December,2022',
                breadcrumbs: 'Interior / Home / Decore',
                textFirst: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. <br><br> Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                articleDescr: 'The details are not the details. They make the design.',
                subtitle: 'Design sprints are great',
                textSecond: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                listItem: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                img: 'images/blog__details_img12.png',
                textThird: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            { 
                id: 4, tag: 'Architecture',
                title: 'Let’s Get Solution for Building Construction Work',
                imgMain: 'https://svgsilh.com/png-512/2028243.png',
                data: '30 December,2022',
                breadcrumbs: 'Interior / Home / Decore',
                textFirst: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. <br><br> Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                articleDescr: 'The details are not the details. They make the design.',
                subtitle: 'Design sprints are great',
                textSecond: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                listItem: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                img: 'images/blog__details_img12.png',
                textThird: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            { 
                id: 5,  tag: 'Kitchen-planning',
                title: 'Let’s Get Solution for Building Construction Work',
                imgMain: 'https://i.pinimg.com/736x/24/1e/8b/241e8b43f75c3cbf0e60109c923ba389.jpg',
                data: '30 December,2022',
                breadcrumbs: 'Interior / Home / Decore',
                textFirst: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. <br><br> Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                articleDescr: 'The details are not the details. They make the design.',
                subtitle: 'Design sprints are great',
                textSecond: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                listItem: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                img: 'images/blog__details_img12.png',
                textThird: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            { 
                id: 6, tag: 'Bathroom',
                title: 'Let’s Get Solution for Building Construction Work',
                imgMain: 'https://vvanna.ru/upload/iblock/d93/d9339c419c14947654d29e811aaf4f4f.jpg',
                data: '30 December,2022',
                breadcrumbs: 'Interior / Home / Decore',
                textFirst: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which do not look even slightly believable. <br><br> Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                articleDescr: 'The details are not the details. They make the design.',
                subtitle: 'Design sprints are great',
                textSecond: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                listItem: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                img: 'images/blog__details_img12.png',
                textThird: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
        ]
        return {
            articles: articles,
            temp: news,
        }   
    },

    methods: {
        showNews(tag){
            this.temp = this.articles.filter((item) => item.tag === tag);
        }
    },
    template: `
    
        <div class="blogdetails__content" v-for="item in this.temp" :key="item.id">
            <h1 class="blogdetails__title">{{ item.title }}</h1>
            <img class="blogdetails__img-main" :src="item.imgMain" alt="blog details img11">
            <div class="blogdetails__info">
                <div class="blogdetails__info_data">{{ item.data }}</div>
                <div class="blogdetails__info_breadcrumbs">
                    {{ item.breadcrumbs }}
                </div>
            </div>
            <div class="blogdetails__text_first">
            {{ item.textFirst }}
            </div>

            <article class="article__block">
                <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z" fill="#CDA274"/>
                </svg>
                <div class="article__block_descr">{{ item.articleDescr }}</div>
            </article>

            <h2 class="blogdetails__subtitle">{{ item.subtitle }}</h2>
            <div class="blogdetails__text_second">
                {{ item.textSecond }}
            </div>
            <ul class="blogdetails__list">
                <div class="blogdetails__list_item">
                    <span>1</span><li>{{ item.listItem }}</li>
                </div>
                <div class="blogdetails__list_item">
                    <span>2</span><li>{{ item.listItem }}</li>
                </div>
                <div class="blogdetails__list_item">
                    <span>3</span><li>{{ item.listItem }}</li>
                </div>
                            
            </ul>

            <img class="blogdetails__img" :src="item.img" alt="blog details img11">

            <div class="blogdetails__text_third">
            {{ item.textThird }}
            </div>

        </div>
        <div class="blogdetails__sidebar">
            <h2 class="blogdetails__sidebar_title">Tags</h2>
            <div class="blogdetails__sidebar_tags">
                <button class="blogdetails__sidebar_tag" @click="showNews('Kitchen')">Kitchen</button>
                <button class="blogdetails__sidebar_tag" @click="showNews('Bedroom')">Bedroom</button>
                <button class="blogdetails__sidebar_tag" @click="showNews('Building')">Building</button>
                <button class="blogdetails__sidebar_tag" @click="showNews('Architecture')">Architecture</button>
                <button class="blogdetails__sidebar_tag" @click="showNews('Kitchen-planning')">Kitchen Planning</button>
                <button class="blogdetails__sidebar_tag" @click="showNews('Bathroom')">Bathroom</button>
                
            </div>
        </div>
    
    `
}