export default function Split({
  selectedfriend,
  totalvalue,
  setTotalvalue,
  setMylvalue,
  myvalue,
  friendValue,
  payer,
  setPayer,
  setBalance,
  balance,
  splitbill,
}) {
  function handlesubmmit(e) {
    e.preventDefault();
    if (!totalvalue || !myvalue) return;
    splitbill(payer === "you" ? -friendValue : myvalue);
    console.log(friendValue);
  }
  return (
    <form className="form-split-bill" onSubmit={handlesubmmit}>
      <h2>Split with {selectedfriend.name}</h2>
      <label>Bill value</label>
      <input
        type="number"
        value={totalvalue}
        onChange={(e) => setTotalvalue(Number(e.target.value))}
      ></input>

      <label> your cost </label>
      <input
        type="number"
        value={myvalue}
        onChange={(e) =>
          setMylvalue(
            Number(e.target.value) > totalvalue
              ? myvalue
              : Number(e.target.value)
          )
        }
      ></input>

      <label>{selectedfriend.name}'s cost</label>
      <input type="number" disabled value={friendValue}></input>

      <label>who's paying</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="you">you</option>
        <option value="friend">{selectedfriend.name}</option>
      </select>
      <button type="submit" className="button">
        SPLIT BILL
      </button>
    </form>
  );
}
