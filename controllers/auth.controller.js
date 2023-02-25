const { authService, tokenService } = require("../services");

const signup = async (req, res) => {
  try {
    const newUser = await authService.signup(req.body);
    const token = await tokenService.getToken(newUser.id);
    const response = { username: newUser.username, token };
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await authService.signin(username, password);

    if (user) {
      const token = await tokenService.getToken(user.id);
      const response = { username: user.username, token };
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signup,
  signin,
};
