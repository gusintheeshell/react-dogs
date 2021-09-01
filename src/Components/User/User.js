import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader/UserHeader";
import UserPhotoPost from "./UserHeader/UserPhotoPost";
import UserStats from "./UserHeader/UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
