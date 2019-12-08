import './styles.css';
import React, { Component } from 'react';
import Carousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const data = [
  { "description" : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ],
  "subtitle" : "Informativo",
  "thumb" : "https://blog.iqoption.com/wp-content/uploads/2019/03/BOXes-560x280@2x.jpg",
  "title" : "Abertura de conta na plataforma iqOption"
},
{ "description" : "The first Blender Open Movie from 2006",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ],
  "subtitle" : "Informativo",
  "thumb" : "https://pt.binaroption.com/images/Stati/2019/img-0.jpg",
  "title" : "Abertura de conta na plataforma Binomo"
},
{ "description" : "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ],
  "subtitle" : "Informativo",
  "thumb" : "https://giboskiadvogados.com/wp-content/uploads/2019/05/stock-options.jpg",
  "title" : "Primeiros passos na jornada para se tornar um trader de opções binárias"
},
{ "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ],
  "subtitle" : "Vídeo",
  "thumb" : "https://i.ytimg.com/vi/l88P7uT6GmA/maxresdefault.jpg",
  "title" : "Como identificar uma zona de suporte"
},
{ "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ],
  "subtitle" : "Vídeo",
  "thumb" : "https://st4.depositphotos.com/7901612/21207/v/1600/depositphotos_212076452-stock-illustration-japanese-candlesticks-stock-market-trading.jpg",
  "title" : "Gráfico de candlesticks"
},
{ "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" ],
  "subtitle" : "By Google",
  "thumb" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
  "title" : "For Bigger Joyrides"
},
{ "description" :"Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" ],
  "subtitle" : "By Google",
  "thumb" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
  "title" : "For Bigger Meltdowns"
},
{ "description" : "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" ],
  "subtitle" : "By Blender Foundation",
  "thumb" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
  "title" : "Sintel"
},
{ "description" : "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" ],
  "subtitle" : "By Garage419",
  "thumb" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
  "title" : "Subaru Outback On Street And Dirt"
},
{ "description" : "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
  "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" ],
  "subtitle" : "By Blender Foundation",
  "thumb" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
  "title" : "Tears of Steel"
},
]

// { "description" : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
//   "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ],
//   "subtitle" : "By Blender Foundation",
//   "thumb" : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
//   "title" : "Big Buck Bunny"
// }

export default class Course extends Component {


  handleOnDragStart = (e) => e.preventDefault()

  renderItem = (item, index) => {
    return (
      <div
        key={index}
        onDragStart={this.handleOnDragStart}
        className="course-card"
      >
        <img className="card-thumb" alt="miniatura" src={item.thumb} />
        <div className="card-title">
          <span className="card-title-text">
            {item.title}
          </span>
          <span className="card-description">
            {item.subtitle || 'sem categoria'}
          </span>
        </div>
      </div>
    )
  }

  renderButtons = (ref) => {
    return (
      <div className="d-flex flex-row float-right">
        <div
          onClick={() => this[ref].slidePrev()}
          className="d-flex align-items-center justify-content-center"
          style={{
            height: 34,
            width: 34,
            borderRadius: 54,
            backgroundColor: '#EEE',
            cursor: 'pointer',
            margin: 4
          }}
        >
          <IoIosArrowBack style={{ fontSize: 20, marginRight: 2 }} />
        </div>
        <div
          onClick={() => this[ref].slideNext()}
          className="d-flex align-items-center justify-content-center"
          style={{
            height: 34,
            width: 34,
            borderRadius: 54,
            backgroundColor: '#EEE',
            cursor: 'pointer',
            margin: 4
          }}
        >
          <IoIosArrowForward style={{ fontSize: 20, marginLeft: 2 }} />
        </div>
      </div>
    )
  }

  render() {
    const responsive = {
      940: {
        items: 4
      },
      540: {
        items: 3
      }
    };

    return (
      <div className="page">
        <div className="course-container bg-white">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <h4 className="ml-1 mb-0">Conteúdo para iniciantes</h4>
              {
                this.renderButtons('ref1')
              }
            </div>
            <div className="d-flex flex-row">
              <Carousel
                mouseTrackingEnabled
                dotsDisabled
                buttonsDisabled
                responsive={responsive}
                ref={(el) => (this.ref1 = el)}
              >
                {
                  data.map((item, index) => this.renderItem(item, index))
                }
              </Carousel>
            </div>
          </div>
        </div>

        <div className="course-container bg-white">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <h4 className="ml-1 mb-0">Suporte e resistência</h4>
              {
                this.renderButtons('ref2')
              }
            </div>
            <div className="d-flex flex-row">
              <Carousel
                mouseTrackingEnabled
                dotsDisabled
                buttonsDisabled
                responsive={responsive}
                ref={(el) => (this.ref2 = el)}
              >
                {
                  data.map((item, index) => this.renderItem(item, index))
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
