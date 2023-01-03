import { Card } from "antd";
import { useQuery } from "react-query";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getCategoryData } from "../../queries/graph-queries";

const CategoriesPieChart = ({
  currentRowCount,
}: {
  currentRowCount: number;
}) => {
  const { data, isLoading } = useQuery("category-data", getCategoryData);
  return (
    <Card title="Categories" loading={isLoading} style={{ height: "100%" }}>
      <ResponsiveContainer width="100%" height={currentRowCount * 155 - 80}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="count" fill="#8884d8" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default CategoriesPieChart;
