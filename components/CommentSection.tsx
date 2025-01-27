"use client"

import { useState } from "react"

interface Comment {
  id: number
  author: string
  content: string
  createdAt: string
}

export default function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() && author.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: author.trim(),
        content: newComment.trim(),
        createdAt: new Date().toISOString(),
      }
      setComments([...comments, comment])
      setNewComment("")
      setAuthor("")
    }
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-pink-800 mb-4">Comments</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              Comment
            </label>
            <textarea
              id="comment"
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
          >
            Post Comment
          </button>
        </form>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b pb-4">
              <p className="font-semibold">{comment.author}</p>
              <p className="text-gray-600">{comment.content}</p>
              <p className="text-sm text-gray-400 mt-1">{new Date(comment.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

