import React from 'react'

import { Button,Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,Nav,NavLink,
    NavbarText,Input,Carousel,CarouselIndicators,CarouselItem,CarouselCaption,CarouselControl} from 'reactstrap';

import {CardGroup,Card,CardImg,CardSubtitle,CardText,CardBody,CardTitle,} from 'reactstrap';

const items = [ 
    {
      id: 1,
      altText: "Slide 1",
      caption: "Slide 1",
      image: "https://picsum.photos/id/678/1200/600"
    },
    {
      id: 2,
      altText: "Slide 2",
      caption: "Slide 2",
      image: "https://picsum.photos/id/456/1200/600"
    },
    {
      id: 3,
      altText: "Slide 3",
      caption: "Slide 3",
      image: "https://picsum.photos/id/123/1200/600"
    }
  ];
export const NewDesign = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
  const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = newIndex => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
    const slides = items.map(item => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
          >
            <img style ={{width:"100vw",height:"100vh"}} src= {item.image}/>
            <CarouselCaption
              className="text-warning"
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </CarouselItem>
        );
      });
  
  return (
<div>
  <Navbar fixed = "top" color="dark"expand="md" dark>
    <NavbarBrand href="">
      New Page
    </NavbarBrand>
    <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
    <Collapse navbar isOpen={isOpen}>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="" className='navbarText'>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="" className='navbarText'>
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="" className='navbarText'>
            Dashboard
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
        <div className = "inputSearch navbarText">
            <Input
            id="exampleSearch"
            name="search"
            placeholder="search"
            type="search"
            />
        <Button className = "buttonSearch" size="large" variant="contained" color="primary">Search</Button>
        </div>
      </NavbarText>
    </Collapse>
  </Navbar>

  {/*  Carousel starts here */}

        <style>
          {`.custom-tag {
            max-width: 100%;
            height: 500px;
            background: black;
          }`}
        </style>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
  {/*  CardGroup starts here */}
  <div > 
    <CardGroup>
        <Card  body
            className="text-center" className='inputSearch cardContainer' >
        <div>
            <CardBody>
            <CardImg
            alt="Card image cap"
            src="https://picsum.photos/id/456/1200/600"
            top
            className="cardImage"
            />
            <CardTitle tag="h5">
                Card title
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card subtitle
            </CardSubtitle>
            <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
                View Details
            </Button>
            </CardBody>
        </div>
        <div>
            <CardBody>
            <CardImg
            alt="Card image cap"
            src="https://picsum.photos/id/678/1200/600"
            top
            className="cardImage"
            />
            <CardTitle tag="h5">
                Card title
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card subtitle
            </CardSubtitle>
            <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
            View Details
            </Button>
            </CardBody>
          </div>
          <div>
            <CardBody>
            <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            className="cardImage"
            />
            <CardTitle tag="h5">
                Card title
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card subtitle
            </CardSubtitle>
            <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
            View Details
            </Button>
            </CardBody>
        </div>
        </Card>
    </CardGroup>
  </div>
  
   <div>
     <Card className ="cardContainer" body style={{textAlign:"center"}}>
        <div className='inputSearch'>
            <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div>
                    <CardTitle tag="h5" className="cardtitle" >
                    First featurette heading. It'll blow your mind.
                    </CardTitle>
                    <CardText  className="cardtext">
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id 
                    ligula porta felis euismod semper. Praesent commodo cursus magna, 
                    vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                    </CardText>
                </div>
            </div>
        
        <img className ="cardImageContainer" src ="https://picsum.photos/318/180" />
        </div>
     </Card>
    </div>

    <div>
     <Card className ="cardContainer" body style={{textAlign:"center"}}>
        <div className='inputSearch'>
          <img className ="cardImageContainer" src ="https://picsum.photos/318/270" />
            <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div>
                    <CardTitle tag="h5" className="cardtitle"  >
                    Oh yeah, it's that good. See for yourself.
                    </CardTitle>
                    <CardText  className="cardtext">
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id 
                    ligula porta felis euismod semper. Praesent commodo cursus magna, 
                    vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                    </CardText>
                </div>
            </div>
        
        
        </div>
     </Card>
    </div>
    <div>
     <Card className ="cardContainer" body style={{textAlign:"center"}}>
        <div className='inputSearch'>
            <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div>
                    <CardTitle tag="h5" className="cardtitle" >
                    First featurette heading. It'll blow your mind.
                    </CardTitle>
                    <CardText   className="cardtext">
                    Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id 
                    ligula porta felis euismod semper. Praesent commodo cursus magna, 
                    vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
                    </CardText>
                </div>
            </div>
        
        <img className ="cardImageContainer" src ="https://picsum.photos/318/180" />
        </div>
     </Card>
    </div>
    <div className='inputSearch p-5'>
        <p> © 2017-2018 Company, Inc. <span style={{color:"darkBlue"}}>· Privacy · Terms</span></p>
        <p style={{color:"darkBlue"}}>Back to top</p>
    </div>
</div>
  )
}
