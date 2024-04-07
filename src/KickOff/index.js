import React, {useState} from 'react';
import SuccessModal from "../SuccessModal";

import './index.css'

const KickOff = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="become-acca-container">
            <div className="become-acca-inner-1">
                <h1 className="become-acca-text">Kick off your ACCA Prep journey with IndigoLearn</h1>
                <p className="intro-text">
                    Sign-in and get instant access to our FREE Courses
                </p>

                <div className="brochure-container">
                    <img
                        src="https://res.cloudinary.com/dgddkjdft/image/upload/v1712425267/sodkpnfav4vhul6jwaj5.png"
                        alt="acca logo"
                        className="acca-logo"
                    />
                </div>
            </div>

            <div className="become-acca-inner-2">
                <h1 className="aspiring-text">Aspiring to be an ACCA? Get in touch with us!</h1>
                <input className="input-field" type="tel" placeholder="Phone Number" />
                <input className="input-field" type="email" placeholder="Email ID" />
                <input className="input-field" type="text" placeholder="Current Qualification" />
                <input className="input-field" type="text" placeholder="Interested in" />
                <button className="request-callback-button" onClick={openModal}>Request Call Back</button>
            </div>

            {showModal && <SuccessModal closeModal={closeModal} />}
        </div>
    )
}

export default KickOff