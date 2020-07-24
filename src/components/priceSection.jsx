import React from "react";
const Price = () => {
  return (
    <div id="price">
      <div className="container">
        <h1>Price Plans</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="single-price">
              <div className="price-head">
                <h2>Free</h2>
                <p>
                  $0/<span>month</span>
                </p>
              </div>
              <div className="price-content">
                <ul>
                  <li>
                    <i className="fa fa-check-circle"></i> 5GB space
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> 10GB Bandwidth
                  </li>
                  <li>
                    <i className="fa fa-times-circle"></i> 15 Email Account
                  </li>
                  <li>
                    <i className="fa fa-times-circle"></i> Unlimited Domain
                  </li>
                  <li>
                    <i className="fa fa-times-circle"></i> Unlimited Support
                  </li>
                </ul>
              </div>
              <div className="price-btn">
                <button className="buy-btn">Join Free</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-price">
              <div className="price-head">
                <h2>Start Up</h2>
                <p>
                  $10/<span>month</span>
                </p>
              </div>
              <div className="price-content">
                <ul>
                  <li>
                    <i className="fa fa-check-circle"></i> 10GB space
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> 100GB Bandwidth
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> 25 Email Account
                  </li>
                  <li>
                    <i className="fa fa-times-circle"></i> Unlimited Domain
                  </li>
                  <li>
                    <i className="fa fa-times-circle"></i> Unlimited Support
                  </li>
                </ul>
              </div>
              <div className="price-btn">
                <button className="buy-btn">Buy now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-price">
              <div className="price-head">
                <h2>Business</h2>
                <p>
                  $50/<span>month</span>
                </p>
              </div>
              <div className="price-content">
                <ul>
                  <li>
                    <i className="fa fa-check-circle"></i> 20GB space
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> 200GB Bandwidth
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> 100 Email Account
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Unlimited Domain
                  </li>
                  <li>
                    <i className="fa fa-times-circle"></i> Unlimited Support
                  </li>
                </ul>
              </div>
              <div className="price-btn">
                <button className="buy-btn">Buy now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="single-price">
              <div className="price-head">
                <h2>Advance</h2>
                <p>
                  $100/<span>month</span>
                </p>
              </div>
              <div className="price-content">
                <ul>
                  <li>
                    <i className="fa fa-check-circle"></i> 50GB space
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Unlimited Bandwidth
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Unlimited Email
                    Account
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Unlimited Domain
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Unlimited Support
                  </li>
                </ul>
              </div>
              <div className="price-btn">
                <button className="buy-btn">Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
