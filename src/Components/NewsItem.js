import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        if (this.props.imageUrl) {
            return (<div className='container my-3'>
                <div className="card my-3" style={{ width: "300px" }}>
                    <img style={{ height: "200px" }} src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? (title.slice(0, 40) + "...") : "News Title"}</h5>
                        <p className="card-text">{description ? (description.slice(0, 100) + "...") : "News Description"}</p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>)
        }
    }
}

export default NewsItem
