import React from 'react'

export default function HolderSection() {
  return (
    <section>
        <div className="bg-holder" style={{backgroundImage: 'url(assets/img/gallery/funfacts-2-bg.png)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
        </div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 text-center mb-5"><img src="assets/img/gallery/published.png" height={100} alt="..." />
              <h1 className="my-2">768</h1>
              <p className="text-info fw-bold">COURSES PUBLISHED</p>
            </div>
            <div className="col-sm-6 col-lg-3 text-center mb-5"><img src="assets/img/gallery/instructors.png" height={100} alt="..." />
              <h1 className="my-2">120</h1>
              <p className="text-info fw-bold">EXPERT INSTRUCTORS</p>
            </div>
            <div className="col-sm-6 col-lg-3 text-center mb-5"><img src="assets/img/gallery/learners.png" height={100} alt="..." />
              <h1 className="my-2">8300</h1>
              <p className="text-info fw-bold">HAPPY LEARNERS</p>
            </div>
            <div className="col-sm-6 col-lg-3 text-center mb-5"><img src="assets/img/gallery/awards.png" height={100} alt="..." />
              <h1 className="my-2">32</h1>
              <p className="text-info fw-bold">AWARDS ACHIEVED</p>
            </div>
          </div>
        </div>
      </section>
  )
}
