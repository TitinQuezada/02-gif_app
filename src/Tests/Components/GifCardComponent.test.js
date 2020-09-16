import React from 'react';
import { shallow } from 'enzyme';
import GifCardComponent from '../../Components/GifCard/GifCardComponent';
import '@testing-library/jest-dom';

describe('Gif Card Component Tests', () => {
  const gifTitle = 'titulo del gif';
  const gifUrl = 'http://imagenes.com/45';

  test('Check Gif Card Test Show Correctly', () => {
    //arrange
    const component = shallow(
      <GifCardComponent title={gifTitle} image={gifUrl} />
    );
    const { className } = component.find('div').props();
    const paragraphText = component.find('p').text();
    const { alt: imageAlt, src: srcImgae } = component.find('img').props();
    const classNames = className.split(' ');
    const cardClassContain = classNames.some(
      (className) => className === 'card'
    );

    //assert
    expect(component).toMatchSnapshot();
    expect(paragraphText).toBe(gifTitle);
    expect(imageAlt).toBe(gifTitle);
    expect(srcImgae).toBe(gifUrl);
    expect(cardClassContain).toBeTruthy();
  });
});
