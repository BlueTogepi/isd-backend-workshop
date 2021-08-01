import { create, deleteId, editId, replyPost, viewAll, viewId } from '../controllers/post.controllers.js';
import { Router } from 'express';

const router = Router();

router.post('/post', create);
router.get('/posts', viewAll);
router.get('/post/:postId', viewId);
router.put('/post/:postId', editId);
router.delete('/post/:postId', deleteId);
router.post('/post/:postId/reply', replyPost);

export default router;