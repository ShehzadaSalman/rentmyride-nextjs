import Link from "next/link";
import DashboardLayout from "../../layouts/dashboard";

const Inquiry = () => {
  return (
    <>
      <DashboardLayout>
        <h2 className="mt-4 mb-5">Feel Free to Contact Us</h2>
        <div className="contactForm">
          <div className="fieldset">
            <div className="field">
              <label>Subject</label>
              <input
                className="form-controller"
                type="text"
                name="Subject"
                id="Subject"
              />
            </div>
            <div className="field">
              <label>Issue Type</label>
              <select className="form-controller" name="IssueType">
                <option value="">Please Select</option>
                <option value="0">Complaint</option>
                <option value="1">Suggestion</option>
                <option value="2">Feedback</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              className="form-controller"
              name="Message"
              id="Message"
            ></textarea>
          </div>
          <div className="mt-4">
            <a
              style={{ color: "#fff", cursor: "pointer" }}
              title=""
              className="cstm-edit"
            >
              Send
            </a>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default Inquiry;
