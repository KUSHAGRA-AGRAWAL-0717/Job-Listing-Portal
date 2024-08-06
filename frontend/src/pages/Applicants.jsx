import "./applicants.css"

export const Applicants = () => {
  return (
    <div className="container">Applicants requests
        <div className="head">
             <div>
                Sr No.
             </div>
             <div>
                Name : 
             </div>
             <div >
                Job Title : 
             </div>
             <div>
                Phone : 
             </div>
             <div>
                Email : 
             </div>
             <div >
                Status : 
             </div>
        </div>
        <div className="requests">
            <div className="item">
            <div className="sr" style={{width: 'auto'}}>
                1
             </div>
             <div className="name">
                Kushagra
             </div>
             <div className="jobTitle">
                Mern Developer
             </div>
             <div className="phone">
                987654321345 
             </div>
             <div className="email">
                applicant@gmail.com
             </div>
             <div className="status">
                <div className="ok">✅</div> 
                <div className="no">❌</div>
             </div>
            </div>
        </div>
    </div>
  )
}
