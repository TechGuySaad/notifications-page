import Nav from "./components/Nav";
import Mark from "./assets/images/avatar-mark-webber.webp";
import Angela from "./assets/images/avatar-angela-gray.webp";
import Jacob from "./assets/images/avatar-jacob-thompson.webp";
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "./assets/images/avatar-kimberly-smith.webp";
import Nathan from "./assets/images/avatar-nathan-peterson.webp";
import Anna from "./assets/images/avatar-anna-kim.webp";

function App() {
  return (
    <div className="app-container h-screen w-screen bg-white p-5 rounded-lg">
      <Nav></Nav>

      <div className="notifications flex flex-col gap-y-3">
        {/* Mark 
        Webber */}
        <div className="p-4 flex gap-2 text-sm">
          {" "}
          <img className="" src={Mark} alt="" />
          <div className="text ">
            <p>
              {" "}
              <span className="name">Mark Webber</span> reacted to your recent
              post <span className="font-bold text-gray-600 cursor-pointer hover:text-blue-900">My first tournament today!</span> {" "}
            </p>{" "}
            <p className="time">1m ago</p>
          </div>
        </div>

        {/* Angela Gray */}

        <div className="p-4 flex gap-2 text-sm">
          <img src={Angela} alt="" />
          <div className="text">
            <p>
              <span className="name">Angela Gray</span> followed you{" "}
            </p>{" "}
            <p className="time">5m ago</p>
          </div>
        </div>

        {/* Jacob Thompson */}

        <div className="p-4 flex gap-2 text-sm">
          <img src={Jacob} alt="" />
          <div className="text">
            <p>
              {" "}
              <span className="name">Jacob Thompson</span> has joined your group <span className="chess-club">Chess Club</span>
              
            </p>{" "}
            <p className="time">1 day ago</p>{" "}
          </div>
        </div>

        {/* Rizky Hasanuddin */}

        <div className="p-4 flex gap-2 text-sm">
        <img src={Rizky} alt="" />
        <div className="text">
          <p><span className="name">Rizky Hasanuddin</span> sent you a private message</p> <p className="time">5 days ago</p>
          <p className="message border-2 rounded text-sm p-5 mt-2 cursor-pointer hover:bg-blue-100"> Hello, thanks
          for setting up the Chess Club. Ive been a member for a few weeks now
          and Im already having lots of fun and improving my game.</p>
         
        </div>
             
        </div>

        {/* Kimberly Smith */}

        <div className="p-4 flex gap-2 text-sm">
          <img src={Kimberly} alt="" />
          <div className="text">
            {" "}
            <p>
              <span className="name"> Kimberly Smith</span> commented on your
              picture{" "}
            </p>{" "}
            <p className="time">1 week ago </p>
          </div>
        </div>

        {/* Nathan Peterson */}

        <div className="p-4 flex gap-2 text-sm">
          <img src={Nathan} alt="" />
          <div className="text">
            <p>
              <span className="name">Nathan Peterson</span> reacted to your
              recent post <span className="text-gray-600 font-bold">5 end-game strategies to increase your win rate</span> 
            </p>{" "}
            <p className="time"> 2 weeks ago</p>
          </div>
        </div>

        {/* Anna */}
        <div className="p-4 flex gap-2 text-sm">
            <img src={Anna} alt="" />
          <div className="text ">
            <p>
              <span className="name">Anna Kim </span>left the group <span className="chess-club">Chess Club</span>    
            </p>{" "}
            <p className="time">2 weeks ago</p>
          </div>
        </div>

      </div>

      {/* <div>
        Challenge by <a>Frontend Mentor</a>. Coded by{" "}
        <a href="#">Saad Rahman</a>.
      </div> */}
    </div>
  );
}

export default App;
