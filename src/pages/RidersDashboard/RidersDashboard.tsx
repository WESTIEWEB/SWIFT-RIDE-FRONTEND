import { useEffect, useState } from "react";
import rDashboard from "./RidersDashboard.module.css";
import overviewRider from "../../assets/overviewRider.svg";
import shoppingBag from "../../assets/shoppingBag.svg";
import { TiMessages } from "react-icons/ti";
import { VscLocation } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "../../utils/api/axios";
import { FiMessageSquare } from "react-icons/fi";
import DemoNav from "../../components/Navbar/DemoNavbar";
import ScrollToBottom from "react-scroll-to-bottom";
import { ImCancelCircle } from "react-icons/im";
import Chat from "../../components/ChatModal/Chat";
import Pusher from "pusher-js";

function removeTimeAndFormatDate(datetimeString: string): string {
  // Parse the input string using the Date object
  const date = new Date(datetimeString);
  // Use the Intl.DateTimeFormat object to format the date
  const options: any = {
    weekday: "short",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
}
const RidersDashboard = () => {
  const [ridersBill, setRidersBill] = useState([]);
  const [completedRides, setCompletedRides] = useState("");

  const [hide, setHide] = useState(false);
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState<string>("");
  const nameUser = localStorage.getItem("userName");
  let allMessages: any = [];
  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };
  const baseUrl = "http://localhost:4000/chat/messages";
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: nameUser,
        message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      }),
    });
    setMessage("");
  };

  // console.log(messages)

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("e6e0a271cc1dd441c02a", {
      cluster: "sa1",
    });

    const channel = pusher.subscribe("swiftRider");
    channel.bind("message", function (data: any) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  }, []);
  //

  const toggleChat = () => {
    //responsible for toggling the chat modal
    setHide(!hide);
    console.log(hide);
  };
  // const sendMessage = async () => {
  // 	if (currentMessage !== "") {
  // 	  const messageData = {
  // 		room: room,
  // 		author: username,
  // 		message: currentMessage,
  // 		time:
  // 		  new Date(Date.now()).getHours() +
  // 		  ":" +
  // 		  new Date(Date.now()).getMinutes(),
  // 	  };

  // 	}
  //   };
  useEffect(() => {
    async function fetchData() {
      const signature = localStorage.getItem("signature");
      if (signature === null) return;
      const config = {
        headers: {
          Authorization: `Bearer ${signature}`,
        },
      };
      await axios
        .get(
          "http://localhost:4000/riders/rider-dashdoard-completed-orders",
          config
        )
        .then((res) => {
          setCompletedRides(String(res.data.totalOrders));
        });
    }
    async function getRidersBill() {
      // e.preventDefault();
      const signature = localStorage.getItem("signature");
      if (signature === null) return;
      const config = {
        headers: {
          Authorization: `Bearer ${signature}`,
        },
      };
      await axios
        .get(
          "http://localhost:4000/riders/rider-dashboard-pending-orders",
          config
        )
        .then((res) => {
          setRidersBill(res.data?.orders?.rows);
        });
      // console.log("myData: ", response?.data);
    }
    fetchData().catch(console.error);
    getRidersBill().catch(console.error);
  }, []);

  return (
    <div>
      <div className={rDashboard.container}>
        {/* <NavbarProfile /> */}
        <DemoNav />
        <div className={rDashboard.subcontainer}>
          <div className={rDashboard.overviewHeader}>
            <img src={overviewRider} alt="overview" />
            <h1 className={rDashboard.overviewh1}>Overview</h1>
          </div>
          <div className={rDashboard.gridArea}>
            <div className={rDashboard.totalOrders}>
              <div className={rDashboard.orderRequest}>
                <h1 className={rDashboard.totalOrdersH1}>Total Orders</h1>
                <Link to="/journey-tracker" >
								<button>View active Delivery</button>
							</Link>
              </div>
              <div className={rDashboard.ordersCompleted}>
                <h1 className={rDashboard.orders1}>{completedRides}</h1>
                <h2 className={rDashboard.ordersH2}>Rides completed</h2>
                <img
                  className={rDashboard.shoppingBag}
                  src={shoppingBag}
                  alt="shoppingBag"
                />
              </div>
            </div>
            <div className={rDashboard.myOrders}>
              <div className={rDashboard.myOrdersee}>
                <h1 className={rDashboard.ordersMy}>My Rides</h1>
                <a href="#" className={rDashboard.seeAllOrders}>
                  See all
                </a>
              </div>
              {ridersBill?.length > 0 ? (
                ridersBill.map((ridersBill: any) => (
                  <div className={rDashboard.pendingTime} key={ridersBill.id}>
                    <p className={rDashboard.todayBread}>
                      {" "}
                      {removeTimeAndFormatDate(ridersBill.createdAt)}
                    </p>
                    <span className={rDashboard.pendingRides}>
                      {ridersBill.orderNumber}
                    </span>
                    <p className={rDashboard.orderNos}>{ridersBill.status}</p>
                    <span className={rDashboard.orderCash}>
                      N{ridersBill.offerAmount}
                    </span>
                  </div>
                ))
              ) : (
                <p>No data available</p>
              )}
            </div>
            <div className={rDashboard.messages}>
              <div className={rDashboard.messagesTopic1}>
                <h1 className={rDashboard.messagesTopic}>Messages</h1>
              </div>
              <div className={rDashboard.messagesIcons}>
                <div className={rDashboard.iconMessage}>
                  <TiMessages className={rDashboard.tiMessage} />
                </div>
                <h1 className={rDashboard.noMessage}>No Messages</h1>
                <p className={rDashboard.noMessageP}>
                  You currently do not have any message
                </p>
              </div>
            </div>
            <div className={rDashboard.Contact}>
              <div className={rDashboard.usContact}>
                <h1 className={rDashboard.usContact1}>Contact us</h1>
              </div>
              <div className={rDashboard.getIntouch}>
                <h1 className={rDashboard.getIntouch1}>Get in touch</h1>
                <p className={rDashboard.getInSend}>
                  Any question or remarks? Send us a message.
                </p>
              </div>
              <div
                className={rDashboard.contactDetails}
                onClick={(e) => {
                  window.location.href = "mailto:hello@swiftrider.com";
                }}
              >
                <p className={rDashboard.emailAddress}>
                  {" "}
                  <MdOutlineEmail />
                  <a className={rDashboard.contact_details_link} href="#">
                    hello@swiftrider.com
                  </a>
                </p>
                <p className={rDashboard.phoneNum}>
                  <BsTelephone />
                  <a
                    className={rDashboard.contact_details_link}
                    href="tel:+2348062898015"
                  >
                    08062898015,
                  </a>{" "}
                  <a
                    className={rDashboard.contact_details_link}
                    href="tel:+2347015950245"
                  >
                    07015950245
                  </a>
                </p>
                <p className={rDashboard.homeAddress}>
                  <VscLocation />
                  <a href="#" className={rDashboard.contact_details_link}>
                    25, Uhkorunmi street, Ohuhen, Edo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {hide && (
        <div className={rDashboard.rchat_container_pa}>
          {/* <span className={dashboard_style.chat_cancel_button}>
								<ImCancelCircle />
							</span> */}
          <div className="chat-window">
            <div className="chat-header">
              <p>Hello {nameUser} chat with your Dispatch Client</p>
            </div>
            <div className="chat-body">
              <ScrollToBottom className="message-container">
                {/* {messageList.map((messageContent: any) => { */}
                {/* return ( */}
                {messages.map((user: any) => (
                  <div className="message" id={user.username === nameUser? "you" : "other"}>
                    <div>
                      <>
                        <div className="message-content">
                          <p>{user.message}</p>
                        </div>
                        <div className="message-meta">
                          <p id="author">{user.username}</p>
                          <p id="author">{user.time}</p>
                        </div>
                      </>
                    </div>
                  </div>
                ))}
                {/* <div
										className="message"
										id={ "other"}
										>
										<div>
											<div className="message-content"> 
											
											<p>This is the message reply content</p>
											</div>
											<div className="message-meta">
											<p id="time">2:05:00</p>
											<p id= "author">John</p>
											</div>
										</div>
										</div> */}
                {/* ); */}
                {/* })} */}
              </ScrollToBottom>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="chat-footer">
                <input
                  type="text"
                  value={message}
                  placeholder="type message here..."
                  onChange={handleChange}
                />
                <button onClick={handleSubmit}>&#9658;</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div>
        <FiMessageSquare
          style={{
            position: "fixed",
            bottom: "10px",
            right: "0",
            width: "100px",
            fontSize: "50px",
            opacity: "0.55",
            cursor: "pointer",
          }}
          onClick={toggleChat}
        />
        {/* {hide === true? <p></p>: (<Chat />)} */}
      </div>
    </div>
  );
};
export default RidersDashboard;
