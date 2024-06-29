import "./collection.modules.css"

export const Collection = () => {

    const data = [
        `${'../img/img34.jpg'}`, `${'../img/img35.jpg'}`, `${'../img/img25.jpg'}`, `${'../img/img37.jpg'}`, `${'../img/img38.jpg'}`, `${'../img/img39.jpg'}`
    ]

    const imagesCollection = [
            {imageIndex: 0},
            {imageIndex: 1},
            {imageIndex: 2},
            {imageIndex: 3},
            {imageIndex: 4},
            {imageIndex: 5},
    ]

    return (
        <section id="collections">
            <div className="img-collection">
                {imagesCollection.map((img, index) => (
                    <div key={index}>
                        <img src={data[img.imageIndex]} className="adjust-img-collection" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Collection