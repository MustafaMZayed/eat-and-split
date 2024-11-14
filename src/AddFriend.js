import { useState } from "react";

export default function AddFriend({ handleNewFriend, balance }) {
  const [name, setName] = useState("");
  const [image, setImg] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    const newFriend = { id: crypto.randomUUID(), name, image, balance };
    handleNewFriend(newFriend);
    setName(""); // Clear the input fields
    setImg("https://i.pravatar.cc/48"); // Reset to default image URL
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-add-friend">
        <label>❤️ Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>📷 IMAGE URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImg(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className="button">
          Add Friend
        </button>
      </div>
    </form>
  );
}
