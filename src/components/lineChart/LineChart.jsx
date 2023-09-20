import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentMarksData = [
        { id: 1, name: "Student A", math: 85, physics: 78, chemistry: 90, english: 88 },
        { id: 2, name: "Student B", math: 92, physics: 85, chemistry: 94, english: 89 },
        { id: 3, name: "Student C", math: 78, physics: 70, chemistry: 85, english: 80 },
        { id: 4, name: "Student D", math: 68, physics: 62, chemistry: 75, english: 70 },
        { id: 5, name: "Student E", math: 95, physics: 88, chemistry: 97, english: 91 },
        { id: 6, name: "Student F", math: 88, physics: 80, chemistry: 91, english: 85 },
        { id: 7, name: "Student G", math: 72, physics: 68, chemistry: 80, english: 75 },
        { id: 8, name: "Student H", math: 90, physics: 82, chemistry: 92, english: 87 },
        { id: 9, name: "Student I", math: 76, physics: 72, chemistry: 86, english: 81 },
        { id: 10, name: "Student J", math: 82, physics: 75, chemistry: 88, english: 84 }
      ];
      
      
    return (
        <div>
            <LChart width={800} height={400} data={studentMarksData}>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="english" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;