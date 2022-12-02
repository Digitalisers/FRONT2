import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import { Link, To, useMatch, useResolvedPath } from "react-router-dom"
import styled from 'styled-components'

export default function Navbar() {
  return (
    <div className="container">
                                <div className="row">
                                  <div className="col-6">
                                    </div><div className="col-6">
                                    <Link className="pink-button col-2 m-4" to="/group1">List G1</Link>
                                    <Link className="pink-button col-2 m-4" to="/group2">List G2</Link>
                                  </div>
                                </div>

    </div>
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