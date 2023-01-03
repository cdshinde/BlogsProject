import { Layout } from "antd";
import { ReactNode } from "react";
import Header from "./header";
import SubHeading from "../bodyComponent/subHeading.";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Layout>
      <Header />
      <SubHeading />
      <Layout.Content
        style={{ padding: "20px 50px", minHeight: "calc(100vh - 64px)" }}
      >
        {children}
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;
