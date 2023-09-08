
import Link from "../../../../assets/icons/link.svg";
import './style.scss'
const Meetings = () => {

    const meetings = [{
        title: 'Interview',
        time: '9:00 am - 10:00 am'
    },
    {
        title: 'Organizational meeting',
        time: '9:00 am - 10:00 am'
    },
    {
        title: 'Meeting with the manager',
        time: '9:00 am - 10:00 am'
    }]
    return (
        <div className="card">
            <h6 className="fw-bold heading">Activity Feed</h6>
            <div>
                {
                    meetings.map((meeting, index) => <Meeting key={index} title={meeting.title} subTitle={meeting.time} />)
                }
            </div>
        </div>
    )
}

// Meeting Tile Widget
const Meeting = (props: any) => {
    const { title, subTitle } = props;

    return (
        <div className="meeting-tile">
            <div className="meeting-details">
                <DateWidget />
                <div>
                    <p className="fw-semibold">{title}</p>
                    <small className="light-text">{subTitle}</small>
                </div>

            </div>
            <div className="action-button">
                <img src={Link} />
            </div>
        </div>
    )
}
// Meeting Tile Widget End

// Date Widget

const DateWidget = () => {
    return (
        <div className="date-widget card">
            <p className="m-0 fw-bold day">Mon</p>
            <p className="m-0 fw-bold date">10</p>
        </div>
    )
}

// Date Widget End

export default Meetings