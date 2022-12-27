import BlogForm from '../BlogForm/BlogForm';
import BlogPostList from '../BlogPostList/';

function Main() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-md-12">
            <div className="border">
              <BlogForm />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-md-12">
            <div className="border">
              <BlogPostList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
