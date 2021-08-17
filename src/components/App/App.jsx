//import "./App.css";
import user from "../../assets/user.json";
import stats from "../../assets/statistical-data.json";
import friends from "../../assets/friends.json";
import transactions from "../../assets/transactions.json";

import Profile from "./Profile/Profile";
import Statistics from "./Stats/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile data={user} />
      <Statistics data={stats} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
}

export default App;
