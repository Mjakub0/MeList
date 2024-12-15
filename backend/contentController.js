const contentController = {
    createContent: (req, res) => {
      res.json({
        message: "Content created successfully",
        data: req.body,
        uuAppErrorMap: {},
      });
    },
  
    getContent: (req, res) => {
      res.json({
        message: "Content retrieved successfully",
        data: { id: req.params.id, title: "Sample Title", body: "Sample Body", tags: ["example"] },
        uuAppErrorMap: {},
      });
    },
  
    updateContent: (req, res) => {
      res.json({
        message: "Content updated successfully",
        data: req.body,
        uuAppErrorMap: {},
      });
    },
  
    deleteContent: (req, res) => {
      res.json({
        message: "Content deleted successfully",
        data: { id: req.body.id },
        uuAppErrorMap: {},
      });
    },
  };
  
  module.exports = contentController;
  