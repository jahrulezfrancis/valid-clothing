import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";
import {
  ProfileBody,
  ProfileContainer,
  ProfileImage,
  PictureSection,
  ClassicHeading,
} from "./Profile.styles";
import TransactionHistoryTable from "../../TransactionHistory/TransactionHistoy.component";

export default function ProfilePage() {
  const currentUser = useSelector(selectCurrentUser);
  const [loadUser, setLoadUser] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadUser(true);
    }, 1000);
  }, []);

  return (
    <ProfileContainer>
      {loadUser && (
        <>
          <PictureSection>
            <ProfileImage
              src={currentUser.photoURL}
              alt={currentUser.displayName}
            />
            <ClassicHeading>{currentUser.displayName}</ClassicHeading>
          </PictureSection>
          <hr />
          <ProfileBody>
            <h5>Name: {currentUser.displayName}</h5>
            <h5>Email: {currentUser.email}</h5>
            <h5>Phone Number: {currentUser.phoneNumber}</h5>
          </ProfileBody>
          <h2>Your Purchase history</h2>
          <TransactionHistoryTable />
        </>
      )}
    </ProfileContainer>
  );
}
