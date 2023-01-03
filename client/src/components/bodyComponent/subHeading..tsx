const TITLE = "Blogs Dashboard";

const SubHeading = () => {
  return (
    <div
      style={{
        marginTop: "8px",
        padding: "20px 50px",
        width: "100%",
        height: "40px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ marginLeft: "8px", fontSize: "24px", width: "75%" }}>
        {TITLE}
      </div>
    </div>
  );
};
export default SubHeading;
