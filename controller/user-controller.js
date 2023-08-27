import User from "../Model/user-schema.js";

export const usersignUp = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });

    if (exist) {
      return response.status(401).json({ message: "Username already exists" });
    }

    console.log(request.body);

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userlogin = async (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  try {
    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return response
        .status(200)
        .json({ message: "Login successful", data: user });
    } else {
      return response.status(401).json({ message: "Invalid Login" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
