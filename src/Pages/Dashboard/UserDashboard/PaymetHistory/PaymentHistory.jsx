import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (user)
      fetch(
        `https://summer-camp-server-two-delta.vercel.app/payments/${user.email}`
      )
        .then((res) => res.json())
        .then((payments) => {
          payments.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (dateA < dateB) {
              return -1;
            } else if (dateA > dateB) {
              return 1;
            } else {
              return 0;
            }
          });
          console.log(payments);
          setPayments(payments);
        });
  }, [user]);

  return (
    <div className="overflow-x-auto my-8">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Number</th>
            <th>Email</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {payments.map((payment, index) => (
            <tr key={payment?._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{payment?.email}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{payment?.date}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">${payment?.price}</div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
