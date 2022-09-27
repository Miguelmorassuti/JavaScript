const {
    withCallbacks: {
        authenticate,
        listPosts,
        getPost,
    }
} = require('../helpers/social-media')

const firstPost = (username, password, callback) => {
    authenticate(username, password, (errorAuth, token) => {
        if (errorAuth) {
            callback(errorAuth)
            return
        }

        listPosts(token, (errorList, posts) => {
            if (errorList) {
                callback(errorList)
                return
            }

        const firstPostId = posts[0].id
        getPost(token, firstPostId, (errorPost, post) => {
            if (errorPost) {
                callback(errorPost)
                return
            }

            // POST
            callback(undefined, post)
        })
        })
    })
}

firstPost('staart', 'nodelife', (error, post) => {
    if (error) {
        console.log("Deu ruim campeão", error)
        return
    }
    console.log("Temos o Post")
    console.log(post)
})

