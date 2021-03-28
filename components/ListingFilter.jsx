import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList, faThLarge,faFilter } from "@fortawesome/free-solid-svg-icons";
const ListingFilter = () => {

  const formSubmit = (e) => {
   console.log(e.target.value)
  }
  return (	
  <>
  <div className="sortOption d-none d-md-flex">
            <div className="form">
              <form action="/Vehicle" method="post">
                <input type="hidden" name="catid" value="2"/>
                <select name="sort"  onChange={e => formSubmit(e) } style={{ width: '50px'  }}>
                  <option value="null">Select Pricing</option>
                  <option value="Low">Low to High</option>
                  <option value="High">High to Low</option>
                </select>
                <select id="selectShow" name="range" onChange={e => formSubmit(e) } style={{ width: '50px'  }}>
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
            <div className="sortBtn">
              {/* <a href="#" className="lst"><i className="fa fa-th-list"></i></a> */}
               <a className="lst mx-1"> <FontAwesomeIcon icon= {faThList} /></a> 
               <a className="grd act mx-1"><FontAwesomeIcon icon ={faThLarge} /></a>
               <a className="leftSide mx-1"><FontAwesomeIcon icon ={faFilter} /></a>             
              {/* <a href="#" class="grd act"><i class="fa fa-th-large"></i></a> */}
            </div>
          </div>

          {/* sorting option for mobile */}
          <div className="sort-option-mobile d-flex d-md-none">
          <div className="form">
              <form action="/Vehicle" method="post">
                <input type="hidden" name="catid" value="2"/>
                <select className="mobile-listing-filter"
                  name="sort" 
                 onChange={e => formSubmit(e) }>
                  <option value="null">Pricing</option>
                  <option value="Low">Low to High</option>
                  <option value="High">High to Low</option>
                </select>
                <select className="mobile-listing-filter" id="selectShow" name="range"
                 onChange={e => formSubmit(e) }>
                  <option value="null">Display</option>
                  <option value="C-6">6</option>
                  <option value="C-12">12</option>
                  <option value="C-18">18</option>
                  <option value="C-24">24</option>
                  <option value="C-36">36</option>
                  <option value="C-48">48</option>
                  <option value="C-All">Show All</option>
                </select>
                <div className="">
                <a className="leftSide mx-1"><FontAwesomeIcon icon ={faFilter} /></a> 
                </div>
              </form>
            </div>
          </div>
          <style jsx>{
               `
               .sortBtn{
                 display: none;
               }
               .mobile-listing-filter{
                font-size: 15px;
                padding: 10px 12px;
                border: 1px solid #ddd;
                margin-right: 10px;
                width: 100px;
                color: #4F504D;
               }

            
            
            `
          }

          </style>
  </>
  )
}

export default ListingFilter
