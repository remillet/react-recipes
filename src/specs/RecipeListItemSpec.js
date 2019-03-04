import React from 'react';
import renderer from 'react-test-renderer';
import RecipeListItem from '../components/RecipeListItem';

describe('<RecipeListItem />', () => {
  test('Should not break if no recipe/details passed in', () => {
    const component = renderer.create(<RecipeListItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should correctly render recipe', () => {
  });

  test('Should render favorite state', () => {
  });
});
