import SummaryCard from "../../components/summary-card"
import './style.scss'

const SummarySection = () => {
    return (
        <div className="summary-section">
            <SummaryCard theme='green' title='Total Applications' value='5672' />
            <SummaryCard theme='amber' title='Shortlisted Candidates' value='3045' />
            <SummaryCard theme='red' title='Rejected Candidates' value='1055' />
        </div>
    )
}

export default SummarySection