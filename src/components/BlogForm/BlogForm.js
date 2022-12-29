import { useFormik } from 'formik';
import { forwardRef, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import CustomReactSelect from '../CustomSelect/CustomSelect';
import axios from 'axios';
const baseURL = process.env.REACT_APP_JSON_URL;

function BlogForm() {
  const [data, setData] = useState({
    users: [],
    photos: [],
    titles: [],
    posts: [],
    comments: [],
  });
  const customAxios = axios.create({ baseURL });
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      // ftching users
      const { data: usersdata } = await customAxios.get('/users');
      const users = usersdata;
      // fetching photos
      const { data: photosdata } = await customAxios.get('/photos');
      const photos = photosdata.slice(0, 12);
      //fetching posts
      const { data: postdata } = await customAxios.get('/posts');
      const posts = postdata.slice(0, 13);
      // fetcing comments
      const { data: commentsdata } = await customAxios.get('/comments');
      const comments = commentsdata.slice(0, 10);
      // setting titles
      const titles = posts.map(post => ({ id: post.id, title: post.title }));

      // console.log(data);
      setData({ ...data, users, photos, posts, comments, titles });
    } catch (error) {
      // console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [multipleChoises, setMultipleChoises] = useState({
    usersmultiple: false,
    titlesmultiple: false,
    photosmultiple: false,
    postsmultiple: false,
    commentsmultiple: false,
  });

  const initialFormData = {
    userIsMultiple: false,
    users: '',
    photos: [],
    titles: [],
    postbodys: [],
    comments: [],
  };

  const valSchema = Yup.object({
    userIsMultiple: Yup.boolean(),
    users: Yup.mixed().when('userIsMultiple', {
      is: true,
      then: Yup.array()
        .min(2, 'en az 2 seçim yapmalısınız')
        .required('en az 2 seçim yapmalısınız'),
      otherwise: Yup.array()
        .min(1, 'en az 1 seçim yapmalısınız')
        .required('en az 1 seçim yapmalısınız'),
    }),
    // .min(1, 'en az bir seçim yapılmalı')
    // .required('Please select an user')
    // .nullable(),
    // photos: Yup,
    // title: Yup,
    // posts: Yup,
    // comments: Yup,
  });

  const { values, handleSubmit, setFieldValue, handleChange, errors } =
    useFormik({
      initialValues: initialFormData,
      onSubmit: values => {
        console.log(values);
        // console.log(valSchema);
      },
      validationSchema: valSchema,
    });

  // options section ---> start
  const userOptions = data.users.map(user => ({
    value: user.username,
    label: user.name,
  }));

  const photosOptions = data.photos.map(photo => ({
    value: photo.url,
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
    if (values.userIsMultiple === true) {
      setFieldValue(action.name, val);
    } else {
      const newValues = [val];
      setFieldValue(action.name, newValues);
    }
    console.log(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 border bg-light">
            <div className="row">
              <div className="col-12">
                <div className="p-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex justify-content-between">
                      {/* user fields */}
                      <label htmlFor="">Please Select User</label>
                      <div className="d-flex gap-2 align-content-center">
                        <label>Is Multi?</label>
                        <input
                          type="checkbox"
                          // onChange={() =>
                          //   setMultipleChoises({
                          //     ...multipleChoises,
                          //     usersmultiple: !multipleChoises.usersmultiple,
                          //   })
                          name="userIsMultiple"
                          id="userIsMultiple"
                          // onChange={
                          onChange={handleChange}
                          checked={values.userIsMultiple}
                        />
                      </div>
                    </div>
                    <CustomReactSelect
                      name="users"
                      value={{}}
                      options={userOptions}
                      onChange={(val, action) =>
                        handleSetFieldHandler(val, action)
                      }
                      multiple={values.userIsMultiple}
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
                      <div className="d-flex gap-2 align-content-center">
                        <label>Is Multi?</label>
                        <input
                          type="checkbox"
                          onChange={() =>
                            setMultipleChoises({
                              ...multipleChoises,
                              photosmultiple: !multipleChoises.photosmultiple,
                            })
                          }
                          checked={multipleChoises.photosmultiple}
                        />
                      </div>
                    </div>
                    <CustomReactSelect
                      name="photos"
                      value={{}}
                      options={photosOptions}
                      onChange={(val, action) =>
                        handleSetFieldHandler(val, action)
                      }
                      multiple={multipleChoises.photosmultiple}
                    />
                    <div>{errors.users && <div>{errors.users}</div>}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 border bg-light">
            <div className="row">
              <div>
                <div className="col-12">
                  <div className="p-3">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex justify-content-between">
                        {/* titlefields */}
                        <label htmlFor="">Please Select Title</label>
                        <div className="d-flex gap-2 align-content-center">
                          <label>Is Multi?</label>
                          <input
                            type="checkbox"
                            onChange={() =>
                              setMultipleChoises({
                                ...multipleChoises,
                                titlesmultiple: !multipleChoises.titlesmultiple,
                              })
                            }
                            checked={multipleChoises.titlesmultiple}
                          />
                        </div>
                      </div>
                      <CustomReactSelect
                        name="titles"
                        value={{}}
                        options={titlesOptions}
                        onChange={(val, action) =>
                          handleSetFieldHandler(val, action)
                        }
                        multiple={multipleChoises.titlesmultiple}
                      />
                      <div>{errors.users && <div>{errors.users}</div>}</div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex justify-content-between">
                        {/* postbodyfields */}
                        <label htmlFor="">Please Select post body</label>
                        <div className="d-flex gap-2 align-content-center">
                          <label>Is Multi?</label>
                          <input
                            type="checkbox"
                            onChange={() =>
                              setMultipleChoises({
                                ...multipleChoises,
                                postsmultiple: !multipleChoises.postsmultiple,
                              })
                            }
                            checked={multipleChoises.postsmultiple}
                          />
                        </div>
                      </div>
                      <CustomReactSelect
                        name="postbodys"
                        value={{}}
                        options={bodyOptions}
                        onChange={(val, action) =>
                          handleSetFieldHandler(val, action)
                        }
                        multiple={multipleChoises.postsmultiple}
                      />
                      <div>{errors.users && <div>{errors.users}</div>}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 border mx-auto bg-light">
            <div className="d-flex flex-column gap-2">
              <div className="d-flex justify-content-between">
                {/* commentsfields */}
                <label htmlFor="">Please Select comments</label>
                <div className="d-flex gap-2 align-content-center">
                  <label>Is Multi?</label>
                  <input
                    type="checkbox"
                    onChange={() =>
                      setMultipleChoises({
                        ...multipleChoises,
                        commentsmultiple: !multipleChoises.commentsmultiple,
                      })
                    }
                    checked={multipleChoises.commentsmultiple}
                  />
                </div>
              </div>
              <CustomReactSelect
                name="comments"
                value={{}}
                options={commentOptions}
                onChange={(val, action) => handleSetFieldHandler(val, action)}
                multiple={multipleChoises.commentsmultiple}
              />
              <div>{errors.users && <div>{errors.users}</div>}</div>
              <div className="mx-auto p-2">
                <button type="submit" className="p-2">
                  Create a fake Blog !
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default BlogForm;
