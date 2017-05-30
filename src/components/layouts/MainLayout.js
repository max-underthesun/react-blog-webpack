import React, { PropTypes } from 'react';
import { Container } from 'semantic-ui-react';

// import Buttons from 'components/layouts/widgets/Buttons';
import PageFooter from 'components/layouts/widgets/PageFooter';
import PageHeader from 'components/layouts/widgets/PageHeader';

const MainLayout = ({ children }) => (
  React.createElement(
    Container,
    {},
    React.createElement(PageHeader),
    // React.createElement(Buttons),
    children,
    React.createElement(PageFooter)
  )
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
