import { Facebook, Google, Instagram, LocalOffer, Twitter, YouTube } from "@mui/icons-material"
import "./blogdetailspost.modules.css"

export const BlogDetailsPost = (props) => {

    const data = [
        `${'../img/img50.jpg'}`, `${'../img/img45.jpg'}`, `${'../img/img46.jpg'}`, `${'../img/img47.jpg'}`
    ]

    const blog = [
        { title: "The Personality Trait That Makes You Happier", travel: "TRAVEL - ", date: "September 20, 2023", imageIndex: 0 },
    ]

    const quotations = [
        { text: "Psum dolor sit amet consectetur adipisicing elit. Corporis fugit repellat, deleniti quam voluptatum aperiam! Quibusdam facere accusamus accusantium perspiciatis laboriosam delectus, quasi nobis error veniam et officia hic blanditiis est possimus deserunt nam! Sapiente amet praesentium accusamus impedit ipsum debitis distinctio tempore sunt, fuga consectetur minima similique sit quaerat." },

        { quote: "“People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.” - ELON MUSK" }
    ]

    const postImages = [
        { imageIndex: 1 },
        { imageIndex: 2 },
        { imageIndex: 3 },
    ]

    const blogTopicsTrendy = [
        {
            id: 1,
            item: "TRAVEL"
        },
        {
            id: 2,
            item: "FASHION"
        },
        {
            id: 3,
            item: "BEAUTY"
        },
    ]

    const blogTopicsShare = [
        {
            id: 1,
            item: <Facebook fontSize="small" />
        },
        {
            id: 2,
            item: <Twitter fontSize="small" />
        },
        {
            id: 3,
            item: <Google fontSize="small" />
        },
        {
            id: 4,
            item: <Instagram fontSize="small" />
        },
        {
            id: 5,
            item: <YouTube fontSize="small" />
        }
    ]

    const previousNextPost = [
        {
            text: "Previous Post", subtitle: "The Personality Trait That Makes you Happier", imageIndex: 0
        },
    ]

    return (
        <section id="blog-details-post-container">
            <div className="blog-details-container">
                {blog.map((item, index) => (
                    <div key={index} className="blog-details-intro">
                        <h1>{item.title}</h1>
                        <span className="blog-details-travel">{item.travel}</span>
                        <span className="blog-details-date">{item.date}</span>

                        <div className="coffee-together-image">
                            <img src={data[item.imageIndex]} />
                        </div>
                    </div>
                ))}

                <div>
                    {quotations.map((item, index) => (
                        <div key={index} className="side-by-side">
                            <p>{item.text}</p>
                            <p className="quotation">{item.quote}</p>
                        </div>
                    ))}
                </div>

                <div className="postImages-container">
                    {postImages.map((item, index) => (
                        <div key={index} className="postImages">
                            <img src={data[item.imageIndex]} />
                        </div>
                    ))}

                </div>
                
                <p style={{ textAlign: "center" }}>
                    {props.text}
                </p>

                <div className="blogTopics">
                    <div className="blogTopics-trendy">
                        <LocalOffer style={{ color: 'rgb(231, 171, 60)' }} fontSize="small" />
                        <ul>
                            {blogTopicsTrendy.map((item, index) => (
                                <li key={index}>{item.item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="blogTopics-share">
                        <span>Share:</span>
                        <ul>
                            {blogTopicsShare.map((item, index) => (
                                <li key={index}>{item.item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="previous-next-post">
                    {previousNextPost.map((item, index) => (
                        <div key={index} className="previous-post">
                            <div className="previous-img">
                                <img src={data[item.imageIndex]} />
                            </div>
                            <div>
                                <span>{item.text}</span>
                                <h5>{item.subtitle}</h5>
                            </div>
                        </div>
                    ))}

                    {previousNextPost.map((item, index) => (
                        <div key={index} className="next-post">
                            <div className="next-img">
                                <img src={data[item.imageIndex]} />
                            </div>

                            <div className="next-post-end">
                                <span>{item.text}</span>
                                <h5>{item.subtitle}</h5>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="comment-feedback">
                    <div className="comment-feedback-img">
                        <img src={data[2]} alt="Guys Having Fun"/>
                    </div>
                    <div className="joanna-comment">
                        <h5>Joanna Muller</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus dolorem totam voluptatibus nostrum perferendis quaerat in eligendi quis, deserunt iste, quidem, accusantium id temporibus. Commodi, officia. Maxime, consequatur eum inventore magnam corrupti possimus.</p>
                    </div>
                </div>

                <div className="blogdetails-comment">
                    <div className="leave-comment">
                        <h1 style={{ color: 'rgb(37, 37, 37)' }}>Leave a Message!</h1>
                    </div>

                    <form id="form">
                        <input type="text" id="inFname" name="fname" placeholder="Your name" />
                        <input type="email" id="inBlogEmail" name="email" placeholder="Your email" />
                        <input type="text" id="inMessage" name="message" placeholder="Your Message" />
                    </form>

                    <button className="btn-Send-Msg blogDetails-Btn-Msg">SEND MESSAGE</button>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsPost