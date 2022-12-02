                import React from 'react'
                import Sidebar from "../../components/Sidebar";

                const List: React.FunctionComponent = () => {
                    return (<>
                        <Sidebar />
                            <header className="site-header container animated fadeInDown">
                                <div className="header-wrapper">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="site-branding">
                                                <a href="src/Page/IU/List#"><h1>HEI</h1></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <div id="menu-container">
                                <div id="menu-1" className="homepage home-section container">
                                    <div className="home-intro text-center">
                                        <h2 className="welcome-title animated fadeInLeft bryan">Liste des eleves chez HEI</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row m-3 align-items-center">
                                        <div className="card wd-18 col-3 m-5">
                                            <div className="card-body">
                                                <h5 className="card-title">Premiere annee</h5>
                                                <p className="card-text">MGT, PROG1/2, SYS1, ...</p>
                                                <a href="/L1" className="btn btn-primary">Go to list</a>
                                        </div></div>
                                        <div className="card wd-18 col-3 m-5">
                                            <div className="card-body">
                                                <h5 className="card-title">Deuxieme annee</h5>
                                                <p className="card-text">MGT2, PROG3, ...
                                                    content.</p>
                                                <a href="/L2" className="btn btn-primary">Go to list</a>
                                        </div></div>
                                        <div className="card wd-18 col-3 m-5">
                                            <div className="card-body">
                                                <h5 className="card-title">troisieme annee</h5>
                                                <p className="card-text">Undefind
                                                    content.</p>
                                                <a href="/L3" className="btn btn-primary">Go to list</a>
                                        </div></div>
                                </div>
                            </div>

                            <footer className="site-footer container text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-footer">
                                            <ul className="social">
                                                <li><a href="src/Page/IU/List#">Facebook</a></li>
                                                <li><a href="src/Page/IU/List#">Twitter</a></li>
                                                <li><a href="src/Page/IU/List#">Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 copyright">
                                        <p>Project 2 &copy; from <a href="src/Page/IU/List">Digitalisers (git digitalisers eto aveo)</a></p>
                                    </div>
                                </div>
                            </footer>
                        </>
                    )
                }

                export default List
