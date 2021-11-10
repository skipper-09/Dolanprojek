import React from 'react'

export const Kategori = ({ label }) => {
    return (
        <>
            <div class="input-group mt-2">
                <span class="input-group-addon me-2">
                    <input type="checkbox" name="name" id="name" aria-label="" />
                </span>
                <label htmlFor={label}>{label}</label>
            </div>
        </>
    )
}
export default Kategori
