import React from "react";
import Accordian from "../../components/accordian/Accordian";
import "./scss/CheckOut.style.scss";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function CheckOut() {
  return (
    <>
      <section>
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-6">
              <CheckOutFirst />
            </div>
            <div className="col-lg-6">
              <CheckOutSecond />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function CheckOutFirst() {
  const accordianData1 = {
    AccordianTitle,
    AccordianBody,
  };
  const accordianData2 = {
    AccordianTitle: AccordianTitle1,
    AccordianBody: AccordianBody1,
  };
  return (
    <>
      <div className="my-4">
        <Accordian
          {...accordianData1}
          id={"accordian1"}
          accordianTitle={"mainaccordian1"}
        />
      </div>
      <div className="my-4">
        <Accordian
          {...accordianData2}
          id={"accordian2"}
          accordianTitle={"mainaccordian2"}
        />
      </div>
      <h4 className="my-4" style={{ color: "gray" }}>
        Billing Details
      </h4>
      <form action="#">
        <div className="row">
          <div className="col-lg-6">
            <Input {...inputData[0]} />
          </div>
          <div className="col-lg-6">
            <Input {...inputData[1]} />
          </div>
        </div>
        {inputData.slice(2).map((item, index) => (
          <Input {...item} key={index} />
        ))}
      </form>
      <div>
        <label
          data-bs-toggle="collapse"
          data-bs-target={`#accordianshipping`}
          aria-expanded="true"
          aria-controls="accordianshipping"
          htmlFor="checkboxshipping"
          className="checkmark-container"
        >
          Shipping to different Address?
          <input type="checkbox" id="checkboxshipping" />
          <span className="checkmark"></span>
        </label>
        <div
          id="accordianshipping"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
        >
          <div className="accordion-body">
            <div>
              {shippingDifferent.map((item, index) => (
                <Input {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="checkoutinput">
          <textarea
            className="form-control py-3 px-4"
            type="text"
            placeholder="Notes about your order, e.g. speacial notes for delivery."
            name="additionalinfo"
            rows={5}
          />
          <label>Other Notes(optional)</label>
        </div>
      </div>
    </>
  );
}
function CheckOutSecond() {
  const { cartItems } = useSelector((store) => store.cart);
  const subTotal = cartItems.reduce(
    (total, item) => total + item.amount * item.newPrice,
    0
  );
  return (
    <>
      <div className="checkoutsecond mt-4 rounded">
        <h4 className="mb-4">Your Order</h4>
        <div className="checkoutsecondproduct">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h4>Product</h4>
            <h4>Subtotal</h4>
          </div>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="d-flex align-items-center justify-content-between"
              >
                <p>{`${item.title} x${item.amount}`}</p>
                <p>${item.amount * item.newPrice}</p>
              </li>
            ))}
            <li className="d-flex align-items-center justify-content-between">
              <p>Shipping Cost</p>
              <p>$11</p>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-between mt-4">
            <h4>Total</h4>
            <h4>${subTotal + 11}</h4>
          </div>
        </div>
        <div className="payment mt-5 mb-3">
          <div className="payment-single">
            <div className="mb-3">
              <label htmlFor="bankpayment" className="checkmark-container">
                Direct bank transfer
                <input
                  type="radio"
                  defaultChecked
                  id="bankpayment"
                  value="bankpayment"
                  name="payment"
                />
                <span className="checkmark rounded-circle"></span>
              </label>
            </div>
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="payment-single">
            <div className="mb-3">
              <label htmlFor="cashpayment" className="checkmark-container">
                Cash on delivery
                <input type="radio" id="cashpayment" name="payment" value="cashpayment" />
                <span className="checkmark rounded-circle"></span>
              </label>
            </div>
            <p>Pay with cash upon delivery.</p>
          </div>
          <div className="payment-single">
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="paypalpayment" className="checkmark-container">
                  PayPal
                  <input
                    type="radio"
                    id="paypalpayment"
                    value="paypalpayment"
                    name="payment"
                  />
                  <span className="checkmark rounded-circle"></span>
                </label>
                <div>
                  <img
                    src="/images/footerimage/payment.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <p>
              Pay via PayPal; you can pay with your credit card if you don’t
              have a PayPal account.
            </p>
          </div>
        </div>
        <div className="text-center">
          <motion.div
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button className="btn btn-primary px-4 py-3 fw-bold">
              Proccess to Checkout
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export function Input(props) {
  return (
    <>
      <div className="checkoutinput">
        <input
          className="form-control my-4 py-3 px-4"
          type={props.type ? props.type : "text"}
          placeholder={props?.placeholder}
          required={props.required}
          name={props.name}
          id={props.name}
        />
        <label htmlFor={props.name}>
          {props.label}
          {props.required ? <span>*</span> : ""}
        </label>
      </div>
    </>
  );
}
const shippingDifferent = [
  {
    type: "text",
    placeholder: "Nepal",
    required: true,
    name: "Country1",
    label: "Country/Region",
  },
  {
    type: "text",
    placeholder: "House number and street name",
    required: true,
    name: "streetaddress1",
    label: "Street Address",
  },
  {
    type: "text",
    placeholder: "",
    required: true,
    name: "towncity1",
    label: "Town/City",
  },
  {
    type: "text",
    placeholder: "",
    required: true,
    name: "phone1",
    label: "Phone",
  },
  {
    type: "email",
    placeholder: "",
    required: true,
    name: "emailaddress1",
    label: "Email Address",
  },
];
const inputData = [
  {
    type: "text",
    placeholder: "John",
    required: true,
    name: "firstname",
    label: "First Name",
  },
  {
    type: "text",
    placeholder: "Cena",
    required: true,
    name: "lastname",
    label: "Last Name",
  },
  {
    type: "text",
    placeholder: "",
    required: false,
    name: "companyname",
    label: "Company Name",
  },
  {
    type: "text",
    placeholder: "Nepal",
    required: true,
    name: "Country",
    label: "Country/Region",
  },
  {
    type: "text",
    placeholder: "House number and street name",
    required: true,
    name: "streetaddress",
    label: "Street Address",
  },
  {
    type: "text",
    placeholder: "",
    required: true,
    name: "towncity",
    label: "Town/City",
  },
  {
    type: "text",
    placeholder: "",
    required: true,
    name: "phone",
    label: "Phone",
  },
  {
    type: "email",
    placeholder: "",
    required: true,
    name: "emailaddress",
    label: "Email Address",
  },
];
function AccordianTitle() {
  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-person-fill d-block"></i>
        <p>
          Returning customer? <strong>Click here to login</strong>{" "}
        </p>
      </div>
    </>
  );
}
function AccordianBody() {
  return (
    <>
      <p className="mb-3">If you didn't Logged in, Please Log in first.</p>
      <form>
        <label htmlFor="loginemail">Email</label>
        <input
          className="form-control mb-3 py-2"
          type="email"
          name="email"
          id="loginemail"
        />
        <label htmlFor="loginpassword">Password</label>
        <input
          className="form-control mb-3 py-2"
          type="password"
          id="loginpassword"
          name="password"
        />
        <button className="btn btn-primary px-4 py-2 fs-5">Login</button>
      </form>
    </>
  );
}
function AccordianTitle1() {
  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-pencil-fill d-block"></i>
        <p>
          Have a coupon? <strong> Click here to enter your code</strong>{" "}
        </p>
      </div>
    </>
  );
}
function AccordianBody1() {
  return (
    <>
      <p className="mb-3">If you have a coupon code, please apply it below.</p>
      <form>
        <div className="d-flex align-items-center gap-3">
          <input
            className="form-control py-3 d-block"
            type="text"
            name="coupon"
            placeholder="Enter coupon code"
            style={{ maxWidth: "250px" }}
          />
          <button className="btn btn-primary px-4 py-2 fs-5 d-block">
            Apply
          </button>
        </div>
      </form>
    </>
  );
}
