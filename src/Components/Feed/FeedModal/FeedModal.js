import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../../Helper/Error/Error';
import Loading from '../../../Helper/Loading/Loading';
import { fetchPhoto } from '../../../Store/photo';
import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [dispatch, photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
