const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: "Username and Room are required!",
    };
  }

  //Check for existing User
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // Validate username
  if (existingUser) {
    return {
      error: "Username is in use",
    };
  }

  // Store User
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => {
    return user.id === id;
  });

  if (!user) return { error: "No user found with the given ID" };

  return user;
};

const getUsersInRoom = (room) => {
  const roomName = room.trim().toLowerCase();
  const roomUsers = users.filter((user) => {
    return user.room === roomName;
  });

  return roomUsers;
};

const kunal = addUser({
  id: 32,
  username: "kunal",
  room: "boka",
});

console.log(getUser(32));
console.log(kunal);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};

// addUser({
//   id: 22,
//   username: "Kunal",
//   room: "Tinsukia",
// });

// addUser({
//   id: 52,
//   username: "Golu",
//   room: "digboi",
// });

// console.log(getUser(92));
// console.log(getUsersInRoom("Tinsukia"));

// console.log(users);

// const removedUser = removeUser(22);

// console.log(removedUser);
// console.log(users);
