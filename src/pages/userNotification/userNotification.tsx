import { useEffect, useState } from "react";
import { apiGetAndAuth } from "../../utils/api/axios";
import bell from "../../assets/bell.svg";
import modalStyle from './Modal2.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'

export const UserNotification = () => {
  //state
  const [notify, setNotify] = useState([]);
  const [modal2, setModal2] = useState(false);
    const toggleModal = () => {
        setModal2(!modal2);
    }

  //Get user signature
  const access_token = localStorage.getItem("signature");

  const handleClick = async () => {
    try {
      const { data } = await apiGetAndAuth("/users/user-notification", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setNotify(data?.rows);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    void handleClick();
  }, []);

  /** */

  return (
    <div>
      <div>
        <img src={bell} alt="notification" onClick={toggleModal } className={modalStyle.bell}/>
      </div>

         { modal2 && notify.length !==0 ?(<div className={modalStyle.modal1}>
            <div className={modalStyle.overlay}> </div>
                <div className={modalStyle.modal_content}>
                       
          {
             notify.map((item: any) => (
          <div key={item.id}>
            <div className={modalStyle.orderText}>
                   Your {item.orderNumber} has been {item.status}           
                 </div>
          </div>
        ))
          }

          <div className={modalStyle.close_modal}>
          <button onClick={() => setModal2(false)}><AiOutlineClose  size={20}/></button>
        </div>
        </div>
        </div>)  : (
        <>
          <div className={modalStyle.length}
            style={{
              
            }}
          >
            <p>{notify.length}</p>
          </div>
        </>
      )
        }
      </div>
        
  );
};