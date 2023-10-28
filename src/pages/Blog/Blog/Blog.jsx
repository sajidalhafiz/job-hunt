import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import QnA from '../QnA/QnA';

const Blog = () => {
    document.title = 'Job Hunt - Blog';

    return (
        <div>
            <PageTitle>Question & Answer Blog</PageTitle>
            <QnA></QnA>
        </div>
    );
};

export default Blog;