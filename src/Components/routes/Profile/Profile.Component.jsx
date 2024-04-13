import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";
import {
  ProfileBody,
  ProfileContainer,
  ProfileImage,
  CustomInput,
  FluidContainer,
  LeftSidebar,
} from "./Profile.styles";
import TransactionHistoryTable from "../../TransactionHistory/TransactionHistoy.component";
import { FaPowerOff } from "react-icons/fa";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import { useNavigate, Navigate } from "react-router-dom";
import Button from "../../Button/buttton.component";
import DefaultProfilePicture from "../../../Assets/dummt-user-image.jpg"

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
            <LeftSidebar >
              <div
                style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}
              >
                <ProfileImage
                  src={currentUser.photoURL !== null ? currentUser.photoURL : DefaultProfilePicture}
                  alt={currentUser.displayName}
                />

                {editMode &&
                  <div style={{ display: "flex", width: "150px", height: "150px", flexDirection: "column" }}>
                    <h4>Upload your profile picture</h4>
                    <input style={{ paddingBottom: "10px" }} onChange={(e) => setProfileImage(e.target.files)} type="image" accept="*" name="profilePicture" alt={currentUser.emil} />
                    <Button>Update</Button>
                  </div>
                }

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <h3>Logout</h3>
                  <FaPowerOff
                    style={{ cursor: "pointer" }}
                    onClick={handleLogout}
                    fontSize={30}
                    color="red"
                  />
                </div>
              </div>
            </LeftSidebar>

            <div>
              <ProfileBody>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "10px", width: "500px" }}>
                  {editMode ? <FluidContainer>Name: <CustomInput label="Display name" type="text" /> </FluidContainer> :
                    <h5>Name: {currentUser.displayName !== null ? currentUser.displayName : "Not provided, kindly update your profile"}</h5>
                  }
                  {!editMode && <h5>Email: {currentUser.email}</h5>}
                  {editMode ? <FluidContainer>Phone number: <CustomInput maxLength={11} label="Phone Number" type="text" /> </FluidContainer> :
                    <h5>Phone Number: {currentUser.phoneNumber !== null ? currentUser.phoneNumber : "Not provided, kindly update your profile"}</h5>
                  }
                  {editMode ? <Button style={{ marginTop: "20px" }} onClick={handleProfileUpdate}>Save</Button> : <Button style={{ width: "300px" }} onClick={setEditMode}>Edit profile</Button>}
                </div>
              </ProfileBody>
              <h2>Your Purchase history</h2>
              <TransactionHistoryTable />
            </div>
          </>
        )
        }
      </ProfileContainer > :
      <Navigate to="/auth" replace="true" />
  );
}