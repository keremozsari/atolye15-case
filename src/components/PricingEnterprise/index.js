import enterpriseLogo from '../../images/enterprise.png';
import validWhite from '../../images/validWhite.png';
import ButtonWhite from '../ButtonWhite';

function PricingEnterprise() {
  return (
    <div className="pricingEnterprise">
        <div className="pricingEnterprise__type">
          <div className="pricingEnterprise__type__logo">
            <img src={enterpriseLogo} alt="free-logo" />
          </div>
          <div className="pricingEnterprise__type__text">
            Enterprise
          </div>
        </div>
        <div className="pricingEnterprise__description">
          Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        </div>
        <div className="pricingEnterprise__price">
          Let's Talk
        </div>
        <div className="pricingEnterprise__scope">
          <ul className="pricingEnterprise__scope__list">
            <li className="pricingEnterprise__scope__list__item">
              <img width="16" src={validWhite} alt="valid-logo" />
              <span>2 links</span>
            </li>
            <li className="pricingEnterprise__scope__list__item">
              <img width="16" src={validWhite} alt="valid-logo" />
              <span>Own analytics platform</span>
            </li>
            <li className="pricingEnterprise__scope__list__item">
              <img width="16" src={validWhite} alt="valid-logo" />
              <span className="invalid">Chat support</span>
            </li>
            <li className="pricingEnterprise__scope__list__item">
              <img width="16" src={validWhite} alt="valid-logo" />
              <span className="invalid">Mobile application</span>
            </li>
            <li className="pricingEnterprise__scope__list__item">
              <img width="16" src={validWhite} alt="valid-logo" />
              <span className="invalid">Unlimited users</span>
            </li>
            <li className="pricingEnterprise__scope__list__item">
              <img width="16" src={validWhite} alt="valid-logo" />
              <span className="invalid">Customize Panel</span>
            </li>
          </ul>
        </div>
        <div className="pricingEnterprise__button">
          <ButtonWhite />
        </div>
    </div>
  )
}

export default PricingEnterprise;