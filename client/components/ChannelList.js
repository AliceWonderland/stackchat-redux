import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'
import store from '../store';
import { connect } from 'react-redux'

function ChannelList(props){
    // console.log("PROPS",props.channels);
  return(
      <ul>
          {
              props.channels.map(channel => {

                  return (<li key={channel.id}>

                      <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                          <span># {channel.name}</span>
                          <span className="badge">{ props.messages.filter(message => message.channelId === channel.id).length }</span>
                      </NavLink>


                  </li>);
              })
          }
          <li><NavLink to="/new-channel">Create a channel...</NavLink></li>
      </ul>
  );

}


const mapStateToProps = function (state) {
    return {
        channels: state.channels,
        messages: state.messages

    };
};

const ChannelListContainer = withRouter(connect(mapStateToProps)(ChannelList));
export default ChannelListContainer;
