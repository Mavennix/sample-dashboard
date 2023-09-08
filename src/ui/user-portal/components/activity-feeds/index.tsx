import Avatar1 from "../../../../assets/avatars/avatar1.png";
import Avatar2 from "../../../../assets/avatars/avatar2.png";
import Avatar3 from "../../../../assets/avatars/avatar3.png";
import './style.scss'


const ActivityFeeds = () => {

    const activityFeeds = [
        {
            type: 'application',
            name: 'Marvin Mckinney',
            role: 'Product Designer',
            time: '10 mins ago',
            avatar: Avatar1,
        },
        {
            type: 'account_creation',
            name: 'Marvin Mckinney',
            role: 'Software Engineer',
            time: '23 mins ago',
            avatar: Avatar3,

        },
        {
            type: 'application',
            name: 'Marvin Mckinney',
            role: 'Frontend Engineer',
            time: '17 mins ago',
            avatar: Avatar2,

        },

        {
            type: 'account_creation',
            name: 'Marvin Mckinney',
            role: 'Job Hunt',
            time: '23 mins ago',
            avatar: Avatar3,

        }
    ]
    return (
        <div className='card'>
            <h6 className='fw-bold heading'>Activity Feed</h6>
            <div>
                {
                    activityFeeds.map((feed, index) => <Activity
                        key={index}
                        prefixIcon={feed.avatar}
                        role={feed.role}
                        type={feed.type}
                        name={feed.name}
                        time={feed.time}
                        subTitle={feed.time} />)
                }
            </div>
        </div>
    )
}


const Activity = (props: any) => {
    const { name, role, prefixIcon, type, time } = props;
    return (
        <div className='activity-tile'>
            <div className="activity-details">
                <img src={prefixIcon} />
                <div>
                    <p className='light-text fw-light'><span className="fw-bold">{name}</span> {type === 'application' ? 'applied for' : 'Created new Account as a'} <span className="fw-bold">{role}</span></p>
                    <small className='light-text'>{time}</small>
                </div>

            </div>
            <div className={`chip ${type == 'application' ? 'primary' : 'success'}`}>
                <small>{type === 'application' ? 'Applying' : 'Sign Up'}</small>
            </div>
        </div>
    )
}

export default ActivityFeeds