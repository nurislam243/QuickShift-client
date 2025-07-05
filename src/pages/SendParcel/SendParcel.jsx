import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const AddParcelForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    setValue,
    formState: { errors },
  } = useForm();
  const coverageData = useLoaderData();

  const [regions, setRegions] = useState([]);
  const [senderCenters, setSenderCenters] = useState([]);
  const [receiverCenters, setReceiverCenters] = useState([]);

  const parcelType = watch("type");

  useEffect(() => {
    const uniqueRegions = [...new Set(coverageData.map((item) => item.region))];
    setRegions(uniqueRegions);
  }, []);

  const handleRegionChange = (region, isSender = true) => {
    const filteredAreas = coverageData
      .filter((item) => item.region === region)
      .flatMap((item) => item.covered_area);

    if (isSender) {
      setSenderCenters(filteredAreas);
      resetField("senderCenter");
    } else {
      setReceiverCenters(filteredAreas);
      resetField("receiverCenter");
    }
  };

  const calculatePrice = (type, isSameDistrict, weight) => {
    let price = 0;

    if (type === "document") {
      price = isSameDistrict ? 60 : 80;
    } else {
      if (weight <= 3) {
        price = isSameDistrict ? 110 : 150;
      } else {
        const extra = Math.ceil(weight - 3) * 40;
        price = isSameDistrict ? 110 + extra : 150 + extra + 40;
      }
    }

    return price;
  };

  const onSubmit = (data) => {
    const isSameDistrict = data.senderRegion === data.receiverRegion;
    const total = calculatePrice(data.type, isSameDistrict, parseFloat(data.weight || 0));

    Swal.fire({
      title: "Confirm Your Parcel",
      html: `
        <p><b>Parcel Type:</b> ${data.type}</p>
        <p><b>Weight:</b> ${data.weight || "0"} KG</p>
        <p><b>From:</b> ${data.senderRegion} → ${data.senderCenter}</p>
        <p><b>To:</b> ${data.receiverRegion} → ${data.receiverCenter}</p>
        <p><b>Price:</b> ৳${total}</p>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "✅ Confirm",
      cancelButtonText: "❌ Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const finalParcel = {
          ...data,
          price: total,
          creation_date: new Date().toISOString(),
        };
        console.log("Final Parcel Data:", finalParcel);
        Swal.fire("Submitted!", "Your parcel has been booked.", "success");
      }
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-md p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Add Parcel</h1>
        <hr className="mb-6" />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Radio and Parcel Info */}
          <div className="mb-7 border-b pb-7 border-gray-400">
            <div className="space-x-8 mb-8">
              <label>
                <input
                  type="radio"
                  value="document"
                  {...register("type", { required: true })}
                  defaultChecked
                  className="radio radio-success"
                />
                Document
              </label>
              <label>
                <input
                  type="radio"
                  value="non-document"
                  {...register("type")}
                  className="radio radio-success"
                />
                Non-Document
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full">
                <input
                  type="text"
                  {...register("parcelTitle", { required: true })}
                  placeholder="Parcel Name"
                  className="input input-bordered w-full"
                />
                {errors.parcelTitle && (
                  <p className="text-red-500 text-sm mt-1">Parcel name is required</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="number"
                  step="0.1"
                  {...register("weight", {
                    required: parcelType === "non-document",
                  })}
                  placeholder="Weight (KG)"
                  className="input input-bordered w-full"
                  disabled={parcelType === "document"} 
                />
                {errors.weight && (
                  <p className="text-red-500 text-sm mt-1">Weight is required for non-document</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sender Side */}
            <div className="space-y-6">
              <div>
                <input
                  {...register("senderName", { required: true })}
                  placeholder="Sender Name"
                  className="input input-bordered w-full"
                />
                {errors.senderName && (
                  <p className="text-red-500 text-sm mt-1">Sender name is required</p>
                )}
              </div>
              <div>
                <select
                  {...register("senderRegion", { required: true })}
                  onChange={(e) => handleRegionChange(e.target.value, true)}
                  className="select select-bordered w-full"
                >
                  <option value="">Select Region</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                {errors.senderRegion && (
                  <p className="text-red-500 text-sm mt-1">Sender region is required</p>
                )}
              </div>
              <div>
                <select
                  {...register("senderCenter", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option value="">Select Warehouse</option>
                  {senderCenters.map((center, index) => (
                    <option key={index} value={center}>{center}</option>
                  ))}
                </select>
                {errors.senderCenter && (
                  <p className="text-red-500 text-sm mt-1">Sender center is required</p>
                )}
              </div>
              <div>
                <input
                  {...register("senderAddress", { required: true })}
                  placeholder="Sender Address"
                  className="input input-bordered w-full"
                />
                {errors.senderAddress && (
                  <p className="text-red-500 text-sm mt-1">Sender address is required</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  {...register("senderContact", { required: true })}
                  placeholder="Sender Contact"
                  className="input input-bordered w-full"
                />
                {errors.senderContact && (
                  <p className="text-red-500 text-sm mt-1">Sender contact is required</p>
                )}
              </div>
              <div>
                <textarea
                  {...register("pickupNote", { required: true })}
                  placeholder="Pickup Instruction"
                  className="textarea textarea-bordered w-full"
                />
                {errors.pickupNote && (
                  <p className="text-red-500 text-sm mt-1">Pickup instruction is required</p>
                )}
              </div>
            </div>

            {/* Receiver Side */}
            <div className="space-y-6">
              <div>
                <input
                  {...register("receiverName", { required: true })}
                  placeholder="Receiver Name"
                  className="input input-bordered w-full"
                />
                {errors.receiverName && (
                  <p className="text-red-500 text-sm mt-1">Receiver name is required</p>
                )}
              </div>
              <div>
                <select
                  {...register("receiverRegion", { required: true })}
                  onChange={(e) => handleRegionChange(e.target.value, false)}
                  className="select select-bordered w-full"
                >
                  <option value="">Select Region</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                {errors.receiverRegion && (
                  <p className="text-red-500 text-sm mt-1">Receiver region is required</p>
                )}
              </div>
              <div>
                <select
                  {...register("receiverCenter", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option value="">Select Warehouse</option>
                  {receiverCenters.map((center, index) => (
                    <option key={index} value={center}>{center}</option>
                  ))}
                </select>
                {errors.receiverCenter && (
                  <p className="text-red-500 text-sm mt-1">Receiver center is required</p>
                )}
              </div>
              <div>
                <input
                  {...register("receiverAddress", { required: true })}
                  placeholder="Receiver Address"
                  className="input input-bordered w-full"
                />
                {errors.receiverAddress && (
                  <p className="text-red-500 text-sm mt-1">Receiver address is required</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  {...register("receiverContact", { required: true })}
                  placeholder="Receiver Contact"
                  className="input input-bordered w-full"
                />
                {errors.receiverContact && (
                  <p className="text-red-500 text-sm mt-1">Receiver contact is required</p>
                )}
              </div>
              <div>
                <textarea
                  {...register("deliveryNote", { required: true })}
                  placeholder="Delivery Instruction"
                  className="textarea textarea-bordered w-full"
                />
                {errors.deliveryNote && (
                  <p className="text-red-500 text-sm mt-1">Delivery instruction is required</p>
                )}
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8">* PickUp Time: 4PM–7PM approx.</p>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="btn bg-lime-500 text-white hover:bg-lime-600 px-10"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddParcelForm;
