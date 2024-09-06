import React from "react";
import { Outlet } from "react-router-dom";
import '../assets/livestockClient.css';
import ClientNavbar from "../components/liveStockShared/ClientNavbar";
import {Helmet} from 'react-helmet';
import ClientFooter from "../components/liveStockShared/ClientFooter";
// import file  "../../../assets/livestock-assets/lib/easing/easing.min.js"
// import {Test}  "../assets/livestock-assets/lib/easing/easing.min.js"

class LiveStockLayout extends React.Component <{}, {
    cssLoaded: boolean;
  }> {

    constructor(props: any) {
        super(props);
        this.state = {
            cssLoaded: false,
          };
    }

    componentDidMount() {
        // Dynamically import the CSS file when the component mounts
        this.loadCSS('../assets/livestockClient.css')
          .then(() => {
            this.setState({ cssLoaded: true });
          })
          .catch((error) => console.error('Error loading CSS:', error));
      }

      loadCSS(href: string): Promise<void> {
        return new Promise((resolve, reject) => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = href;
    
          link.onload = () => resolve();
          link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    
          document.head.appendChild(link);
        });
      }
    render(): React.ReactNode {
        
        return (
            <>
            <Helmet>
            {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            
            <script  type="text/jsx" src="../assets/livestock-assets/lib/easing/easing.js"></script>
            <script  type="text/jsx"  src="../assets/livestock-assets/lib/waypoints/waypoints.min.js"></script>
            <script  type="text/jsx" src="../assets/livestock-assets/lib/lightbox/js/lightbox.min.js"></script>
            <script  type="text/jsx" src="../assets/livestock-assets/lib/owlcarousel/owl.carousel.min.js"></script>  */}

            </Helmet>
       <ClientNavbar />
        <Outlet />
        <ClientFooter/>
            </>
        );
    }
}

export default LiveStockLayout;