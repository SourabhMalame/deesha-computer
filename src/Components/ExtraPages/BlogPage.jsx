import React from 'react'

const BlogPage = () => {
    return (
        <div>
            <main>
                <div class="container my-3">
                    <div class="row">
                        <div class="col-md-8">
                            <article class="blog-post p-4 border rounded m-2">
                                <h2>Post Title 1</h2>
                                <p class="post-meta">Published on January 1, 2024 by Author Name</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                    Sed cursus ante dapibus diam.
                                </p>
                                <a href="blog/post1.html" class="btn btn-primary">Read More</a>
                            </article>

                            <article class="blog-post p-4 border rounded m-2">
                                <h2>Post Title 2</h2>
                                <p class="post-meta">Published on January 5, 2024 by Author Name</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                    Sed cursus ante dapibus diam.
                                </p>
                                <a href="blog/post2.html" class="btn btn-primary">Read More</a>
                            </article>

                        </div>

                        <div class="col-md-4 border rounded p-4 my-2">
                            <aside class="sidebar">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="#1">Web Development</a></li>
                                    <li><a href="#2">Data Science</a></li>
                                    <li><a href="#3">Cloud Computing</a></li>
                                </ul>

                                <h3>Recent Posts</h3>
                                <ul>
                                    <li><a href="#4">Post Title 1</a></li>
                                    <li><a href="#5">Post Title 2</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BlogPage
