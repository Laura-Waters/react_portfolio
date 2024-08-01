export default function Contact() {
    return (
      <div>
        <h2>Contact</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
      </form>
      </div>
    );
}