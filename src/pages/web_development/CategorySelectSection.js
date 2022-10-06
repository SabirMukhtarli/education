import React from 'react'

export default function CategorySelectSection() {
  return (
    <section className="pb-11 pt-7 bg-600">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 className="font-sans-serif text-primary fw-bold">Course category</h6>
              <h1 className="mb-6">Web Development</h1>
              <form className="row g-3">
                <div className="col-sm-6 col-md-3">
                  <label className="form-label" htmlFor="inputCategories">Categories</label>
                  <select className="form-select" id="inputCategories">
                    <option selected="selected">Web development</option>
                    <option value={1}>UX designer</option>
                  </select>
                </div>
                <div className="col-sm-6 col-md-3">
                  <label className="form-label" htmlFor="inputLevel">Level</label>
                  <select className="form-select" id="inputLevel">
                    <option selected="selected">All Level</option>
                    <option value={1}>Level 1 </option>
                    <option value={2}>Level 2 </option>
                    <option value={3}>Level 3</option>
                  </select>
                </div>
                <div className="col-sm-6 col-md-3">
                  <label className="form-label" htmlFor="inputLanguage">Language</label>
                  <select className="form-select" id="inputLanguage">
                    <option selected="selected">English</option>
                    <option value={1}>Bangla</option>
                    <option value={2}>Hindi</option>
                  </select>
                </div>
                <div className="col-sm-6 col-md-3">
                  <label className="form-label" htmlFor="inputInstructor">Instructor</label>
                  <select className="form-select" id="inputInstructor">
                    <option selected="selected">All Instructor </option>
                  </select>
                </div>
                <div className="col-auto z-index-2">
                  <button className="btn btn-primary" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
  )
}
