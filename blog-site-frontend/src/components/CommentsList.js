const CommentsList = ({ comments }) => (
    <>
        <h3>Comments:</h3>
        {
            comments.map((comment, id) => (
                <div className="comment" key={id}>
                    <h4>{comment.postedBy}</h4>
                    <p>{comment.text}</p>
                </div>
            ))
        }
    </>
);

export default CommentsList;