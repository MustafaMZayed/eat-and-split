import Friend from "./Friend";

export default function FriendList({
  handleShowAdd,
  showaddfriend,
  friends,
  handlesetSelectedfriend,
  selectedfriend,
  balance,
}) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            handlesetSelectedfriend={handlesetSelectedfriend}
            selectedfriend={selectedfriend}
            balance={balance}
          />
        ))}
      </ul>
      <button className="button" onClick={handleShowAdd}>
        {showaddfriend ? "hide" : "show"}
      </button>
    </div>
  );
}
