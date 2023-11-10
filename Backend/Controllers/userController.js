const showSingleUser = (req, res) => {
  res.json({
    success: true,
    message: `Hello, Mr. Samrat`,
  });
};


module.exports = { showSingleUser };
