import './style.scss'
import Slack from "../../../../assets/company-logos/slack.svg";
import Adobe from "../../../../assets/company-logos/adobe.svg";
import Safari from "../../../../assets/company-logos/safari.svg";
import Sportify from "../../../../assets/company-logos/spotify.svg";
import Help from "../../../../assets/icons/help.svg";
import Notification from "../../../../assets/icons/notification-bing.svg";
import Avatar1 from "../../../../assets/avatars/avatar1.png";
import Avatar2 from "../../../../assets/avatars/avatar2.png";
import Avatar3 from "../../../../assets/avatars/avatar3.png";

const UserInfoSection = () => {
    const messages = [
        {
            avatar: Avatar1,
            title: 'Cameron Williamson',
            subTitle: 'Have you planned any deadline'
        },
        {
            avatar: Avatar2,
            title: 'Jacob Jones',
            subTitle: 'he candidates has been shortlisted'
        }
    ]

    const recentJobs = [
        {
            logo: Safari,
            role: 'Product Designer',
            location: 'Spotify, Singapore - 6 hours ago'
        },
        {
            logo: Slack,
            role: 'iOS Developer',
            location: 'San Fransisco, CA - 8 hours ago'
        },
        {
            logo: Adobe,
            role: 'Brand Strategist',
            location: 'New york, US - 1 Day ago'
        },
        {
            logo: Sportify,
            role: 'Jr. Frontend Engineer',
            location: 'Spotify, Singapore - 2 Days ago'
        },
    ]
    return (
        <aside className="userinfo">
            <div className="user-details">

                {/* Quick Menu */}
                <div className="quick-menu">
                    <img src={Help} alt="" />
                    <img src={Notification} alt="" />
                    <img src={Avatar3} alt="" />
                </div>
                {/* Quick Menu End */}
                {/* Avatar */}
                <div className="user-avatar">
                    <img src={Avatar3} alt="" />
                </div>
                {/* Avatar */}

                <div className="user-bio">
                    <h4 className='fw-bold m-0'>Thomas Flecture</h4>
                    <p className='m-0 light-text'>Director of Recruiting</p>
                </div>
            </div>

            <div className="messages">
                <h6 className='fw-bold heading'>Messages</h6>
                <>
                    {messages.map((message, index) =>
                        <ListTile key={index} prefixIcon={message.avatar} title={message.title} subTitle={message.subTitle} />

                    )}
                </>
            </div>

            <div className="recent-jobs">
                <h6 className='fw-bold heading'>Recently Added Jobs</h6>
                <>
                    {
                        recentJobs.map((job, index) =>
                            <ListTile key={index} prefixIcon={job.logo} title={job.role} subTitle={job.location} />
                        )
                    }
                </>


            </div>
        </aside>
    )
}


const ListTile = (props: any) => {
    const { title, subTitle, prefixIcon } = props;
    return (
        <div className='list-tile'>
            <img src={prefixIcon} />
            <div>
                <p className='fw-semibold'>{title}</p>
                <small className='light-text fw-semibold'>{subTitle}</small>
            </div>
        </div>
    )
}

export default UserInfoSection