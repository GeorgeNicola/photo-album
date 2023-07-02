const AlbumSchema = require("./model");

const createAlbum = async (req, res) => {
  try {
    //Copy the Default Album
    const defaultAlbum = await AlbumSchema.findOne({ name: "Default Album" })
    let defaultAlbumObject = defaultAlbum.toObject();
    defaultAlbumObject.name = "New Album";
    delete defaultAlbumObject._id;


    const newAlbum = new AlbumSchema(defaultAlbumObject);
    const doc = await newAlbum.save();

    res.status(200).send(doc);

  } catch (error) {
    res.status(400).json(error);
  }
};

const getAlbum = async (req, res) => {
  try{
    const { id } = req.params

    const results = await AlbumSchema.findOne({ _id: id })
    
    res.json(results);

  } catch(error) {
    res.status(400).json({ error })
  }
};

const updateAlbum = async (req, res) => {
  try{
    const { id } = req.params
    const { album } = req.body

    const options = {
      upsert: true
    }
  
    const results = await AlbumSchema.findOneAndReplace({ _id: id }, album, options)

    res.status(200).json(results);

  } catch(error) {
    res.status(400).json({ error })
  }

};

const getAllAlbums = async (req, res) => {
  const results = await AlbumSchema.find().catch((error) =>
    res.status(400).json({ error })
  );
  res.json(results);
};

module.exports = {
  createAlbum: createAlbum,
  getAlbum: getAlbum,
  updateAlbum: updateAlbum,
  getAllAlbums: getAllAlbums,
};
