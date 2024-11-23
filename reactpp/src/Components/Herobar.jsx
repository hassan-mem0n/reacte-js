import amazon from "../assets/amazon.png";
import filipcard from "../assets/flipkart.png"
import shows from "../assets/shoe_image.png"
function Herobar() {
  return (
    <main className="hero contaner">
    <div className="hero-content">
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      <div className="hero-btn">
        <button>Shop Now</button>
        <button className="seconderybtn">Category</button>
    </div>


    <div className="shopping">
        <p>Also Available On</p>
    </div>


    <div className="brand-icon">
        <img src={amazon}/>
        <img src={filipcard}/>
    </div>
    </div>


   <div>
   


    <div className="hero-img"> <img src={shows}/></div>
   </div>
   
    </main>
  )
}

export default Herobar
