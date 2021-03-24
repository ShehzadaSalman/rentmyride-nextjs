

const SearchFilter = () => {
  return (<div class="sideWidget">
  									<h3><span><img src="images/caricon.png"/><i></i></span>Search Filters</h3>
  									<div class="widgetContent">
  										<form>
  											<div class="searchtype">
  												<label>
  													<input type="radio" name="type"/>
  													<span><i class="fa fa-check"></i>Hourly</span>
  												</label>
  												<label>
  													<input type="radio" name="type"/>
  													<span><i class="fa fa-check"></i>Daily</span>
  												</label>
  												<label>
  													<input type="radio" name="type"/>
  													<span><i class="fa fa-check"></i>Delivery</span>
  												</label>
  											</div>
  											<h5><span>-</span>From Date</h5>
  											<div class="fields">
  												<i class="fa fa-calendar"></i>
  												<input class="datepicker" type="text" name="" placeholder="From Date"/>
  											</div>
  											<h5><span>-</span>To Date</h5>
  											<div class="fields">
  												<i class="fa fa-calendar"></i>
  												<input type="text" class="datepicker" name="" placeholder="To Date"/>
  											</div>
  											<h5><span>-</span>Time</h5>
  											<div class="fieldset">
  												<div class="fields">
  													<input type="text"  class="timepicker" name="" placeholder="From"/>
  												</div>
  												<div class="fields">
  													<input type="text"  class="timepicker" name="" placeholder="To"/>
  												</div>
  											</div>
  											<h4>Filter by Price</h4>
  											<input type="hidden" class="slider-input" value="23" />
  											<button>Apply filters</button>
  										</form>
  									</div>
  								</div>)
}

export default SearchFilter;
