import DashboardLayout from "../../layouts/dashboard";

const OfferPackages = () => {
  return (
    <>
      <DashboardLayout>
        <div className="mt-4">
          <h2>Packages Details</h2>
          <div className="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Package Name</th>
                  <th>Package Amount</th>
                  <th>Terms & Conditions</th>
                  <th>Package Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Super Luxury</td>
                  <td>1,999 AED</td>
                  <td>all terms are applied</td>
                  <td>9/12/1994</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default OfferPackages;
