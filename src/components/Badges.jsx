const Badges = (props) => {
  const { color, icon, size } = props;
  return (
    <div
      style={{
        color: color,
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      {icon}
    </div>
  );
};

export default Badges;
