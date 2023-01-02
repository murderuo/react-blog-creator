import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@atlaskit/modal-dialog';

function BlogPostList() {
  const posts = useSelector(state => {
    console.log(state.blogposts);
    return state.blogposts;
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {posts.map(post => (
        <div
          className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto gx-0 mt-3"
          key={post.id}
        >
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
              <div className="mt-auto d-flex justify-content-evenly">
                <a href="#" className="btn btn-primary  ">
                  {post.user}
                </a>

                <a href="#" className="btn bg-success  ">
                  Comments:{post.comments.length}
                </a>
                <a className="btn bg-info " onClick={() => setIsOpen(true)}>
                  Open modal
                </a>
                {isOpen && (
                  <Modal
                    onClose={() => setIsOpen(false)}
                    shouldScrollInViewport={true}
                    height={800}
                  >
                    <div>
                      <ModalHeader>
                        <div className="d-flex w-100 justify-content-center">
                          <img
                            src={post.photo}
                            style={{
                              width: '200px',
                            }}
                            className="card-img-top"
                          />
                        </div>
                      </ModalHeader>
                      <ModalTitle>
                        <div className="d-flex justify-content-center mb-4">
                          {post.title}
                        </div>
                      </ModalTitle>
                      <ModalBody>{post.body}</ModalBody>
                      <ModalTitle>
                        <div className="mt-3 ms-4">Comments:</div>
                      </ModalTitle>
                      {post.comments.map(comment => (
                        <div
                          className="d-flex  flex-column bg-light p-2 rounded m-3"
                          key={post.id}
                        >
                          <div className="fw-bolder mb-2">{comment.email}</div>
                          <div className="">{comment.commentBody}</div>
                        </div>
                      ))}
                    </div>
                  </Modal>
                )}
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
