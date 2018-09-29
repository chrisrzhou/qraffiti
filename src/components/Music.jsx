import {Box, Text} from 'rebass';

import React from 'react';
import Row from 'components/ui/Row';
import {connect} from 'react-redux';
import music from 'music';
import {setPlayMusic} from 'redux/actions';

const MusicIcon = ({type, onClick}) => {
  let paths = {
    next: (
      <>
        <path d="M0 8 L14.5 8" />
        <path d="M7.560660171779821 1.0606601717798212 L14.5 8 L7.560660171779821 14.939339828220179" />
      </>
    ),
    play: <path d="M3 1.5 L3 14.5 L14.258330249197702 8 z" />,
    previous: (
      <>
        <path d="M0 8 L14.5 8" /> <path d="M1.5 8 L16 8" />
        <path d="M8.439339828220179 1.0606601717798212 L1.5 8 L8.439339828220179 14.939339828220179" />
      </>
    ),
    stop: <path d="M1.5 1.5 L14.5 1.5 L14.5 14.5 L1.5 14.5 z" />,
  };
  return (
    <Box
      css={`
        cursor: pointer;
        opacity: 0.6;

        :hover {
          opacity: 1;
        }
      `}
      mx={1}
      onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="12"
        height="12"
        fill="none"
        stroke="currentcolor"
        strokeWidth="3">
        {paths[type]}
      </svg>
    </Box>
  );
};

class Music extends React.PureComponent {
  state = {
    track: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const {track} = this.state;
    if (this.props.playMusic || prevState.track !== track) {
      this._play();
    }
  }

  render() {
    const {playMusic} = this.props;
    const {track} = this.state;
    const {artist, name, src, url} = music[track];
    return (
      <Box
        css={`
          position: relative;
          :hover {
            .song-details {
              opacity: 1;
            }
          }
        `}>
        <Row
          items={[
            <MusicIcon type="previous" onClick={this._previous} />,
            <MusicIcon
              type={playMusic ? 'stop' : 'play'}
              onClick={() => (playMusic ? this._stop() : this._play())}
            />,
            <MusicIcon type="next" onClick={this._next} />,
          ]}
        />
        <audio src={src} ref={ref => (this.audio = ref)} />
        {playMusic && (
          <Text
            className="song-details"
            css={`
              left: 0;
              opacity: 0;
              position: absolute;
              right: 0;
              top: 12px;
            `}
            fontSize="8px"
            mt={2}
            textAlign="center">
            Playing{' '}
            <a href={url} target="_blank">
              {name}
            </a>{' '}
            by {artist}
          </Text>
        )}
      </Box>
    );
  }

  _play = () => {
    this.audio.play();
    this.props.setPlayMusic(true);
  };

  _stop = () => {
    this.audio.pause();
    this.props.setPlayMusic(false);
  };

  _next = () => {
    this.setState(prevState => ({
      ...prevState,
      track: (prevState.track + 1) % music.length,
    }));
  };

  _previous = () => {
    this.setState(prevState => ({
      ...prevState,
      track:
        ((prevState.track === 0 ? music.length : prevState.track) - 1) %
        music.length,
    }));
  };
}

const mapStateToProps = state => ({
  playMusic: state.playMusic,
});

export default connect(
  mapStateToProps,
  {setPlayMusic},
)(Music);
