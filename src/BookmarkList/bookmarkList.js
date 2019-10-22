import React, { Component } from 'react';
import './bookmarkList.css';
import Bookmark from '../Bookmark/bookmark';

class BookmarkList extends Component {
  render() {
    const bookmarks = this
          .props
          .bookmarks
          .map((bookmark, i) => <Bookmark { ...bookmark } key={i}/>);
    return (
      <div className="bookmarkList">
        {bookmarks}
      </div>
    );
  }
}

BookmarkList.defaultProps = {
  bookmarks: []
};

export default BookmarkList;