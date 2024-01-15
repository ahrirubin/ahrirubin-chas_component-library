export default function Button(props) {
  const { color, children, disable, size } = props;

  return disable ? (
    <button
      style={{
        color: "black",
        fontSize: size,
        padding: 10,
        pointerEvents: "none",
      }}
    >
      {children}
    </button>
  ) : (
    <button
      style={{
        color: color,
        fontSize: size,
        padding: 10,
      }}
    >
      {children}
    </button>
  );
}
