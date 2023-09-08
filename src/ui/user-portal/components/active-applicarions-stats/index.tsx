import './style.scss'
import { Bar } from 'react-chartjs-2';

import 'chartjs-plugin-datalabels';

const options = {
    maintainAspectRatio: false,
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false,
            },
        },
        y: {
            stacked: true,
            grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.04)',
            },
        },
    },
    plugins: {
        legend: {
            display: true,
        },
        datalabels: {
            borderRadius: 5,
            color: 'white',
            formatter: (value: any, context: any) => {
                return value;
            },
        },
    },

};
const ActiveApplicationStats = () => {
    return (
        <div className='active-application-stats card' >
            <BarChart />
        </div>
    )
}

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Applications',
            backgroundColor: '#57ccf2',
            data: [50, 45, 60, 70, 55, 65, 80, 75, 90, 85, 70, 65],
            barPercentage: 0.5,
            barThickness: 6,
            borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10,
            },
        },
        {
            label: 'Shortlisted',
            backgroundColor: '#fdb832',
            data: [20, 25, 10, 15, 30, 35, 15, 10, 25, 20, 30, 40],
            barPercentage: 0.5,
            barThickness: 6,
            borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10,
            },
        },
        {
            label: 'Rejected',
            backgroundColor: '#ff785a',
            data: [30, 30, 30, 15, 15, 10, 5, 15, 5, 15, 10, 10],
            barPercentage: 0.5,
            barThickness: 6,
            borderRadius: {
                topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10,
            },
        },
    ],
};


const BarChart = () => {
    return (
        <div className="stacked-bar-chart-container" style={{ height: '100%' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ActiveApplicationStats