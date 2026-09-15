const multer = require("multer")


const upload = multer({
    storage: multer.memoryStorage(), //do not store the uploaded in disk, Store the file temporarily in the server's memory(RAM)
    limits: {
        fileSize: 3 * 1024 * 1024 // 3MB size max
    }
})


module.exports = upload