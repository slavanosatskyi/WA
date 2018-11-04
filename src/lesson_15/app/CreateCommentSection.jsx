import * as React from 'react';

export class CreateCommentSection extends React.Component {
    render() {
        return <form onSubmit={this.props.onSubmit}>
            <h2>New comment:</h2>
            <textarea
                onChange={this.props.onChange}
                cols="30"
                rows="10">
            </textarea>
            <div>
                <button type="submit">Add comment</button>
            </div>
        </form>;
    }
}