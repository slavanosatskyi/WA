import * as React from 'react';

import { CommentsList } from './CommentsList.jsx';
import { CreateCommentSection } from './CreateCommentSection.jsx';
export class Comments extends React.Component {
  render() {
    return <div className="Comments">
        <CommentsList />
        <CreateCommentSection />
    </div>
  }
}