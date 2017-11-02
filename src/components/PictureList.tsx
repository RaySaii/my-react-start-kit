import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPic } from '../actions/index';
import { Action } from '../reducers/index';

const mapStateToProps = (state: any) => ({
  pictures: state.pictures,
});
const mapDispatchToProps = {
  fetchPic,
}

interface ReduxProps {
  pictures: string[];

  fetchPic(): Action;
}

@connect(mapStateToProps, mapDispatchToProps)
export default class PictureList extends React.Component<any & ReduxProps, any> {
  componentDidMount() {
    this.props.fetchPic()
  }

  render() {
    const {pictures} = this.props
    return (
      <div className="pictures-list">
        {pictures.data.map((image, index) => <img style={{width: '100px'}} key={index} src={image.url}/>)}
      </div>
    );
  }
}
