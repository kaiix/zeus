import React from 'react';
import PropTypes from 'prop-types';

import AsyncPage from '../components/AsyncPage';
import RepositoryContent from '../components/RepositoryContent';
import RepositoryHeader from '../components/RepositoryHeader';
import TabbedNav from '../components/TabbedNav';
import TabbedNavItem from '../components/TabbedNavItem';

export default class RepositoryTests extends AsyncPage {
  static contextTypes = {
    ...AsyncPage.contextTypes,
    repo: PropTypes.object.isRequired
  };

  getTitle() {
    return this.context.repo.name;
  }

  renderBody() {
    let {repo} = this.context;
    let basePath = `/${repo.owner_name}/${repo.name}`;
    return (
      <div>
        <RepositoryHeader />
        <RepositoryContent {...this.props}>
          <TabbedNav>
            <TabbedNavItem to={`${basePath}/tests`} onlyActiveOnIndex={true}>
              Tree View
            </TabbedNavItem>
            <TabbedNavItem to={`${basePath}/tests/all`}>All Tests</TabbedNavItem>
          </TabbedNav>
          {this.props.children}
        </RepositoryContent>
      </div>
    );
  }
}
