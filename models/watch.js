const mongoose = require("mongoose")
const watchSchema = mongoose.Schema({
WatchId: String,
Watch_Price: {
    type: Number,
    min: 0,
    max: 5000
    },
Watch_Style: {
    type: String,
    minlength: 3,
    maxlength: 15
} 
})
module.exports = mongoose.model("watch",
watchSchema)