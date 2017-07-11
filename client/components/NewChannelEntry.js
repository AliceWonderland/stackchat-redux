import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postChannel, getChannel, writeChannelName } from '../store';

const mapStateToProps = function(state) {
  return {
    newChannelEntry: state.newChannelEntry
  };
}
const mapDispatchToProps = function(dispatch){
  return {
    handleChange(evt){
      dispatch(writeChannelName(evt.target.value));
    },
    handleSubmit(evt){
      evt.preventDefault();
      const name = evt.target.channelName.value;
      dispatch(postChannel({name: name}));
    }
  };
}

function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" type="text" name="channelName" value = {props.newChannelEntry} onChange = {props.handleChange}  placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default Container;
