import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import CustomReactSelect from '../CustomSelect/CustomSelect';
import { valSchema } from '../Schema/validationSchema';
import { fetchData } from '../DataFetcher/DataFetcher';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/blogSlice';

function BlogForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    users: [],
    photos: [],
    titles: [],
    posts: [],
    comments: [],
  });
  const [error, setError] = useState('');

  const getData = async () => {
    const { users, photos, posts, comments, titles } = await fetchData();
    setData({ ...data, users, photos, posts, comments, titles });
  };
  useEffect(() => {
    try {
      getData();
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }, []);

  const initialFormData = {
    users: [],
    photos: [],
    titles: [],
    postBodyIsMultiple: false,
    postsBody: [],
    commentsIsMultiple: false,
    comments: [],
  };

  const {
    values,
    handleSubmit,
    handleReset,
    setFieldValue,
    handleChange,
    errors,
  } = useFormik({
    initialValues: initialFormData,
    onSubmit: values => {
      console.log(values);
      dispatch(addPost(values));
      // console.log(valSchema);
      handleReset();
    },
    validationSchema: valSchema,
  });

  // options section ---> start
  const userOptions = data.users.map(user => ({
    value: user.username,
    label: user.name,
  }));
  const photosOptions = data.photos.map(photo => ({
    value: photo.thumbnailUrl,
    label: [`title: ${photo.title}`, ` ${photo.url}`],
  }));
  const titlesOptions = data.titles.map(title => ({
    value: `${title.id}-${title.title}`,
    label: title.title,
  }));
  const bodyOptions = data.posts.map(post => ({
    value: post.body,
    label: `id:${post.id} body:${post.body}`,
  }));
  const commentOptions = data.comments.map(comment => ({
    value: `${comment.name}-${comment.email}`,
    label: `${comment.email}-${comment.name}`,
  }));
  // options section ---> end

  const handleSetFieldHandler = (val, action) => {
    setFieldValue(action.name, [val]);
    console.log(values.users);
  };
  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 border bg-light">
            <div className="row">
              <div className="col-12">
                <div className="p-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex justify-content-between">
                      {/* user fields */}
                      <label htmlFor="">Please Select User</label>
                    </div>
                    <CustomReactSelect
                      name="users"
                      value={{}}
                      options={userOptions}
                      onChange={(val, action) =>
                        handleSetFieldHandler(val, action)
                      }
                    />
                    <div>{errors.users && <div>{errors.users}</div>}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="p-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex justify-content-between">
                      {/* photos fields */}
                      <label htmlFor="">Please Select Photos</label>
                    </div>
                    <CustomReactSelect
                      name="photos"
                      value={{}}
                      options={photosOptions}
                      onChange={(val, action) =>
                        handleSetFieldHandler(val, action)
                      }
                    />
                    <div>{errors.photos && <div>{errors.photos}</div>}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 border bg-light">
            <div className="row">
              <div className="col-12">
                <div className="p-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex justify-content-between">
                      {/* titlefields */}
                      <label htmlFor="">Please Select Title</label>
                    </div>
                    <CustomReactSelect
                      name="titles"
                      options={titlesOptions}
                      onChange={(val, action) =>
                        handleSetFieldHandler(val, action)
                      }
                    />
                    <div>{errors.titles && <div>{errors.titles}</div>}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="p-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex justify-content-between">
                      {/* postbodyfields */}
                      <label htmlFor="">Please Select post bodys</label>
                      <div className="d-flex gap-2 align-content-center">
                        <label>Is Multi?</label>
                        <input
                          id="postBodyIsMultiple"
                          name="postBodyIsMultiple"
                          type="checkbox"
                          onChange={handleChange}
                          checked={values.postBodyIsMultiple}
                        />
                      </div>
                    </div>
                    <CustomReactSelect
                      name="postsBody"
                      options={bodyOptions}
                      onChange={(val, action) => {
                        if (values.postBodyIsMultiple === true) {
                          setFieldValue(action.name, val);
                        } else {
                          setFieldValue(action.name, [val]);
                        }
                      }}
                      multiple={values.postBodyIsMultiple}
                    />
                    <div>
                      {errors.postsBody && <div>{errors.postsBody}</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 border mx-auto bg-light">
            <div className="d-flex flex-column gap-2 p-3">
              <div className="d-flex justify-content-between">
                {/* commentsfields */}
                <label htmlFor="">Please Select comments</label>
                <div className="d-flex gap-2 align-content-center">
                  <label>Is Multi?</label>
                  <input
                    id="commentsIsMultiple"
                    name="commentsIsMultiple"
                    type="checkbox"
                    onChange={handleChange}
                    checked={values.commentsIsMultiple}
                  />
                </div>
              </div>
              <CustomReactSelect
                name="comments"
                options={commentOptions}
                onChange={(val, action) => {
                  if (values.commentsIsMultiple === true) {
                    setFieldValue(action.name, val);
                  } else {
                    setFieldValue(action.name, [val]);
                  }
                }}
                multiple={values.commentsIsMultiple}
              />
              <div>{errors.comments && <div>{errors.comments}</div>}</div>
              <div className="mx-auto p-2">
                <button type="submit" className="p-2">
                  Create a fake Blog !
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default BlogForm;
