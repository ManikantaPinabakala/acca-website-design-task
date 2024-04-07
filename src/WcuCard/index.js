import './index.css'

const WcuCard = props => {
    const {cardDetails} = props
    const {imgUrl, cardHeadline, cardText} = cardDetails

    return (
        <div className="wcu-card">
            <img src={imgUrl} alt="random-img" className="card-image" />
            <h1 className="card-headline">{cardHeadline}</h1>
            <p className="card-text">{cardText}</p>
        </div>
    )
}

export default WcuCard