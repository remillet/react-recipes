import React from 'react';
import renderer from 'react-test-renderer';
import RecipeListItem from '../components/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'Test Recipe',
  category: 'Test category',
};

const testFavorites = [1];

describe('<RecipeListItem />', () => {
  test('Should not break if no recipe/details passed in', () => {
    const component = renderer.create(<RecipeListItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should correctly render recipe', () => {
    const component = renderer.create(
      <RecipeListItem recipe={testRecipe} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render favorite state', () => {
    const component = renderer.create(
      <RecipeListItem recipe={testRecipe} favorites={testFavorites} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
