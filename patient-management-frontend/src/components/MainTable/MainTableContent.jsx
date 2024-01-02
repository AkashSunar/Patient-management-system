import "./maintable.css";
import { useGetPatientQuery } from "../../redux/api/authApi";
const MainTableContent = () => {
  const { data, isLoading, isError, isSuccess } = useGetPatientQuery();
  return (
    <div className="table-content">
      <table>
        <thead>
          <tr>
            <th>Basic Info</th>
            <th>Phone Number</th>
            <th>D.O.B</th>
            <th>Address</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess
            ? data.map((val, index) => {
                return (
                  <>
                    <tr className="td-wrapper" key={index}>
                      <td>
                        <div className="info-wrapper">
                          <div className="patient-image">
                            <img src={val.image} alt="" />
                          </div>
                          <div className="info-content">
                            <div className="name">{val.full_name}</div>
                            <div className="email">{val.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>{val.contact}</td>
                      <td>{val.DOB}</td>
                      <td>{val.Address}</td>
                      <td>{val.gender}</td>
                    </tr>
                  </>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default MainTableContent;
