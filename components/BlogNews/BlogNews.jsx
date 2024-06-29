import { Search } from "@mui/icons-material";
import "./blognews.modules.css"

export const BlogNews = () => {
    const data = [
        `${'../img/img44.jpg'}`, `${'../img/img35.jpg'}`, `${'../img/img38.jpg'}`, `${'../img/img15.jpg'}`, `${'../img/img45.jpg'}`, `${'../img/img46.jpg'}`, `${'../img/img47.jpg'}`, `${'../img/img48.jpg'}`, `${'../img/img49.jpg'}`, `${'../img/img50.jpg'}`,
    ]

    const recentPost = [
        { text: "The personality trait that makes...", author: "GESSINGER - ", date: 'Sept 12, 2023', imageIndex: 0 },

        { text: "The personality trait that makes...", author: "GESSINGER - ", date: 'Sept 12, 2023', imageIndex: 1 },

        { text: "The personality trait that makes...", author: "GESSINGER - ", date: 'Sept 12, 2023', imageIndex: 2 },

        { text: "The personality trait that makes...", author: "GESSINGER - ", date: 'Sept 12, 2023', imageIndex: 3 }
    ]

    const postSection = [
        { title: "Have great lunches and dinners at a fancy restaurant", name: "RESTAURANT - ", date: 'Sept 12, 2023', imageIndex: 4 },
        { title: "This day we have had so much fun in our picnic", name: "PICNIC - ", date: 'Sept 12, 2023', imageIndex: 5 },
        { title: "They have traveled to beautiful places to enjoy nature", name: "NATURE - ", date: 'Sept 12, 2023', imageIndex: 6 },
        { title: "Maps, camera, notebook, items for travelling", name: "TRAVEL - ", date: 'Sept 12, 2023', imageIndex: 7 },
        { title: "Nature photographed in its most beautiful way", name: "LAKE AND MOUNTAINS - ", date: 'Sept 12, 2023', imageIndex: 8 },
        { title: "Spreading joy with friends having delicious coffees", name: "COFFEES - ", date: 'Sept 12, 2023', imageIndex: 9 },

    ];

    const brandList = [{
        id: 0,
        name: "Fashion",
        brand: "Fashion"
    }, {
        id: 1,
        name: "Travel",
        brand: "Travel"
    }, {
        id: 2,
        name: "Picnic",
        brand: "Picnic"
    }, {
        id: 3,
        name: "Model",
        brand: "Model"
    }]

    return (
        <section id="blog-news-container">
            <div className="blog-box-container">

                <div className="blog-items">
                    <div className="items-categories-separated">
                        <h1 className="item-title">Search</h1>
                        <div className="blog-categories-box">
                            <input type="search" id="site-search" name="q" placeholder="Search . . ." />
                            <div className="icons search-background">
                                <Search fontSize="medium" />
                            </div>
                        </div>
                    </div>

                    <div className="items-brand">
                        <h1 className="item-title">Categories</h1>
                        <div className="adjust-items-brand">
                            <ol className="items-categories-box">
                                {
                                    brandList.map(item => {
                                        return (
                                            <li key={item.id}>
                                                <input type="checkbox" key={item.name} />
                                                {item.brand}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </div>

                    <div className="blog-container">
                        <h1 className="item-title">Recent Post</h1>
                        <div>
                            {recentPost.map((post, index) => (
                                <div key={index} className="blog-box">
                                    <div>
                                        <img src={data[post.imageIndex]} className="post-img" />
                                    </div>
                                    <div className="responsive-blog-news-subtitles">
                                        <p style={{ color: 'rgb(37, 37, 37)' }}><strong>{post.text}</strong></p>
                                        <span style={{ color: 'rgb(231, 171, 60)' }}>{post.author}</span>
                                        <span style={{ color: 'rgb(193, 185, 185)' }}>{post.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section id="blog-categories-shop">
                    <div className="blog-img-container">
                        {postSection.map((post, index) => (
                            <div key={index} className="blog-img-box">
                                <img src={data[post.imageIndex]} className="adjust-img-blog" />
                                <div className="spacing-text">
                                    <p style={{ color: 'rgb(37, 37, 37)' }}><strong>{post.title}</strong></p>
                                    <span style={{ color: 'rgb(231, 171, 60)' }}>{post.name}</span>
                                    <span style={{ color: 'rgb(193, 185, 185)' }}>{post.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </section>
    )
}

export default BlogNews