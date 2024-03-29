import express from 'express'
import { getPosts, createPost, deletePost,updatePost,likePost } from '../controllers/posts.controller.js'
const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.delete('/', deletePost)
router.patch('/:id', updatePost)
router.patch('/:id/likePost', likePost)
export default router