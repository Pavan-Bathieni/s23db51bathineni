const mongoose = require("mongoose")
const watchSchema = mongoose.Schema({
WatchId: String,
Watch_Price: Number,
Watch_Style: String
})
module.exports = mongoose.model("watch",
watchSchema)