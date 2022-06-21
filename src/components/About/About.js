import * as React from 'react';

function About(props) {
    React.useEffect(() => {
        // Scrolls to the top of the page whenever the component is mounted
        window.scrollTo(0,0);
    },[]);
    
    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
}

export default About;