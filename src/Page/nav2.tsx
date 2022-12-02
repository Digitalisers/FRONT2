import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { Link, To, useMatch, useResolvedPath } from "react-router-dom"
import styled from 'styled-components'

export default function Navbar2() {
  return (
    <nav className="container">
                                <div className="row">
                                  <div className="col-6">
                                    </div><div className="col-6">
                                    <Link className="pink-button col-2 m-4" to="/H1">List H1</Link>
                                    <Link className="pink-button col-2 m-4" to="/H2">List H2</Link>
                                    <Link className="pink-button col-2 m-4" to="/H3">List H3</Link></div>
                                </div>
    </nav>
  )
}

function CustomLink( to: To, children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, ...props: any[] ) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}