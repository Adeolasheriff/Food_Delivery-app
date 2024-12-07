const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'dzttwbrfb', 
    api_key: '857856617746992', 
    api_secret: 'xy30n6wJMqnrQIV1XeOAamxNQaE'
});

const ImageUpload =  async (req,res) => {
    try {
        const result = await cloudinary.uploader.upload(req.files.image.path)
        res.json({
            url:result.secure_url,
            public_id: result.public_id
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
        
    }
}

module.exports = ImageUpload;