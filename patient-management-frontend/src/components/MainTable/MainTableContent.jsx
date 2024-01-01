import "./maintable.css";
const MainTableContent = () => {
  return (
    <div className="table-content">
      <table>
        <tr>
          <th>Basic Info</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Admitted Date</th>
        </tr>
        <tr className="td-wrapper">
          <td>
            <div className="info-wrapper">
              <div className="patient-image">
                <img src="./images/icons8-user-50.png" alt="" />
              </div>
              <div className="info-content">
                <div className="name">Akash</div>
                <div className="email">abc@gmail.com</div>
              </div>
            </div>
          </td>
          <td>999999</td>
          <td>ktm</td>
          <td>F</td>
          <td>3333</td>
        </tr>

        <tr className="td-wrapper">
          <td>
            <div className="info-wrapper">
              <div className="patient-image">
                <img src="./images/icons8-user-50.png" alt="" />
              </div>
              <div className="info-content">
                <div className="name">Akash</div>
                <div className="email">abc@gmail.com</div>
              </div>
            </div>
          </td>
          <td>999999</td>
          <td>ktm</td>
          <td>F</td>
          <td>3333</td>
        </tr>
        <tr className="td-wrapper">
          <td>
            <div className="info-wrapper">
              <div className="patient-image">
                <img src="./images/icons8-user-50.png" alt="" />
              </div>
              <div className="info-content">
                <div className="name">Akash</div>
                <div className="email">abc@gmail.com</div>
              </div>
            </div>
          </td>
          <td>999999</td>
          <td>ktm</td>
          <td>F</td>
          <td>3333</td>
        </tr>
      </table>
    </div>
  );
};

export default MainTableContent;
