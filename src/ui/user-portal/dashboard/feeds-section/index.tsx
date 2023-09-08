import ActivityFeeds from '../../components/activity-feeds'
import Meettings from '../../components/meetings'
import './style.scss'

const FeedsSection = () => {
    return (
        <div className="feeds-section">
            {/* Activity Feeds */}
            <div className="activity-feeds-section">
                <ActivityFeeds />
            </div>

            <div className="message-section">
                <Meettings />
            </div>
        </div>
    )
}

export default FeedsSection