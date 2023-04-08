const AsyncHandler = require("express-async-handler");

const Project = require("../models/Project");

const getAllProjects = AsyncHandler(async (req, res) => {
    const projects = await Project.find();

    if(!projects) return res.status(404).json({error: "No projects found."});

    return res.status(200).json(projects);
});

const addProject = AsyncHandler(async (req, res) => {
    const {name, description, technologies, github, liveLink} = req.body;

    if(!name || !description || !liveLink) return res.status(400).json({error: "Project name, description, and live link are all required."});

    const project = await Project.create({
        name,
        description,
        liveLink,
        technologies: technologies || null,
        github: github || null,
    });

    if(!project) return res.status(400).json({error: "Bad request."});

    return res.status(201).json(project);
});

const updateProject = AsyncHandler(async (req, res) => {
    const {name, description, technologies, github, liveLink} = req.body;

    const { id } = req.params;

    if(!name || !description || !liveLink) return res.status(400).json({error: "Project name, description, and live link are all required."});

    const project = await Project.findByIdAndUpdate(id,{
        name,
        description,
        liveLink,
        technologies: technologies || null,
        github: github || null,
    }, {new: true});

    if(!project) return res.status(400).json({error: "Bad request."});

    return res.status(200).json(project);
});

const deleteProject = AsyncHandler(async (req, res) => {
    const {id} = req.params;

    const project = await Project.findByIdAndDelete(id);

    if(!project) return res.status(404).json({error: "Project not found."});

    return res.status(200).json(project);

});

module.exports = {
    getAllProjects,
    addProject,
    updateProject,
    deleteProject,
}