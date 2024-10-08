import './us.css'

function Contact(){
    return(
        <>
        <div className="contact">
        
       
               <div >
                <center>
                <h1 className="heading">CONTACT US</h1>
                </center>
               
               </div>
               
        </div>
        
            <div>
            <div className="input">
                <div className="dev">
                    <input type="name" id="name" placeholder="Your Name"></input>
                    
                </div>
                <div className="dev">
                <input type="place" id="place" placeholder="Your Email"></input>
                </div>
            </div>
            <div className="subject">
            <input type="place" id="sub" placeholder="Subject"></input>
            </div>
            <div className="sub">
            <input type="place" id="subj" placeholder="Message here...."></input>
            </div>
            <div className="mess">
               
                <button className="btn">SEND MESSAGE</button>
               
            
            </div>
           
            
            </div>
            <div  className="map">
                   
            </div>
            <div className='footer'>
                    <br /><br /><br /><br />
                    <img src='https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/logo-footer-sidearea.png' />
                    <p className='footer_para'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        nostrud exercitation ullamco laboris.”
                    </p> <br /><br />
                    <h1 className='footer_para1'>STORIES</h1>
                    <p className='footer_para2'>StoresDunsmuir Ave, Los Angeles, CA 90036, USA tkins Ave, Brooklyn, NY 11208, USA</p>
                    <br /><br />
                    <h1 className='footer_para3'>NEWS AS FRESH AS OUR COFFEE</h1>
                    <br /><br />
                    <input type='email' placeholder='Your E-mail Address...' className='footer_para4' />

                    <br /><br /><br /><br />
                </div>
        
            
            
            
           </>
    );
}
export default Contact;