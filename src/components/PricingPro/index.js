import proLogo from '../../images/pro.png';
import valid from '../../images/valid.png';
import invalid from '../../images/invalid.png';
import ButtonPink from '../ButtonPink';

function PricingPro() {
  return (
    <div className="pricingPro">
        <div className="pricingPro__type">
          <div className="pricingPro__type__logo">
            <img src={proLogo} alt="free-logo" />
          </div>
          <div className="pricingPro__type__text">
            Pro
          </div>
          <div className="pricingPro__type__best">
            Best Value
          </div>
        </div>
        <div className="pricingPro__description">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        </div>
        <div className="pricingPro__price">
          $18 <span>/ month</span>
        </div>
        <div className="pricingPro__scope">
          <ul className="pricingPro__scope__list">
            <li className="pricingPro__scope__list__item">
              <img width="16" src={valid} alt="valid-logo" />
              <span>2 links</span>
            </li>
            <li className="pricingPro__scope__list__item">
              <img width="16" src={valid} alt="valid-logo" />
              <span>Own analytics platform</span>
            </li>
            <li className="pricingPro__scope__list__item">
              <img width="16" src={valid} alt="valid-logo" />
              <span>Chat support</span>
            </li>
            <li className="pricingPro__scope__list__item">
              <img width="13" src={invalid} alt="valid-logo" />
              <span className="invalid">Mobile application</span>
            </li>
            <li className="pricingPro__scope__list__item">
              <img width="13" src={invalid} alt="valid-logo" />
              <span className="invalid">Unlimited users</span>
            </li>
          </ul>
        </div>
        <div className="pricingPro__button">
          <ButtonPink />
        </div>
    </div>
  )
}

export default PricingPro;