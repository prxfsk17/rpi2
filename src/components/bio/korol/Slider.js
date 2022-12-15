import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import val1 from './korol1.jpg';
import val2 from './korol2.jpg';
import val3 from './korol3.jpg';

export function Slider(){

    const {t} = useTranslation();

    return(
        <>
            <Carousel style={{width : "auto"}}>
                <CarouselItem  style={{'height' : 'auto','object-fit' :'cover'}}>
                    <img style={{'object-fit' :'cover'}}
                    className="d-block w-100"
                    src={val1}
                    alt="Photo 1"
                    />
                    
                </CarouselItem>
                <CarouselItem style={{'height' : 'auto','object-fit' :'cover'}}>
                    <img style={{'object-fit' :'cover'}}
                    className="d-block w-100"
                    src={val2}
                    alt="Photo 2"
                    />
                    
                </CarouselItem>
                <CarouselItem style={{'height' : 'auto','object-fit' :'cover'}}>
                    <img style={{'object-fit' :'cover'}}
                    className="d-block w-100"
                    src={val3}
                    alt="Photo 3"
                    />
                    
                </CarouselItem>
            </Carousel>
        </>
    )
}