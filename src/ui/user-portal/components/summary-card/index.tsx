import { Doughnut } from 'react-chartjs-2';
import './style.scss'
import TrendIcon from "../../../../assets/icons/trend-up.svg";


const SummaryCard = (props: any) => {
    const { theme, title, value } = props;
    return (
        <div className="summary-card card">
            <div className="summary-details">
                <p className='title light-text'>{title}</p>
                <h3 className='value fw-semibold'>{value}</h3>
                <div className={`trend ${theme}`}>
                    <div className='trend-icon'>
                        <img src={TrendIcon} alt="" />
                    </div>
                    <p className='trend-value fw-light'>+14% Inc</p>
                </div>
            </div>
            <PieChart theme={theme} />
        </div>
    )
}

const PieChart = (props: any) => {
    const { theme } = props;
    let color;
    switch (theme) {
        case 'green':
            color = '#38cb89';
            break;
        case 'amber':
            color = '#fea500';
            break;
        case 'red':
            color = '#ff5631';
            break;
        default:
            break;
    }
    const options = {
        maintainAspectRatio: false,
        cutout: '85%',
        elements: {

            arc: {
                borderWidth: 0,
                borderRadius: 20,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const data = {
        labels: ['Category 1', 'Category 2',],
        datasets: [
            {
                data: [60, 40,],
                backgroundColor: [color, '#eee',],
            },
        ],
    };
    return (
        <div className="pie-chart-container">
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default SummaryCard