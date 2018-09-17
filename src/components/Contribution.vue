<template>
  <div class="user-dashboard">
    <global-topbar></global-topbar>
    <div class="user-wraper">
        <div class="container">
            <div class="d-flex">
                <global-sidebar></global-sidebar>

                <div class="user-content">
                    <div class="user-panel">
                        <h2 class="user-panel-title">Buy Tokens</h2>
                        <form action="#">
                            <div class="row justify-content-center">
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <img src="~images/eth_icon.png" alt="Dsion eth logo">
                                </li>
                                <li class="list-inline-item">
                                  <em class="ti ti-arrows-horizontal 2x"></em>
                                </li>
                                <li class="list-inline-item">
                                  <img src="~images/img_dsion.png" alt="Dsion coin logo">
                                </li>
                              </ul>
                            </div>
                            <div class="gaps-1x"></div>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="payment-calculator">
                                        <div class="payment-get">
                                            <label for="paymentGet">Tokens to Purchase</label>
                                            <div class="payment-input">
                                                <input class="input-bordered" type="text" id="paymentGet" value="1200">
                                                <span class="payment-get-cur payment-cal-cur">icox</span>
                                            </div>
                                        </div>
                                        <em class="ti ti-exchange-vertical"></em>
                                        <div class="payment-from">
                                            <label for="paymentFrom">Payment Amount</label>
                                            <div class="payment-input">
                                                <input class="input-bordered" type="text" id="paymentFrom" value="600">
                                                <span class="payment-from-cur payment-cal-cur">usd</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gaps-2x d-md-none"></div>
                                </div><!-- .col -->
                                <div class="col-md-4">
                                    <div class="payment-bonus">
                                        <h6 class="payment-bonus-title">Current Bonus</h6>
                                        <span class="payment-bonus-amount">20% <span>on pre-sales</span></span>
                                        <span class="payment-bonus-time">End at - 09 Jul, 2018</span>
                                    </div>
                                    <div class="gaps-1x d-md-none"></div>
                                </div><!-- .col -->
                            </div><!-- .row -->
                            <div class="gaps-1x"></div>
                            <div class="payment-calculator-note"><i class="fas fa-info-circle"></i>The calculator helps you to convert required currency to ICOX tokens.</div>
                            <div class="gaps-3x"></div>
                            <div class="payment-summary">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="payment-summary-item payment-summary-final">
                                            <h6 class="payment-summary-title">Final Payment</h6>
                                            <div class="payment-summary-info">
                                                <span class="payment-summary-amount">600.00</span> <span>usd</span>
                                            </div>
                                        </div>
                                    </div><!-- .col -->
                                    <div class="col-md-4">
                                        <div class="payment-summary-item payment-summary-bonus">
                                            <h6 class="payment-summary-title">Received Bonus</h6>
                                            <div class="payment-summary-info">
                                                <span>+</span> <span class="payment-summary-amount">600.00</span> <span>icox</span>
                                            </div>
                                        </div>
                                    </div><!-- .col -->
                                    <div class="col-md-4">
                                        <div class="payment-summary-item payment-summary-tokens">
                                            <h6 class="payment-summary-title">Tokens Received</h6>
                                            <div class="payment-summary-info">
                                                <span class="payment-summary-amount">12,200</span> <span>icox</span>
                                            </div>
                                        </div>
                                    </div><!-- .col -->
                                </div><!-- .row -->
                            </div><!-- .payment-summary -->
                            <a href="#" class="btn btn-primary payment-btn" data-toggle="modal" data-target="#tranxETH">Purchase Tokens</a>
                        </form><!-- form -->
                    </div><!-- .user-panel -->
                </div><!-- .user-content -->
            </div><!-- .d-flex -->
        </div><!-- .container -->
    </div>
    <!-- UserWraper End -->

    <div class="modal fade" id="tranxETH" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="tranx-popup">
                    <h5>Purchase Details ETH</h5>
                    <div class="tranx-payment-details">
                        <p>Hi, Your transaction <strong>ICIYOW0102</strong> is <strong>Pending Payment</strong><br> You will receive <strong>5,470 ICOX</strong> tokens (incl. bonus of 450 ICOX) once paid.</p>
                        <h6>Please make your Payment to the bellow Address</h6>
                        <div class="tranx-payment-info">
                            <span class="tranx-copy-feedback copy-feedback"></span>
                            <em class="fab fa-ethereum"></em>
                            <input type="text" class="tranx-payment-address copy-address" value="0x4156d3342d5c385a87d264f90653733592000581" disabled>
                            <a href="#" class="tranx-payment-copy copy-trigger"><em class="ti ti-files"></em></a>
                        </div><!-- .tranx-payment-info -->
                        <ul class="tranx-info-list">
                            <li><span>SET GAS LIMIT:</span> 120 000</li>
                            <li><span>SET GAS PRICE:</span> 95 Gwei</li>
                        </ul><!-- .tranx-info-list -->
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="tranx-info-qr">
                                    <span>OR Scan bellow QR Code to pay</span>
                                    <img class="tranx-info-qrimg" src="images/eth-qr.png" alt="qr">
                                    <div class="gaps-4x"></div>
                                    <ul class="btn-grp guttar-20px">
                                        <li><a href="#" class="btn btn-primary pay-done">I want this token</a></li>
                                        <li><a href="#" class="btn btn-xs btn-uline btn-uline-danger" data-dismiss="modal">I Don't Want This</a></li>
                                    </ul>
                                </div>
                            </div><!-- .col -->
                            <div class="col-sm-7">
                                <div class="note note-info">
                                    <em class="fas fa-info-circle"></em>
                                    <p>Do not make payment through exchange (Kraken, Bitfinex). You can use MetaMask, MayEtherWallet, Mist wallets etc.</p>
                                </div>
                                <div class="gaps-1x"></div>
                                <div class="note note-danger">
                                    <em class="fas fa-info-circle"></em>
                                    <p>In case you send a different amount ETH, the number of ICOX tokens will update accordingly.</p>
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                    </div><!-- .tranx-payment-details -->
                </div><!-- .tranx-popup -->
            </div><!-- .modal-content -->
        </div><!-- .modal-dialog -->
    </div>
    <!-- Modal End -->

    <div class="modal fade" id="tranxLTC" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="tranx-popup">
                    <h5>Purchase Details LTC</h5>
                    <div class="tranx-payment-details">
                        <p>Hi, Your transaction <strong>ICIYOW0102</strong> is <strong>Pending Payment</strong><br> You will receive <strong>5,470 ICOX</strong> tokens (incl. bonus of 450 ICOX) once paid.</p>
                        <h6>Please make your Payment to the bellow Address</h6>
                        <div class="tranx-payment-info">
                            <span class="tranx-copy-feedback copy-feedback"></span>
                            <em class="fab fa-ethereum"></em>
                            <input type="text" class="tranx-payment-address copy-address" value="0x4156d3342d5c385a87d264f90653733592000581" disabled>
                            <a href="#" class="tranx-payment-copy copy-trigger"><em class="ti ti-files"></em></a>
                        </div><!-- .tranx-payment-info -->
                        <div class="gaps-3x"></div>
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="tranx-info-qr">
                                    <span>OR Scan bellow QR Code to pay</span>
                                    <img class="tranx-info-qrimg" src="images/eth-qr.png" alt="qr">
                                    <div class="gaps-4x"></div>
                                    <ul class="btn-grp guttar-20px">
                                        <li><a href="#" class="btn btn-primary pay-done">I want this token</a></li>
                                        <li><a href="#" class="btn btn-xs btn-uline btn-uline-danger" data-dismiss="modal">I Don't Want This</a></li>
                                    </ul>
                                </div>
                            </div><!-- .col -->
                            <div class="col-sm-7">
                                <div class="note note-info">
                                    <em class="fas fa-info-circle"></em>
                                    <p>Do not make payment through exchange (Kraken, Bitfinex). You can use MetaMask, MayEtherWallet, Mist wallets etc.</p>
                                </div>
                                <div class="gaps-1x"></div>
                                <div class="note note-danger">
                                    <em class="fas fa-info-circle"></em>
                                    <p>In case you send a different amount ETH, the number of ICOX tokens will update accordingly.</p>
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                    </div><!-- .tranx-payment-details -->
                </div><!-- .tranx-popup -->
            </div><!-- .modal-content -->
        </div><!-- .modal-dialog -->
    </div>
    <!-- Modal End -->

    <div class="modal fade" id="tranxBTC" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="tranx-popup">
                    <h5>Purchase Details BTC</h5>
                    <div class="tranx-payment-details">
                        <p>Hi, Your transaction <strong>ICIYOW0102</strong> is <strong>Pending Payment</strong><br> You will receive <strong>5,470 ICOX</strong> tokens (incl. bonus of 450 ICOX) once paid.</p>
                        <h6>Please make your Payment to the bellow Address</h6>
                        <div class="tranx-payment-info">
                            <span class="tranx-copy-feedback copy-feedback"></span>
                            <em class="fab fa-ethereum"></em>
                            <input type="text" class="tranx-payment-address copy-address" value="0x4156d3342d5c385a87d264f90653733592000581" disabled>
                            <a href="#" class="tranx-payment-copy copy-trigger"><em class="ti ti-files"></em></a>
                        </div><!-- .tranx-payment-info -->
                        <div class="gaps-3x"></div>
                        <div class="row">
                            <div class="col-sm-5">
                                <div class="tranx-info-qr">
                                    <span>OR Scan bellow QR Code to pay</span>
                                    <img class="tranx-info-qrimg" src="images/eth-qr.png" alt="qr">
                                    <div class="gaps-4x"></div>
                                    <ul class="btn-grp guttar-20px">
                                        <li><a href="#" class="btn btn-primary pay-done">I want this token</a></li>
                                        <li><a href="#" class="btn btn-xs btn-uline btn-uline-danger" data-dismiss="modal">I Don't Want This</a></li>
                                    </ul>
                                </div>
                            </div><!-- .col -->
                            <div class="col-sm-7">
                                <div class="note note-info">
                                    <em class="fas fa-info-circle"></em>
                                    <p>Do not make payment through exchange (Kraken, Bitfinex). You can use MetaMask, MayEtherWallet, Mist wallets etc.</p>
                                </div>
                                <div class="gaps-1x"></div>
                                <div class="note note-danger">
                                    <em class="fas fa-info-circle"></em>
                                    <p>In case you send a different amount ETH, the number of ICOX tokens will update accordingly.</p>
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                    </div><!-- .tranx-payment-details -->
                </div><!-- .tranx-popup -->
            </div><!-- .modal-content -->
        </div><!-- .modal-dialog -->
    </div>
    <!-- Modal End -->

    <div class="modal fade" id="tranxUSD" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="tranx-popup">
                    <h5>Purchase Details USD</h5>
                    <div class="tranx-payment-details">
                        <p>Hi, Your transaction <strong>ICIYOW0102</strong> is <strong>Pending Payment</strong><br> You will receive <strong>5,470 ICOX</strong> tokens (incl. bonus of 450 ICOX) once paid.</p>
                        <h6>Please make your Payment with your credit card</h6>
                        <form action="#">
                            <div class="input-item input-with-label">
                                <label for="full-name" class="input-item-label">Name On Card</label>
                                <input class="input-bordered" type="text" id="full-name" name="full-name" placeholder="Ex : Jhone Smith">
                            </div>
                            <div class="input-item input-with-label">
                                <label for="card-number" class="input-item-label">Card Number</label>
                                <input class="input-bordered" type="text" id="card-number" name="card-number" placeholder="ex : 378 2822 4631 0005">
                            </div>
                            <div class="d-sm-flex guttar-30px">
                                <div>
                                    <div class="auto-width input-item input-with-label">
                                        <label for="expiration-date" class="input-item-label">Expiration Date</label>
                                        <div class="d-flex guttar-8px">
                                            <div>
                                                <select class="input-bordered" name="expiration-month" id="expiration-month">
                                                    <option value="mnth">MM</option>
                                                    <option value="mnth-01">01</option>
                                                    <option value="mnth-02">02</option>
                                                    <option value="mnth-03">03</option>
                                                    <option value="mnth-04">04</option>
                                                    <option value="mnth-05">05</option>
                                                    <option value="mnth-06">05</option>
                                                    <option value="mnth-07">07</option>
                                                    <option value="mnth-08">08</option>
                                                    <option value="mnth-09">09</option>
                                                    <option value="mnth-10">10</option>
                                                    <option value="mnth-11">11</option>
                                                    <option value="mnth-12">12</option>
                                                </select>
                                            </div>
                                            <div>
                                                <select class="input-bordered" name="expiration-year" id="expiration-year">
                                                    <option value="yer">YYYY</option>
                                                    <option value="yer-18">2018</option>
                                                    <option value="yer-19">2019</option>
                                                    <option value="yer-20">2020</option>
                                                    <option value="yer-21">2021</option>
                                                    <option value="yer-22">2022</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="input-item input-with-label w100px">
                                        <label for="card-number" class="input-item-label">CCV</label>
                                        <input class="input-bordered" type="text" id="card-number" name="card-number" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="gaps-2x"></div>
                            <ul class="btn-grp guttar-20px">
                                <li><a href="#" class="btn btn-primary pay-done">I want this token</a></li>
                                <li><a href="#" class="btn btn-xs btn-uline btn-uline-danger" data-dismiss="modal">I Don't Want This</a></li>
                            </ul>
                        </form>
                    </div><!-- .tranx-payment-details -->
                </div><!-- .tranx-popup -->
            </div><!-- .modal-content -->
        </div><!-- .modal-dialog -->
    </div>
    <!-- Modal End -->

    <global-footer></global-footer>
  </div>
</template>

<script>
import Topbar from './Globals/Topbar'
import Sidebar from './Globals/Sidebar'
import Footer from './Globals/Footer'
export default {
  name: 'Contribution',
  components: {
    'global-topbar': Topbar,
    'global-sidebar': Sidebar,
    'global-footer': Footer
  }
}
</script>
