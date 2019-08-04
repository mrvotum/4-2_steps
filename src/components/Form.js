import React, { Component } from 'react';
import Input from './Input';
import sortArray from './sortArray';
import CreateList from './CreateList';

import nanoid from 'nanoid';


export default class Form extends Component {
  state = {
    walks: [
      { date: '20.07.2019', distance: 5.7, id: '001' },
      { date: '19.07.2019', distance: 14.2, id: '002' },
      { date: '18.07.2019', distance: 3.4, id: '003' },
    ],
  };

  constructor() {
    super();
    this.onEnter = this.onEnter.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }


  onEnter(newWalk) {
    const id = nanoid();
    const walks = this.state.walks;
    const newWalks = [...walks];
    const dates = walks.map(walk => walk.date);
    if (dates.includes(newWalk.date)) {
      newWalks.forEach(walk => {
        if (walk.date === newWalk.date) {
          walk.distance = +walk.distance + +newWalk.distance
        }
      })
    } else {
      newWalks.push({...newWalk, id })
    }

    newWalks.forEach(walk => {
      const distance = +walk.distance;
      if (Number.isInteger(distance)) return;
      walk.distance = distance.toFixed(1);
    })

    this.setState({ walks: newWalks});
  }

  onDelete(id) {
    const walks = this.state.walks;
    const newWalks = walks.filter(walk => walk.id !== id);
    this.setState({ walks: newWalks });
  }

  render() {
    return (
      <div>
        <Input onEnter={this.onEnter} />
        <CreateList onDelete={this.onDelete} walks={sortArray(this.state.walks)} />
      </div>
    );
  }
}
