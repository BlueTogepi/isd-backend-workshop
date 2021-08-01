import moment from 'moment';

let countId = 1;
const postsArr = [];

export const create = (req, res) => {
    const {body} = req.body;
    const post = {
        postId: countId.toString(),
        body: body,
        lastEdited: moment(),
        replies: []
    };
    countId++;
    postsArr.push(post);
    res.json({
        postId: post.postId,
        body: body,
        lastEdited: post.lastEdited
    });
};

export const viewAll = (req, res) => {
    const {search} = req.query;
    const posts = postsArr.filter((p) => 
        p.body.includes(search ? search : "")
    ).map((p) => {
        return {
            postId: p.postId,
            body: p.body,
            lastEdited: p.lastEdited
        };
    });
    res.json(posts);
};

export const viewId = (req, res) => {
    const {postId} = req.params;
    const post = postsArr.find((p) => 
        p.postId === postId
    );
    res.json(post);
};

export const editId = (req, res) => {
    const {postId} = req.params;
    const {body} = req.body;
    const post = postsArr.find((p) =>
        p.postId === postId
    );
    post.body = body;
    post.lastEdited = moment();
    res.json({
        postId: post.postId,
        body: post.body,
        lastEdited: post.lastEdited
    });
};

export const deleteId = (req, res) => {
    const {postId} = req.params;
    const ind = postsArr.findIndex((p) =>
        p.postId === postId
    );
    let post = {};
    if (ind > -1) {
        post = postsArr[ind];
        postsArr.splice(ind, 1);
    }
    res.json(post);
};

export const replyPost = (req, res) => {
    const {postId} = req.params;
    const {replyBody} = req.body;
    const post = postsArr.find((p) => 
        p.postId === postId
    );
    post.replies.push({body: replyBody});
    res.json(post);
};