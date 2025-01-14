/**
 * @function toggleLike
 * @author Raymond Ndibe <ndiberaymond1@gmail.com>
 *
 * @todo - describe function's signature
 */
export const toggleLike = (e, id, props) => {
  e.preventDefault();
  if (!props.auth.token) {
    props.history.push('/login');
  } else {
    const toggle_like_promise = props.toggleLike({
      id,
      token: props.auth.token,
    });
    props.updateProjects(toggle_like_promise);
  }
};

/**
 * @function toggleSave
 * @author Raymond Ndibe <ndiberaymond1@gmail.com>
 *
 * @todo - describe function's signature
 */
export const toggleSave = (e, id, props) => {
  e.preventDefault();
  if (!props.auth.token) {
    props.history.push('/login');
  } else {
    const toggle_save_promise = props.toggleSave({
      id,
      token: props.auth.token,
      t: props.t,
    });
    props.updateProjects(toggle_save_promise);
  }
};
