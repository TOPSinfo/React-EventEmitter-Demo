import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
// import ReactDOM from 'react-dom';
import Emitter from '../services/emitter';
// import Main from './Main';
import AirPressure from './AirPressure'

Enzyme.configure({ adapter: new Adapter() })

describe('setInterval fn', () => {
    it('get emitter for airPressure', () => {
        // const wrapper = shallow(<Main />);

        // jest.useFakeTimers();

        const airPressureWrapper = shallow(<AirPressure />)
        expect(airPressureWrapper.state("airPressure")).toEqual('N/A');
        console.log('------air pressure')
        // wrapper.instance().tempEmit();
        // let randomNum = (Math.floor(Math.random() * 20) + 1) * 100
        // jest.advanceTimersByTime(randomNum)
        // let displayObject = {
        //     temprature: randomNum
        // }
        // Emitter.emit('INPUT_FROM_TEMPRATURE', displayObject)


        Emitter.on('INPUT_FROM_AIR_PRESSURE', (newValue) => {
            expect(airPressureWrapper.state("airPressure")).toEqual(`${newValue.airPressure}mm`);
        });

        // jest.useRealTimers();
    });
})

