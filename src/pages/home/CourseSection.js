import React from 'react'

export default function CourseSection() {

  // const arr=["Test 1","Test 2","Test 3"]

  const arr = [
    {
      id: 1,
      title: 'Test 1',
      subTitle: 'test subtitle 1',
      img: "assets/img/gallery/psychology.png"
    },
    {
      id: 2,
      title: 'Test 2',
      subTitle: 'test subtitle 2',
      img: 'assets/img/gallery/philosophy.png'
    },
    {
      id: 3,
      title: 'Test 3',
      subTitle: 'test subtitle 3',
      img: 'assets/img/gallery/photographs.png'
    }
  ]

  return (
    <section>
      <div className="container">
        <div className="row">
          <h1 className="text-center mb-5"> Top Featured Courses</h1>
          {
            arr.map(obj => {
              return (
                <div className="col-md-4 mb-4" key={obj.id}>
                  <div className="card h-100"><img className="card-img-top w-100" src={obj.img} alt="courses" />
                    <div className="card-body">
                      <h5 className="font-sans-serif fw-bold fs-md-0 fs-lg-1">{obj.title}</h5><a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">{obj.subTitle}</a>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
      {/* end of .container*/}
    </section>
  )
}
