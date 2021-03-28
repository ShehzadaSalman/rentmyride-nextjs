import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'

const InnerNavBanner = ({home = 'home', page_url = "/", page = 'Page title'}) => {
  return (<>
    <div class="innerBanner">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <h3>{page}</h3>
            <img src="/images/border.png"/>
            <ul>
              <li><Link href={page_url}><a><FontAwesomeIcon icon={faHome} /> {home}</a></Link></li>
              <li><FontAwesomeIcon icon={faChevronRight} /></li>
              <li>{page}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>)
}
export default InnerNavBanner
