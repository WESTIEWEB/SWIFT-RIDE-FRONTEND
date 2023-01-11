/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useRef, useState, useEffect } from "react";
import Mastercard from "../../assets/Mastercard.svg";
// import Done from "../../assets/Done.svg"; // image for order completed
import mapview from "./Ridermap.module.css";
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	DirectionsRenderer,
} from "@react-google-maps/api";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import NavbarProfile from "../../components/Navbar/NavbarProfile";
import { apiGetAndAuth } from "../../utils/api/axios";
const containerStyle = {
	width: "100%",
	height: "85vh",
};
const center = {
	lat: 6.339185,
	lng: 5.617447,
};

const Ridermap = () => {
	const { requestId } = useParams();
	const [order, setOrder] = useState([]);
	const [map, setMap] = useState<any | null>(/** @type google.maps.Map */ null);
	const [directionResponse, setDirectionResponse] = useState<any | null>(null);
	const [distance, setDistance] = useState<any | null>("");
	const [duration, setDuration] = useState<any | null>("");
	const [pickupLocationText, setPickupLocationText] = useState<any | null>("");

	const pickupLocationRef = useRef<any | null>();
	const deliveryLocationRef = useRef<any | null>();

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyAzDxDYPtdQU8c2ScdLwvefTalEXCHaKZs" as string, // remember to remove your api key
		libraries: ["places"],
	});



	async function calculatorRoute(event: any) {
		event.preventDefault();
		if (
			pickupLocationRef.current.value === "" ||
			deliveryLocationRef.current.value === ""
		) {
			return;
		}

		const directionsService = new google.maps.DirectionsService();
		const result = await directionsService.route({
			origin: pickupLocationRef.current.value,
			destination: deliveryLocationRef.current.value,
			travelMode: google.maps.TravelMode.DRIVING,
		});

		setDirectionResponse(result);
		setDistance(result.routes[0].legs[0].distance?.text);
		setDuration(result.routes[0].legs[0].duration?.text);
	}

	const getOrder = async (id: string | undefined) => {
		try {

			return await apiGetAndAuth(`/riders/get-order-byId/${id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("signature")}`,
				},
			}).then((result) => {
				return result;
			});

		} catch (error) {
			return error
		}

	};


	useEffect(() => {

		if (requestId) {
			getOrder(requestId)
		}

	}, [requestId])


	// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
	if (!isLoaded) {
		return <Loading />;
	}

	const orderProperties = getOrder(requestId);

	console.log(orderProperties)

	return (
		<>
			<NavbarProfile />
			<div className={mapview.mapContainer}>
				<div className={mapview.details}>
					<h3>Request details</h3>
					{/* {order.map((elem: any) => ( */}
					<form key="" action="" className={mapview.formCtn}>
						<div className={mapview.divInputCtn}>
							<label className={mapview.divInputCtnLbl}>Pickup Location</label>
							{/* <Autocomplete> */}
							<input
								type="text"
								value={pickupLocationText}
								placeholder="pickup location"
								ref={pickupLocationRef}
								onChange={(e) => setPickupLocationText(e.target.value)}
							/>
							{/* </Autocomplete> */}
							{/* <input type="text" value={distance} /> */}
						</div>
						<div className={mapview.divInputCtn}>
							<label className={mapview.divInputCtnLbl}>
								Delivery Location
							</label>
							{/* <Autocomplete> */}
							<input
								type="text"
								placeholder="pickup location"
								ref={deliveryLocationRef}
							/>
							{/* <input type="text" value={duration} /> */}
							{/* </Autocomplete> */}
						</div>
						<div className={mapview.divInputCtn}>
							<label className={mapview.divInputCtnLbl}>Package details</label>
							<p>Package details</p>
						</div>
						<div className={mapview.divInputCtn}>
							<label className={mapview.divInputCtnLbl}>Drop off contact</label>
							<p>Drop off Drop off </p>
						</div>
						<div className={mapview.divInputCtn}>
							<label className={mapview.divInputCtnLbl}>Payment method</label>
							<p>Payment method</p>
						</div>

						<div className={mapview.PymtCard}>
							<div>
								<input type="radio" />
								<label htmlFor=""> Card payment</label>
							</div>

							<div>
								<img src={Mastercard} alt="Mastercard logo" />
							</div>
						</div>

						<div className={mapview.btnGroup}>
							<button onClick={calculatorRoute}>Accept Request</button>
							<button>Decline Request</button>
						</div>
					</form>
					{/* ))} */}
				</div>

				<div className={mapview.mapV}>
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={15}
						options={{
							zoomControl: false,
							streetViewControl: false,
							mapTypeControl: false,
							fullscreenControl: false,
						}}
						onLoad={(map) => setMap(map)}
					>
						<Marker position={center} />
						{directionResponse && (
							<DirectionsRenderer directions={directionResponse} />
						)}
					</GoogleMap>
					<div className={mapview.incomingRequest}>
						<p>Incoming Request</p>
						<p className={mapview.incomingRequestInnerP}>
							{duration} . {distance}
						</p>
						<p
							className={`${mapview.incomingRequestInnerP} ${mapview.innerPMedium}`}
						>
							Collins Nwachukwu
						</p>
						<p
							className={`${mapview.incomingRequestInnerP} ${mapview.innerPSmall}`}
						>
							{pickupLocationText}
						</p>
					</div>
					{/* <div className={mapview.endtrip}>
      <p className={mapview.endtriporder}>Order completed</p>
        <img src={Done} alt="" />
        <p className={mapview.endtripswift}>Swift order completed</p>
        <p className={mapview.endtripp}> You’ve delieved your order</p>
        <p className={mapview.incomingRequestInnerP}>{distance}  -  {duration} </p>
        <button className={mapview.doneBtn}>End Trip</button>
      </div> */}
				</div>
			</div>
		</>
	);
};
export default Ridermap;
