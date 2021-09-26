import React, {useEffect} from "react";
import '../components/HeroSection.css';
import CountUp from 'react-countup';
import image1 from './Images/aa.jfif'
import image2 from './Images/9347.jfif';
import image3 from './Images/3.jfif';
import Typewriter from "typewriter-effect";
import CircleType from 'circletype';




class HeroSection extends React.Component {   
    container = React.createRef();

    circletypesnap(){
        const element = this.container.current
        const circletypeS = new CircleType(element)
        .radius(684);
    }

    componentDidMount(){
        this.circletypesnap()
    }
        render(){
        return(
            <div className="hero-section animated animatedFadeInUp fadeInUp" >
                <h2 className="container" ref={this.container}>Here's some curved text flowing counter-clockwise.</h2>
                <div className="hero-content">
                    <div className="number-header">
                        <h1><CountUp end={75}  useEasing={true} duration={3.5}/></h1>
                    </div>
                    <div className="right-content-stack">
                        <div className="hero-info fade-in-content">
                            <hr/>
                            <h1>Web Programmer + Software Dev</h1>
                            <p className="desc">
                            <Typewriter  
                            options={{
                                autoStart:true,
                                delay:58,
                            }}
                            onInit={(typewriter) =>{
                                typewriter.typeString('George Brown Student hoping to become a well-skilled programmer')
                                .changeDelay(Number(300))
                                .start();
                            }}
                        />
                        </p>
                        </div>
                        <div className="images">
                            <div className="image-stack__item image-stack__item--bottom">
                                <img src={image1} className="image1 animated animatedFadeInUp fadeInUp" alt="image1"/>
                            </div>
                            
                            <div className="image-stack__item image-stack__item--top">
                                <img src={image1} className="image2 fade-in-image" alt="image2"/>
                            </div>
                            <div className="image-stack__item image-stack__item--top2">
                                <img src={image2} className="image3 fade-in-image2" alt="image3"/>
                            </div>
                            <div className="image-stack__item image-stack__item--top3">
                                <img src={image2} className="image3 fade-in-image3" alt="image4"/>
                            </div>
                            <div className="image-stack__item image-stack__item--top4">
                                <img src={image3} className="image3 fade-in-image4" alt="image5"/>
                            </div>
                        </div>
                        <div className="bottom-hr">
                            <hr/>
                        </div>
                    </div>
                    
                    <div className="info-under-header">
                        <p>
                        Making websites of festival design level for those who care for lead generation
                        </p>
                    </div>
                </div>
                
            </div>
        )
    }
}

   
  



export default HeroSection;