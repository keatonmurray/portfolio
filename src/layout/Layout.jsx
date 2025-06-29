import Header from '../partials/Header'
import Footer from '../partials/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <main>
        {/* <nav className="px-4">
          <div className="d-flex align-items-center justify-content-between">
           <div className="logo-area">
             <ul>
                <li>test</li>
              </ul>
           </div>
           <div className="nav-cto me-4">
             <ul>
                <li>test</li>
              </ul>
           </div>
          </div>
        </nav> */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
