import React, { Component } from 'react';
import './bookmarkApp.css';
import BookmarkList from '../BookmarkList/bookmarkList';
import Fab from '../Fab/fab';

class BookmarkApp extends Component {
  render() {
    return (
      <div className="bookmarkApp">
        <h2>Bookmarks</h2>
        <BookmarkList bookmarks={this.props.bookmarks}/>
        <Fab/>
      </div>
    );
  }
}

export default BookmarkApp;