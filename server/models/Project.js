const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        require,
    },
    description: {
        type: String,
        require,
    },
    technologies: {
        type: Array,
    },
    github: {
        type: String,
    },
    liveLink: {
        type: String, 
        require,
    }
}, {timestamps: true});

const Project = mongoose.model("Project", ProjectSchema);

mondule.exports = Project;