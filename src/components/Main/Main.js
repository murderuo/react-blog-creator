import BlogForm from '../BlogForm/';
import BlogPostList from '../BlogPostList/';

function Main() {
  return (
    <>
      <div className="container mx-auto mt-3">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-md-12">
            <BlogForm />
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-md-12">
            <div className="row border">
              <BlogPostList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
