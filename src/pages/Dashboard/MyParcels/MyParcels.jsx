import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { format } from "date-fns";
import Swal from "sweetalert2";


const MyParcels = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [selectedParcel, setSelectedParcel] = useState(null);

    const {data: parcels=[]} = useQuery({
        queryKey: ['my-parcels', user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })

     const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const res = await axiosSecure.delete(`/parcels/${id}`);
      if (res.data.deletedCount > 0) {
        Swal.fire("Deleted!", "Your parcel has been deleted.", "success");
      }
    }
  };

  const handlePay = (parcel) => {
    // For now just show console. Replace with payment flow later.
    console.log("Paying for parcel:", parcel);
    Swal.fire("Redirecting to payment!", "", "info");
  };

    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-4">My Parcels</h2>
            <table className="table table-zebra w-full">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Created At</th>
                    <th>Cost</th>
                    <th>Payment</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {parcels.map((parcel, index) => (
                    <tr key={parcel._id}>
                    <td>{index + 1}</td>
                    <td className="capitalize">{parcel.type}</td>
                    <td>{format(new Date(parcel.createdAt), "PPP")}</td>
                    <td>৳{parcel.price}</td>
                    <td>
                        <span
                        className={`badge ${
                            parcel.payment_status === "paid"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                        >
                        {parcel.payment_status}
                        </span>
                    </td>
                    <td className="space-x-1">
                        <button
                        className="btn btn-sm btn-info text-white"
                        onClick={() => setSelectedParcel(parcel)}
                        >
                        View
                        </button>
                        {parcel.payment_status !== "paid" && (
                        <button
                            className="btn btn-sm btn-success"
                            onClick={() => handlePay(parcel)}
                        >
                            Pay
                        </button>
                        )}
                        <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(parcel._id)}
                        >
                        Delete
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* View Modal */}
            {selectedParcel && (
                <>
                <input type="checkbox" id="view-modal" className="modal-toggle" checked readOnly />
                <div className="modal">
                    <div className="modal-box max-w-2xl">
                    <h3 className="font-bold text-lg mb-2">Parcel Details</h3>
                    <p><strong>Tracking ID:</strong> {selectedParcel.trackingId}</p>
                    <p><strong>Type:</strong> {selectedParcel.type}</p>
                    <p><strong>Sender:</strong> {selectedParcel.sender.name} ({selectedParcel.sender.region} - {selectedParcel.sender.center})</p>
                    <p><strong>Receiver:</strong> {selectedParcel.receiver.name} ({selectedParcel.receiver.region} - {selectedParcel.receiver.center})</p>
                    <p><strong>Weight:</strong> {selectedParcel.weight} g</p>
                    <p><strong>Price:</strong> ৳{selectedParcel.price}</p>
                    <p><strong>Created At:</strong> {format(new Date(selectedParcel.createdAt), "PPpp")}</p>
                    <p><strong>Estimated Delivery:</strong> {format(new Date(selectedParcel.estimatedDeliveryDate), "PPP")}</p>
                    <p><strong>Payment Status:</strong> {selectedParcel.payment_status}</p>
                    <p><strong>Delivery Status:</strong> {selectedParcel.delivery_status}</p>

                    <div className="modal-action">
                        <label
                        htmlFor="view-modal"
                        className="btn"
                        onClick={() => setSelectedParcel(null)}
                        >
                        Close
                        </label>
                    </div>
                    </div>
                </div>
                </>
            )}
        </div>
    );
};

export default MyParcels;