import './index.css'

const WhatWillYouLearn = () => (
    <div className="wwyl-container">
        <div className="heading-container">
            <h1 className="why-heading">What will you learn in ACCA?</h1>
            <hr className="horizontal-break" />
        </div>

        <div className="wwyl-cards-container">
            <div className="wwyl-card">
                <div className="top-heading-container">
                    <h1 className="top-heading">Knowledge Level</h1>
                </div>
                <div className="list-container">
                    <ul className="wwyl-card-list">
                        <li className="wwyl-card-list-item">Business and Technology (BT)</li>
                        <li className="wwyl-card-list-item">Management Accounting (MA)</li>
                        <li className="wwyl-card-list-item">Financial Accounting (FA)</li>
                    </ul>
                </div>
                <div className="bottom-heading-container">
                    <h1 className="bottom-heading">3 papers</h1>
                </div>
            </div>
            <div className="wwyl-card">
                <div className="top-heading-container">
                    <h1 className="top-heading">Skill Level</h1>
                </div>
                <div className="list-container">
                    <ul className="wwyl-card-list">
                        <li className="wwyl-card-list-item">Corporate and Business Law (LW)</li>
                        <li className="wwyl-card-list-item">Performance Management (PM)</li>
                        <li className="wwyl-card-list-item">Taxation (TX)</li>
                        <li className="wwyl-card-list-item">Financial Reporting (FR)</li>
                        <li className="wwyl-card-list-item">Audit and Assurance (AA)</li>
                        <li className="wwyl-card-list-item">Financial Management (FM)</li>
                    </ul>
                </div>
                <div className="bottom-heading-container">
                    <h1 className="bottom-heading">6 papers</h1>
                </div>
            </div>
            <div className="wwyl-card">
                <div className="top-heading-container">
                    <h1 className="top-heading">Professional Level</h1>
                </div>
                <div className="list-container">
                    <ul className="wwyl-card-list">
                        <li className="wwyl-card-list-item-heading">Compulsory</li>
                        <li className="wwyl-card-list-item">SBL - Strategic Business Leader</li>
                        <li className="wwyl-card-list-item">SBR - Strategic Business Reporting</li>
                    </ul>
                    <ul className="wwyl-card-list">
                        <li className="wwyl-card-list-item-heading">Two out of the following</li>
                        <li className="wwyl-card-list-item">Advanced Financial Management (AFM)</li>
                        <li className="wwyl-card-list-item">Advanced Performance Management (APM)</li>
                        <li className="wwyl-card-list-item">Advanced Taxation (ATX)</li>
                        <li className="wwyl-card-list-item">Advanced Audit and Assurance (AAA)</li>
                    </ul>
                </div>
                <div className="bottom-heading-container">
                    <h1 className="bottom-heading">4 papers</h1>
                </div>
            </div>
        </div>
    </div>
)

export default WhatWillYouLearn