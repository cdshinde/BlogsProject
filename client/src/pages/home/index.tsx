import { useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import CategoriesPieChart from "../../components/widgetComponents/categoriesPieChart";
import LanguageBarChart from "../../components/widgetComponents/languageBarChart";
import MonthOfYearGraph from "../../components/widgetComponents/monthOfyearGraph";
import NoOfPostRadarChart from "../../components/widgetComponents/noOfPostRadarChart";

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayout: Layout[] = [
  { i: "a", x: 0, y: 0, w: 6, h: 2, minH: 2 },
  { i: "b", x: 0, y: 0, w: 6, h: 2, minH: 2 },
  { i: "c", x: 6, y: 0, w: 6, h: 2, minH: 2 },
  { i: "d", x: 6, y: 0, w: 6, h: 2, minH: 2 },
];

const Home = () => {
  const [layout, setLayout] = useState(defaultLayout);
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout, md: layout, sm: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      onLayoutChange={(currentLayout) => {
        setLayout(currentLayout);
      }}
      rowHeight={155}
    >
      <div key="a">
        <MonthOfYearGraph
          currentRowCount={layout.find((l) => l.i === "a")?.h || 2}
        />
      </div>

      <div key="b">
        <CategoriesPieChart
          currentRowCount={layout.find((l) => l.i === "b")?.h || 2}
        />
      </div>
      <div key="c">
        <LanguageBarChart
          currentRowCount={layout.find((l) => l.i === "c")?.h || 2}
        />
      </div>
      <div key="d">
        <NoOfPostRadarChart
          currentRowCount={layout.find((l) => l.i === "d")?.h || 2}
        />
      </div>
    </ResponsiveGridLayout>
  );
};

export default Home;
