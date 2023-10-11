import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../Store/user/userSelector"
import { useState } from "react"
import { ProfileHeader } from "./Profile.styles"

export default function ProfilePage() {
    const currentUser = useSelector(selectCurrentUser)
    const [loaduser, setLoaduser] = useState(false)

    setTimeout(() => {
        setLoaduser(true)
    }, 1000)
    return (loaduser &&
        <div>
            <div className="picture-section">
            </div>
            <hr />
            <div className="profile-body">
                <ProfileHeader>
                    <div className="profile-image-container">
                        <img src={currentUser.photoURL} alt={currentUser.displayName} />
                    </div>
                    <h4>{currentUser.displayName}</h4>
                </ProfileHeader>
                <h5>Name: {currentUser.displayName}</h5>
                <h5>Email: {currentUser.email}</h5>
                <h5>Phone Number: {currentUser.phoneNumber}</h5>
            </div>
            <h2>Your Purchase history</h2>
            {/* Implement transaction history table here */}
        </div>
    )
}