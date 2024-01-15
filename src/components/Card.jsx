const Card = (props) => {
  const { href, imgAlt, imgSrc, children } = props;
  return (
    <div
      style={{
        width: 200,
        paddingLeft: 20,
        paddingTop: 20,
        borderStyle: "solid",
        borderColor: "gray",
      }}
    >
      <div>
        <img
          href={href}
          src={imgSrc}
          alt={imgAlt}
          style={{
            marginLeft: 35,
          }}
        />
      </div>
      <div
        style={{
          marginLeft: 35,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
