const { Tweet, User, Like } = require('../models')
const adminController = {
    getTweets: (req, res, next) => {
        Tweet.findAll({
            include: [User],
            raw: true,
            nest: true
        })
        .then(tweets => {
            const maxLength = 50
            tweets = tweets.map(tweet => ({
                ...tweet,
                description: tweet.description.slice(0, maxLength)
            }))
            res.render('admin/tweets', { tweets })
        })
        .catch(err => next(err))
    },
    getUsers: (req, res, next) => {
        return Promise.all([
            User.findAll({
            include: [{ model: Tweet }, { model: User, as: 'Followers' }, { model: User, as: 'Followings' }],
            where: { role: 'user' },
            nest: true
            }),
            Like.findAll
    ])

        
        .then(users => {
            users = users.map(user => ({
                ...user.toJSON(),
                tweetsCount: user.Tweets.length,
                Followers: user.Followers.length,
                Followings: user.Followings.length
            }))
            console.log(users)
            res.render('admin/users', { users })
        })
    }
}

module.exports = adminController