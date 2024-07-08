import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Account = ({ user, setUser, setToken }) => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchUserBooks = async () => {
      const loggedInToken = window.localStorage.getItem("token");

      if (loggedInToken) {
        const { data } = await axios.get(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loggedInToken}`,
            },
          }
        );
        setReservations(data.reservation);
      } else {
        throw "no token";
      }
    };
    fetchUserBooks();
  }, []);

  console.log(reservations);

  const deleteReservation = async (reservationId) => {
    const loggedInToken = window.localStorage.getItem("token");

    if (loggedInToken) {
      const response = await axios.delete(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loggedInToken}`,
          },
        }
      );
      console.log(response);
      setReservations(
        reservations.filter((checkedOutBooks) => {
          return checkedOutBooks.id !== reservationId;
        })
      );
    } else {
      throw "no token";
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setToken(null);
    setUser({});
    navigate("/");
  };

  if (!user.books) {
    return null;
  } else {
    return (
      <div>
        <h1>Account</h1>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
        <hr />
        <h2>Email: {user.email}</h2>
        <h3>Your checked out books:</h3>
        <ul>
          {reservations.map((reservation) => {
            return (
              <li key={reservation.id}>
                {reservation.title}
                <button
                  onClick={() => {
                    deleteReservation(reservation.id);
                  }}
                >
                  Return Book
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Account;
