(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{108:function(e,t,a){"use strict";a.r(t);var r=a(13),s=a(14),n=a(16),o=a(15),c=a(17),l=a(1),d=a.n(l),i=a(18),u=a(5),p=a(107),h=a(49),m=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.details(this.props.match.params.id)}},{key:"render",value:function(){if(!this.props.searchReducer.details)return d.a.createElement("div",{"data-test":"component-details"},"Loading...");var e=this.props.searchReducer.details.url._cdata;return d.a.createElement("div",{"data-test":"component-details"},this.props.searchReducer.details&&d.a.createElement("div",null,this.props.searchReducer.details.title._cdata&&d.a.createElement("div",{"data-test":"details-title"},this.props.searchReducer.details.title._cdata),this.props.searchReducer.details.title._text&&d.a.createElement("div",{"data-test":"details-title"},this.props.searchReducer.details.title._text),d.a.createElement("div",{"data-test":"details-author"},"by\xa0",this.props.searchReducer.details.authors.author.length>0?this.props.searchReducer.details.authors.author.map(function(e,t){return d.a.createElement("span",{key:t},e.name._text,", ")}):d.a.createElement("span",null,this.props.searchReducer.details.authors.author.name._text)),this.props.searchReducer.details.average_rating._text&&d.a.createElement("div",{"data-test":"details-average-rating"},this.props.searchReducer.details.average_rating._text),d.a.createElement("div",null,"Rating details"),this.props.searchReducer.details.ratings_count._cdata&&d.a.createElement("div",{"data-test":"details-ratings-count"},this.props.searchReducer.details.ratings_count._cdata," Ratings"),this.props.searchReducer.details.text_reviews_count._cdata&&d.a.createElement("div",{"data-test":"details-text-reviews-count"},this.props.searchReducer.details.text_reviews_count._cdata),this.props.searchReducer.details.description._cdata&&d.a.createElement("div",{"data-test":"details-description"},this.props.searchReducer.details.description._cdata),e&&d.a.createElement("div",{"data-test":"details-url"},d.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},"more")),d.a.createElement("hr",null),d.a.createElement("div",null,d.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},"GET A COPY")),d.a.createElement("hr",null),this.props.searchReducer.details.image_url._text&&d.a.createElement("div",{"data-test":"details-image"},d.a.createElement("img",{src:this.props.searchReducer.details.image_url._text,alt:"",className:"img-responsive"})),d.a.createElement("hr",null),d.a.createElement("div",{className:"dropdown"},d.a.createElement("button",{className:"btn btn-default dropdown-toggle",type:"button","data-toggle":"dropdown"},"Want to Read",d.a.createElement("span",{className:"caret"}))),d.a.createElement("hr",null),d.a.createElement("div",null,"Rate this book"),d.a.createElement("div",null,"Preview")),!this.props.searchReducer.details&&d.a.createElement("div",null,"Loading the book details ....."),d.a.createElement("hr",null),d.a.createElement(p.a,{to:"/"},"Back to Search Results"))}}]),t}(l.Component);t.default=Object(i.b)(function(e){return{searchReducer:e.searchReducer}},function(e){return Object(u.b)({details:h.a},e)})(m)},49:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return d});var r=a(57),s=a.n(r),n=a(63),o=a.n(n),c=a(6),l=function(e){return function(t,a){t({type:c.a,payload:null}),t({type:c.d,payload:e}),t({type:c.c,payload:null,total:null,searching:!0});var r=encodeURIComponent(e),n="/search.xml?key=".concat(c.b,"&q=").concat(r);return console.log("url is ",n),s()({method:"get",mode:"no-cors",url:n}).then(function(e){console.log("response.data: ",e.data);var a=o.a.xml2json(e.data,{compact:!0,spaces:4}),r=JSON.parse(a);console.log("resp2: ",r);var s=null,n=null;r.GoodreadsResponse.search.results.work&&!r.GoodreadsResponse.search.results.work.length?s=[r.GoodreadsResponse.search.results.work]:r.GoodreadsResponse.search.results.work?s=r.GoodreadsResponse.search.results.work:n="No Result Found",t({type:c.c,payload:s,total:r.GoodreadsResponse.search["total-results"]._text,searching:!1,message:n})})}},d=function(e){return function(t,a){var r="/book/isbn/".concat(e,"?key=").concat(c.b);return console.log("url is ",r),s()({method:"get",mode:"no-cors",url:r}).then(function(e){var a=o.a.xml2json(e.data,{compact:!0,spaces:4}),r=JSON.parse(a);console.log("resp2: ",r.GoodreadsResponse.book),t({type:c.a,payload:r.GoodreadsResponse.book})})}}},68:function(e,t){},69:function(e,t){}}]);
//# sourceMappingURL=3.af7e69b2.chunk.js.map