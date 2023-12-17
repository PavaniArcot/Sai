import "./Education.css"  
function Education() {
    return (
      <div>
        <aside style={{ padding: "20px", backgroundColor: "pink" }}>Our best offer Ever!! summer special-get 3 courses at 22499-only. <a href="#">Read More</a></aside>
        <div className="item" style={{display:"grid",gridTemplateColumns:"30% 30% 5% 5% 5% 5%",padding:"20px",backgroundColor:"orange"}}>
          <p><a href="mailto:rjtechnology@gmail.com">email: rjtechnology@gmail.com</a></p>
          <p><a href="tel:+919025741101">contact: +91 9025741101</a></p>
          <a href="https://www.facebook.com/login/"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
          <a href="https://in.linkedin.com/"><i className="fab fa-linkedin"></i></a>
        </div>
        <section style={{display:"grid",gridTemplateColumns:"20% 15% 15% 15% 10% 10% 10%"}}>
          <h3>Arcot Technology</h3>
          <p>home</p>
          <p>About</p>
          <p>Courses</p>
          <p>Online Training</p>
          <p>Contact</p>
          <button style={{backgroundColor:"greenyellow"}}>Enquiry</button>
          
          </section>
        <address>
          
        </address>
      </div>
    )
  }
  
  export default Education;