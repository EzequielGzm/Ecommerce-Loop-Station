import React from 'react';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';


function ContentWrapper(){
    return (
        <React.Fragment>
          
                {/*<!-- Main Content -->*/}
                <div >
                
                    <ContentRowTop />
                
                    <Footer />
                </div>
        
        </React.Fragment>
    )
}
export default ContentWrapper;