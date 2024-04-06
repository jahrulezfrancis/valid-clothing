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
import { FaPowerOff } from "react-icons/fa";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import { useNavigate, Navigate } from "react-router-dom";

export default function ProfilePage() {
  const currentUser = useSelector(selectCurrentUser);
  const [loadUser, setLoadUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoadUser(true);
    }, 1000);
  }, []);

  function handleLogout() {
    signOutUser();
    navigate("/auth");
  }

  return (
    currentUser ?
      <ProfileContainer>
        {loadUser && (
          <>
            <PictureSection>
              <div
                style={{ display: "flex", flexDirection: "column", width: "50%" }}
              >
                <ProfileImage
                  src={currentUser.photoURL}
                  alt={currentUser.displayName}
                />
                <ClassicHeading>{currentUser.displayName}</ClassicHeading>
              </div>
              <FaPowerOff
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
                fontSize={30}
                color="red"
              />
            </PictureSection>
            <hr />
            <ProfileBody>
              <h5>Name: {currentUser.displayName !== null ? currentUser.displayName : "Not provided, kindly update your profile"}</h5>
              <h5>Email: {currentUser.email}</h5>
              <h5>Phone Number: {currentUser.phoneNumber !== null ? currentUser.phoneNumber : "Not provided, kindly update your profile"}</h5>
            </ProfileBody>
            <h2>Your Purchase history</h2>
            <TransactionHistoryTable />
          </>
        )}
      </ProfileContainer> :
      <Navigate to="/auth" replace="true" />
  );
}
