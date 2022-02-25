import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';
import { Link, useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';


var sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
  };

const Project = () => {
    // const [title, setTitle] = useState('default title');
    const [project, setProject] = useState({
        id: -1,
        title: 'default title',
        backgroundImage: 'default background image',
        steps:[{
            image: 'step image 1',
            title: 'step 1',
            text: 'default text',
        }, 
        {
            image: 'step image 2',
            title: 'step 2',
            text: 'default text',
        },
        {
            image: 'step image 3',
            title: 'step 3',
            text: 'default text',
        },
        {
            image: 'step image 4',
            title: 'step 4',
            text: 'default text',
        }, 
        {
            image: 'step image 5',
            title: 'step 5',
            text: 'default text',
        },
        {
            image: 'step image 6',
            title: 'step 6',
            text: 'default text',
        }], 
        description: 'default description',
        whatHaveILearned: 'default text',
        image1: 'default image 1',
        image2: 'default image 2',
        image3: 'default image 3',
    })
    const {id} = useParams();
    useEffect(() => {
        const newProject = data.find((project) => project.id === parseInt(id));
        setProject(newProject, [])
    }, [id])
    console.log(project.steps[0].title);

    return (
        <div className="project">
            <img src={project.backgroundImage} alt="background image" />
            <div className="project-title">{project.title}</div>
            <div className="slider">
                <Slider {...sliderSettings}>
                    {project.steps.map((step) => {return (
                        <div className="slider-card">
                            <img src={step.image} alt="" />
                            <button>{step.title}</button>
                            <p className="slider-text">{step.text}</p>
                        </div>
                    )})}
                </Slider>
            </div>
            
            <div className="project-text">
                <p className="description">{project.description}</p>
                <p className="learned">{project.whatHaveILearned}</p>
            </div>
            <Carousel>
                <div>
                    <img src={project.image1} />
                </div>
                <div>
                    <img src={project.image2} />
                </div>
                <div>
                    <img src={project.image3} />
                </div>
            </Carousel>
            <button>
                <Link to="/projects" className="btn">
                    Back To Projects
                </Link>
            </button>
        </div>
  );
};

export default Project;