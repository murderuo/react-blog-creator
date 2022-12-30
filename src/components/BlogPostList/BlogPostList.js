import { useSelector } from 'react-redux';

function BlogPostList() {
  const posts = useSelector(state => {
    console.log(state.blogposts);
    return state.blogposts;
  });

  return (
    <>
      {posts.map(post => (
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto gx-0 mt-3">
          {/* <div className="d-flex border "> */}
            <div className="card p-3 h-100">
              <img src={post.photo} className="card-img-top"></img>
              <div className="card-body d-flex flex-column ">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                {/* <div className="d-flex justify-content-center  border ">
                  <a href="#" className="btn btn-primary align-self-end ">
                    {post.id}
                  </a>
                </div> */}
                <div className="h-100  d-flex justify-content-center align-items-end">
                  <a href="#" className="btn btn-primary  ">
                    {post.id}
                  </a>
                  
                  <a href="#" className="btn bg-success  ">
                    Comments:{post.comments.length}
                  </a>

                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      ))}
    </>
  );
}

export default BlogPostList;
