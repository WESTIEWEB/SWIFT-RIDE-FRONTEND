import './ProfileSetting.css'
import { FaPencilAlt } from "react-icons/fa"
import NavBar from '../../components/NavBar/NavBar'

function ProfileSetting() {
  return (
    
    <div>
         
         <NavBar />
        <section className="section">
            
            <div className="title"><h2 className="title">Profile Settings</h2></div>
            <div className="section2">
            <div className="form">
                <form className="form-field">
                   
                    <h5 className="title2">BASIC INFORMATION</h5>
                    <p className="text">Only you can view and edit your information</p>

                    <label>First Name</label>
                    <div className="input">
                    <input type="text" placeholder='Mathew' name="firstname"/><div className="icon1"><FaPencilAlt/></div>
                    </div>
                    
                    <label>Last Name</label>
                    <div className="input">
                    <input type="text" placeholder='Akintayo' name="lastname"/><div className="icon1" ><FaPencilAlt/></div>
                    </div>
                    <label>Phone</label>
                    <div className="input">
                    <input type="text" placeholder='07039770676' name="phone"/><div className="icon1"><FaPencilAlt/></div>
                    </div>
                    <label>Email</label>
                    <div className="input">
                    <input type="text" placeholder='matthew@gmail.com' name="email"/><div className="icon1"><FaPencilAlt/></div>
                    </div>

                    <input type="submit" placeholder='Save' className="Submit" />
                    
                </form>
            </div>
            </div>
           
           
        </section>
        
    </div>
  )
}

export default ProfileSetting