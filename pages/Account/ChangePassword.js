import DashboardLayout from "../../layouts/dashboard";
const ChangePassword = () => {
  return (
    <>
      <DashboardLayout>
        <div className="mt-3">
          <h2>Change Password</h2>
          <form
            id="ChangePasswordForm"
            name="ChangePasswordForm"
            action="/Account/ChangePassword"
            method="post"
            onsubmit="return ValidateChangePasswordForm()"
          >
            <div class="contactForm">
              <div class="fieldset">
                <div class="field">
                  <label>Current Password</label>
                  <div class="form-group">
                    <input
                      class="form-controller"
                      type="password"
                      name="OldPassword"
                    />
                    <span
                      toggle="#password-field1"
                      class="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                </div>
                <div class="field">
                  <label>New Password</label>

                  <div class="form-group">
                    <input
                      class="form-controller"
                      type="password"
                      name="NewPassword"
                    />
                    <span
                      toggle="#password-field2"
                      class="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="fieldset">
                <div class="field">
                  <label>Confirm New Password</label>

                  <div class="form-group">
                    <input
                      class="form-controller"
                      type="password"
                      name="ConPassword"
                    />
                    <span
                      toggle="#password-field3"
                      class="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <a class="cstm-btn cstm-edit">Update</a>
              </div>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ChangePassword;
