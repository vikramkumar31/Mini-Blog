import React from 'react'

const Blog = ({ params }) => {
    const { blogId } = params;
    if (blogId > 5) {

        // Render the error page by throwing an error
        throw new Error("Blog not found or Invalid Id")

    }

    return (
        <div>Blog {blogId} details</div>
    )

}

export default Blog