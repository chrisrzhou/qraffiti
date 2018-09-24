import {Box, Flex} from 'rebass';
import {setQRInput, setQRInputType} from 'redux/actions';

import InputLabel from 'components/ui/InputLabel';
import React from 'react';
import Selector from 'components/ui/Selector';
import {connect} from 'react-redux';
import inputs from 'qr/inputs';

const QRInput = ({inputData, inputType, setQRInput, setQRInputType}) => {
  const {fields, getInputString} = inputs[inputType];
  return (
    <Flex>
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
          {fields.map(({id, label, type}) => (
            <InputLabel key={id} id={id} label={label} type={type} />
          ))}
          <Box mt={4}>
            <button
              style={{
                background: 'white',
                color: 'black',
                outline: 'none',
                padding: '4px 8px',
              }}
              type="submit">
              SPRAY
            </button>
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
