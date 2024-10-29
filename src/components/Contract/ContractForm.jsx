import React, { useState, useRef } from "react";
import SideBar from "../UI/SideBar";
import InputFileUpload from "../Form/InputFileUpload";
import InputField from "../Form/InputField";
import CategorySelect from "../Form/CategorySelect";
import { FormControlLabel, Checkbox } from "@mui/material";
import SubmitBtn from "../Form/SubmitBtn";
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
    loading: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const sigCanvas = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
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
    setFormData({...formData, loading: true });
    // console.log(formData);
    if (formData.agreed && formData.signature) {
      setSubmitted(true);
    } else {
      alert("Please agree to the terms and provide your signature.");
    }
  };
  return (
    <>
      <SideBar />
      <div className="lg:ml-56 flex items-center justify-center bg-primary py-2">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
            Farm Contract Agreement
          </h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Buyer Name"
                value={formData.buyerName}
                type="text"
                onChange={(e) => {
                  setFormData({ ...formData, buyerName: e.target.value });
                }}
              />
              <InputField
                label="Farmer Name"
                value={formData.farmerName}
                type="text"
                onChange={(e) => {
                  setFormData({ ...formData, farmerName: e.target.value });
                }}
              />
              <CategorySelect
                category={formData.cropType}
                onChange={(e) => {
                  setFormData({ ...formData, cropType: e.target.value });
                }}
              />
              <InputField
                label="Agreed Price"
                value={formData.price}
                type="text"
                onChange={(e) => {
                  setFormData({ ...formData, price: e.target.value });
                }}
              />
              <div>
                <h1>Delivery Date</h1>
                <InputField
                  label=""
                  value={formData.deliveryDate}
                  type="date"
                  onChange={(e) => {
                    setFormData({ ...formData, deliveryDate: e.target.value });
                  }}
                />
              </div>

              <div>
                <label className="block text-gray-700">
                  Upload Photo (Optional)
                </label>
                <InputFileUpload
                  handleChange={(e) => {
                    setFormData({ ...formData, photo: e.target.files[0] });
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold ">
                  Upload Signature:
                </label>
                <InputFileUpload
                  handleChange={(e) =>
                    setFormData({ ...formData, signature: e.target.files[0] })
                  }
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreed}
                      onChange={(e) =>
                        setFormData({ ...formData, agreed: e.target.checked })
                      }
                    />
                  }
                  label="I Agree to the terms and conditions"
                  required
                />
              </div>
              <SubmitBtn text="Submit Agreement" loading={formData.loading} />
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
