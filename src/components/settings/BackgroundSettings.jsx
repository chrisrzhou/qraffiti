import {StaticQuery, graphql} from 'gatsby';
import {setBackgroundColors, setBackgroundImage} from 'redux/app/actions';

import ColorPicker from 'components/ui/ColorPicker';
import {Flex} from 'rebass';
import GraffitiText from 'components/ui/GraffitiText';
import React from 'react';
import Row from 'components/ui/Row';
import Selector from 'components/ui/Selector';
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

const BackgroundSettings = ({
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
        const backgrounds = data.allFile.edges.map(({node}) => ({
          label: node.name,
          value: `url(${node.publicURL})`,
        }));
        return (
          <Flex flexDirection="column">
            <Flex flexDirection="column" mb={4}>
              <GraffitiText>Gradient</GraffitiText>
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
                ]}
              />
            </Flex>
            <Selector
              items={backgrounds}
              selectedItem={backgroundImage}
              onSelectItem={item => {
                setBackgroundImage(item.value);
              }}
            />
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
  {setBackgroundColors, setBackgroundImage},
)(BackgroundSettings);
