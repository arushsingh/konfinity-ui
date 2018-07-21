import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './slider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flikr: [
                { id:0,
                    header:"frontend",
                    subtopic:"html,css,react",
                    data:"full front end developer course",
                    video:"",
                    img:"http://www.gstatic.com/webp/gallery/1.jpg",
                    is_video:false
                  },
                  { id:1,
                    header:"backtend",
                    subtopic:"nodejs,mongodb,express",
                    data:"full back end developer course",
                    video:"https://www.youtube.com/embed/tgbNymZ7vqY",
                    img:"http://www.gstatic.com/webp/gallery/2.jpg",
                    is_video:true
                  },
                  { id:2,
                    header:"machine learning",
                    subtopic:"ANN,tensorflowjs,NPL",
                    data:"full machine learning course",
                    video:"https://www.youtube.com/embed/tgbNymZ7vqY",
                    img:"http://www.gstatic.com/webp/gallery/3.jpg",
                    is_video:false
                  },
                  {
                    id:3,
                    header:"block chain",
                    subtopic:"solidity,ethereum,hyperledger",
                    data:"full machine learning course",
                    video:"https://www.youtube.com/embed/tgbNymZ7vqY",
                    img:"http://www.gstatic.com/webp/gallery/3.jpg",
                    is_video:true
                  }
            ],
            clone: [{
                id: '',
                img: '',
                header: '',
                data: '',
                is_video:false,
                subtopic:'',
                video:''
            }],

            activeIndex: 0,
            click: 0,
            condition: false,
            condition1: false,
            disClick: 0
        };
    }
    componentDidMount = () => {
        const dataArray = Object.assign([], this.state.flikr);
        dataArray.id = 0;
        dataArray.img = this.state.flikr[0].img;
        dataArray.header = this.state.flikr[0].header;
        dataArray.data = this.state.flikr[0].data;
        dataArray.is_video=this.state.flikr[0].is_video;
        dataArray.video=this.state.flikr[0].video;
        dataArray.subtopic=this.state.flikr[0].subtopic;
        this.setState({ clone: dataArray });
    }
    onRight = (e) => {
        e.preventDefault();
        let slide = this.state.activeIndex + 1 < this.state.flikr.length ? this.state.activeIndex + 1 : 0;
        this.setState({ activeIndex: slide });
        console.log(slide);
        const clone = this.state.flikr[slide];
        this.setState({ clone });
        console.log(this.state.clone);
    }

    onLeft = (e) => {
        e.preventDefault();
        let slide = this.state.activeIndex - 1 < 0 ? this.state.flikr.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: slide })
        console.log(slide);
        const clone = this.state.flikr[slide]
        this.setState({ clone })
    }
    likeCounter = () => {
        this.setState((prevState) => ({
            click: prevState.click + 1
        }));
        this.setState({
            condition: !this.state.condition
        });
    }

    dislikeCounter = () => {
        this.setState((prevState) => ({
            disClick: prevState.disClick + 1
        }));
        this.setState({
            condition1: !this.state.condition1
        });
    }
    render() {
        return (
            <div className="App">
                <div className="slider-container">
                    <div className="image-placeholder">
                        <div className="image-placeholder1">
                            {
                            !(this.state.clone.is_video) &&
                                <div className="overlay-image-holder">
                                    <img src={this.state.clone.img}  alt="" key={this.state.clone.id} />
                                </div> 
                            }
                            {
                                (this.state.clone.is_video) &&
                                    <div className="overlay-image-holder">
                                        (<iframe width="100%" height="100%"
                                        src={this.state.clone.video}>
                                        </iframe>) 
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="data-container">
                        <div className="slider-header">
                            <h2>{this.state.clone.header}</h2>
                        </div>

                        <div className="image-discription">
                            <p>{this.state.clone.data}</p>
                        </div>

                        <div>    
                            <h3>subtopic</h3>
                            {[this.state.flikr[this.state.activeIndex].subtopic.split(",")
                                .map((sub=>{return <h4>{sub}</h4>}))
                            ]}
                        </div>

                        <footer className="navigation-bar">
                            <ul>
                                <li onClick={this.onLeft} ><i className="fa fa-caret-left" ></i></li>
                                <li><span className="like-btn" onClick={this.likeCounter}><i className="fa fa-thumbs-up" ></i>{this.state.click}</span></li>
                                <li><span className="dislike-btn" onClick={this.dislikeCounter}><i className="fa fa-thumbs-down" ></i>{this.state.disClick}</span></li>
                                <li onClick={this.onRight}><i className="fa fa-caret-right" ></i></li>
                            </ul>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;
