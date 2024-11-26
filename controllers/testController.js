const testUserController = (req, res) => {
    try {
        res.status(200).send("<h1>User Test successfully<h1>")
    } catch (error) {
        console.log('error', error)
    }
}

module.exports = { testUserController }