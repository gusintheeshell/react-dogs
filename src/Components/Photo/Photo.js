import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../Services/api';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Helper/Error/Error';
import Loading from '../../Helper/Loading/Loading';
import PhotoContent from '../Photo/PhotoContent/PhotoContent';
import Head from '../../Helper/Head/Head';

function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
}

export default Photo;
