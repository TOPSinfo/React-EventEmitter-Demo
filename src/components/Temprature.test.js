import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
// import ReactDOM from 'react-dom';
import Emitter from '../services/emitter';
// import Main from './Main';
import Temprature from './Temprature'

Enzyme.configure({ adapter: new Adapter() })

describe('setInterval fn', () => {
    it('set interval and emitter for temprature', () => {
        // const wrapper = shallow(<Main />);

        // jest.useFakeTimers();

        const tempWrapper = shallow(<Temprature />)
        expect(tempWrapper.state("temprature")).toEqual('N/A');

        // wrapper.instance().tempEmit();
        // let randomNum = (Math.floor(Math.random() * 20) + 1) * 100
        // jest.advanceTimersByTime(randomNum)
        // let displayObject = {
        //     temprature: randomNum
        // }
        // Emitter.emit('INPUT_FROM_TEMPRATURE', displayObject)


        Emitter.on('INPUT_FROM_TEMPRATURE', (newValue) => {
            expect(tempWrapper.state("temprature")).toEqual(`${newValue.temprature}`);
        });

        // jest.useRealTimers();
    });
})

