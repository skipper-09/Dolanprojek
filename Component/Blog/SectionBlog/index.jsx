import React from 'react'

export default function SectionBlog() {
    return (
        <>
            <div className="sectionblog mt-5">
                <div className="d-flex justify-content-between">
                    <h3>Blog</h3>
                    <div className="col-6 col-md-4 col-sm-4">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control " placeholder="Cari Blog" aria-describedby="basic-addon2" />
                            <button className="input-group-text  " id="basic-addon2">serch</button>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-md-9 col-12">
                            <div className="box d-flex mt-2 flex-row">
                                <div className="gambar">
                                    <img src="/gambar/bromo.jpg" alt="" />
                                </div>
                                <div className="header py-3 px-3 ">
                                    <h4 className="fw-bold">Bromo</h4>
                                    <div className="atribut px-3">
                                        <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg> person</span>
                                        <span className="ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                        </svg> Clock</span>
                                    </div>
                                    <div className="shortconten py-2">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus et officia, ratione mollitia nostrum exercitationem praesentium ea labore, voluptate aspernatur blanditiis saepe sapiente vel dolorem, quo dicta dignissimos. Ipsum, blanditiis?</p>
                                    </div>
                                    <button type="button" className="btn btn-primary">Baca</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <h4 className="text-center">Popular Post</h4>
                            <div className="box d-flex mt-3 flex-row">
                                <div className="gambarpopular">
                                    <img src="/gambar/bromo.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
