import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }
    //only get called after the things get rendered 
    componentDidMount(){
        //make sure the the data 'load' then we can get the clientHeight
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        //10 is from css grid-auto-rows
        const spans = Math.ceil(height / 10);

        //same as this.setState({ spans: spans })
        this.setState({ spans })
    }

    render(){
        const { description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description} 
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;