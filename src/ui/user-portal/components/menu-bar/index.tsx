import './style.scss';
import Elementrr from "../../../../assets/icons/element.svg";
import Calender from "../../../../assets/icons/calender.svg";
import Jobs from "../../../../assets/icons/jobs.svg";
import Message from "../../../../assets/icons/message.svg";
import Note from "../../../../assets/icons/note.svg";
import Candidates from "../../../../assets/icons/candidates.svg";
import Structure from "../../../../assets/icons/structure.svg";
import Settings from "../../../../assets/icons/setting.svg";
import MonitorMobile from "../../../../assets/icons/monitor_mobile.svg";
import Logo from '../../../../assets/company-logos/shazam.svg'

const MenuBar = () => {
    return (
        <aside className="menubar">
            {/* logo */}
            <div className='logo'>
                <img src={Logo} alt="" />
                <h5 className='m-0 fw-bold'>Human R.</h5>
            </div>
            {/* logo */}
            <div className="category">
                <h3>MENU</h3>
                <ul>
                    <li><a className='active' href="#"><img src={Elementrr} />Dashboard</a></li>
                    <li><a href="#"><img src={Message} /> Message</a></li>
                    <li><a href="#"><img src={Calender} /> Calender</a></li>
                </ul>
            </div>
            <div className="category">
                <h3>RECRUITMENT</h3>
                <ul>
                    <li><a href="#"><img src={Jobs} /> Jobs</a></li>
                    <li><a href="#"><img src={Candidates} /> Candidate</a></li>
                    <li><a href="#"><img src={Structure} /> My Referrals</a></li>
                    <li><a href="#"><img src={MonitorMobile} /> Career Site</a></li>
                </ul>
            </div>
            <div className="category">
                <h3>ORGANISATION</h3>
                <ul>
                    <li><a href="#"><img src={Candidates} /> Employee</a></li>
                    <li><a href="#"><img src={Structure} /> Structure</a></li>
                    <li><a href="#"><img src={Note} /> Report</a></li>
                    <li><a href="#"><img src={Settings} /> Settings</a></li>
                </ul>
            </div>
        </aside>
    );
}

export default MenuBar