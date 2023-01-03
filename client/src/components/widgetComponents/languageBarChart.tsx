import { Card } from "antd";
import { useQuery } from "react-query";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getLanguageData } from "../../queries/graph-queries";

const LanguageBarChart = ({ currentRowCount }: { currentRowCount: number }) => {
  const { data, isLoading } = useQuery("language-data", getLanguageData);

  return (
    <Card
      title="Language distribution"
      loading={isLoading}
      style={{ height: "100%" }}
    >
      <ResponsiveContainer height={currentRowCount * 155 - 80} width="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />

          <YAxis dataKey="language" type="category" scale="band" />
          <Tooltip />
          <Bar dataKey="count" fill="#579BB1" />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default LanguageBarChart;
