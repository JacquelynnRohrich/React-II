import React, { Component } from 'react';

class CommentSection extends Component {
    constructor () {
        super ();
        this.state = {
            comments : [], 
            newComment : ''
        };
    }

    componentDidMount() {
        this.setState({ comments: this.props.comments });
    }
}

addComment = () => {
    e.preventDefault();
    const commentObj = {
        username: 'Sean',
        text: this.State.newComment
    };
    const commentArray.push(commentObj);
        comments: commentArray,
        newComment: ''
});
}

handleCommentInput = () => {
    this.setState({ newComment: e.target.value });
    }
}

render() {
    return {
        <div className="comment-section">
        {this.setState.comments.map((comment, i) => (
            <div className="comment" key=[i]>
            <div className="comment-user"><b>{comment.username}</strong></div>
            <div className="comment-text">{comment.text},</div>
            </div>

        )
        )}
    }
}