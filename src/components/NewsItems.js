import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let{title,description,imageUrl,newUrl ,author ,date }=this.props;
    return (
      <div className="rounded">
        <div className="card mx-2 my-2"  style={{borderRadius:"24px" }}>
          <img src={!imageUrl?"https://media2.gmgroup.be/00_nm_logo.png":imageUrl} className="card-img-top " alt=""  style={{borderRadius:"24px"}}/>
          <div className="card-body  " style={{borderRadius:"24px" ,backgroundColor:""}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
                {description}...
            </p>
            <p className="card-text"> <small className="text-muted"> By {author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newUrl} target="_blank" className="btn  btn-sm btn-dark">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
