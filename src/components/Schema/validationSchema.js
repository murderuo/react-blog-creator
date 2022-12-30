import * as Yup from 'yup';

export const valSchema = Yup.object({
  users: Yup.array().min(1, 'en az 1 seçim yapmalısınız').required('Gerekli'),
  photos: Yup.array().min(1, 'en az 1 seçim yapmalısınız').required('Gerekli'),
  titles: Yup.array().min(1, 'en az 1 seçim yapmalısınız').required('Gerekli'),
  postBodyIsMultiple: false,
  postsBody: Yup.mixed().when('postBodyIsMultiple', {
    is: true,
    then: Yup.array()
      .min(2, 'en az 2 seçim yapmalısınız')
      .required('en az 2 seçim yapmalısınız'),
    otherwise: Yup.array()
      .min(1, 'en az 1 seçim yapmalısınız')
      .max(1, 'Yeniden seçim yapınız')
      .required('en az 1 seçim yapmalısınız'),
  }),
  commentsIsMultiple: Yup.boolean(),
  comments: Yup.mixed().when('commentsIsMultiple', {
    is: true,
    then: Yup.array()
      .min(2, 'en az 2 seçim yapmalısınız')
      .required('en az 2 seçim yapmalısınız'),
    otherwise: Yup.array()
      .min(1, 'en az 1 seçim yapmalısınız')
      .max(1, 'Yeniden seçim yapınız')
      .required('en az 1 seçim yapmalısınız'),
  }),
});
