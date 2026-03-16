let users = [
  { id: 1, username: "john", password: "123", firstName: "John", lastName: "Doe" },
  { id: 2, username: "alex", password: "456", firstName: "Alex", lastName: "Smith" }
];

let idCounter = 3;


export const createUser = (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  const newUser = {
    id: idCounter++,
    username,
    password,
    firstName,
    lastName
  };

  users.push(newUser);

  res.json(newUser);
};



export const getUsers = (req, res) => {
  res.json(users);
};


export const searchUsers = (req, res) => {
  const { username } = req.query;

  const result = users.filter(user =>
    user.username.toLowerCase().startsWith(username.toLowerCase())
  );

  res.json(result);
};