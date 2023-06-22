const AlbumSchema = require("./model");

const createAlbum = async (req, res) => {
  try {
    const { id, name, currentPage, pages} = req.body;

    const user = new Album({
      id: id,
      name: name,
      currentPage: currentPage,
      pages: pages
    });

    const doc = await user.save();

    res.status(200).send(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAlbum = async (req, res) => {
  try{
    const { id } = req.params

    const results = await AlbumSchema.find({ _id: id })
    
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

    res.status(200).json(album);

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
