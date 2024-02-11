import React from 'react'

const Navbar = () => {
    const Links = [
        {
            linkName: "Home",
            path: "/"
        }, 
        {
            linkName: "About",
            path: '/about'
        }, 
        {
            linkName: "Language",
            path: '/language'
        }, 
        {
            linkName: "Course",
            path: "/course"
        }
    ]



    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary mx-2 rounded ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {Links.map((item, index) => {
                                return (
                                    <li class={`nav-item  ${index === 0 ? 'active' : ''}`} key={index}><a className='nav-link' href={item.path}>{item.linkName} </a></li>
                                )
                            })
                            }
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar