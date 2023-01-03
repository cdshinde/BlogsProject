import { useQuery } from "react-query";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getMonthData } from "../../queries/graph-queries";
import { Card } from "antd";

const MonthOfYearGraph = ({ currentRowCount }: { currentRowCount: number }) => {
  const { data, isLoading } = useQuery("month-data", getMonthData);

  return (
    <Card
      title="Blogs for this year"
      loading={isLoading}
      style={{ height: "100%" }}
    >
      <div style={{ height: "80%" }}>
        <ResponsiveContainer width="100%" height={currentRowCount * 155 - 80}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="count" stroke="blue" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MonthOfYearGraph;
