import UserModel from '../models/User';

export default {
  // Get all users
  async index(req, res) {
    const users = await UserModel.findAll();
    return res.json(users);
  },

  // Create user
  async store(req, res) {
    // Checks   if the  user already exists
    const userExists = await UserModel.findOne({
      where: { email: req.body.email }
    });

    if (!userExists) {
      const { id, name, email } = await UserModel.create(req.body);
      return res.json({
        id,
        name,
        email
      });
    }
    return res.status(400).json({ error: 'User already' });
  },

  // Update user
  async update(req, res) {
    const { id } = req.params;
  },

  // Delete user
  async destroy(req, res) {
    const { id } = req.params;
  }
};
