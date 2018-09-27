import {Box, Flex} from 'rebass';
import {setQRInput, setQRInputType} from 'redux/actions';

import Button from 'components/ui/Button';
import InputLabel from 'components/ui/InputLabel';
import React from 'react';
import Selector from 'components/ui/Selector';
import {connect} from 'react-redux';
import inputs from 'qr/inputs';

const QRInput = ({inputData, inputType, setQRInput, setQRInputType}) => {
  const {fields, getInputString} = inputs[inputType];
  const data = inputData[inputType];
  return (
    <Flex flexDirection={['column', 'row']}>
      <Selector
        items={Object.values(inputs).map(({label, value}) => ({
          label,
          value,
        }))}
        selectedItem={inputType}
        onSelectItem={item => {
          setQRInputType(item.value);
        }}
      />
      <form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          let data = {};
          fields.forEach(({id}) => {
            data[id] = e.target[id].value;
          });
          setQRInput(inputType, data, getInputString(data));
        }}>
        <Flex alignItems="flex-end" flexDirection="column">
          {fields.map(({id, label, placeholder, type}) => (
            <InputLabel
              key={id}
              id={id}
              label={label}
              placeholder={placeholder}
              type={type}
              value={data ? data[id] : undefined}
            />
          ))}
          <Box mt={4}>
            <Button label="Spray it" type="submit" />
          </Box>
        </Flex>
      </form>
    </Flex>
  );
};

const mapStateToProps = state => ({
  inputType: state.inputType,
  inputData: state.inputData,
});

export default connect(
  mapStateToProps,
  {setQRInput, setQRInputType},
)(QRInput);
