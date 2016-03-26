import React from 'react';
import moment from 'moment';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import ReadNext from '../components/ReadNext';
import { rhythm, fontSizeToMS } from 'utils/typography'

import '../css/zenburn.css';

module.exports = React.createClass({
  render: function() {
    var post
    post = this.props.page.data;

    return (
      <DocumentTitle title={`${post.title} | ${this.props.config.blogTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.body}}/>
          <em
            style={{
              display: 'block',
              marginBottom: rhythm(2)
            }}
          >
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr
            style={{
              marginBottom: rhythm(2)
            }}
          />
          <ReadNext post={post} {...this.props}/>
          <p>
            <img
              src={link("/geometry.jpg")}
              style={{
                float: 'left',
                marginRight: rhythm(1/4),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2)
              }}
            />
            <strong>{this.props.config.authorName}</strong> who lives in Illinois and makes the world a better place one day at a time.
          </p>
        </div>
      </DocumentTitle>
    );
  }
});
