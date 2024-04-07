import { IoIosHappy } from "react-icons/io";
import { PiBookOpenText } from "react-icons/pi";
import { PiMonitorPlayBold } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";

import React, {useState} from 'react';
import SuccessModal from "../SuccessModal";

import './index.css'

const BecomeACCA = () => {
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
                <h1 className="become-acca-text">Become ACCA in 18 months</h1>
                <p className="intro-text">
                    Acquire globally recognized accountancy qualification,
                    ACCA (also called as Global CA), and get placed in top MNCs & Big4s.
                </p>
                <div className="cards-container">
                    <div className="detail-card">
                        <IoIosHappy className="card-icon" />
                        <div className="card-inner-container">
                            <p className="card-label">Registered Users</p>
                            <p className="card-value">3,13,209</p>
                        </div>
                    </div>
                    <div className="detail-card">
                        <PiBookOpenText className="card-icon" />
                        <div className="card-inner-container">
                            <p className="card-label">Courses Enrolled</p>
                            <p className="card-value">96,103</p>
                        </div>
                    </div>
                    <div className="detail-card">
                        <PiMonitorPlayBold className="card-icon" />
                        <div className="card-inner-container">
                            <p className="card-label">Minutes Watched</p>
                            <p className="card-value">4,65,95,769</p>
                        </div>
                    </div>
                    <div className="detail-card">
                        <MdPeopleAlt className="card-icon" />
                        <div className="card-inner-container">
                            <p className="card-label">Faculty</p>
                            <p className="card-value">8 Experts</p>
                        </div>
                    </div>
                </div>

                <div className="brochure-container">
                    <button className="brochure-button">DOWNLOAD BROCHURE</button>
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

export default BecomeACCA