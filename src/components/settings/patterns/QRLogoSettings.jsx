import {StaticQuery, graphql} from 'gatsby';

import Button from 'components/ui/Button';
import {Flex} from 'rebass';
import React from 'react';
import SelectBox from 'components/ui/SelectBox';
import {connect} from 'react-redux';
import {setLogo} from 'redux/qr/actions';

const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "logos"}}) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`;

const QRLogoSettings = ({logo, setLogo}) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const logos = data.allFile.edges.map(({node}) => {
          const {name, publicURL} = node;
          return (
            <SelectBox
              isSelected={name === logo}
              key={name}
              onClick={() => {
                setLogo(name);
              }}
              m={1}
              p={1}
              width={40}>
              <img style={{width: '100%'}} src={publicURL} />
            </SelectBox>
          );
        });
        return (
          <Flex alignItems={['center', 'flex-start']} flexDirection="column">
            <Flex
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
              mb={1}>
              {logos}
            </Flex>
            <Button
              label="No logo"
              onClick={() => {
                setLogo(null);
              }}
            />
          </Flex>
        );
      }}
    />
  );
};

export default connect(
  ({qr}) => ({
    logo: qr.logo,
  }),
  {setLogo},
)(QRLogoSettings);
