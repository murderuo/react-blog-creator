import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import CustomReactSelect, { userOptions } from '../CustomSelect/CustomSelect';

function BlogForm() {
  const [multipleChoises, setMultipleChoises] = useState({
    usersmultiple: false,
    titlesmultiple: false,
    photosmultiple: false,
    postsmultiple: false,
    commentsmultiple: false,
  });

  const initialFormData = {
    users: [],
    photos: [],
    title: [],
    posts: [],
    comments: [],
  };

  const valSchema = Yup.object({
    users: Yup.array()
      .min(1, 'en az bir seçim yapılmalı')
      .required('Please select an user')
      .nullable(),
  });

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: initialFormData,
    onSubmit: values => {
      console.log(values);
      // console.log(valSchema);
    },
    validationSchema: valSchema,
  });

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
                          onChange={() =>
                            setMultipleChoises({
                              ...multipleChoises,
                              usersmultiple: !multipleChoises.usersmultiple,
                            })
                          }
                          checked={multipleChoises.usersmultiple}
                        />
                      </div>
                    </div>
                    <CustomReactSelect
                      name="users"
                      // value={values?.users}
                      options={userOptions}
                      onChange={val => {
                        setFieldValue('users', val);
                        console.log(val);
                      }}
                      multiple={multipleChoises.usersmultiple}
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
                      value={values?.users}
                      options={userOptions}
                      onChange={val => {
                        setFieldValue('users', val);
                        console.log(val);
                      }}
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
                        value={values?.users}
                        options={userOptions}
                        onChange={val => {
                          setFieldValue('users', val);
                          console.log(val);
                        }}
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
                        value={values?.users}
                        options={userOptions}
                        onChange={val => {
                          setFieldValue('users', val);
                          console.log(val);
                        }}
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
                value={values?.users}
                options={userOptions}
                onChange={val => {
                  setFieldValue('users', val);
                  console.log(val);
                }}
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
