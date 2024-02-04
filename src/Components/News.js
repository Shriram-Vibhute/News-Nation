import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaulProps = {
        country: 'in',
        category: "general",
        totalResultsCame: 0
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false,
        }
    }
    // handleNext = async () => {
    //     let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=20&page=${this.state.page + 1}`;
    //     this.setState({
    //         loading: true
    //     })
    //     let data = await fetch(fetchUrl);
    //     let parsedData = await data.json();

    //     this.setState({
    //         loading: false,
    //         page: this.state.page + 1,
    //         articles: parsedData.articles
    //     })
    //     console.log(this.state.page + ' and ' + this.state.totalResults)
    // }
    // handlePrevious = async () => {
    //     let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=20&page=${this.state.page - 1}`;
    //     this.setState({
    //         loading: true
    //     })
    //     let data = await fetch(fetchUrl);
    //     let parsedData = await data.json();

    //     this.setState({
    //         loading: false,
    //         page: this.state.page - 1,
    //         articles: parsedData.articles
    //     })
    // }

    async componentDidMount() {
        let fetchUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=20`;
        this.setState({
            loading: true
        })
        this.props.setProgress(30)
        let data = await fetch(fetchUrl);
        let parsedData = await data.json();
        this.setState({
            loading: false,
            articles: parsedData.articles,
            totalResultsCame: parsedData.totalResults
        })
        this.props.setProgress(100)
    }

    fetchMoreData = async () => {
        let fetchUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=20&page=${this.state.page + 1}`;
        this.setState({
            loading: true
        })
        let data = await fetch(fetchUrl);
        let parsedData = await data.json();
        this.setState({
            loading: false,
            articles: this.state.articles.concat(parsedData.articles),
            totalResultsCame: parsedData.totalResults,
            page: this.state.page + 1
        })
    };

    render() {
        return (
            // (this.state.loading ? <Spinner className="" /> :
            <>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResultsCame}
                    loader={<Spinner />} >
                    <div className="container NewsSection my-5">
                        <div className='row'>
                            {
                                this.state.articles.map((element) => {
                                    return (element.urlToImage && (<div className="col-md-3" key={element.url}>
                                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                    </div>)
                                    )
                                })
                            }
                        </div>
                    </div >
                </InfiniteScroll>
            </>
        )
    }
}

export default News