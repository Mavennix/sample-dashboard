import ActiveApplicationStats from '../components/active-applicarions-stats'
import MenuBar from '../components/menu-bar'
import UserInfoSection from '../components/user-info-section'
import FeedsSection from './feeds-section'
import './style.scss'
import SummarySection from './summary-section'

const UserDashboard = () => {
    return (
        <div className="dashboard">
            <MenuBar />
            <main className="main">
                {/* Header */}
                <div className="header">
                    <h3 className="m-0 fw-bold">Dashboard</h3>
                    <h6 className="welcome-message light-text fw-semibold">Hello, Thomas, Welcome to Galucter</h6>
                </div>
                {/* Header End */}
                <SummarySection/>
                <ActiveApplicationStats/>
                <FeedsSection/>
            </main>
            <UserInfoSection />
        </div>
    )
}

export default UserDashboard