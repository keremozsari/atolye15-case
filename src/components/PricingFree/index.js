import freeLogo from '../../images/free.png';
import valid from '../../images/valid.png';
import invalid from '../../images/invalid.png';
import ButtonPink from '../ButtonPink';

function PricingFree() {
  return (
    <div className="pricingFree">
        <div className="pricingFree__type">
          <div className="pricingFree__type__logo">
            <img src={freeLogo} alt="free-logo" />
          </div>
          <div className="pricingFree__type__text">
            Free
          </div>
        </div>
        <div className="pricingFree__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        </div>
        <div className="pricingFree__price">
          $0 <span>/ month</span>
        </div>
        <div className="pricingFree__scope">
          <ul className="pricingFree__scope__list">
            <li className="pricingFree__scope__list__item">
              <img width="16" src={valid} alt="valid-logo" />
              <span>2 links</span>
            </li>
            <li className="pricingFree__scope__list__item">
              <img width="16" src={valid} alt="valid-logo" />
              <span>Own analytics platform</span>
            </li>
            <li className="pricingFree__scope__list__item">
              <img width="13" src={invalid} alt="valid-logo" />
              <span className="invalid">Chat support</span>
            </li>
            <li className="pricingFree__scope__list__item">
              <img width="13" src={invalid} alt="valid-logo" />
              <span className="invalid">Mobile application</span>
            </li>
            <li className="pricingFree__scope__list__item">
              <img width="13" src={invalid} alt="valid-logo" />
              <span className="invalid">Unlimited users</span>
            </li>
          </ul>
        </div>
        <div className="pricingFree__button">
          <ButtonPink />
        </div>
    </div>
  )
}

export default PricingFree;