import React from 'react'

export default function Footer() {
    const tahun = new Date().getFullYear();
    return (
        <>
            <div className="footer mt-5 d-flex align-items-center justify-content-center">
                <span className="  ">&copy;{tahun} Dolan</span>
            </div>


        </>
    )
}
