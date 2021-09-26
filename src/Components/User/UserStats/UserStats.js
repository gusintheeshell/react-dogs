import React, { useEffect, lazy, Suspense } from 'react';
import Head from '../../../Helper/Head/Head';
import Loading from '../../../Helper/Loading/Loading';
import Error from '../../../Helper/Error/Error';
import useFetch from '../../../Hooks/useFetch';
import { STATS_GET } from '../../../Services/api';
const UserStatsGraphs = lazy(() =>
  import('../UserStatsGraphs/UserStatsGraphs')
);

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Stats" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;
