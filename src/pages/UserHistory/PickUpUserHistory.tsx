import React from "react";

import NavbarUserProfile from "../../components/Navbar/NavbarUserProfile";
import pickUpUserHistory from "./PickUpUserHistory.module.css"
import {MdFilterList} from "react-icons/md"
import { apiGetAndAuth } from "../../utils/api/axios";


const PickUpUserHistory = () => {
  const [orders, setBiddings] = React.useState([]);

	const getBiddings = async () => {

		try {
      const access_token = localStorage.getItem("signature");
			const response = await apiGetAndAuth("/users/my-orders", {
				headers: {
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					Authorization: `Bearer ${access_token}`,
				},
			});
			console.log("myData: ", response?.data.Orders);
			setBiddings(response?.data?.Orders?.rows);
			// console.log("myData: ", response?.data);
		} catch (err) {
			console.error("get_all_order", err);
		}
	};
  console.log(orders)
	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getBiddings();
	}, []);



  return (
    <div className={pickUpUserHistory.mainContainerHistory}>
      <NavbarUserProfile />
     
    <div className={pickUpUserHistory.containerHistory}>
      <div className={pickUpUserHistory.riderPickupHistory}>
        <h2 className={pickUpUserHistory.storyHistory}>
          History
        </h2>
        <button className={pickUpUserHistory.filterButton}>
          <span>Filter</span> <MdFilterList />
        </button>
      </div>
      {/* <hr></hr> */}

      <div className={pickUpUserHistory.deliveryHistory}>
        <p>Delivery Location</p>
        <p>Amount</p>
        <p>Date/Time</p>
        <p>Status</p>
      </div>

   
     
       {orders?.map((elem:any) => 
        <div className={pickUpUserHistory.locationHistory}>
        <h4>{elem.pickupLocation}-{elem.dropOffLocation}</h4>
        <h4>{elem.offerAmount}</h4>
        <h4>{elem.createdAt}</h4>
        <h4>{elem.status}</h4>
      </div>)}
    </div>

   
    </div>

    
  )
}

export default PickUpUserHistory