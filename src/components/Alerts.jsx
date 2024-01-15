const Alerts = (props) => {
  const { bgColor, borderColor, icon, text } = props;
  return (
    <div
      style={{
        width: 350,
        borderStyle: "solid",
        borderColor: borderColor,
        backgroundColor: bgColor,
        padding: 10,
        display: "flex",
      }}
    >
      <div>
        <img
          style={{
            width: 20,
          }}
          src={icon}
        />
      </div>
      <div
        style={{
          paddingLeft: 10,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Alerts;
