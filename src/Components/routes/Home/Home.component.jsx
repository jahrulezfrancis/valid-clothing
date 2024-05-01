import { useEffect } from "react";
import DirectoryComponent from "../../Directory/Directory.component";
import { addNewTransactionHistory, fetchTransactionHistory } from "../../Utils/Firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/userSelector";

const Home = () => {

    const currentUser = useSelector(selectCurrentUser);
    const uID = currentUser ? currentUser.uid : "";

    useEffect(() => {
        fetchTransactionHistory(uID)
            .then((transactions) => {
                console.log(transactions);
                addNewTransactionHistory(transactions)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [uID]);

    return (
        <div style={{ display: 'flex', padding: '15px 20px' }}>
            <DirectoryComponent />
        </div>
    )
}
export default Home; 