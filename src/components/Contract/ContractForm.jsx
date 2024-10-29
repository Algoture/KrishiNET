import React, { useState, useRef } from "react";
import SideBar from "../UI/SideBar";

const ContractForm = () => {
  const [formData, setFormData] = useState({
    buyerName: "",
    farmerName: "",
    cropType: "",
    price: "",
    deliveryDate: "",
    agreed: false,
    photo: null,
    signature: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const sigCanvas = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSignatureClear = () => {
    sigCanvas.current.clear();
  };

  const handleSignatureSave = () => {
    const signatureData = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setFormData({ ...formData, signature: signatureData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreed && formData.signature) {
      // console.log("Contract Data:", formData);
      setSubmitted(true);
    } else {
      alert("Please agree to the terms and provide your signature.");
    }
  };

  return (
    <>
      <SideBar />
      <div className="lg:ml-60 flex items-center justify-center bg-primary py-2">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
            Farm Contract Agreement
          </h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700">Buyer Name</label>
                <input
                  type="text"
                  name="buyerName"
                  value={formData.buyerName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter buyer's name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Farmer Name</label>
                <input
                  type="text"
                  name="farmerName"
                  value={formData.farmerName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter farmer's name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Crop Type</label>
                <input
                  type="text"
                  name="cropType"
                  value={formData.cropType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter crop type"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Agreed Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter agreed price"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Delivery Date</label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">
                  Upload Photo (Optional)
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Upload Signature:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({ ...formData, signature: e.target.files[0] })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700">
                <h3 className="font-semibold text-green-700 mb-2">
                  Terms and Conditions
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    The buyer and farmer agree to the price of the crop as
                    listed in this contract. Any changes to the agreed price
                    must be mutually discussed and documented before final
                    delivery.
                  </li>
                  <li>
                    The farmer guarantees that the crop will be delivered in the
                    agreed-upon quantity and quality by the specified delivery
                    date. Failure to deliver on time may result in penalties as
                    per KrishiNET's platform policy.
                  </li>
                  <li>
                    The buyer agrees to make the payment as per the agreed price
                    upon delivery. Failure to pay on time may lead to account
                    suspension and legal action as per KrishiNET's platform
                    guidelines.
                  </li>
                  <li>
                    KrishiNET is not responsible for any crop failure due to
                    natural disasters or unforeseen circumstances. It is
                    recommended to have an insurance policy in place for such
                    events.
                  </li>
                  <li>
                    Both parties agree to resolve any disputes through the
                    platform's arbitration process before seeking external legal
                    action.
                  </li>
                </ul>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label className="ml-2 text-gray-700">
                  I agree to the terms and conditions
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Submit Agreement
              </button>
            </form>
          ) : (
            <div className="text-center mt-8">
              <h3 className="text-xl font-semibold text-green-700">
                Agreement Submitted Successfully!
              </h3>
              <p className="mt-4">Buyer: {formData.buyerName}</p>
              <p>Farmer: {formData.farmerName}</p>
              <p>Crop Type: {formData.cropType}</p>
              <p>Price: ₹{formData.price}</p>
              <p>Delivery Date: {formData.deliveryDate}</p>

              {formData.photo && (
                <div className="mt-6 flex flex-col items-center">
                  <p className="font-bold mb-2">Uploaded Photo:</p>
                  <img
                    src={URL.createObjectURL(formData.photo)}
                    alt="Uploaded"
                    className="w-32 h-32 object-cover rounded-md border-2 border-gray-300"
                  />
                </div>
              )}

              {formData.signature && (
                <div className="mt-6 flex flex-col items-center">
                  <p className="font-bold mb-2">Signature:</p>
                  <img
                    src={URL.createObjectURL(formData.signature)}
                    alt="Signature"
                    className="w-48 h-24 object-contain border-2 border-gray-300"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContractForm;
