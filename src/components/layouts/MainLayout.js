import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import PageFooter from 'components/layouts/widgets/PageFooter';
import PageHeader from 'components/layouts/widgets/PageHeader';

const MainLayout = ({ children }) => (
  React.createElement(
    Container,
    {},
    React.createElement(PageHeader),
    children,
    React.createElement(PageFooter)
  )
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
