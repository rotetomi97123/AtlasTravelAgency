import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const kalendar = () => {
  return (
    <div className="kalendar_wrapper">
      <h1 className="kalendar_wrapper_title">Kalendar putovanja</h1>
      <div className="kalendar_table_container">
        <table className="kalendar_table">
          <tbody>
            {data.putovanje_za_sve.nova_godina_2025.map((trip, index) => (
              <tr key={index} className="kalendar_table_row">
                <td className="kalendar_table_h1">
                  <Link
                    to={`/trip/${encodeURIComponent(trip.title)}`}
                    key={trip.title}
                    state={{ trip }}
                  >
                    {" "}
                    {trip.title}
                  </Link>
                </td>
                <td className="kalendar_table_category">
                  <Link
                    to={`/trip/${encodeURIComponent(trip.title)}`}
                    key={trip.title}
                    state={{ trip }}
                  >
                    {" "}
                    <p>{trip.category} putovanja</p>
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/trip/${encodeURIComponent(trip.title)}`}
                    key={trip.title}
                    state={{ trip }}
                  >
                    {" "}
                    od {trip.startingPrice} €
                  </Link>
                </td>
                <td className="kalender_ponuda">
                  <Link
                    to={`/trip/${encodeURIComponent(trip.title)}`}
                    key={trip.title}
                    state={{ trip }}
                  >
                    {" "}
                    <p>29.12.2024 - 03.01.2025</p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default kalendar;
