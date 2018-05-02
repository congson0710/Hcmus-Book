module.exports = app => {
  app.post('/api/upload', function(req, res) {
    console.log(req.files);
    // if (!req.files) return res.status(400).send('No files were uploaded.');

    // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // let sampleFile = req.files.sampleFile;

    // // Use the mv() method to place the file somewhere on your server
    // sampleFile.mv(`/upload-here/${req.files[0].name}`);
  });
};
