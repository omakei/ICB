import React from 'react'

export default ({title, children}) => {


    return(
        <div class="block">
            <div class="block-header block-header-default">
                <h3 class="block-title">{title}</h3>
            </div>
            <div class="block-content">
                {children}
            </div>
        </div>
    )
}