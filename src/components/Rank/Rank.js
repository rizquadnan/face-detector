const Rank = ({ nameOfUser, count }) => {
  return (
    <header style={{ textAlign: "center", fontSize: "1rem"}}>
      <span style={{ display: "block"}}><span>{nameOfUser}</span> your face detect count is {count}</span>
    </header>
  )
};

export { Rank };