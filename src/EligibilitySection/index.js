import { PiBookOpenTextFill } from "react-icons/pi";
import { RiTimerLine } from "react-icons/ri";
import { MdLaptopMac } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

import './index.css'

const EligibilitySection = () => (
    <div className="eligibility-container">
        <div className="e-card">
            <p className="e-card-heading">Levels</p>
            <div className="e-card-inner-container">
                <PiBookOpenTextFill className="e-card-icon" />
                <p className="e-card-text">Three (13 papers)</p>
            </div>
        </div>
        <div className="e-card">
            <p className="e-card-heading">Duration</p>
            <div className="e-card-inner-container">
                <RiTimerLine className="e-card-icon" />
                <p className="e-card-text">6-30 months</p>
            </div>
        </div>
        <div className="e-card">
            <p className="e-card-heading">Exams</p>
            <div className="e-card-inner-container">
                <MdLaptopMac className="e-card-icon" />
                <p className="e-card-text">Quarterly (Online)</p>
            </div>
        </div>
        <div className="e-card">
            <p className="e-card-heading">Exemptions</p>
            <div className="e-card-inner-container">
                <LuCalendarDays className="e-card-icon" />
                <p className="e-card-text">Upto 9 papers</p>
            </div>
        </div>
    </div>
)

export default EligibilitySection