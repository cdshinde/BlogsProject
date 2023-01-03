import { Card } from "antd";
import { useQuery } from "react-query";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { getHashtagData } from "../../queries/graph-queries";

const NoOfPostRadarChart = ({
  currentRowCount,
}: {
  currentRowCount: number;
}) => {
  const { data, isLoading } = useQuery("hashtag-data", getHashtagData);

  return (
    <Card title="hashtags" loading={isLoading} style={{ height: "100%" }}>
      <ResponsiveContainer width="100%" height={currentRowCount * 155 - 80}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="hashtag" />
          <PolarRadiusAxis />
          <Radar
            name="name"
            dataKey="noOfPosts"
            stroke="green"
            fill="green"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default NoOfPostRadarChart;
