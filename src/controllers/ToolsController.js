const Tools = require('../models/Tools')

exports.store = async (req, res) => {
    const { title, link, description, tags } = req.body

    if (!title || !link || !description || !tags) {
        return res.status(400).json({
            error: 'verify inputs'
        })
    }

    const tools = await Tools.create(req.body)
    return res.status(201).json(tools)
}

exports.getAll = async (req, res) => {
    const tools = await Tools.find()

    const { tag } = req.query
    if (tag) {
        const tool = await Tools.find({ tags: tag })
        return res.status(200).json(tool)
    }

    return res.status(200).json(tools)
}

exports.remove = async (req, res) => {
    const { id } = req.params

    await Tools.findByIdAndDelete(id, (error, tool) => {
        if (error || tool === null) {
            return res.status(400).json({
                error: 'tool not found'
            })
        }

        return res.status(200).json({})
    })

}

exports.getToolWithTag = async (req, res) => {
    const { tag } = req.query

    const tool = await Tools.find({ tags: tag })

    return res.status(200).json(tool)
}
