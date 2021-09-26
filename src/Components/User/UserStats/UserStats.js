import React, { useEffect } from 'react';
import Head from '../../../Helper/Head/Head';
import Loading from '../../../Helper/Loading/Loading';
import Error from '../../../Helper/Error/Error';
import UserStatsGraphs from '../UserStatsGraphs/UserStatsGraphs';
import useFetch from '../../../Hooks/useFetch';
import { STATS_GET } from '../../../Services/api';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      const { json } = await request(url, options);
      console.log(json);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Stats" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
