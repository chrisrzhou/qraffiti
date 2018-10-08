import {setInput, setInputType} from 'redux/qr/actions';

import Button from 'components/ui/Button';
import {Flex} from 'rebass';
import InputLabel from 'components/ui/InputLabel';
import React from 'react';
import Selector from 'components/ui/Selector';
import {connect} from 'react-redux';
import inputs from 'qr/inputs';
import {setShowSettings} from 'redux/app/actions';

const QRInput = ({
  inputData,
  inputType,
  setInput,
  setInputType,
  setShowSettings,
}) => {
  const {fields, getInputString} = inputs[inputType];
  const data = inputData[inputType];
  return (
    <Flex flexDirection={['column', 'row']}>
      <Selector
        items={Object.values(inputs).map(({label, value}) => ({
          label,
          value,
        }))}
        mb={[4, 0]}
        mr={[0, 4]}
        onSelectItem={item => {
          setInputType(item.value);
        }}
        selectedItem={inputType}
      />
      <form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          let data = {};
          fields.forEach(({id}) => {
            data[id] = e.target[id].value;
          });
          setInput({
            inputData: data,
            inputString: getInputString(data),
            inputType,
          });
          setShowSettings(false);
        }}>
        <Flex alignItems="flex-end" flexDirection="column">
          {fields.map(({id, label, placeholder, type}) => (
            <InputLabel
              id={id}
              key={id}
              label={label}
              placeholder={placeholder}
              type={type}
              value={data ? data[id] : undefined}
            />
          ))}
          <Button label="Spray it" mt={4} type="submit" />
        </Flex>
      </form>
    </Flex>
  );
};

export default connect(
  ({qr}) => ({
    inputData: qr.inputData,
    inputType: qr.inputType,
  }),
  {setInput, setInputType, setShowSettings},
)(QRInput);
