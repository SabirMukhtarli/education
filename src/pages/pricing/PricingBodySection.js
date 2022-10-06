import React from 'react'

export default function PricingBodySection() {
  return (
    <section className="bg-600">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6 className="font-sans-serif text-primary fw-bold">Our Plans </h6>
              <h1 className="mb-6">Get in Reasonable Price</h1>
            </div>
            <div className="col">
              <div className="d-flex justify-content-end">
                <label className="form-check-label me-2" htmlFor="customSwitch1">Monthly</label>
                <div className="form-check form-switch">
                  <input className="form-check-input" id="customSwitch1" type="checkbox" defaultChecked="checked" />
                  <label className="form-check-label align-top" htmlFor="customSwitch1">Yearly</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-5 mb-md-0 h-100">
                <div className="text-center mb-5"><span className="badge bg-black fw-normal text-uppercase bg-secondary">Starter</span></div>
                <div className="card-body px-4 py-6 py-md-5 py-lg-6">
                  <div className="d-flex justify-content-start text-secondary"><span className="h4 mb-0 mt-2 me-2">$</span><span className="display-3 fw-medium">19.</span><span className="display-4 fw-medium">00</span></div>
                  <p className="text-muted mb-2 my-md-3">A private limited is the most popular</p>
                  <hr className="border border-1" />
                  <ul className="list-unstyled">
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Access to 25 courses</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Course Discussions</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Offline Viewing</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-muted me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-muted me-2"></i> Font Awesome fontawesome.com */}Certificate after completion</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-muted me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-muted me-2"></i> Font Awesome fontawesome.com */} Private sessions</li>
                  </ul>
                  <div className="d-grid"> <a className="btn btn-lg btn-primary" href="#!">Purchase now</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-5 mb-md-0 h-100">
                <div className="text-center mb-5"><span className="badge bg-black fw-normal text-uppercase bg-info">premium</span></div>
                <div className="card-body px-4 py-6 py-md-5 py-lg-6">
                  <div className="d-flex justify-content-start text-secondary"><span className="h4 mb-0 mt-2 me-2">$</span><span className="display-3 fw-medium">29.</span><span className="display-4 fw-medium">00</span></div>
                  <p className="text-muted mb-2 my-md-3">A private limited is the most popular</p>
                  <hr className="border border-1" />
                  <ul className="list-unstyled">
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Access to 25 courses</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Course Discussions</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Certificate after completion</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Offline Viewing</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-muted me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-muted me-2"></i> Font Awesome fontawesome.com */} Private sessions</li>
                  </ul>
                  <div className="d-grid"><a className="btn btn-lg btn-secondary" href="#!">Purchase now</a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-5 mb-md-0 h-100">
                <div className="text-center mb-5"><span className="badge bg-black fw-normal text-uppercase bg-danger">enterprise</span></div>
                <div className="card-body px-4 py-6 py-md-5 py-lg-6">
                  <div className="d-flex justify-content-start text-secondary"><span className="h4 mb-0 mt-2 me-2">$</span><span className="display-3 fw-medium">49.</span><span className="display-4 fw-medium">00</span></div>
                  <p className="text-muted mb-2 my-md-3">A private limited is the most popular</p>
                  <hr className="border border-1" />
                  <ul className="list-unstyled">
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Access to 25 courses</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Course Discussions</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Certificate after completion</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */}Offline Viewing</li>
                    <li className="mb-3"><svg className="svg-inline--fa fa-check fa-w-16 text-info me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>{/* <i class="fas fa-check text-info me-2"></i> Font Awesome fontawesome.com */} Private sessions</li>
                  </ul>
                  <div className="d-grid"> <a className="btn btn-lg btn-primary" href="#!">Purchase now</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
  )
}
