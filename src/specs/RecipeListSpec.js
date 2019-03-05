import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';

const testRecipeList = [
  {
    id: 1,
    name: 'Recipe list item one',
    category: 'Dessert',
  },
  {
    id: 2,
    name: 'Recipe list item two',
    category: 'Pasta',
  },
  {
    id: 3,
    name: 'Recipe list item three',
    category: 'Bread',
  },
];

const testFavorites = [
  1,
  3,
];

describe('<RecipeList />', () => {
  test('Should not break if no recipe list is passed/provided.', () => {
    const component = renderer.create(<RecipeList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly', () => {
    const component = renderer.create(<RecipeList recipes={testRecipeList} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('The render favorited states correctly', () => {
    const component = renderer.create(
      <RecipeList recipes={testRecipeList} favorites={testFavorites} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
