import React from 'react'

import Slider from 'react-slick';
import Subjelajah from './subjelajah'


export default function Jelajah() {
    const settings = {
        className: "",
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,

    }
    return (
        <>
            <div className="mt-5">
                <h5 className=" fw-bold">Jelajahi Wisata Indonesia</h5>
                <span>Temukan hal menarik di destinasi populer ini</span>
                <Slider {...settings} className="mt-4">
                    <Subjelajah img="/Air-Terjunkembar.png" nama="Air Terjun" jumlah="1.234" />
                    <Subjelajah img="/pulaumerah.jpg" nama="Pantai" jumlah="1.234" />
                    <Subjelajah img="/kawah-ijen.jpg" nama="Pegunungan" jumlah="1.234" />
                    <Subjelajah img="/hutan.jpg" nama="Hutan" jumlah="1.234" />
                    <Subjelajah img="/Air-Terjunkembar.png" nama="Air Terjun Kembar" jumlah="1.234" />
                    <Subjelajah img="/Air-Terjunkembar.png" nama="Air Terjun Kembar" jumlah="1.234" />
                    <Subjelajah img="/Air-Terjunkembar.png" nama="Air Terjun Kembar" jumlah="1.234" />
                </Slider>
            </div>
        </>
    )
}
