import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'; 
//import PropTypes from 'prop-types';
import {details} from '../actions/SearchAction';

class Details extends Component {
	
	componentDidMount() {
		//console.log(this.props.match.params.id);
		//console.log(this.props);
		this.props.details(this.props.match.params.id);
	}
	render() {
		if (!this.props.searchReducer.details) {
			return (<div data-test="component-details">Loading...</div>);	
		}
		let url = this.props.searchReducer.details.url._cdata;
		return (
			<div data-test="component-details">
				{
					this.props.searchReducer.details && 
					<div>
						{
							this.props.searchReducer.details.title._cdata && 
							<div data-test="details-title">{this.props.searchReducer.details.title._cdata}</div>
						}
						{
							this.props.searchReducer.details.title._text && 
							<div data-test="details-title">{this.props.searchReducer.details.title._text}</div>
						}
						<div data-test="details-author">by&nbsp; 
						{
							this.props.searchReducer.details.authors.author.length > 0 ?
							
								this.props.searchReducer.details.authors.author.map((auth, kauth) => {
									return <span key={kauth}>{auth.name._text}, </span>											 
								})
							:
							<span>
								{this.props.searchReducer.details.authors.author.name._text}
							</span>
						}
						</div>
						{
							this.props.searchReducer.details.average_rating._text && 
							<div data-test="details-average-rating">{this.props.searchReducer.details.average_rating._text}</div>
						}
						<div>
							Rating details
						</div>
						{
							this.props.searchReducer.details.ratings_count._cdata && 
							<div data-test="details-ratings-count">{this.props.searchReducer.details.ratings_count._cdata} Ratings</div>
						}
						{
							this.props.searchReducer.details.text_reviews_count._cdata && 
							<div data-test="details-text-reviews-count">{this.props.searchReducer.details.text_reviews_count._cdata}</div>
						}
						{
							this.props.searchReducer.details.description._cdata && 
							<div data-test="details-description">{this.props.searchReducer.details.description._cdata}</div>
						}
						{
							url && 
							<div data-test="details-url"><a href={url} target="_blank" rel="noopener noreferrer">more</a></div>
						}
						<hr />
						<div>
							<a href={url} target="_blank" rel="noopener noreferrer">GET A COPY</a>
						</div>
						<hr />
						{
							this.props.searchReducer.details.image_url._text && 
							<div data-test="details-image"><img src={this.props.searchReducer.details.image_url._text} alt="" className="img-responsive" /></div>
						}
						<hr />
							<div className="dropdown">
								<button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Want to Read
								<span className="caret"></span></button>
							  </div>
						<hr />
						<div>
							Rate this book
						</div>
						<div>
							Preview
						</div>
						
						
						
					</div>
				}
				
				{
					!this.props.searchReducer.details && 
					<div>
						Loading the book details .....
					</div>
				}
				
				<hr />
				<Link to="/">Back to Search Results</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searchReducer: state.searchReducer
	}	
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ details }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);