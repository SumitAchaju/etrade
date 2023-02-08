import React from "react";
import BreadCrumbs from "../../components/breadcums/BreadCrumbs";
import { Input } from "../checkout/CheckOut";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <BreadCrumbs title="Contact With Us" link={["Home", "Contact"]} />
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-8">
              <form action="">
                <h2>We would love to hear from you.</h2>
                <p className="my-3">
                  If you’ve got great products your making or looking to work
                  with us then drop us a line.
                </p>
                <div className="row">
                  {inputData.map((item, index) => (
                    <div key={index} className="col-lg-4">
                      <Input {...item} />
                    </div>
                  ))}
                </div>
                <div className="checkoutinput">
                  <textarea
                    className="form-control py-3 px-4"
                    type="text"
                    name="contactmessage"
                    rows={5}
                  />
                  <label>Message</label>
                </div>
                <div className="mt-4">
                  <button
                    className="btn btn-primary px-4 py-3"
                    onClick={(e) => e.preventDefault}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="storeinfo">
                <h4 className="mb-3">Our Store</h4>
                <ul style={{ color: "gray" }}>
                  <li className="mb-3">{storeInfoData.address}</li>
                  <li className="mb-1">{storeInfoData.phone}</li>
                  <li className="mb-1">{storeInfoData.email}</li>
                </ul>
              </div>
              <div className="contactcareers my-5">
                <h4 className="mb-3">Careers</h4>
                <p style={{ color: "gray" }}>
                  Instead of buying six things, one that you really like.
                </p>
              </div>
              <div className="openinghour">
                <h4 className="mb-3">Opening Hours:</h4>
                <ul style={{ color: "gray" }}>
                  <li className="mb-1">
                    Monday to Saturday: {openingHour.mondaytomonday}
                  </li>
                  <li>Sundays: {openingHour.sunday}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="storemap">
            
          </div>
        </div>
      </section>
    </>
  );
}

const inputData = [
  {
    type: "text",
    placeholder: "",
    required: true,
    name: "contactname",
    label: "Name",
  },
  {
    type: "tel",
    placeholder: "",
    required: true,
    name: "contactphone",
    label: "Phone",
  },
  {
    type: "email",
    placeholder: "",
    required: true,
    name: "contactemail",
    label: "E-Mail",
  },
];

const storeInfoData = {
  address:
    "8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America",
  phone: "+123 456 7890",
  email: "Hello@etradeSumit.com",
};
const openingHour = {
  mondaytomonday: "9am - 10pm",
  sunday: "10am - 6pm",
};
