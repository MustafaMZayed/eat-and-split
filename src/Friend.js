export default function Friend({
  friend,
  handlesetSelectedfriend,
  selectedfriend,
}) {
  return (
    <div
      className={`${
        selectedfriend?.id === friend.id ? "selected" : ""
      } sidebar`}
    >
      <h3>{friend.name}</h3>
      <img
        style={{ borderRadius: 50 }}
        src={friend.image}
        alt={`${friend.name}'s profile`}
      />
      {friend.balance > 0 && (
        <b className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </b>
      )}
      {friend.balance < 0 && (
        <b className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </b>
      )}
      {friend.balance === 0 && <b>You & {friend.name} are even</b>}
      <button
        onClick={() => handlesetSelectedfriend(friend)}
        className="button"
      >
        {selectedfriend?.id === friend.id ? "close" : "select"}
      </button>
    </div>
  );
}
