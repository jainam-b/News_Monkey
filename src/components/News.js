import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


 

export default class News extends Component {

  static defaultProps ={
    country:"in",
    pageSize:5,
    category:"general"
    
  }
  static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,
  }
  

  constructor(props){
    super(props);
    this.state ={
      articles :[ ],
      loading: true,
      page:1,
      pageSize:5,
      totalResults:0,
      


    }
    document.title=`${this.props.category}-NewsMonkey`
  }



  async updateNews(){
    this.props.setProgress(10);
    const url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&q&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data =  await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles ,
        totalResults:parsedData.totalResults,
        loading:false})
    this.props.setProgress(100);    

  }

  async componentDidMount(){
    this.updateNews();
   
     }

  handleNextClick=async()=>{
    // this.setState({page:this.state.page+1});
    // this.updateNews()
  } 
  handlePrevClick=async()=>{
    // this.setState({page:this.state.page-1});
    // this.updateNews();
  }     
 fetchMoreData=async()=>{
  // this.setState=({page:this.state.page+1})
  const url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&q&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  
  this.setState({loading:true})
  let data =  await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles:this.state.articles.concat(parsedData.articles) ,
      totalResults:parsedData.totalResults,
      page:this.state.page+1,
      loading:false})

}



  




    
  
  
     
  render() {
    return (
      <>
        <h2 className='text-center' style={{margin:"35px 0px" ,margin:"90px"}}>NewsMonkey - Top { this.props.category} Headlines</h2> 
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container my-3'>
        <div className="row">
          {  this.state.articles.map((element)=>{
               return  <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newUrl={element.url} author={!element.author?"Unknown":element.author} date={element.publishedAt}/>
                       </div>
          })}
        </div>
        </div>
        </InfiniteScroll> 

             
          {/* <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
         
        
        
        </>
   
    )
  }
}
