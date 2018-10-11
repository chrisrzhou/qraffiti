import {Box, Flex, Text} from 'rebass';

import QRCode from 'components/QRCode';
import React from 'react';
import {connect} from 'react-redux';
import {getLogoImage} from 'redux/qr/selectors';
import presets from 'qr/presets';
import {setPreset} from 'redux/qr/actions';
import {setSelectedTab} from 'redux/app/actions';

const QRPresetSettings = ({inputString, setPreset, setSelectedTab}) => (
  <Flex flexWrap={['wrap', 'nowrap']} justifyContent={['center', 'flex-start']}>
    {Object.values(presets).map(({label, value}) => {
      const preset = presets[value];
      return (
        <Flex
          key={value}
          alignItems="center"
          flexDirection="column"
          m={2}
          onClick={() => {
            setPreset(value);
            setSelectedTab();
          }}>
          <Text>{label}</Text>
          <Box
            css={`
              border: 2px solid white;
              box-sizing: border-box;
              cursor: pointer;
              :hover {
                border: 2px solid red;
              }
            `}
            my={1}
            p={1}>
            <QRCode
              {...preset}
              inputString={inputString}
              logoImage={getLogoImage(preset.logo)}
              maxSize={100}
            />
          </Box>
        </Flex>
      );
    })}
  </Flex>
);

export default connect(
  ({qr}) => ({
    inputString: qr.inputString,
  }),
  {
    setPreset,
    setSelectedTab,
  },
)(QRPresetSettings);
