import React, { useState } from "react";
import { useForm } from "react-hook-form";

const regionsWithCenters = {
  Dhaka: ["Banani", "Mirpur", "Uttara"],
  Chattogram: ["Agrabad", "Pahartali"],
  Rajshahi: ["Boalia", "Rajpara"],
  Sylhet: ["Zindabazar", "Amberkhana"],
};

const AddParcelForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();

  const [senderCenters, setSenderCenters] = useState([]);
  const [receiverCenters, setReceiverCenters] = useState([]);

  const parcelType = watch("type");

  const onSubmit = (data) => {
    const parcel = {
      ...data,
      creation_date: new Date().toISOString(),
    };
    console.log("Parcel Data:", parcel);
    alert("✅ Parcel submitted successfully!");
  };

  const handleSenderRegionChange = (e) => {
    const region = e.target.value;
    setSenderCenters(regionsWithCenters[region] || []);
    resetField("senderCenter");
  };

  const handleReceiverRegionChange = (e) => {
    const region = e.target.value;
    setReceiverCenters(regionsWithCenters[region] || []);
    resetField("receiverCenter");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-md p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Add Parcel</h1>
        <hr className="mb-6" />
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Enter your parcel details
        </h2>

        {/* Radio Buttons */}
        <div className="flex items-center gap-6 mb-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="document"
              {...register("type", { required: true })}
              className="radio radio-success"
              defaultChecked
            />
            <span>Document</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="non-document"
              {...register("type")}
              className="radio radio-success"
            />
            <span>Not-Document</span>
          </label>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Column - Parcel Title + Sender */}
            <div className="space-y-6">
              {/* Parcel Name */}
              <input
                type="text"
                {...register("parcelTitle", { required: true })}
                placeholder="Parcel Name"
                className="input input-bordered w-full"
              />

              {/* Sender Info */}
              <label className="text-sm font-medium text-gray-700">Sender Details</label>
              <input
                {...register("senderName", { required: true })}
                placeholder="Sender Name"
                className="input input-bordered w-full"
              />
               <select
                {...register("senderRegion", { required: true })}
                onChange={handleSenderRegionChange}
                className="select select-bordered w-full"
              >
                <option value="">Select your region</option>
                {Object.keys(regionsWithCenters).map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
              <select
                {...register("senderCenter", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Wire house</option>
                {senderCenters.map((center) => (
                  <option key={center} value={center}>{center}</option>
                ))}
              </select>
              <input
                {...register("senderAddress", { required: true })}
                placeholder="Address"
                className="input input-bordered w-full"
              />
              <input
                type="tel"
                {...register("senderContact", { required: true })}
                placeholder="Sender Contact No"
                className="input input-bordered w-full"
              />
              <textarea
                {...register("pickupNote", { required: true })}
                placeholder="Pickup Instruction"
                className="textarea textarea-bordered w-full"
              />
            </div>

            {/* Right Column - Weight + Receiver */}
            <div className="space-y-6">
              <input
                type="number"
                step="0.1"
                {...register("weight")}
                placeholder="Parcel Weight (KG)"
                className="input input-bordered w-full"
              />

              <label className="text-sm font-medium text-gray-700">Receiver Details</label>
              <input
                {...register("receiverName", { required: true })}
                placeholder="Receiver Name"
                className="input input-bordered w-full"
              />
              <select
                {...register("receiverRegion", { required: true })}
                onChange={handleReceiverRegionChange}
                className="select select-bordered w-full"
              >
                <option value="">Select your region</option>
                {Object.keys(regionsWithCenters).map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
              <select
                {...register("receiverCenter", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Wire house</option>
                {receiverCenters.map((center) => (
                  <option key={center} value={center}>{center}</option>
                ))}
              </select>
              <input
                {...register("receiverAddress", { required: true })}
                placeholder="Receiver Address"
                className="input input-bordered w-full"
              />
              <input
                type="tel"
                {...register("receiverContact", { required: true })}
                placeholder="Receiver Contact No"
                className="input input-bordered w-full"
              />
              <textarea
                {...register("deliveryNote", { required: true })}
                placeholder="Delivery Instruction"
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>

          {/* Note & Submit */}
          <p className="text-sm text-gray-500 mt-8">* PickUp Time 4pm–7pm Approx.</p>
          <div className="flex justify-center mt-6">
            <button type="submit" className="btn bg-lime-500 text-white hover:bg-lime-600 px-10">
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddParcelForm;
