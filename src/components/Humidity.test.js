import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
// import ReactDOM from 'react-dom';
import Emitter from '../services/emitter';
// import Main from './Main';
import Humidity from './Humidity'

Enzyme.configure({ adapter: new Adapter() })

describe('setInterval fn', () => {
    it('get emitter for humidity', () => {
        // const wrapper = shallow(<Main />);

        // jest.useFakeTimers();

        const humidityWrapper = shallow(<Humidity />)
        expect(humidityWrapper.state("humidity")).toEqual('N/A');

        Emitter.on('INPUT_FROM_AIR_PRESSURE', (newValue) => {
            console.log('-----INPUT_FROM_HUMIDITY')
            expect(humidityWrapper.state("humidity")).toEqual(`${newValue.humidity}%`);
        });

        // jest.useRealTimers();
    });
})

