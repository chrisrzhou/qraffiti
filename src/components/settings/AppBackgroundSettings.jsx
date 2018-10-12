import {StaticQuery, graphql} from 'gatsby';
import {setBackgroundColors, setBackgroundImage} from 'redux/app/actions';

import BackgroundImagePreview from 'components/ui/BackgroundImagePreview';
import Button from 'components/ui/Button';
import ColorPicker from 'components/ui/ColorPicker';
import {Flex} from 'rebass';
import React from 'react';
import Row from 'components/ui/Row';
import {connect} from 'react-redux';

const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "backgrounds"}}) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`;

const AppBackgroundSettings = ({
  backgroundColors,
  backgroundImage,
  setBackgroundColors,
  setBackgroundImage,
}) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const [color1, color2] = backgroundColors;
        const backgrounds = data.allFile.edges.map(({node}) => (
          <BackgroundImagePreview
            key={node.name}
            src={node.publicURL}
            onClick={() => {
              setBackgroundImage(`url(${node.publicURL})`);
            }}
          />
        ));
        return (
          <Flex alignItems="center" flexDirection="column">
            <Row
              items={[
                <ColorPicker
                  color={color1}
                  onChange={color => {
                    setBackgroundColors([color, color2]);
                  }}
                />,
                <ColorPicker
                  color={color2}
                  onChange={color => {
                    setBackgroundColors([color1, color]);
                  }}
                />,
                <Button
                  label="No background"
                  ml={3}
                  onClick={() => {
                    setBackgroundImage(undefined);
                  }}
                />,
              ]}
              mb={3}
              spacing={1}
            />
            <Flex
              flexWrap="wrap"
              justifyContent="center"
              width={['100%', '80%']}>
              {backgrounds}
            </Flex>
          </Flex>
        );
      }}
    />
  );
};

export default connect(
  ({app}) => ({
    backgroundColors: app.backgroundColors,
    backgroundImage: app.backgroundImage,
  }),
  {
    setBackgroundColors,
    setBackgroundImage,
  },
)(AppBackgroundSettings);
