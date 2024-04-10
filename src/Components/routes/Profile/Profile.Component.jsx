import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";
import {
  ProfileBody,
  ProfileContainer,
  ProfileImage,
  PictureSection,
  ClassicHeading,
  CustomInput,
  FluidContainer,
} from "./Profile.styles";
import TransactionHistoryTable from "../../TransactionHistory/TransactionHistoy.component";
import { FaPowerOff } from "react-icons/fa";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import { useNavigate, Navigate } from "react-router-dom";
import Button from "../../Button/buttton.component";

export default function ProfilePage() {
  const currentUser = useSelector(selectCurrentUser);
  const [editMode, setEditMode] = useState(false)
  const [loadUser, setLoadUser] = useState(false);
  const [profileImage, setProfileImage] = useState()
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

  function handleProfileUpdate() {
    console.log("Profile update is in progress " + profileImage)
    setEditMode(false)
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
                {
                  currentUser.photoURL !== null ?
                    <ProfileImage
                      src={currentUser.photoURL}
                      alt={currentUser.displayName}
                    />
                    :
                    <div style={{ display: "flex", width: "150px", height: "150px", flexDirection: "column" }}>
                      <h4>Upload your profile picture</h4>
                      <input style={{ paddingBottom: "10px" }} onChange={(e) => setProfileImage(e.target.files)} type="image" accept="*" name="profilePicture" alt={currentUser.emil} />
                      <Button>Update</Button>
                    </div>
                }
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
              {editMode ? <FluidContainer>Name: <CustomInput label="Display name" type="text" /> </FluidContainer> :
                <h5>Name: {currentUser.displayName !== null ? currentUser.displayName : "Not provided, kindly update your profile"}</h5>
              }
              <h5>Email: {currentUser.email}</h5>
              {editMode ? <FluidContainer>Phone number: <CustomInput maxLength={11} label="Phone Number" type="text" /> </FluidContainer> :
                <h5>Phone Number: {currentUser.phoneNumber !== null ? currentUser.phoneNumber : "Not provided, kindly update your profile"}</h5>
              }
              {editMode ? <Button style={{marginTop: "20px"}} onClick={handleProfileUpdate}>Save</Button> : <Button onClick={setEditMode}>Edit profile</Button>}
            </ProfileBody>
            <h2>Your Purchase history</h2>
            <TransactionHistoryTable />
          </>
        )}
      </ProfileContainer> :
      <Navigate to="/auth" replace="true" />
  );
}