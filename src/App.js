import FriendList from "./FriendList";
import AddFriend from "./AddFriend";
import Split from "./Split";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(true);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedfriend, setSelectedfriend] = useState(null);
  const [balance, setBalance] = useState(0);
  const [totalvalue, setTotalvalue] = useState(0);
  const [myvalue, setMylvalue] = useState(0);
  const [payer, setPayer] = useState("");
  const friendValue = totalvalue - myvalue;

  function handlesetSelectedfriend(friend) {
    setSelectedfriend(selectedfriend?.id === friend.id ? null : friend);
  }

  function handleShowAdd() {
    setShowAddFriend(!showAddFriend);
  }

  function handleNewFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }

  function splitbill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedfriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          handleShowAdd={handleShowAdd} // Corrected prop name
          showAddFriend={showAddFriend} // Corrected prop name
          friends={friends}
          handlesetSelectedfriend={handlesetSelectedfriend}
          selectedfriend={selectedfriend}
          balance={balance}
        />
        {showAddFriend && (
          <AddFriend handleNewFriend={handleNewFriend} balance={balance} />
        )}
      </div>
      {selectedfriend && (
        <Split
          selectedfriend={selectedfriend}
          totalvalue={totalvalue}
          setTotalvalue={setTotalvalue}
          myvalue={myvalue}
          setMylvalue={setMylvalue}
          friendValue={friendValue}
          payer={payer}
          setPayer={setPayer}
          setBalance={setBalance}
          balance={balance}
          splitbill={splitbill}
          key={selectedfriend.id}
        />
      )}
    </div>
  );
}
