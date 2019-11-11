import React from 'react'

export default function Carousel({ pics }) {

    function makeActive(picIndex) {
        return picIndex === 0 ? "active" : ""
    }

    function loadDataTargets(num) {
        let targetsArray = []
        for (let i = 0; i < num; i++) {
            targetsArray.push(<li key={i} data-target="#carouselTarget" data-slide-to={i} className={makeActive(i)}></li>)
        }
        return targetsArray.map(item => item)
    }

    return (
        <>
            {pics ?
                (
                    <div id="carouselTarget" className="carousel slide" data-ride="carousel" data-interval="false">
                        <ol className="carousel-indicators">
                            {loadDataTargets(pics.length)}
                        </ol>
                        <div className="carousel-inner">
                            {pics.map(pic => {
                                let indexPic = pics.indexOf(pic)
                                return (
                                    <div key={pic.id} className={`carousel-item ` + (makeActive(indexPic))}>
                                        <img src={`https://` + pic.url} className="ProductPic d-block w-100" alt={pic.description}></img>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{pic.title}</h5>
                                            <p>{pic.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <a className="carousel-control-prev" href="#carouselTarget" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselTarget" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                )
                : console.log(`Product pic not found.`)}
        </>
    )
}
