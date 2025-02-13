// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as React from 'react';
import './Profile.module.css';
import { ProfileProps } from './ProfileProps';

class Profile extends React.Component<ProfileProps> {
  public render() {
    const defaultPhoto:string = require('../images/default-photo.png');
    return (
      <div className="profile">
        <div className="photo">
        <img src={this.props.photoObjectURL ? this.props.photoObjectURL : defaultPhoto } alt="avatar"/>
        </div>
        <div className="info">
          <div className="name">{this.props.userName}</div>
          <div className="email">{this.props.userEmail}</div>
          <div className="phone">{this.props.userPhoneNumber}</div>
        </div>
      </div>
    );
  }
}

export default Profile;