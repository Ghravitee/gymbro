const MovingDiv = () => {
  const items = Array(5).fill("$GYM - Go Hard or Go Home");

  return (
    <div className="wrapper">
      {items.map((item, index) => (
        <div
          key={index}
          className={`hidden lg:block lg:text-[1.2rem] text-primary item item${
            index + 1
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default MovingDiv;
