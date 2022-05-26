import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const List = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.thomso.in/apiV1/assignment`).then((getData) => {
      setApiData(getData.data);
    });
  }, []);

  const setData = (id, name, email, contact) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("contact", contact);
  };

  const getData = () => {
    axios.get(`https://api.thomso.in/apiV1/assignment`).then((getData) => {
      setApiData(getData.data);
    });
  };

  const onDelete = (id, data) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        axios
          .delete(`https://api.thomso.in/apiV1/assignment/${id}`)
          .then(() => {
            getData();
          });
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${data.name}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>ID.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {apiData.length > 0 ? (
            apiData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact} </td>
                <td className="text-right">
                  <a href="/edit">
                    <button
                      onClick={() =>
                        setData(data.id, data.name, data.email, data.contact)
                      }
                      className="button muted-button"
                    >
                      Edit
                    </button>
                  </a>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => onDelete(data.id, data)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
