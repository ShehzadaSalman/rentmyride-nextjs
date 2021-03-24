const ListingFilter = () => {

  return (	<div class="sortOption">
            <div class="form">
              <form action="/Vehicle" method="post">
                <input type="hidden" name="catid" value="2"/>
                <select name="sort" onchange="this.form.submit()">
                  <option value="null">Select Pricing</option>
                  <option value="Low">Low to High</option>
                  <option value="High">High to Low</option>
                </select>
                <select id="selectShow" name="range" onchange="this.form.submit();">
                  <option value="null">Select</option>
                  <option value="C-6">6</option>
                  <option value="C-12">12</option>
                  <option value="C-18">18</option>
                  <option value="C-24">24</option>
                  <option value="C-36">36</option>
                  <option value="C-48">48</option>
                  <option value="C-All">Show All</option>
                </select>
              </form>
            </div>
            <div class="sortBtn">
              <a href="#" class="lst"><i class="fa fa-th-list"></i></a>
              <a href="#" class="grd act"><i class="fa fa-th-large"></i></a>
            </div>
          </div>
  )
}

export default ListingFilter
