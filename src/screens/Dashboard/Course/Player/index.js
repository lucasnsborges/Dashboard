import React from "react";
import PropTypes from "prop-types";
import plyr from "plyr";
import "plyr/dist/plyr.css";

class PlyrComponent extends React.Component {
  componentDidMount() {
    console.log(this.props.options);
    this.player = new plyr(".js-plyr", this.props.options);
    this.player.source = this.props.sources;
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    return (
      <div className="page container w-50 h-50">
        <video className="js-plyr plyr" />
      </div>
    );
  }
}

PlyrComponent.defaultProps = {
  options: {
    controls: [
      "play-large", // The large play button in the center
      //"restart", // Restart playback
      "rewind", // Rewind by the seek time (default 10 seconds)
      "play", // Play/pause playback
      "fast-forward", // Fast forward by the seek time (default 10 seconds)
      "progress", // The progress bar and scrubber for playback and buffering
      "current-time", // The current time of playback
      "duration", // The full duration of the media
      "mute", // Toggle mute
      "volume", // Volume control
      "captions", // Toggle captions
      "settings", // Settings menu
      "pip", // Picture-in-picture (currently Safari only)
      "airplay", // Airplay (currently Safari only)
      "fullscreen" // Toggle fullscreen
    ],
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      menuBack: "Go back to previous menu",
      speed: "Velocidade",
      normal: "Normal",
      quality: "Resolução",
      loop: "Loop"
    }
  },
  sources: {
    type: "video",
    sources: [
      {
        src:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        type: "video/mp4",
        size: 720
      },
      {
        src: "/path/to/movie.webm",
        type: "video/webm",
        size: 1080
      }
    ]
  }
};

PlyrComponent.propTypes = {
  options: PropTypes.object,
  sources: PropTypes.object,
  source: PropTypes.func,
  destroy: PropTypes.func
};

export default PlyrComponent;
