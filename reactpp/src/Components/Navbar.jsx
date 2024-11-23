import img from "../assets/brand_logo.png"
function Navbar() {
  return (
    <div>
         <nav className="contaner">
           <div>
            <img src={img}/>
           </div>
      
      <ul>
        <li>Home</li>
        <li>Location</li>
        <li>About</li>
        <li>Contect</li>
      </ul>

      <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar
  