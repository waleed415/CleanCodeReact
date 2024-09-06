import React from 'react';
import { Helmet } from 'react-helmet'; // Ensure you have react-helmet installed and imported
import ClientNavbar from '../components/liveStockShared/ClientNavbar'; // Replace with actual path
import ClientFooter from '../components/liveStockShared/ClientFooter'; // Replace with actual path
import { Outlet } from 'react-router-dom';

class LiveStockLayout extends React.Component {
    
  render(): React.ReactNode {
    return (
      <>
        <Helmet>
         <link rel="stylesheet" type="text/css" href="/assets/livestockClient.css" /> 
          {/* Uncomment and adjust the script imports as needed */}
          {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
          <script type="text/jsx" src="../assets/livestock-assets/lib/easing/easing.js"></script>
          <script type="text/jsx" src="../assets/livestock-assets/lib/waypoints/waypoints.min.js"></script>
          <script type="text/jsx" src="../assets/livestock-assets/lib/lightbox/js/lightbox.min.js"></script>
          <script type="text/jsx" src="../assets/livestock-assets/lib/owlcarousel/owl.carousel.min.js"></script> */}
        </Helmet>
        <ClientNavbar />
        <Outlet />
        <ClientFooter />
      </>
    );
  }
}

export default LiveStockLayout;
