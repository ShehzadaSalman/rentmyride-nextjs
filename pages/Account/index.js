import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "../../layouts/dashboard";

const UserAccount = () => {
  const [EditAccount, setEditAccount] = useState(true);

  return (
    <>
      <DashboardLayout>
        <h3>User Profile</h3>
        <a onClick={() => setEditAccount(false)} className="edits  cstm-edit">
          Edit Profile
        </a>
        <h2>Contact Detail</h2>

        {EditAccount ? (
          <div className="contactDetailOnly d-block">
            <div className="row">
              <div className="col-md-6">
                <fieldset>
                  <legend>Name</legend>
                  <span>Ayaz Chishti</span>
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset>
                  <legend>Email</legend>
                  <span>ayazchishti@gmail.com</span>
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset>
                  <legend>Phone Number</legend>
                  <span>971503404768</span>
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset>
                  <legend>Residential Status</legend>
                  <span>Resident</span>
                </fieldset>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <fieldset>
                  <legend>Residential Address</legend>
                  <span></span>
                </fieldset>
              </div>
            </div>
            <fieldset>
              <legend>National Identity</legend>
              <div className="row document_imgs">
                <div className="col-md-4 imgs">
                  <span>Emirates ID Front</span>
                  <img src="/Assets/myrideImages/User/" />
                </div>
                <div className="col-md-4 imgs">
                  <span>Emirates ID Back</span>
                  <img src="/Assets/myrideImages/User/" />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Driving Licence</legend>
              <div className="row document_imgs">
                <div className="col-md-4 imgs">
                  <span>Driving Licence Front</span>
                  <img src="/Assets/myrideImages/User/" />
                </div>
              </div>
            </fieldset>
          </div>
        ) : (
          <div className="contactForm">
            <form
              action="/Account/EditProfile"
              enctype="multipart/form-data"
              id="editAccountForm"
              method="post"
            >
              <div className="fieldset">
                <div className="field">
                  <label>Name</label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    value="Ayaz Chishti"
                  />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="text" name="EmailAddress" />
                </div>
              </div>
              <div className="fieldset">
                <div className="field">
                  <label>Phone Number</label>
                  <input type="text" name="PhoneNumber" />
                </div>
                <div class="field">
                  <label>Residential Status</label>
                  <select
                    name="ResidentialStatus"
                    id="ResidentialStatus"
                    onselect="resetValidation(this.id)"
                    onblur="resetValidation(this.id)"
                  >
                    <option value="">Please Select</option>
                    <option value="0" selected="">
                      Resident
                    </option>
                    <option value="1">Non-Resident</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label>Residential Address</label>
                <input
                  type="text"
                  name="Location"
                  id="ResidentialAddress"
                  className="pac-target-input"
                  placeholder="Enter a location"
                  autocomplete="off"
                />
              </div>
              <div className="field">
                <label>Emirates ID Front</label>
                <input
                  id="editEmirateIdFile"
                  name="EmiratesIdImageFile"
                  type="file"
                  value=""
                />
              </div>
              <div className="field">
                <label>Emirates ID Back</label>
                <input
                  id="editUserFile"
                  name="ImageFile"
                  type="file"
                  value=""
                />
              </div>
              <div className="field">
                <label>Driving Licence Front</label>
                <input
                  id="editDrivingLicenceFile"
                  name="DrivingLicenceImageFile"
                  type="file"
                  value=""
                />
              </div>
              <div className="field">
                <label>Profile Image</label>
                <input
                  id="editUserFile"
                  name="UserImageFile"
                  type="file"
                  value=""
                />
              </div>
              <div className="custm-profile">
                <button type="submit">Update</button>
                <a
                  href="javascript:;"
                  title=""
                  onclick="revertValues('Ayaz Chishti','ayazchishti@gmail.com','971503404768','0','')"
                  className="edits"
                >
                  <button className="ml-5">Cancel</button>
                </a>
              </div>
            </form>{" "}
          </div>
        )}
      </DashboardLayout>
    </>
  );
};

export default UserAccount;
