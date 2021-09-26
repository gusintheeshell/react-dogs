import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader/UserHeader';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats/UserStats';
import NotFound from '../NotFound';
import Head from '../../Helper/Head/Head';

const User = () => {
  const { data } = useSelector((state) => state.user);

  return (
    <section className="container">
      <Head title="My account" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
