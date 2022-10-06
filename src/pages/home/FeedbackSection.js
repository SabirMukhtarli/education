import React from 'react'

export default function FeedbackSection() {
  return (
    <section className="pt-0">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-md-12 col-lg-6 h-100">
              <div className="card card-span text-white h-100"><img className="w-100" src="assets/img/gallery/student-feedback.png" alt="..." />
                <div className="card-body px-xl-5 px-md-3 pt-0">
                  <div className="d-flex flex-column align-items-center bg-200" style={{marginTop: '-2.4rem'}}>
                    <h5 className="mt-3 mb-0">Kimmie Vo</h5>
                    <p className="text-muted">Junior Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 h-100">
              <h1 className="my-4">Successful Student<br /><span className="text-primary">Feedback</span></h1>
              <p>Take courses from the world’s best instructors and universities. Courses include recorded auto-graded and peer-reviewed assignments, video lectures, and community discussion forums. When you complete a course, you’ll be eligible to receive a shareable electronic Course Certificate for a small fee.</p>
              <div className="mt-6">
                <h5 className="font-sans-serif fw-bold mb-3">The courses that Kimmie has taken</h5>
                <div className="card card-span bg-600">
                  <div className="card-body">
                    <div className="row flex-center gx-0">
                      <div className="col-lg-4 col-xl-3 text-center text-xl-start"><img src="assets/img/gallery/art-design.png" width={120} alt="courses" /></div>
                      <div className="col-lg-8 col-xl-9">
                        <h5 className="font-sans-serif fw-bold">Modern and Contemporary Art and Design</h5>
                        <p className="text-muted fs--1">The Museum of Modern Art</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
  )
}
