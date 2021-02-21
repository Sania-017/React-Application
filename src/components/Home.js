import React from 'react';
import {Jumbotron,Container,Button} from "reactstrap";
const Home = () => {
    return(
        <div>
         <Jumbotron className="text-center">
             <h1>LearnCode with sania malik</h1>
             <p>my name is sania malik i want to become a react programmer</p>
             <Container>
                <Button color="primary" outline>Start Using</Button>
             </Container>
         </Jumbotron>
         
        </div>
    );
};
export default Home;