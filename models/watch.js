const mongoose = require("mongoose")
const watchSchema = mongoose.Schema({
WatchId: String,
Watch_Price: {
    type: Number,
    min: 0,
    max: 5000
    },
Watch_Style: String
})
module.exports = mongoose.model("watch",
watchSchema)