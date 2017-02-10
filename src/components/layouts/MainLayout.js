import React, { PropTypes } from 'react';
import { Container } from 'semantic-ui-react';

import GoBackButton from 'components/layouts/elements/GoBackButton';
import PageFooter from 'components/layouts/widgets/PageFooter';
import PageHeader from 'components/layouts/widgets/PageHeader';

const MainLayout = ({ children }) => (
  React.createElement(
    Container,
    {},
    React.createElement(PageHeader),
    React.createElement(GoBackButton),
    children,
    React.createElement(PageFooter)
  )
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
