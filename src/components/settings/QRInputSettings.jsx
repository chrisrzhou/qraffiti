import {setInput, setInputType} from 'redux/qr/actions';

import Button from 'components/ui/Button';
import {Flex} from 'rebass';
import InputLabel from 'components/ui/InputLabel';
import React from 'react';
import Selector from 'components/ui/Selector';
import {connect} from 'react-redux';
import inputs from 'qr/inputs';
import {setSelectedTab} from 'redux/app/actions';

const QRInput = ({
  inputData,
  inputType,
  setInput,
  setInputType,
  setSelectedTab,
}) => {
  const {fields, getInputString} = inputs[inputType];
  const data = inputData[inputType];
  return (
    <Flex flexDirection={['column', 'row']} justifyContent="center">
      <Selector
        items={Object.values(inputs).map(({label, value}) => ({
          label,
          value,
        }))}
        mb={[3, 0]}
        mr={[0, 5]}
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
          setSelectedTab();
        }}>
        <Flex
          alignItems="flex-end"
          css={`
            height: 100%;
          `}
          flexDirection="column"
          justifyContent="space-between"
          p={3}>
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
          </Flex>
          <Button label="Apply" mt={4} type="submit" />
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
  {
    setInput,
    setInputType,
    setSelectedTab,
  },
)(QRInput);
