const { Tweet, User, Reply, Like, Followship } = require('../models')
const adminController = {
    getTweets: (req, res, next) => {
        Tweet.findAll({
            include: [User],
            raw: true,
            nest: true
        })
        .then(tweets => res.render('admin/tweets', tweets))
        .catch(err => next(err))
    },
    getUsers: (req, res, next) => {
        res.render('admin/users')
    }
}

module.exports = adminController