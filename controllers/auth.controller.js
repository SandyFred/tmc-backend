const { authService, tokenService } = require("../services");

const signup = async (req, res) => {
  try {
    const newUser = await authService.signup(req.body);
    const response = { userId: newUser.id };

    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userId = await authService.signin(username, password);

    if (userId) {
      const token = await tokenService.getToken(userId);
      const response = { userId, token };
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
