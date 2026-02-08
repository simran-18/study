import { useState } from "react";
function CommentBox({ data, updateComments }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(data?.comment);
    const [showReply, setShowReply] = useState(false);
    const [replyText, setReplyText] = useState("");
    const updateCommentTree = (comments, commentId, callback) => {
        return comments.map((comment) => {
            if (comment.id === commentId) {
                return callback(comment);
            }
            if (comment.reply && comment.reply.length > 0) {
                return {
                    ...comment,
                    reply: updateCommentTree(comment.reply, commentId, callback)
                }
            }
            return comment;
        })
    }
    function handleDeleteNode(comments, id) {
        return comments.filter(comment => comment.id !== id).map((child) => ({
            ...child,
            reply: handleDeleteNode(child.reply || [], id)
        }))
    }
    function handleDelete() {
        updateComments(prev => handleDeleteNode(prev, data.id))
    }
    function handleAddComment() {
        const newReply = {
            id: Date.now(),
            username: "You",
            comment: replyText,
            likes: 0,
            reply: []
        };
        updateComments(prev => {
            return updateCommentTree(prev, data.id, comment => ({
                ...comment,
                reply: [...(comment.reply || []), newReply]
            }))
        })
        setReplyText("");
        setShowReply(false);
    }
    function handleLike() {
        updateComments(prev => updateCommentTree(prev, data.id, comment => ({
            ...comment,
            likes: comment.likes + 1
        }))
        )
        setIsEditing(false)
    }
    function handleEditSave() {
        updateComments(prev => updateCommentTree(prev, data.id, comment => ({
            ...comment,
            comment: editText
        }))
        )
        setIsEditing(false)
    }
    return (
        <div style={{
            paddingLeft: "1rem",
            border: '1px solid red',
            margin: '1rem'
        }}>
            <p style={{ fontSize: "1rem" }}>{data.username}</p>
            <button onClick={handleLike}>{data.likes}</button>
            {
                isEditing ?
                    <div>
                        <input
                            value={editText}
                            style={{ padding: '0.5rem' }}
                            onChange={e => setEditText(e.target.value)} />
                        <button onClick={handleEditSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div> : <h1 style={{ fontSize: "1rem" }}>{data.comment}</h1>
            }

            <div className="flex gap-2 text-sm my-1">
                <button onClick={() => setShowReply(prev => !prev)}>Reply</button>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
            {showReply && (
                <div className="flex gap-2 my-2">
                    <input
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                        placeholder="Reply..."
                        style={{ padding: '0.5rem', margin: '1rem' }}

                    />
                    <button onClick={handleAddComment}>Submit</button>
                </div>
            )}

            {data?.reply?.map((child) => {
                return <CommentBox key={child.id}
                    data={child}
                    updateComments={updateComments}
                />
            })}
        </div>
    )
}

export default CommentBox