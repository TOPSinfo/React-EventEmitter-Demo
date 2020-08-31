import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
// import ReactDOM from 'react-dom';
import Emitter from '../services/emitter';
import Main from './Main';

Enzyme.configure({ adapter: new Adapter() })

describe('setInterval fn', () => {
    it('set interval and emitter for temprature', () => {
        const wrapper = shallow(<Main />);

        jest.useFakeTimers();

        wrapper.instance().tempEmit();
        wrapper.instance().airPressureEmit();
        wrapper.instance().humidityEmit();
        // jest.runOnlyPendingTimers();
        // jest.runAllTimers();
        let randomNum = (Math.floor(Math.random() * 20) + 1) * 100
        // jest.advanceTimersByTime(randomNum)

        let displayObject = {
            temprature: randomNum,
            airPressure: randomNum,
            humidity: randomNum
        }
        Emitter.emit('INPUT_FROM_TEMPRATURE', displayObject)
        Emitter.emit('INPUT_FROM_AIR_PRESSURE', displayObject)
        Emitter.emit('INPUT_FROM_HUMIDITY', displayObject)

        jest.useRealTimers();
    });
})

