import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeDetail from '../components/RecipeDetail';


describe('<RecipeList />', () => {
  let testRecipeDetail;

  beforeEach(() => {
    testRecipeDetail = {
      id: 1,
      name: 'Recipe list item one',
      category: 'Dessert',
      calories: 180,
      image: 'http:test.me.com/100.jpg',
      ingredients: [
        'Flour',
        'Milk',
        'Butter',
      ],
      steps: [
        'Sift the flour',
        'Scorch the milk',
        'Whip the butter',
      ],
    };
  });

  test('Should not break if no recipe is passed/provided.', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail details={testRecipeDetail} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly with no ingredients', () => {
    delete testRecipeDetail.ingredients;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail details={testRecipeDetail} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly with no steps', () => {
    delete testRecipeDetail.steps;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail details={testRecipeDetail} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
