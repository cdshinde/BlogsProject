import { Layout } from "antd";

const Header = () => {
  return (
    <Layout.Header>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {" "}
        <div
          style={{ color: "white", fontSize: "24px", marginLeft: "4px" }}
          className="logo"
        ></div>
      </div>
    </Layout.Header>
  );
};

export default Header;
