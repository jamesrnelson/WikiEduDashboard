import React from 'react';
import { shallow } from 'enzyme';

import '../../testHelper';

import ArticlesHandler from '../../../app/assets/javascripts/components/articles/articles_handler.jsx';

describe('ArticlesHandler', () => {
  it('renders both expected headers', () => {
    const TestArticlesHandler = shallow(
      <ArticlesHandler store={reduxStore} course={{ home_wiki: {} }} current_user={{}} />
    );
    expect(TestArticlesHandler.dive().find('h3').length).to.eq(2);
  });
});
