import { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import DemoNav from "../../components/Navbar/DemoNavbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CardDetails.css";

interface Transaction {
	reference: string;
}

interface PaystackPop {
	newTransaction: (options: {
		key: string;
		amount: number;
		cardNumber: string;
		cardName: string;
		expiryDate: string;
		cvv: string;
		onSuccess: (transaction: Transaction) => void;
		onCancel: () => void;
	}) => void;
}

// const CardDetails = () => {
// 	const [cardName, setCardName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [amount, setAmount] = useState("");
// 	const [expiryDate, setExpiryDate] = useState("");
// 	const [cvv, setCvv] = useState("");
// 	const [cardNumber, setCardNumber] = useState("");
// 	const payWithPaystack = (e: any) => {
// 		e.preventDefault();
// 		const paystack = new PaystackPop();
// 		paystack.newTransaction({
// 			key: "pk_test_10f0bf166cf0c44bfa35b7f7f0ea72f24c01a60c",
// 			amount: amount * 100,
// 			cardName,
// 			expiryDate,
// 			cvv,
// 			email,
// 			cardNumber,

// 			onSuccess(transaction: Transaction) {
// 				const message = `Payment complete successfully ${transaction.reference}`;
// 				alert(message);
// 				setCardName("");
// 				setAmount("");
// 				setExpiryDate("");
// 				setCvv("");
// 				setCardNumber("");
// 				setEmail("");
// 			},
// 			onCancel() {},
// 		});
// 	};
// 	return (
// 		<>
// 			<DemoNav />
// 			<div className="cardDetails">
// 				<div className="options">
// 					<Link className="newlink" to={"/add-card"}>
// 						<AiOutlineArrowLeft className="icon" />
// 						<h4 className="back">Back</h4>
// 					</Link>
// 					<h3 className="add-card"> Make Payment</h3>
// 					<div className="bottom-border"></div>
// 				</div>
// 				<form>
// 					<div>
// 						<label className="cardnumber">Card Number</label>
// 						<input
// 							className="input1"
// 							type="text"
// 							value={cardNumber}
// 							onChange={(e) => setCardNumber(e.target.value)}
// 						/>
// 					</div>
// 					<div>
// 						<label className="cardnumber">Card Name</label>
// 						<input
// 							className="input1"
// 							type="text"
// 							value={cardName}
// 							onChange={(e) => setCardName(e.target.value)}
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<label className="cardnumber">Email</label>
// 						<input
// 							className="input1"
// 							type="text"
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 						/>
// 					</div>

// 					<div>
// 						<label className="cardnumber">Amount</label>
// 						<input
// 							className="input1"
// 							type="text"
// 							value={amount}
// 							onChange={(e) => setAmount(e.target.value)}
// 							required
// 						/>
// 					</div>

// 					<div className="expire-div">
// 						<div className="expiry-div">
// 							<label className="expire-date">Expiry Date</label>
// 							<input
// 								className="input2"
// 								type="text"
// 								value={expiryDate}
// 								onChange={(e) => setExpiryDate(e.target.value)}
// 							/>
// 						</div>
// 						<div className="cvv-div">
// 							<label className="card-cvv">CVV</label>
// 							<input
// 								className="input3"
// 								type="text"
// 								value={cvv}
// 								onChange={(e) => setCvv(e.target.value)}
// 							/>
// 						</div>
// 					</div>

// 					<div>
// 						<button className="pay" type="submit" onClick={payWithPaystack}>
// 							{" "}
// 							Pay{" "}
// 						</button>
// 					</div>
// 				</form>
// 				<script src="https://js.paystack.co/v1/inline.js"></script>
// 			</div>
// 		</>
// 	);
// };

// export default CardDetails;

const CardDetails = () => {
	const [cardName, setCardName] = useState("");
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [cvv, setCvv] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const payWithPaystack = (e: any) => {
		e.preventDefault();
		const paystack = new PaystackPop();
		paystack.newTransaction({
			key: "pk_test_10f0bf166cf0c44bfa35b7f7f0ea72f24c01a60c",
			amount: amount * 100,
			cardName,
			expiryDate,
			cvv,
			email,
			cardNumber,

			onSuccess(transaction: Transaction) {
				const message = `Payment complete successfully ${transaction.reference}`;
				alert(message);
				setCardName("");
				setAmount("");
				setExpiryDate("");
				setCvv("");
				setCardNumber("");
				setEmail("");
			},
			onCancel() {},
		});
	};
	return (
		<div>
			<DemoNav />
			<div className="method-payment-div_d">
				<div className="payment_options_title_d">
					<div className="payment_options_data1_d">
						<li className="absolute_post_d">
							<Link to="/add-card">
								<AiOutlineArrowLeft
									style={{ color: "black" }}
									className="add_card_navigate_d"
								/>
							</Link>
						</li>
						<li className="relative_post_d">Card Details</li>
					</div>
					<div className="payment_options_data1_d1">
						<form className="card_details_form">
							<div className="card_form_input">
								<label htmlFor="Card Number">Card Number</label>
								<input
									type="text"
									placeholder="Card number"
									className="card_details_field"
									required={true}
									onChange={(e) => setCardNumber(e.target.value)}
								/>
							</div>
							<div className="card_form_input">
								<label htmlFor="Card Name">Card Name</label>
								<input
									type="text"
									placeholder="Card name"
									className="card_details_field"
									required={true}
									onChange={(e) => setCardName(e.target.value)}
								/>
							</div>
							<div className="card_form_input">
								<label htmlFor="Email">Email</label>
								<input
									type="text"
									placeholder="Email"
									className="card_details_field"
									required={true}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="card_form_input">
								<label htmlFor="Amount">Amount</label>
								<input
									type="text"
									placeholder="Amount"
									className="card_details_field"
									onChange={(e) => setAmount(e.target.value)}
									required={true}
								/>
							</div>
							<div className="card_form_input1">
								<div className="card_form_input_s1">
									<label htmlFor="Expiry Date">Expiry Date</label>
									<input
										placeholder="MM/YY"
										type="text"
										className="card_details_field"
										value={expiryDate}
										onChange={(e) => setExpiryDate(e.target.value)}
										required={true}
									/>
								</div>
								<div className="card_form_input_s2">
									<label htmlFor="CVV">CVV</label>
									<input
										type="text"
										placeholder="***"
										className="card_details_field"
										value={cvv}
										onChange={(e) => setCvv(e.target.value)}
										required={true}
									/>
								</div>
							</div>
							<input
								className="card_payment_send"
								value="Pay"
								type="submit"
								onClick={payWithPaystack}
							/>
						</form>
					</div>
				</div>
				<script src="https://js.paystack.co/v1/inline.js"></script>
			</div>
		</div>
	);
};
export default CardDetails;
