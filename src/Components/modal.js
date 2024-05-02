import React from "react";

function Modals({ showModal, handleCloseModal }) {
    return (
        showModal && (
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', width: '100%' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header custom-modal-header d-flex justify-content-center mb-4;" style={{backgroundColor : '#EFFFF4', color : '#008A45'}}>
                            Let's learn, share
                            & inspire each other with our passion for computer engineering. Sign up now 🤘🏼 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button id="close-form" type="button" className="close" aria-label="Close" onClick={handleCloseModal}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="px-4">
                            <div className="d-flex justify-content-between  align-items-center mb-4">
                                <h4 className="d-flex fw-bold" id="update">Create Account</h4>
                                <button className="btn" data-fdprocessedid="n1c408">Already
                                    have an account? <span className="text-primary" id="sign-in">Sign In</span>
                                </button>
                            </div>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex flex-column gap-2">
                                            <div className="d-flex">
                                                <input type="text" className="form-control custom-input" placeholder="First Name" data-fdprocessedid="nzshdh" id="hide-for-sign-in1" style={{ display: 'block' }} />
                                                <input type="text" className="form-control custom-input" placeholder="Last Name" data-fdprocessedid="k6vm0s" id="hide-for-sign-in2" style={{ display: 'block' }} />
                                            </div>
                                            <input type="email" className="form-control custom-input" placeholder="Email" data-fdprocessedid="eesilp" />
                                            <div className="d-flex align-items-center justify-content-between  position-relative">
                                                <input type="password" className="form-control custom-input" placeholder="Password" data-fdprocessedid="dshol6" />
                                                <button className="btn position-absolute" style={{ right: '10px' }} data-fdprocessedid="fg2vi5">
                                                    <img src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e" alt="eye" width="18px" height="18px" />
                                                </button>
                                            </div>
                                            <input type="password" className="form-control mb-4 custom-input" placeholder="Confirm password" data-fdprocessedid="jpcdvo" />
                                            <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4" data-bs-dismiss="modal" data-fdprocessedid="rk667f" id="update1">
                                                Create Account
                                            </button>
                                            <div className="d-flex flex-column gap-2">
                                                <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group" data-fdprocessedid="z1rjm">
                                                    <img src="https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg" alt="facebook" />
                                                    Sign Up with Facebook
                                                </button>
                                                <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center" data-fdprocessedid="i8quid">
                                                    <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_2217)'%3e%3cpath%20d='M3.54594%209.66905L2.989%2011.7482L0.953406%2011.7912C0.345063%2010.6629%200%209.37192%200%208.00005C0%206.67345%200.322625%205.42245%200.8945%204.32092H0.894938L2.70719%204.65317L3.50106%206.45455C3.33491%206.93895%203.24434%207.45895%203.24434%208.00005C3.24441%208.5873%203.35078%209.14995%203.54594%209.66905ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23FBBB00'/%3e%3cpath%20d='M15.8602%206.50562C15.9521%206.98955%2016%207.48933%2016%208.00012C16%208.57287%2015.9398%209.13155%2015.8251%209.67046C15.4357%2011.5043%2014.4181%2013.1056%2013.0084%2014.2388L13.008%2014.2384L10.7253%2014.1219L10.4023%2012.1052C11.3377%2011.5566%2012.0687%2010.6981%2012.4537%209.67046H8.1759V6.50562H12.5161H15.8602Z'%20fill='%23518EF8'/%3e%3cpath%20d='M13.0081%2014.2382L13.0085%2014.2386C11.6375%2015.3406%209.89596%2015.9999%208.00015%2015.9999C4.95355%2015.9999%202.30477%2014.2971%200.953552%2011.7911L3.54608%209.66895C4.22168%2011.472%205.96102%2012.7555%208.00015%2012.7555C8.87662%2012.7555%209.69774%2012.5186%2010.4023%2012.105L13.0081%2014.2382Z'%20fill='%2328B446'/%3e%3cpath%20d='M13.1064%201.84175L10.5148%203.9635C9.78553%203.50769%208.92353%203.24438%208.00003%203.24438C5.91475%203.24438%204.14288%204.58678%203.50113%206.4545L0.894969%204.32088H0.894531C2.22597%201.75384%204.90816%200%208.00003%200C9.94112%200%2011.7209%200.691438%2013.1064%201.84175Z'%20fill='%23F14336'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2217'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="google" />
                                                    Sign Up with Google
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column">
                                            <img src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg" alt="atg-illustration" />
                                            <p className="info-signup">By signing up, you agree to our Terms &amp; conditions,
                                                Privacy
                                                policy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Modals;