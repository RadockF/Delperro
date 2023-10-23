const apiController = {
    get: (req, res) => {
      res.json({ message: 'GET request successful' });
    },
    post: (req, res) => {
      const data = req.body;
      res.json({ message: 'POST request successful', data });
    },
  };
  
  module.exports = apiController;
  