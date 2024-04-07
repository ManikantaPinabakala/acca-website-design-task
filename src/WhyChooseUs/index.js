import WcuCard from '../WcuCard'

import './index.css'

const cards = [
    {
        imgUrl: "https://res.cloudinary.com/dgddkjdft/image/upload/v1712431222/nn87cdcbpketpofld5i4.png",
        cardHeadline: "Expert Faculty",
        cardText: "Our qualified Faculty with significant practical experience guide students every step of the way",
    },
    {
        imgUrl: "https://res.cloudinary.com/dgddkjdft/image/upload/v1712431222/hses0k5nni4tyjlex6kc.png",
        cardHeadline: "Complete Success Package",
        cardText: "Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.",
    },
    {
        imgUrl: "https://res.cloudinary.com/dgddkjdft/image/upload/v1712431222/egzmcmdcsptjwmqb1yz0.png",
        cardHeadline: "Placements",
        cardText: "Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.",
    }
]

const WhyChooseUS = () => (
    <div className="why-choose-us-container">
        <div className="heading-container">
            <h1 className="why-heading">Why Choose Us?</h1>
            <hr className="horizontal-break" />
        </div>
        
        <div className="wcu-cards-container">
            {cards.map(eachCardItem => (
                <WcuCard cardDetails={eachCardItem} />
            ))}
        </div>
    </div>
)

export default WhyChooseUS